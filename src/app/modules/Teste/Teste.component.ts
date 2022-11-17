import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PoCheckboxGroupOption, PoComboOption, PoModalAction, PoModalComponent, PoNotificationService } from '@po-ui/ng-components';
import { Country } from 'src/app/models/country.model';
import { Teams } from 'src/app/models/teams.model';
import { CountryService } from 'src/app/shared/services/country.service';
import { TeamsService } from 'src/app/shared/services/teams.service';


@Component({
  selector: 'teste',
  templateUrl: './Teste.component.html',
  styleUrls: ['./Teste.component.css']
})

export class TesteComponent implements OnInit{
   
  @ViewChild('optionsForm', { static: true }) form: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  

    public constructor(private teamsService:TeamsService,private countryService:CountryService, 
                        public router:Router, private poNotification: PoNotificationService){}

    teams: Teams[];
    countries: Country[];
    option: PoComboOption;
    countryId: string = '';
    team:string='';
    teste:string='';

    close: PoModalAction = {
      action: () => {
        this.closeModal();
      },
      label: 'Close',
      danger: true
    };
  
    confirm: PoModalAction = {
      action: () => {
        this.proccessOrder();
      },
      label: 'Confirm'
    };
    

    columns = [
        { property: 'id', label: 'ID' },
        { property: 'nome', label: 'Nome' },
        { property: 'pais_id', label: 'Pais' },
        { property: 'editar', label: 'EDITAR', type: 'cellTemplate' }
    ];
    
    ngOnInit(): void {
      this.LoadTeams();
      this.LoadCountry();
    }


    async LoadCountry(): Promise<void> 
    {
      await this.countryService.readCountry().subscribe((countries: Country[]) => {
        this.countries = countries;
      });
    }

    async LoadTeams(): Promise<void> 
    {
      await this.teamsService.readTeams().subscribe((teams: Teams[]) => {
        this.teams = teams;
      });
    }

    testeModal() {
      this.poModal.open();
    }
  

    private proccessOrder() {
      if (this.form.invalid) {
        const orderInvalidMessage = 'Todos os itens são obrigatórios';
        this.poNotification.warning(orderInvalidMessage);
      } else {
        this.confirm.loading = true;
  
        setTimeout(() => {
          //this.poNotification.success(`Your order confirmed: ${this.fruits}, with accompaniment: ${this.accompaniment}.`);
          this.confirm.loading = false;
          this.closeModal();
        }, 700);
      }
    }

    closeModal() {
      this.form.reset();
      this.poModal.close();
    }
}
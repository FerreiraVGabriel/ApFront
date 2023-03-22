import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PoComboOption, PoModalAction, PoModalComponent, PoNotificationService } from '@po-ui/ng-components';
import { Country } from 'src/app/models/country.model';
import { Teams } from 'src/app/models/teams.model';
import { CountryService } from 'src/app/shared/services/country.service';
import { TeamsService } from 'src/app/shared/services/teams.service';



@Component({
  selector: 'teams',
  templateUrl: './Teams.component.html',
  styleUrls: ['./Teams.component.css']
})

export class TeamsComponent implements OnInit{
    
  @ViewChild('optionsForm', { static: true }) form: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  

    public constructor(private teamsService:TeamsService,private countryService:CountryService, 
                        public router:Router, private poNotification: PoNotificationService){}

                        
    teams: Teams[];
    countries: Country[];
    countryId: string = '';
    teamName:string='';

    close: PoModalAction = {
      action: () => {
        this.closeModal();
      },
      label: 'Close',
      danger: true
    };
  
    confirm: PoModalAction = {
      action: () => {
        this.addTeams();
      },
      label: 'Confirm'
    };
    

    columns = [
        { property: 'id', label: 'ID' },
        { property: 'nome', label: 'Nome' },
        { property: 'pais', label: 'Pais',type: 'string' },
        { property: 'editar', label: 'EDITAR', type: 'cellTemplate' }
    ];
    
    ngOnInit(): void {
      this.LoadTeams();
      this.LoadCountry();
    }

    //Carregar Pais
    async LoadCountry(): Promise<void> 
    {
      await this.countryService.readCountry().subscribe((countries: Country[]) => {
        this.countries = countries;
      });
    }

    //Carregar Times
    async LoadTeams(): Promise<void> 
    {
      await this.teamsService.readTeams().subscribe((teams: Teams[]) => {
        this.teams = teams;
      });
    }

    //Abrir Modal
    openModalAdd() {
      this.poModal.open();
    }
  
    //Adicionar Times
    private addTeams() {
      if (this.form.invalid) {
        const orderInvalidMessage = 'Todos os itens são obrigatórios';
        this.poNotification.warning(orderInvalidMessage);
      } else {
        this.confirm.loading = true;
  
        setTimeout(async () => {
          let team: Teams = new Teams;
          team.nome = this.teamName;
          team.pais_id = parseInt(this.countryId);

          try{
            await this.teamsService.addTeams(team).subscribe(() => {
              this.LoadTeams();
            });
          }
          catch(e){
          }

          this.confirm.loading = false;
          this.closeModal();
        }, 700);
      }
    }

    //Fechar modal
    closeModal() {
      this.form.reset();
      this.poModal.close();
    }

    teamDetails(){
      this.router.navigate(['teamsInfo']);
    }
}
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PoModalAction, PoModalComponent, PoNotificationService } from '@po-ui/ng-components';
import { Competition } from 'src/app/models/competition.model';
import { Country } from 'src/app/models/country.model';
import { CompetitionService } from 'src/app/shared/services/competition.service';
import { CountryService } from 'src/app/shared/services/country.service';

@Component({
  selector: 'competitions',
  templateUrl: './Competitions.component.html',
  styleUrls: ['./Competitions.component.css']
})

export class CompetitionsComponent implements OnInit{
  
  @ViewChild('optionsForm', { static: true }) form: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  

    public constructor(private competitionService:CompetitionService, public router:Router,
                       private poNotification: PoNotificationService, private countryService:CountryService){}

    competitions: Competition[];
    countries: Country[];
    countryId: string = '';
    competitionName:string='';

    close: PoModalAction = {
      action: () => {
        this.closeModal();
      },
      label: 'Close',
      danger: true
    };
  
    confirm: PoModalAction = {
      action: () => {
        this.addCompetition();
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
      this.LoadCompetitions();
      this.LoadCountry();
    }

    //Carregar Pais
    async LoadCountry(): Promise<void> 
    {
      await this.countryService.readCountry().subscribe((countries: Country[]) => {
        this.countries = countries;
      });
    }
  
    async LoadCompetitions(): Promise<void> 
    {
      await this.competitionService.readCompetition().subscribe((competitions: Competition[]) => {
        this.competitions = competitions;
      });
    }

    //Abrir Modal
    openModalAdd() {
      this.poModal.open();
    }
  
    //Adicionar Competição
    private addCompetition() {
      if (this.form.invalid) {
        const orderInvalidMessage = 'Todos os itens são obrigatórios';
        this.poNotification.warning(orderInvalidMessage);
      } else {
        this.confirm.loading = true;
  
        setTimeout(async () => {
          let competition: Competition = new Competition;
          competition.nome = this.competitionName;
          competition.pais_id = parseInt(this.countryId);

          try{
            await this.competitionService.addCompetition(competition).subscribe(() => {
              this.LoadCompetitions();
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

  

}
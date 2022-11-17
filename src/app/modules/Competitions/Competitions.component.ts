import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PoModalComponent } from '@po-ui/ng-components';
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
  
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  

    public constructor(private competitionService:CompetitionService, public router:Router){}

    columns = [
        { property: 'id', label: 'ID' },
        { property: 'nome', label: 'Nome' },
        { property: 'editar', label: 'EDITAR', type: 'cellTemplate' }
     ];
    
     ngOnInit(): void {
        this.LoadCompetitions();
    }
  
    competitions: Competition[];
    async LoadCompetitions(): Promise<void> 
    {
      await this.competitionService.readCompetition().subscribe((competitions: Competition[]) => {
        this.competitions = competitions;
      });
    }

  

}
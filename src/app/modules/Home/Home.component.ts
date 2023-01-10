import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teams } from 'src/app/models/teams.model';
import { TeamsService } from 'src/app/shared/services/teams.service';



@Component({
  selector: 'home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})

export class HomeComponent implements OnInit{

  columnsProfit = [
    { property: 'DATA', label: 'DATA' },
    { property: 'pel', label: 'P&L' },
    { property: 'ROI', label: 'ROI' },
  ];

  columnsBet = [
    { property: 'id', label: 'ID' },
    { property: 'dataAposta', label: 'Data', type: 'date' },
    { property: 'competicao_id', label: 'competição' },
    { property: 'mandante_id', label: 'mandante' },
    { property: 'visitante_id', label: 'visitante' },
    { property: 'mercados_id', label: 'mercados' },
    { property: 'stake', label: 'stake' },
    { property: 'pl', label: 'pl' },
    { property: 'roiStake', label: 'roiStake' },
    { property: 'editar', label: 'EDITAR', type: 'cellTemplate' }
  ];
  
  task:profit[] = [
    {DATA: "teste", pel: 'Sentence 1', ROI:"tesd"},
    {DATA: "teste", pel: 'Sentence 1', ROI:"tesd"},
    {DATA: "teste", pel: 'Sentence 1', ROI:"tesd"},
    {DATA: "teste", pel: 'Sentence 1', ROI:"tesd"},
    {DATA: "teste", pel: 'Sentence 1', ROI:"tesd"},
    {DATA: "teste", pel: 'Sentence 1', ROI:"tesd"},
    {DATA: "teste", pel: 'Sentence 1', ROI:"tesd"},
    {DATA: "teste", pel: 'Sentence 1', ROI:"tesd1"}
  ];

  public constructor(private timesService:TeamsService, public router:Router){ 

  }

  ngOnInit(): void {
      this.LoadApostas();
  }

  times: Teams[];
  async LoadApostas(): Promise<void> 
  {
    await this.timesService.readTeams().subscribe((times: Teams[]) => {
      this.times = times;
    });
  }

}

export class profit {
  DATA: string;
  pel: string;
  ROI: string;
}
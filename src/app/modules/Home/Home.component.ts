import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Bet } from 'src/app/models/bets.model';
import { Teams } from 'src/app/models/teams.model';
import { TeamsService } from 'src/app/shared/services/teams.service';



@Component({
  selector: 'home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})

export class HomeComponent implements OnInit{

  @Output() public emitItemTaskList = new EventEmitter();

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
  bets: Bet[];
  ngOnInit(): void {
    var x = this.getDaysInMonth(2,2023)
  }

  public setEmitBetList(event: Bet[]){
    // this.bets.push({bet: event});
    this.bets = event;
  }

  public getDaysInMonth(month: number,year: number): number{
    return new Date(year, month, 0).getDate();
  }

}



export class profit {
  DATA: string;
  pel: string;
  ROI: string;
}
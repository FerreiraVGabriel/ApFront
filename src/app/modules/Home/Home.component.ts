import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Bet } from 'src/app/models/bets.model';
import { HomeInformation } from 'src/app/models/HomeScreen/homeInformation';
import { Information } from 'src/app/models/HomeScreen/information';
import { RoyByDays } from 'src/app/models/HomeScreen/royByDays.model';
import { Teams } from 'src/app/models/teams.model';
import { TeamsService } from 'src/app/shared/services/teams.service';



@Component({
  selector: 'home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})

export class HomeComponent implements OnInit{

  @Output() public emitInformation = new EventEmitter();

  columnsRoyByDays = [
    { property: 'data', label: 'DATA', type: 'date' },
    { property: 'pl', label: 'P&L' },
    { property: 'roi', label: 'ROI' },
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

  public constructor(private timesService:TeamsService, public router:Router){ 

  }
  bets: Bet[];
  royByDays:RoyByDays[];
  information:Information;

  ngOnInit(): void {
  }

  public setEmitHomeScreen(event: HomeInformation){
    this.bets = event.listApostas;
    this.royByDays = event.listRoiByDays;
    this.information = event.informacoes;

  }

}

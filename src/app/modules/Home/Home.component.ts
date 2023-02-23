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
    { property: 'data', label: 'DATA', type: 'date', color: this.profitOrLossLine.bind(this) },
    { property: 'pl', label: 'P&L', color: this.profitOrLossLine.bind(this) },
    { property: 'roi', label: 'ROI', color: this.profitOrLossLine.bind(this) },
  ];

  columnsBet = [
    { property: 'dataAposta', label: 'Data', type: 'date', color: this.profitOrLossLine.bind(this) },
    { property: 'competicaoNome', label: 'competição', color: this.profitOrLossLine.bind(this) },
    { property: 'timeMandanteNome', label: 'mandante', color: this.profitOrLossLine.bind(this) },
    { property: 'timeVisitanteNome', label: 'visitante', color: this.profitOrLossLine.bind(this) },
    { property: 'mercadoNome', label: 'mercados', color: this.profitOrLossLine.bind(this) },
    { property: 'stake', label: 'stake', color: this.profitOrLossLine.bind(this) },
    { property: 'pl', label: 'pl', color: this.profitOrLossLine.bind(this) },
    { property: 'roiStake', label: 'roiStake', color: this.profitOrLossLine.bind(this) },
    { property: 'editar', label: 'EDITAR', type: 'cellTemplate', color: this.profitOrLossLine.bind(this) }
  ];

  public constructor(private timesService:TeamsService, public router:Router){ 

  }
  bets: Bet[];
  royByDays:RoyByDays[];
  information:Information;
  showHomeTable:boolean = false;

  ngOnInit(): void {
  }

  public setEmitHomeScreen(event: HomeInformation){
    this.showHomeTable = true;
    this.bets = event.listApostas;
    this.royByDays = event.listRoiByDays;
    this.information = event.informacoes;

  }

  private profitOrLossLine(row) {
    return row?.pl>0? 'color-11' : 'color-07';
  }

}

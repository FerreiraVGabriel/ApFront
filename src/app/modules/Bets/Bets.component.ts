import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Bet } from 'src/app/models/bets.model';
import { BetsService } from 'src/app/shared/services/bets.service';


@Component({
  selector: 'bets',
  templateUrl: './Bets.component.html',
  styleUrls: ['./Bets.component.css']
})

export class BetsComponent implements OnInit{  
  

    public constructor(private betsService:BetsService, public router:Router){}

    columns = [
      { property: 'id', label: 'ID', color: this.profitOrLossLine.bind(this) },
      { property: 'dataAposta', label: 'Data', type: 'date', color: this.profitOrLossLine.bind(this) },
      { property: 'competicao_id', label: 'competição', color: this.profitOrLossLine.bind(this) },
      { property: 'mandante_id', label: 'mandante', color: this.profitOrLossLine.bind(this) },
      { property: 'visitante_id', label: 'visitante', color: this.profitOrLossLine.bind(this) },
      { property: 'mercados_id', label: 'mercados', color: this.profitOrLossLine.bind(this) },
      { property: 'stake', label: 'stake', color: this.profitOrLossLine.bind(this) },
      { property: 'pl', label: 'pl', color: this.profitOrLossLine.bind(this) },
      { property: 'roiStake', label: 'roiStake', color: this.profitOrLossLine.bind(this) },
      { property: 'editar', label: 'EDITAR', type: 'cellTemplate', color: this.profitOrLossLine.bind(this) }
    ];
    
    ngOnInit(): void {
        this.LoadBets();
    }
  
    bets: Bet[];
    async LoadBets(): Promise<void> 
    {
      await this.betsService.readBets().subscribe((bets: Bet[]) => {
        this.bets = bets;
      });
    }

    changePageBetsAddEdit(){
      this.router.navigate(['betsAddEdit']);
    }

    private profitOrLossLine(row) {
      return row?.pl>0? 'color-11' : 'color-07';
    }

}
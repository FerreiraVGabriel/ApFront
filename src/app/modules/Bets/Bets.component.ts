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

  

}
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PoCheckboxGroupOption, PoComboOption, PoDynamicViewField, PoModalAction, PoModalComponent, PoNotificationService, PoTableColumn, PoTableColumnLabel } from '@po-ui/ng-components';
import { Bet } from 'src/app/models/bets.model';
import { Country } from 'src/app/models/country.model';
import { Teams } from 'src/app/models/teams.model';
import { BetsService } from 'src/app/shared/services/bets.service';
import { CountryService } from 'src/app/shared/services/country.service';
import { TeamsService } from 'src/app/shared/services/teams.service';
import {
  PoPageDynamicTableActions,
  PoPageDynamicTableCustomAction,
  PoPageDynamicTableCustomTableAction
} from '@po-ui/ng-templates';


@Component({
  selector: 'teste',
  templateUrl: './Teste.component.html',
  styleUrls: ['./Teste.component.css']
})

export class TesteComponent implements OnInit{
   
  public constructor(private betsService:BetsService, public router:Router){}

    columns = [
      {
        property: 'id',
        label: 'ID',
        type: 'link',
        tooltip: 'Editar aposta',
        action: (value,row) => {
          this.editBet(value);
        },
        color: this.profitOrLossLine.bind(this)
      },
      { property: 'dataAposta', label: 'Data', type: 'date', color: this.profitOrLossLine.bind(this) },
      { property: 'competicaoNome', label: 'competição', color: this.profitOrLossLine.bind(this) },
      { property: 'timeMandanteNome', label: 'mandante', color: this.profitOrLossLine.bind(this) },
      { property: 'timeVisitanteNome', label: 'visitante', color: this.profitOrLossLine.bind(this) },
      { property: 'mercadoNome', label: 'mercados', color: this.profitOrLossLine.bind(this) },
      { property: 'stake', label: 'stake', color: this.profitOrLossLine.bind(this) },
      { property: 'pl', label: 'pl', color: this.profitOrLossLine.bind(this) },
      { property: 'roiStake', label: 'roiStake', color: this.profitOrLossLine.bind(this) }
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

    private favorite(row) {
      row.component.isFavorite = !row.component.isFavorite;
    }
  
    private editBet(row) {
      var x = 0;
      this.router.navigate(['betsAddEdit', row]);
    }
  
}


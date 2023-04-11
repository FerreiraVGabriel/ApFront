import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Filter } from 'src/app/models/filter.model';
import { InfoBet } from 'src/app/models/InfoBet/InfoBet.model';
import { FilterService } from 'src/app/shared/services/filter.service';
import { InfoBetService } from 'src/app/shared/services/infoBet.service';
import { PoNotificationService } from '@po-ui/ng-components';


@Component({
  selector: 'marketInfo',
  templateUrl: './MarketInfo.component.html',
  styleUrls: ['./MarketInfo.component.css']
})

export class MarketInfoComponent implements OnInit{

  @ViewChild('optionsForm', { static: true }) form: NgForm;

  public constructor(private infoBetService:InfoBetService,private filterService:FilterService, 
                     private poNotification: PoNotificationService){}

    columns = [
    { property: 'periodoNome', label: 'periodo' ,color: this.profitOrLossLine.bind(this)},
    { property: 'lucroPerda', label: 'lucro/Perda',color: this.profitOrLossLine.bind(this)},
    { property: 'green', label: 'green' ,color: this.profitOrLossLine.bind(this)},
    { property: 'red', label: 'red' ,color: this.profitOrLossLine.bind(this)},
    { property: 'numApostas', label: 'numApostas' ,color: this.profitOrLossLine.bind(this)}
  ];

    marketInfo: InfoBet[];
    filterId: string = '';
    
    ngOnInit(): void {
      this.LoadFilter();
    }

    filters: Filter[];
    async LoadFilter(): Promise<void> 
    {
      await this.filterService.readFilter().subscribe((filters: Filter[]) => {
        this.filters = filters;
      });
    }
    
    async LoadMarketinfo(){
      if (this.form.invalid) {
        const orderInvalidMessage = 'Digite o filtro, idiota.';
        this.poNotification.warning(orderInvalidMessage);
      }
  
      await this.infoBetService.readMarketInfo(this.filterId).subscribe((marketInfo: InfoBet[]) => {
        this.marketInfo = marketInfo;
      });
    }

    private profitOrLossLine(row) {
      if(row?.lucroPerda > 0)
        return 'color-11';
      if(row?.lucroPerda < 0)
        return 'color-07';
      else
        return 'color-08';
    }
}
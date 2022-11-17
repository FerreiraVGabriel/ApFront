import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PoModalComponent } from '@po-ui/ng-components';
import { Market } from 'src/app/models/market.model';
import { MarketService } from 'src/app/shared/services/market.service';

@Component({
  selector: 'market',
  templateUrl: './Market.component.html',
  styleUrls: ['./Market.component.css']
})

export class MarketComponent implements OnInit{
  
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  

    public constructor(private marketService:MarketService, public router:Router){}

    columns = [
        { property: 'id', label: 'ID' },
        { property: 'nome', label: 'Nome' },
        { property: 'editar', label: 'EDITAR', type: 'cellTemplate' }
     ];
    
     ngOnInit(): void {
        this.LoadMarket();
    }
  
    market: Market[];
    async LoadMarket(): Promise<void> 
    {
      await this.marketService.readMarket().subscribe((market: Market[]) => {
        this.market = market;
      });
    }

  

}
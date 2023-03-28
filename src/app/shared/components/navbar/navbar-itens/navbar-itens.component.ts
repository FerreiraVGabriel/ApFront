import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Bet } from 'src/app/models/bets.model';
import { Filter } from 'src/app/models/filter.model';
import { FilterService } from 'src/app/shared/services/filter.service';
import { PoMultiselectOption, PoNotificationService, PoRadioGroupOption } from '@po-ui/ng-components';
import { HomeInformationService } from 'src/app/shared/services/homeScreen.service';
import { HomeInformation } from 'src/app/models/HomeScreen/homeInformation';
import { MarketService } from 'src/app/shared/services/market.service';
import { Market } from 'src/app/models/market.model';

@Component({
  selector: 'navbar-itens',
  templateUrl: './navbar-itens.component.html',
  styleUrls: ['./navbar-itens.component.css']
})

export class NavBarItensComponent implements OnInit{

  //sempre que esse evento for acionado ele vai emitir para os outros componentes que estão utilizando
  @Output() public emitHomeScreen = new EventEmitter();

  @ViewChild('optionsForm', { static: true }) form: NgForm;

  public constructor(private filterService:FilterService, private homeInformationService: HomeInformationService,
                     private poNotification: PoNotificationService, private marketService:MarketService){}

                     
  filterId: string = '';
  arrayHomeInformation: HomeInformation;
  initialValue : number;
  filters: Filter[];
  markets: Market[];
  marketMultiselectOption:Array<PoMultiselectOption>;
  marketId: Array<string> = [];

  filterType: string= '';
  stringMarketId:string='';



  ngOnInit(): void {
    this.LoadFilter();
    this.LoadMarket();
  }

  async LoadFilter(): Promise<void> 
  {
    await this.filterService.readFilter().subscribe((filters: Filter[]) => {
      this.filters = filters;
    });
  }

  async FilterBet(){
    if (this.form.invalid) {
      const orderInvalidMessage = 'Digite o filtro, idiota.';
      this.poNotification.warning(orderInvalidMessage);
    }

    if(this.filterType && this.filterType != " " && this.filterType != "Normal")
      this.stringMarketId = this.marketId.toString();
    else{
      this.stringMarketId = null;
      this.filterType = null;
    }

    await this.homeInformationService.readHomeInformation(this.filterId, this.stringMarketId,this.filterType).subscribe((arrayHomeInformation: HomeInformation) => {
      this.arrayHomeInformation = arrayHomeInformation;
      this.initialValue = arrayHomeInformation.informacoes.inicio;
      this.emitHomeScreen.emit(this.arrayHomeInformation);
    });
  }

  async LoadMarket(): Promise<void> 
  {
    await this.marketService.readMarket().subscribe((market: Market[]) => {
      this.markets = market;
      this.LoadMarketMultiselectOption();
    });
  }


  LoadMarketMultiselectOption(){
    this.marketMultiselectOption = this.markets.map(item => {
      return {
        label: item.nome,
        value: item.id
      } as PoMultiselectOption
    });
  }
}
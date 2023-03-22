import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Bet } from 'src/app/models/bets.model';
import { Filter } from 'src/app/models/filter.model';
import { FilterService } from 'src/app/shared/services/filter.service';
import { PoNotificationService } from '@po-ui/ng-components';
import { HomeInformationService } from 'src/app/shared/services/homeScreen.service';
import { HomeInformation } from 'src/app/models/HomeScreen/homeInformation';

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
                     private poNotification: PoNotificationService){}

  filterId: string = '';
  arrayHomeInformation: HomeInformation;
  initialValue : number;

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

  async FilterBet(){
    if (this.form.invalid) {
      const orderInvalidMessage = 'Digite o filtro, idiota.';
      this.poNotification.warning(orderInvalidMessage);
    }

    await this.homeInformationService.readHomeInformation(this.filterId).subscribe((arrayHomeInformation: HomeInformation) => {
      this.arrayHomeInformation = arrayHomeInformation;
      this.initialValue = arrayHomeInformation.informacoes.inicio;
      this.emitHomeScreen.emit(this.arrayHomeInformation);
    });
  }
}
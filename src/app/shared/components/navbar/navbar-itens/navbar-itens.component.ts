import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Bet } from 'src/app/models/bets.model';
import { Filter } from 'src/app/models/filter.model';
import { BetsService } from 'src/app/shared/services/bets.service';
import { FilterService } from 'src/app/shared/services/filter.service';
import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'navbar-itens',
  templateUrl: './navbar-itens.component.html',
  styleUrls: ['./navbar-itens.component.css']
})

export class NavBarItensComponent implements OnInit{

  //sempre que esse evento for acionado ele vai emitir para os outros componentes que estão utilizando
  @Output() public emitItemBetList = new EventEmitter();

  @ViewChild('optionsForm', { static: true }) form: NgForm;

  public constructor(private filterService:FilterService, private betService: BetsService, private poNotification: PoNotificationService){}

  filterId: string = '';
  arrayBetsWithFilter: Bet[];

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

  async FilterLiveBet(){
    if (this.form.invalid) {
      const orderInvalidMessage = 'Digite o filtro, idiota.';
      this.poNotification.warning(orderInvalidMessage);
    }

    await this.betService.readFilterBets(this.filterId).subscribe((arrayBetsWithFilter: Bet[]) => {
      this.arrayBetsWithFilter = arrayBetsWithFilter;
      this.emitItemBetList.emit(this.arrayBetsWithFilter);
    });
  }
}
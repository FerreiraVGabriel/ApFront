import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PoModalAction, PoModalComponent, PoNotificationService } from '@po-ui/ng-components';
import { Market } from 'src/app/models/market.model';
import { MarketService } from 'src/app/shared/services/market.service';

@Component({
  selector: 'market',
  templateUrl: './Market.component.html',
  styleUrls: ['./Market.component.css']
})

export class MarketComponent implements OnInit{
  
  @ViewChild('optionsForm', { static: true }) form: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  

    public constructor(private marketService:MarketService, public router:Router, private poNotification: PoNotificationService){}

    marketName:string='';
    columns = [
        { property: 'id', label: 'ID' },
        { property: 'nome', label: 'Nome' },
        { property: 'editar', label: 'EDITAR', type: 'cellTemplate' }
     ];

     close: PoModalAction = {
      action: () => {
        this.closeModal();
      },
      label: 'Close',
      danger: true
    };
  
    confirm: PoModalAction = {
      action: () => {
        this.addMarket();
      },
      label: 'Confirm'
    };
    
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

    //Abrir Modal
    openModalAdd() {
      this.poModal.open();
    }

    //Adicionar Times
    private addMarket() {
      if (this.form.invalid) {
        const orderInvalidMessage = 'Todos os itens são obrigatórios';
        this.poNotification.warning(orderInvalidMessage);
      } else {
        this.confirm.loading = true;
  
        setTimeout(async () => {
          let market: Market = new Market;
          market.nome = this.marketName;

          try{
            await this.marketService.addMarket(market).subscribe(() => {
              this.LoadMarket();
            });
          }
          catch(e){
          }

          this.confirm.loading = false;
          this.closeModal();
        }, 700);
      }
    }

    //Fechar modal
    closeModal() {
      this.form.reset();
      this.poModal.close();
    }

    marketDetails(){
      this.router.navigate(['marketInfo']);
    }
}
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PoNotificationService } from '@po-ui/ng-components';
import { Bet } from 'src/app/models/bets.model';
import { Competition } from 'src/app/models/competition.model';
import { Market } from 'src/app/models/market.model';
import { Teams } from 'src/app/models/teams.model';
import { BetsService } from 'src/app/shared/services/bets.service';
import { CompetitionService } from 'src/app/shared/services/competition.service';
import { MarketService } from 'src/app/shared/services/market.service';
import { TeamsService } from 'src/app/shared/services/teams.service';



@Component({
  selector: 'betsAddEdit',
  templateUrl: './BetsAddEdit.component.html',
  styleUrls: ['./BetsAddEdit.component.css']
})

export class BetsAddEditComponent implements OnInit{  

  @ViewChild('optionsForm', { static: true }) form: NgForm;

    public constructor(public router:Router, private teamsService: TeamsService,
                        private competitionService:CompetitionService, private marketService:MarketService,
                        private poNotification: PoNotificationService, private betService: BetsService){}
    
    ngOnInit(): void {
        this.LoadTeams();
        this.LoadCompetitions();
        this.LoadMarket();
    }

    betDate:Date = null;
    stake:number = null;
    pl:number = null;

    //Form ID
    teamHomeId: number = null;
    teamVisitorId: number = null;
    competitionId: number = null;
    marketId: number = null;
    analisePre:boolean=null;
    entradaPre:boolean=null;

    //Listas
    teamsHome: Teams[];
    teamsVisitor: Teams[];
    competitions: Competition[];
    markets: Market[];

    //Carregar times
    async LoadTeams(): Promise<void> 
    {
      await this.teamsService.readTeams().subscribe((teams: Teams[]) => {
        this.teamsHome = teams;
        this.teamsVisitor = teams;
      });
    }

    //Carregar comeptições
    async LoadCompetitions(): Promise<void> 
    {
      await this.competitionService.readCompetition().subscribe((competitions: Competition[]) => {
        this.competitions = competitions;
      });
    }

    async LoadMarket(): Promise<void> 
    {
      await this.marketService.readMarket().subscribe((market: Market[]) => {
        this.markets = market;
      });
    }

    async AddBet(){
      if (this.form.invalid) {
        const orderInvalidMessage = 'Todos os itens são obrigatórios';
        this.poNotification.warning(orderInvalidMessage);
      }
      else if(this.teamHomeId == this.teamVisitorId){
        const orderInvalidMessage = 'Times não podem ser iguais.';
        this.poNotification.warning(orderInvalidMessage);
      }
      else{
        if( this.analisePre == undefined)
        this.analisePre = false;

        if( this.entradaPre == undefined)
        this.entradaPre = false;

        let bet: Bet = new Bet;
        bet.competicao_id = this.competitionId;
        bet.dataAposta = this.betDate;
        bet.mandante_id = this.teamHomeId;
        bet.visitante_id = this.teamVisitorId;
        bet.mercados_id = this.marketId;
        bet.stake = this.stake;
        bet.pl = this.pl;
        bet.analisePre = this.analisePre;
        bet.entradaPre = this.entradaPre;
        try{
          await this.betService.addBet(bet).subscribe(() => {
            this.router.navigate(['bets']);
          });
        }
        catch(e){
        }
      }
    }

  

}
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Competition } from 'src/app/models/competition.model';
import { Market } from 'src/app/models/market.model';
import { Teams } from 'src/app/models/teams.model';
import { CompetitionService } from 'src/app/shared/services/competition.service';
import { MarketService } from 'src/app/shared/services/market.service';
import { TeamsService } from 'src/app/shared/services/teams.service';
import { PoNotificationService } from '@po-ui/ng-components';
import { NgForm } from '@angular/forms';
import { LiveBets } from 'src/app/models/LiveBets/liveBets.model';
import { LiveBetsService } from 'src/app/shared/services/liveBets.service';


@Component({
  selector: 'liveBetsAddEdit',
  templateUrl: './LiveBetsAddEdit.component.html',
  styleUrls: ['./LiveBetsAddEdit.component.css']
})

export class LiveBetsAddEditComponent implements OnInit{  
  
  @ViewChild('optionsForm', { static: true }) form: NgForm;

  public constructor(public router:Router, private teamsService: TeamsService,
    private competitionService:CompetitionService, private marketService:MarketService,
    private poNotification: PoNotificationService, private liveBetService: LiveBetsService ){}

    ngOnInit(): void {
      this.LoadTeams();
      this.LoadCompetitions();
      this.LoadMarket();
    }

    betDate:Date = null;
    tempoJogo:number = null;
    stake:number = null;
    pl:number = null;
    mh1Casa:number=null;
    mh1Visitante:number=null;
    mh2Casa:number=null;
    mh2Visitante:number=null;
    mh3Casa:number=null;
    mh3Visitante:number=null;
    exgCasa:number=null;
    exgVisitante:number=null;
    apm1Casa:number=null;
    apm1Visitante:number=null;
    apm2Casa:number=null;
    apm2Visitante:number=null;
    caCasa:number=null;
    caVisitante:number=null;
    cfaCasa:number=null;
    cfaVisitante:number=null;
    posseBolaCasa:number=null;
    posseBolaVisitante:number=null;
    ataquesCasa:number=null;
    ataquesVisitante:number=null;
    ataqPerigososCasa:number=null;
    ataqPerigososVisitante:number=null;


    //Form ID
    teamHomeId: number = null;
    teamVisitorId: number = null;
    competitionId: number = null;
    marketId: number = null;

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

    async AddLiveBet(){
      if (this.form.invalid) {
        const orderInvalidMessage = 'Todos os itens são obrigatórios';
        this.poNotification.warning(orderInvalidMessage);
      }
      else if(this.teamHomeId == this.teamVisitorId){
        const orderInvalidMessage = 'Times não podem ser iguais.';
        this.poNotification.warning(orderInvalidMessage);
      }
      else{
        let liveBets: LiveBets = new LiveBets;
        liveBets = this.getLiveBetsClass(liveBets);
        try{
          await this.liveBetService.addLiveBet(liveBets).subscribe(() => {
            this.router.navigate(['liveBets']);
          });
        }
        catch(e){
        }
      }
    }

    getLiveBetsClass(liveBets:LiveBets): LiveBets
    {
      liveBets.dataAposta = this.betDate;
      liveBets.stake = this.stake;
      liveBets.pl = this.pl;
      liveBets.competicao_id = this.competitionId;
      liveBets.mandante_id = this.teamHomeId;
      liveBets.visitante_id = this.teamVisitorId;
      liveBets.mercados_id = this.marketId;
      liveBets.tempo = this.tempoJogo;
      liveBets.mh1Casa = this.mh1Casa;
      liveBets.mh1Visitante = this.mh1Visitante;
      liveBets.mh2Casa = this.mh2Casa;
      liveBets.mh2Visitante = this.mh2Visitante;
      liveBets.mh3Casa = this.mh3Casa;
      liveBets.mh3Visitante = this.mh3Visitante;
      liveBets.exgCasa = this.exgCasa;
      liveBets.exgVisitante = this.exgVisitante;
      liveBets.apm1Casa = this.apm1Casa;
      liveBets.apm1Visitante = this.apm1Visitante;
      liveBets.apm2Casa = this.apm2Casa;
      liveBets.apm2Visitante = this.apm2Visitante;
      liveBets.caCasa = this.caCasa;
      liveBets.caVisitante = this.caVisitante;
      liveBets.cfaCasa = this.cfaCasa;
      liveBets.cfaVisitante = this.cfaVisitante;
      liveBets.posseBolaCasa = this.posseBolaCasa;
      liveBets.posseBolaVisitante = this.posseBolaVisitante;
      liveBets.ataquesCasa = this.ataquesCasa;
      liveBets.ataquesVisitante = this.ataquesVisitante;
      liveBets.ataqPerigososCasa = this.ataqPerigososCasa;
      liveBets.ataqPerigososVisitante = this.ataqPerigososVisitante;
      return liveBets;
    }
}
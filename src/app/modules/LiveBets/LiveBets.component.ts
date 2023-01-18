import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LiveBets } from 'src/app/models/LiveBets/liveBets.model';
import { LiveBetsStatistics } from 'src/app/models/LiveBets/liveBetsStatistics';
import { LiveBetsWithTime } from 'src/app/models/LiveBets/liveBetsWithTime';
import { Market } from 'src/app/models/market.model';
import { LiveBetsService } from 'src/app/shared/services/liveBets.service';
import { MarketService } from 'src/app/shared/services/market.service';


@Component({
  selector: 'liveBets',
  templateUrl: './LiveBets.component.html',
  styleUrls: ['./LiveBets.component.css']
})

export class LiveBetsComponent implements OnInit{  
  

    public constructor(public router:Router, private marketService:MarketService,
                      private liveBetService: LiveBetsService){}

    //Form ID
    marketId: number = null;

    //LISTAS
    markets: Market[];
    liveBets: LiveBets[];
    arrayLiveBetsWithTime: LiveBetsWithTime[];

    columns = [
      { property: 'dataAposta', label: 'Data', type: 'date', color: this.isFavorite.bind(this) },
      { property: 'competicao_id', label: 'competição', color: this.isFavorite.bind(this) },
      { property: 'mandante_id', label: 'mandante', color: this.isFavorite.bind(this) },
      { property: 'visitante_id', label: 'visitante', color: this.isFavorite.bind(this) },
      { property: 'tempo', label: 'tempo', color: this.isFavorite.bind(this) },
      { property: 'mercados_id', label: 'mercados', color: this.isFavorite.bind(this) },
      { property: 'stake', label: 'stake', color: this.isFavorite.bind(this) },
      { property: 'pl', label: 'pl' , color: this.isFavorite.bind(this) },
      { property: 'roiStake', label: 'roiStake', color: this.isFavorite.bind(this) },
      { property: 'mH1Casa', label: 'mh1Casa', color: this.isFavorite.bind(this) },
      { property: 'mH1Visitante', label: 'mh1Visitante', color: this.isFavorite.bind(this) },
      { property: 'mH2Casa', label: 'mh2Casa', color: this.isFavorite.bind(this) },
      { property: 'mH2Visitante', label: 'mh2Visitante', color: this.isFavorite.bind(this) },
      { property: 'mH3Casa', label: 'mh3Casa', color: this.isFavorite.bind(this) },
      { property: 'mH3Visitante', label: 'mh3Visitante', color: this.isFavorite.bind(this) },
      { property: 'exgCasa', label: 'exgCasa', color: this.isFavorite.bind(this) },
      { property: 'exgVisitante', label: 'exgVisitante', color: this.isFavorite.bind(this) },     
      { property: 'apM1Casa', label: 'apm1Casa', color: this.isFavorite.bind(this) },
      { property: 'apM1Visitante', label: 'apm1Visitante', color: this.isFavorite.bind(this) },
      { property: 'apM2Casa', label: 'apm2Casa', color: this.isFavorite.bind(this) },
      { property: 'apM2Visitante', label: 'apm2Visitante', color: this.isFavorite.bind(this) },
      { property: 'caCasa', label: 'caCasa', color: this.isFavorite.bind(this) },
      { property: 'caVisitante', label: 'caVisitante', color: this.isFavorite.bind(this) },
      { property: 'cfaCasa', label: 'cfaCasa', color: this.isFavorite.bind(this) },
      { property: 'cfaVisitante', label: 'cfaVisitante', color: this.isFavorite.bind(this) },
      { property: 'posseBolaCasa', label: 'posseBolaCasa', color: this.isFavorite.bind(this) },
      { property: 'posseBolaVisitante', label: 'posseBolaVisitante', color: this.isFavorite.bind(this) },
      { property: 'ataquesCasa', label: 'ataquesCasa', color: this.isFavorite.bind(this) },
      { property: 'ataquesVisitante', label: 'ataquesVisitante', color: this.isFavorite.bind(this) },
      { property: 'ataqPerigososCasa', label: 'ataqPerigososCasa', color: this.isFavorite.bind(this) },
      { property: 'ataqPerigososVisitante', label: 'ataqPerigososVisitante', color: this.isFavorite.bind(this) },

      { property: 'editar', label: 'EDITAR', type: 'cellTemplate' }
    ];

    columnsStatistics = [
      { property: 'titulo', label: 'titulo' },
      { property: 'mediaValoresMaior', label: 'media Valores Maior'},
      { property: 'varianciaValoresMaior', label: 'variancia Valores Maior' },
      { property: 'desvioPadraoValoresMaior', label: 'desvio Padrao Valores Maior' },
      { property: 'mediaValoresMenores', label: 'media Valores Menores' },
      { property: 'varianciaValoresMenores', label: 'variancia Valores Menores' },
      { property: 'desvioPadraoValoresMenores', label: 'desvio Padrao Valores Menores' },
      { property: 'mediaValoresMaiorVencedor', label: 'media Valores Maior Vencedor' },
      { property: 'varianciaValoresMaiorVencedor', label: 'variancia Valores Maior Vencedor' },
      { property: 'desvioPadraoValoresMaiorVencedor', label: 'desvio Padrao Valores Maior Vencedor' },
      { property: 'mediaValoresMenoresVencedor', label: 'media Valores Menores Vencedor' },
      { property: 'varianciaValoresMenoresVencedor', label: 'variancia Valores Menores Vencedor' },
      { property: 'desvioPadraoValoresMenoresVencedor', label: 'desvio Padrao Valores Menores Vencedor' }
    ];

    ngOnInit(): void {
      this.LoadMarket();
    }

    changePageBetsLiveAddEdit(){
      this.router.navigate(['liveBetsAddEdit']);
    }

    async LoadMarket(): Promise<void> 
    {
      await this.marketService.readMarket().subscribe((market: Market[]) => {
        this.markets = market;
      });
    }

    async getLiveBetsByMarket(event, marketId): Promise<void> 
    {
      await this.liveBetService.readLiveBets(marketId).subscribe((arrayLiveBetsWithTime: LiveBetsWithTime[]) => {
        this.arrayLiveBetsWithTime = arrayLiveBetsWithTime;
      });
    }

    private isFavorite(row) {
      var x =row?.pl>0? 'color-11' : 'color-07';
      return x;
    }
   

}


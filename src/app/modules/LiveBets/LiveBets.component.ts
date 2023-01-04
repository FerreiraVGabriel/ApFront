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
      { property: 'dataAposta', label: 'Data', type: 'date' },
      { property: 'competicao_id', label: 'competição' },
      { property: 'mandante_id', label: 'mandante' },
      { property: 'visitante_id', label: 'visitante' },
      { property: 'tempo', label: 'tempo' },
      { property: 'mercados_id', label: 'mercados' },
      { property: 'stake', label: 'stake' },
      { property: 'pl', label: 'pl' },
      { property: 'roiStake', label: 'roiStake' },
      { property: 'mH1Casa', label: 'mh1Casa' },
      { property: 'mH1Visitante', label: 'mh1Visitante' },
      { property: 'mH2Casa', label: 'mh2Casa' },
      { property: 'mH2Visitante', label: 'mh2Visitante' },
      { property: 'mH3Casa', label: 'mh3Casa' },
      { property: 'mH3Visitante', label: 'mh3Visitante' },
      { property: 'exgCasa', label: 'exgCasa' },
      { property: 'exgVisitante', label: 'exgVisitante' },     
      { property: 'apM1Casa', label: 'apm1Casa' },
      { property: 'apM1Visitante', label: 'apm1Visitante' },
      { property: 'apM2Casa', label: 'apm2Casa' },
      { property: 'apM2Visitante', label: 'apm2Visitante' },
      { property: 'caCasa', label: 'caCasa' },
      { property: 'caVisitante', label: 'caVisitante' },
      { property: 'cfaCasa', label: 'cfaCasa' },
      { property: 'cfaVisitante', label: 'cfaVisitante' },
      { property: 'posseBolaCasa', label: 'posseBolaCasa' },
      { property: 'posseBolaVisitante', label: 'posseBolaVisitante' },
      { property: 'ataquesCasa', label: 'ataquesCasa' },
      { property: 'ataquesVisitante', label: 'ataquesVisitante' },
      { property: 'ataqPerigososCasa', label: 'ataqPerigososCasa' },
      { property: 'ataqPerigososVisitante', label: 'ataqPerigososVisitante' },

      { property: 'editar', label: 'EDITAR', type: 'cellTemplate' }
    ];

    columnsStatistics = [
      { property: 'titulo', label: 'titulo' },
      { property: 'mediaValoresMaior', label: 'media Valores Maior' },
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

   

}


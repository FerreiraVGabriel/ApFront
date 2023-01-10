import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Bet } from 'src/app/models/bets.model';
import { LiveBets } from 'src/app/models/LiveBets/liveBets.model';
import { LiveBetsWithTime } from 'src/app/models/LiveBets/liveBetsWithTime';

@Injectable({
  providedIn: 'root'
})

export class LiveBetsService  {
  urlServiceREST = 'http://localhost:82/apostasLive';
    constructor(private httpClient: HttpClient) { }

    readLiveBets(marketId: string) {
        try {
          this.urlServiceREST = 'http://localhost:82/apostasLive';
          //let queryParams = new HttpParams();
          //queryParams = queryParams.append("idMercado",marketId);
          this.urlServiceREST = this.urlServiceREST+"/"+marketId;

          return this.httpClient.get<LiveBetsWithTime[]>(this.urlServiceREST);
        }
        catch (e) {
        }
    
    }
    
    addLiveBet(liveBet:LiveBets) {
      try {
        //form
        var formData: any = new FormData();
        formData.append("DataAposta", liveBet.dataAposta);
        formData.append("Stake", liveBet.stake);
        formData.append("PL", liveBet.pl);
        formData.append("Competicao_id", liveBet.competicao_id);
        formData.append("Mandante_id", liveBet.mandante_id);
        formData.append("Visitante_id", liveBet.visitante_id);
        formData.append("Mercados_id", liveBet.mercados_id);
        formData.append("Tempo", liveBet.tempo);
        formData.append("MH1Casa", liveBet.mh1Casa);
        formData.append("MH1Visitante", liveBet.mh1Visitante);
        formData.append("MH2Casa", liveBet.mh2Casa);
        formData.append("MH2Visitante", liveBet.mh2Visitante);
        formData.append("MH3Casa", liveBet.mh3Casa);
        formData.append("MH3Visitante", liveBet.mh3Visitante);
        formData.append("EXGCasa", liveBet.exgCasa);
        formData.append("EXGVisitante", liveBet.exgVisitante);
        formData.append("APM1Casa", liveBet.apm1Casa);
        formData.append("APM1Visitante", liveBet.apm1Visitante);
        formData.append("APM2Casa", liveBet.apm2Casa);
        formData.append("APM2Visitante", liveBet.apm2Visitante);
        formData.append("CACasa", liveBet.caCasa);
        formData.append("CAVisitante", liveBet.caVisitante);
        formData.append("CFACasa", liveBet.cfaCasa);
        formData.append("CFAVisitante", liveBet.cfaVisitante);

        if(liveBet.ataquesCasa != undefined)
          formData.append("AtaquesCasa", liveBet.ataquesCasa);

        if(liveBet.ataquesVisitante != undefined)
          formData.append("AtaquesVisitante", liveBet.ataquesVisitante);

        if(liveBet.ataqPerigososCasa != undefined)
          formData.append("AtaqPerigososCasa", liveBet.ataqPerigososCasa);

        if(liveBet.ataqPerigososVisitante != undefined)
          formData.append("AtaqPerigososVisitante", liveBet.ataqPerigososVisitante);

        if(liveBet.posseBolaCasa != undefined)
          formData.append("PosseBolaCasa", liveBet.posseBolaCasa);

        if(liveBet.posseBolaVisitante != undefined)
          formData.append("PosseBolaVisitante", liveBet.posseBolaVisitante);

        return this.httpClient.post(this.urlServiceREST, formData);
      }
      catch (e) {
        var z =0;
      }
    }
  
}
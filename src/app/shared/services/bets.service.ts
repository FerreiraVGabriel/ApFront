import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Bet } from 'src/app/models/bets.model';

@Injectable({
  providedIn: 'root'
})

export class BetsService  {
  urlServiceREST = 'http://localhost:82/apostas';
    constructor(private httpClient: HttpClient) { }

    readBets() {
        try {
          return this.httpClient.get<Bet[]>(this.urlServiceREST);
        }
        catch (e) {
        }
    
    }

    readBetsPagination(search: string,pagination: number) {
      try {
        return this.httpClient.get<Bet[]>(this.urlServiceREST+"/"+search+"/"+pagination);
      }
      catch (e) {
      }
  
  }
    
    addBet(bet:Bet) {
      try {
        //form
        var formData: any = new FormData();
        formData.append("DataApostaString", bet.dataApostaString);
        formData.append("Stake", bet.stake);
        formData.append("PL", bet.pl);
        formData.append("Competicao_id", bet.competicao_id);
        formData.append("Mandante_id", bet.mandante_id);
        formData.append("Visitante_id", bet.visitante_id);
        formData.append("Mercados_id", bet.mercados_id);
        return this.httpClient.post(this.urlServiceREST, formData);
      }
      catch (e) {
      }
    }

    getBet(id: number) {
      this.urlServiceREST = 'http://localhost:82/apostas'; 
      try {
        return this.httpClient.get<Bet>(this.urlServiceREST+"/"+id);
      }
      catch (e) {
      }
    }

    updateBet(bet:Bet) {
      try {
        //form
        var formData: any = new FormData();
        formData.append("DataApostaString", bet.dataApostaString);
        formData.append("Stake", bet.stake);
        formData.append("PL", bet.pl);
        formData.append("Competicao_id", bet.competicao_id);
        formData.append("Mandante_id", bet.mandante_id);
        formData.append("Visitante_id", bet.visitante_id);
        formData.append("Mercados_id", bet.mercados_id);
        return this.httpClient.post(this.urlServiceREST+"/"+bet.id, formData);
      }
      catch (e) {
        var z =0;
      }
    }
  
}


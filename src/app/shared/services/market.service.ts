import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Market } from 'src/app/models/market.model';

@Injectable({
  providedIn: 'root'
})

export class MarketService  {
    urlServiceREST = 'http://localhost:82/mercados';
    constructor(private httpClient: HttpClient) { }

    readMarket() {
        try {
          return this.httpClient.get<Market[]>(this.urlServiceREST);
        }
        catch (e) {
        }
    
    }

    addMarket(market:Market) {
      try {
        //form
        var formData: any = new FormData();
        formData.append("nome", market.nome);
        return this.httpClient.post(this.urlServiceREST, formData);
      }
      catch (e) {
      }
    }
  
  
}
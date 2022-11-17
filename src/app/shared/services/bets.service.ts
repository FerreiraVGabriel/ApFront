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
  
  
}
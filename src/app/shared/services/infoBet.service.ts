import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Teams } from 'src/app/models/teams.model';
import { Country } from 'src/app/models/country.model';
import { catchError, retry } from 'rxjs/operators';
import { InfoBet } from 'src/app/models/InfoBet/InfoBet.model';


@Injectable({
  providedIn: 'root'
})

export class InfoBetService  {

    constructor(private httpClient: HttpClient) { }

    readMarketInfo(filterId: string) {
        try {
          let urlServiceREST: string = 'http://localhost:82/mercados';
          urlServiceREST = urlServiceREST+"/"+filterId;
          return this.httpClient.get<InfoBet[]>(urlServiceREST);
        }
        catch (e) {
        }
    }

    readTeamsInfo(filterId: string) {
        try {
          let urlServiceREST: string = 'http://localhost:82/times';
          urlServiceREST = urlServiceREST+"/"+filterId;
          return this.httpClient.get<InfoBet[]>(urlServiceREST);
        }
        catch (e) {
        }
    }
  
  
}
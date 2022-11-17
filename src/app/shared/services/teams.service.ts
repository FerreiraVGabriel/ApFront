import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Teams } from 'src/app/models/teams.model';
import { Country } from 'src/app/models/country.model';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class TeamsService  {
     urlServiceREST = 'http://localhost:82/times';

    constructor(private httpClient: HttpClient) { }

    readTeams() {
      try {
        return this.httpClient.get<Teams[]>(this.urlServiceREST);
      }
      catch (e) {
      }
    }

    
    addTeams(team:Teams) {
    try {
      //form
      var formData: any = new FormData();
      formData.append("nome", team.nome);
      formData.append("pais_id", team.pais_id);
      return this.httpClient.post(this.urlServiceREST, formData);
    }
    catch (e) {
      var z =0;
    }
  }
  
  
}
import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Competition } from 'src/app/models/competition.model';

@Injectable({
  providedIn: 'root'
})

export class CompetitionService  {
    urlServiceREST = 'http://localhost:82/competicao';
    constructor(private httpClient: HttpClient) { }

    readCompetition() {
        try {
          return this.httpClient.get<Competition[]>(this.urlServiceREST);
        }
        catch (e) {
        }
    
    }
    
    addCompetition(competition:Competition) {
        var formData: any = new FormData();
        formData.append("nome", competition.nome);
        formData.append("pais_id", competition.pais_id);
        return this.httpClient.post(this.urlServiceREST, formData);
    }
  
}
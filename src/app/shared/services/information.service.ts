import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Information } from 'src/app/models/HomeScreen/information';

@Injectable({
  providedIn: 'root'
})

export class InformationService  {
    urlServiceREST = 'http://localhost:82/informacoes';
    constructor(private httpClient: HttpClient) { }

    readInformation() {
        try {
          return this.httpClient.get<Information[]>(this.urlServiceREST);
        }
        catch (e) {
        }
      }
}
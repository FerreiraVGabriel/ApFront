import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Country } from 'src/app/models/country.model';

@Injectable({
  providedIn: 'root'
})

export class CountryService  {
    urlServiceREST = 'http://localhost:82/pais';
    constructor(private httpClient: HttpClient) { }

    readCountry() {
        try {
          return this.httpClient.get<Country[]>(this.urlServiceREST);
        }
        catch (e) {
        }
    
      }
}
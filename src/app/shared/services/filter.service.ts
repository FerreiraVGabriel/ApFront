import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Filter } from 'src/app/models/filter.model';

@Injectable({
  providedIn: 'root'
})

export class FilterService  {
    urlServiceREST = 'http://localhost:82/filtros';
    constructor(private httpClient: HttpClient) { }

    readFilter() {
        try {
          return this.httpClient.get<Filter[]>(this.urlServiceREST);
        }
        catch (e) {
        }
    }
  
  
}
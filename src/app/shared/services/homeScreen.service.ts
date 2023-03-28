import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HomeInformation } from 'src/app/models/HomeScreen/homeInformation';

@Injectable({
  providedIn: 'root'
})

export class HomeInformationService  {
    urlServiceREST = 'http://localhost:82/telaPrincipal';
    constructor(private httpClient: HttpClient) { }

    readHomeInformation(filterId: string, stringMarketId: string, filterType: string) {
        try {
            this.urlServiceREST = 'http://localhost:82/telaPrincipal';
            this.urlServiceREST = this.urlServiceREST+"/"+filterId+"/"+stringMarketId+"/"+filterType;
            return this.httpClient.get<HomeInformation>(this.urlServiceREST);
        }
        catch (e) {
        }
    
      }
  
  
}
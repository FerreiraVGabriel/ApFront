import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PoModalComponent } from '@po-ui/ng-components';
import { Country } from 'src/app/models/country.model';
import { CountryService } from 'src/app/shared/services/country.service';

@Component({
  selector: 'country',
  templateUrl: './Country.component.html',
  styleUrls: ['./Country.component.css']
})

export class CountryComponent implements OnInit{
  
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  

    public constructor(private countryService:CountryService, public router:Router){}

    columns = [
        { property: 'id', label: 'ID' },
        { property: 'nome', label: 'Nome' },
        { property: 'editar', label: 'EDITAR', type: 'cellTemplate' }
     ];
    
     ngOnInit(): void {
        this.LoadCountry();
    }
  
    country: Country[];
    async LoadCountry(): Promise<void> 
    {
      await this.countryService.readCountry().subscribe((country: Country[]) => {
        this.country = country;
      });
    }

  

}
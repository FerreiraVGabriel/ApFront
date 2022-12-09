import { Component, OnInit } from '@angular/core';
import { Filter } from 'src/app/models/filter.model';
import { FilterService } from 'src/app/shared/services/filter.service';


@Component({
  selector: 'navbar-itens',
  templateUrl: './navbar-itens.component.html',
  styleUrls: ['./navbar-itens.component.css']
})

export class NavBarItensComponent implements OnInit{

  public constructor(private filterService:FilterService){}

  filterId: string = '';

  ngOnInit(): void {
    this.LoadFilter();
  }

  filters: Filter[];
  async LoadFilter(): Promise<void> 
  {
    await this.filterService.readFilter().subscribe((filters: Filter[]) => {
      this.filters = filters;
    });
  }
}
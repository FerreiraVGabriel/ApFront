import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teams } from 'src/app/models/teams.model';
import { TeamsService } from 'src/app/shared/services/teams.service';



@Component({
  selector: 'home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})

export class HomeComponent implements OnInit{

  columns = [
    { property: 'DATA', label: 'DATA' },
    { property: 'pel', label: 'P&L' },
    { property: 'ROI', label: 'ROI' },
  ];

  columns2 = [
    { property: 'gab', label: 'TITULO' },
    { property: 'gavf', label: 'DATA' },
  ];
  
  task:x[] = [
    {DATA: "teste", pel: 'Sentence 1', ROI:"tesd"},
    {DATA: "teste", pel: 'Sentence 1', ROI:"tesd"},
    {DATA: "teste", pel: 'Sentence 1', ROI:"tesd"},
    {DATA: "teste", pel: 'Sentence 1', ROI:"tesd"},
    {DATA: "teste", pel: 'Sentence 1', ROI:"tesd"},
    {DATA: "teste", pel: 'Sentence 1', ROI:"tesd"},
    {DATA: "teste", pel: 'Sentence 1', ROI:"tesd"},
    {DATA: "teste", pel: 'Sentence 1', ROI:"tesd1"}
  ];

  public constructor(private timesService:TeamsService, public router:Router){ 

  }

  ngOnInit(): void {
      this.LoadApostas();
  }

  times: Teams[];
  async LoadApostas(): Promise<void> 
  {
    await this.timesService.readTeams().subscribe((times: Teams[]) => {
      this.times = times;
    });
  }

}

export class x {
  DATA: string;
  pel: string;
  ROI: string;
}

export class y {
  gab: string;
  gafv: string;
}
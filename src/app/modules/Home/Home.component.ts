import { Component, OnInit } from '@angular/core';



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
    {DATA: "teste", pel: 'Sentence 1', ROI:"tesd"}
  ];

  ngOnInit(): void {
      
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
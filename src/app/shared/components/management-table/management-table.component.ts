import { Component, Input, OnInit } from '@angular/core';
import { Information } from 'src/app/models/HomeScreen/information';



@Component({
  selector: 'management-table',
  templateUrl: './management-table.component.html',
  styleUrls: ['./management-table.component.css']
})

export class ManagementTableComponent implements OnInit{

  @Input() information : Information;

  profit : number;


  ngOnInit(): void {
  }

  ngOnChanges(){
    this.profit= parseFloat((this.information.final - this.information.inicio).toFixed(2));
  }

}
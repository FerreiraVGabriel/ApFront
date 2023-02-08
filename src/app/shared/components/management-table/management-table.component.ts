import { Component, Input, OnInit } from '@angular/core';
import { Information } from 'src/app/models/HomeScreen/information';



@Component({
  selector: 'management-table',
  templateUrl: './management-table.component.html',
  styleUrls: ['./management-table.component.css']
})

export class ManagementTableComponent implements OnInit{

  @Input() information : Information;


  ngOnInit(): void {
  }

  ngOnChanges(){
    var x = this.information;
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { SticksData } from 'src/app/Services/sticks-data';



@Component({
  selector: 'app-sticks-table',
  templateUrl: './sticks-table.component.html',
  styleUrls: ['./sticks-table.component.css']
})

export class SticksTableComponent implements OnInit {


  @Input()  sticks: SticksData[] =[];


  constructor() { }

  ngOnInit(): void {
  }

}

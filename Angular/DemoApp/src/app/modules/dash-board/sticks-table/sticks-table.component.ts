
import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-sticks-table',
  templateUrl: './sticks-table.component.html',
  styleUrls: ['./sticks-table.component.css']
})

export class SticksTableComponent implements OnInit {


  @Input()  sticks: any[] =  [];


  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-sticks-dash-board',
  templateUrl: './sticks-dash-board.component.html',
  styleUrls: ['./sticks-dash-board.component.css']
})

export class SticksDashBoardComponent implements OnInit {

  @Input()  sticks: any[] =[];
  constructor() { }

  ngOnInit(): void {
  }

}

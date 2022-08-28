import { Component, Input, OnInit } from '@angular/core';
import { SticksData } from 'src/app/Services/sticks-data';

@Component({
  selector: 'app-sticks-dash-board',
  templateUrl: './sticks-dash-board.component.html',
  styleUrls: ['./sticks-dash-board.component.css']
})
export class SticksDashBoardComponent implements OnInit {

  @Input()  set sticks(sticks: SticksData[]) {}
  constructor() { }

  ngOnInit(): void {
  }

}

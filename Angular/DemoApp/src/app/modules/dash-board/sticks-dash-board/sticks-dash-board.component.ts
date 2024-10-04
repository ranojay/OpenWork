import { Component, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-sticks-dash-board',
  templateUrl: './sticks-dash-board.component.html',
  styleUrls: ['./sticks-dash-board.component.css']
})

export class SticksDashBoardComponent implements OnInit {

  @Input() sticks: any[] = [];
  constructor() { }
  //data: Observable<any[]> = new Observable();
  data: any[]
  ngOnInit(): void {
  }

  onClick() {
    var tempData = [];
    for (let i = 0; i < 20; i++) {
      let randyear = Math.random();
      let year = Math.round(2000 + randyear*100);
      let close = Math.random() * 10 + 5;
      tempData.push({ Date: `${year}-07-05`, Close: close});
    }
    
    tempData.sort( (a,b) => Date.parse(a.Date) - Date.parse(b.Date))
    this.data = tempData;
  }
}

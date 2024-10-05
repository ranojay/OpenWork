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
    for (let i = 0; i < 200; i++) {
      let close = (Math.random() * i/2 + 50)
      let date = this.randomDate(i);
      tempData.push({ Date: date, Close: close });
    }

    tempData.sort((a, b) => a.Date - b.Date);
    this.data = tempData;
  }

  randomDate(yr): Date {

    //Month ranges between 1 to 12 months
    let month = Math.floor(Math.random() * (13 - 1) + 1)
    //Identifying months which has 31 days
    let oddDays = [1, 3, 5, 7, 8, 10, 12]
    //Picking random year between 1901 to 2005
    let year = 2000 + Math.round(yr/10);//Math.floor(Math.random() * (2005 - 1900) + 1900)
    //Checking whether random month we generated has 31 days
    let day31 = oddDays.includes(month)
    //Handling code if the month has 31 days
    if (day31) {
      //Generating date between 1 to 31 days
      let date = Math.floor(Math.random() * (32 - 1) + 1)
      return new Date(year + '-' + month + '-' + date)
    }
    else {
      //Checking whether the given year is a leap year and the month is february
      if (year % 4 == 0 && month == 2) {
        //Since its a leap year we should have date ranging between 1 to 29
        let date = Math.floor(Math.random() * (30 - 1) + 1)
        return new Date(year + '-' + month + '-' + date)
      }
      //checking whether the given year is not a leap year and the month is february
      else if (year % 4 != 0 && month == 2) {
        //Since month is february, we are generating date ranging between 1 to 28
        let date = Math.floor(Math.random() * (29 - 1) + 1)
        return new Date(year + '-' + month + '-' + date)
      }
      else {
        //Since it is not a leap year and the month is not february, we are generating date between 1 to 30
        let date = Math.floor(Math.random() * (31 - 1) + 1)
        return new Date(year + '-' + month + '-' + date)
      }
    }
  }

}




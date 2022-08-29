import { Component } from '@angular/core';
import { DataBaseService } from './Services/data-base.service';
import { SticksData } from './Services/sticks-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoApp';
  constructor(private dataBase: DataBaseService) {}

  //sticks: SticksData[] = this.dataBase.getData();

  sticks: SticksData[] =  [ { id: 2002, place:"Ger1", geometry: "10,10 300,210 170,250 123,234" },
  { id: 2003, place:"Ger2", geometry: "20,10 300,210 170,250 123,234" },
  { id: 2004, place:"Ger3", geometry: "30,10 300,210 170,250 123,234" },
  { id: 2005, place:"Ger", geometry: "220,10 300,210 170,250 123,234" },
  { id: 2006, place:"Ger", geometry: "220,10 300,210 170,250 123,234" },
  { id: 2007, place:"Ger", geometry: "220,10 300,210 170,250 123,234" },
  { id: 2008, place:"Ger", geometry: "220,10 300,210 170,250 123,234" },
  { id: 2009, place:"Ger", geometry: "220,10 300,210 170,250 123,234" },
  { id: 2010, place:"Ger", geometry: "220,10 300,210 170,250 123,234" },
  { id: 2011, place:"Ger", geometry: "220,10 300,210 170,250 123,234" },
  { id: 2012, place:"Ger", geometry: "220,10 300,210 170,250 123,234" },
  { id: 2013, place:"Ger", geometry: "220,10 300,210 170,250 123,234" },
  { id: 2014, place:"Ger", geometry: "220,10 300,210 170,250 123,234" },
  { id: 2015, place:"Ger", geometry: "220,10 300,210 170,250 123,234" },
  { id: 2016, place:"Ger", geometry: "220,10 300,210 170,250 123,234" },
  { id: 2017, place:"Ger", geometry: "220,10 300,210 170,250 123,234" }
];
}

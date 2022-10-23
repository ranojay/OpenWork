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

  sticks: any[] =  
  [
    { "id": 2002, "place": "KG Basin Deep water", "geometry": "10,10 300,210 170,250 123,234" },
    { "id": 2003, "place": "KG Basin Deep water", "geometry": "20,10 300,210 170,250 123,234" },
    { "id": 2004, "place": "KG Basin Deep water", "geometry": "30,10 300,210 170,250 123,234" },
    { "id": 2005, "place": "KG Basin Deep water", "geometry": "220,10 300,210 170,250 123,234" },
    { "id": 2006, "place": "KG Basin Deep water", "geometry": "220,10 300,210 170,250 123,234" },
    { "id": 2007, "place": "KG Basin Deep water", "geometry": "220,10 300,210 170,250 123,234" },
    { "id": 2008, "place": "KG Basin Deep water", "geometry": "220,10 300,210 170,250 123,234" },
    { "id": 2009, "place": "KG Basin Deep water", "geometry": "220,10 300,210 170,250 123,234" },
    { "id": 2010, "place": "KG Basin Deep water", "geometry": "220,10 300,210 170,250 123,234" },
    { "id": 2011, "place": "KG Basin Deep water", "geometry": "220,10 300,210 170,250 123,234" },
    { "id": 2012, "place": "KG Basin Deep water", "geometry": "220,10 300,210 170,250 123,234" },
    { "id": 2013, "place": "KG Basin Deep water", "geometry": "220,10 300,210 170,250 123,234" },
    { "id": 2014, "place": "KG Basin Deep water", "geometry": "220,10 300,210 170,250 123,234" },
    { "id": 2015, "place": "KG Basin Deep water", "geometry": "220,10 300,210 170,250 123,234" },
    { "id": 2016, "place": "KG Basin Deep water", "geometry": "220,10 300,210 170,250 123,234" },
    { "id": 2017, "place": "KG Basin Deep water", "geometry": "220,10 300,210 170,250 123,234" }
  ]
}

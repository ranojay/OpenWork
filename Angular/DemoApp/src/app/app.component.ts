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

  //sticksIput: SticksData[] = this.dataBase.getData();

  ticksIput: SticksData[] =  [
    { id: 2002, place:"Ger", geometry: "" },
    { id: 2003, place:"Ger", geometry: "" },
    { id: 2004, place:"Ger", geometry: "" },
    { id: 2005, place:"Ger", geometry: "" },
    { id: 2006, place:"Ger", geometry: "" },
    { id: 2007, place:"Ger", geometry: "" },
    { id: 2008, place:"Ger", geometry: "" },
    { id: 2009, place:"Ger", geometry: "" },
    { id: 2010, place:"Ger", geometry: "" },
    { id: 2011, place:"Ger", geometry: "" },
    { id: 2012, place:"Ger", geometry: "" },
    { id: 2013, place:"Ger", geometry: "" },
    { id: 2014, place:"Ger", geometry: "" },
    { id: 2015, place:"Ger", geometry: "" },
    { id: 2016, place:"Ger", geometry: "" },
    { id: 2017, place:"Ger", geometry: "" }
  ];
}

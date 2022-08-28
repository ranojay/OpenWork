
import { Component, Input, OnInit } from '@angular/core';
import { SticksData } from 'src/app/Services/sticks-data';



@Component({
  selector: 'app-sticks-table',
  templateUrl: './sticks-table.component.html',
  styleUrls: ['./sticks-table.component.css']
})

export class SticksTableComponent implements OnInit {


  @Input()  sticks: SticksData[] =  [
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


  constructor() { }

  ngOnInit(): void {
  }

}

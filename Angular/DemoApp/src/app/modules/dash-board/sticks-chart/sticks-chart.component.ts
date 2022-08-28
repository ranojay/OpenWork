import { Component, OnInit } from '@angular/core';
import { SticksData } from 'src/app/Services/sticks-data';

@Component({
  selector: 'app-sticks-chart',
  template: `
    <svg
      [attr.width]="width"
      [attr.height]="height"
      [style.left.px]="-margin"
      [style.top.px]="-margin"
    >
      <svg:g  app-sticks-lines [geometry]="stick1"></svg:g>
      <svg:g  app-sticks-lines [geometry]="stick2"></svg:g>
    </svg>
  `,
  styles: [
    `
      :host {
        position: relative;
        display: block;
      }

      svg {
        position: absolute;
      }
    `
  ]
})

export class SticksChartComponent implements OnInit {

  width = 500;
  height = 500;
  margin = 0;

  sticks: SticksData[] =  [
    { id: 2002, place:"Ger", geometry: "10,10 300,210 170,250 123,234" },
    { id: 2003, place:"Ger", geometry: "20,10 300,210 170,250 123,234" },
    { id: 2004, place:"Ger", geometry: "30,10 300,210 170,250 123,234" },
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

  stick1 : string = this.sticks[0].geometry;
  stick2 : string = this.sticks[1].geometry;

  constructor() { }

  ngOnInit(): void {
  }

}

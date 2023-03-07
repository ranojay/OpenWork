import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-sticks-chart',
  template: `
    <svg 
      [attr.width]="width"
      [attr.height]="height"
      [style.left.px]="-margin"
      [style.top.px]="-margin"
    >
    <rect [attr.x]="10" [attr.y]="0" [attr.width]="width-20" [attr.height]="height" style="stroke:rgb(0,0,0);stroke-width:2;fill:rgb(255,255,200)"></rect>
    <line *ngFor="let line of scale" [attr.x1]="0" [attr.y1]="line" [attr.x2]="width-10" [attr.y2]="line" style="stroke:rgb(200,200,200);stroke-width:1"/>
    <svg:g  *ngFor="let stick of sticks" app-sticks-lines [stick]="stick"></svg:g>
     
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

  scale: number[] = [10, 20, 30, 40];
  @Input() sticks: any[] = [];
  /*{ id: 2002, place:"Ger1", geometry: "10,10 300,210 170,250 123,234" },
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

stick1 : string = this.sticks[0].geometry;
stick2 : string = this.sticks[1].geometry;

geometries : string [] = [ this.stick1, this.stick2];*/



  constructor() { }

  ngOnInit(): void {
  }

}

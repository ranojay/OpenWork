import { Component, Input, OnInit } from '@angular/core';
import { SticksData } from 'src/app/Services/sticks-data';

@Component({
  selector: "svg:g[app-sticks-lines]",
  template: `<svg:polygon [attr.points]="getPoints()" (click)="onClick()" style="fill:lime;stroke:purple;stroke-width:1"><title>{{getTooltip()}}</title></svg:polygon>`
})
export class SticksLinesComponent implements OnInit {

  toggle = false;
  @Input() geometry: string = '220,10 300,210 170,250 123,234';
  
  constructor() { }

  ngOnInit(): void {
  }

  getPoints() {
    return this.geometry;
  }

  getTooltip() {
    return 'Hello';
  }

  onClick()  {
    this.toggle = !this.toggle;
    this.geometry = this.toggle ? '220,10 300,210 170,250 123,210' :  '220,10 300,210 170,250 123,100';
  }
}

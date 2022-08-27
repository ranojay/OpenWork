import { Component, OnInit } from '@angular/core';

@Component({
  selector: "svg:g[app-sticks-lines]",
  template: `<svg:polygon [attr.points]="getPoints()" (click)="onClick()" style="fill:lime;stroke:purple;stroke-width:1"><title>{{getTooltip()}}</title></svg:polygon>`
})
export class SticksLinesComponent implements OnInit {

  points: string = '220,10 300,210 170,250 123,234'
  toggle = false;
  constructor() { }

  ngOnInit(): void {
  }

  getPoints() {
    return this.points;
  }

  getTooltip() {
    return 'Hello';
  }

  onClick()  {
    this.toggle = !this.toggle;
    this.points = this.toggle ? '220,10 300,210 170,250 123,210' :  '220,10 300,210 170,250 123,100';
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { SticksData } from 'src/app/Services/sticks-data';

@Component({
  selector: "svg:g[app-sticks-lines]",
  template: `<svg:polygon     *ngFor="let stick of sticks"
  [attr.points]="stick.geometry" (click)="onClick()" style="fill:lime;stroke:purple;stroke-width:1"><title>{{stick.place}}</title></svg:polygon>`
})
export class SticksLinesComponent implements OnInit {

  toggle = false;
  @Input() sticks: SticksData[] =  [];
    
  
  constructor() { }

  ngOnInit(): void {
  }

  getPoints() {
    return "";
  }

  getTooltip() {
    return 'Hello';
  }

  onClick()  {
    this.toggle = !this.toggle;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { SticksData } from 'src/app/Services/sticks-data';

@Component({
  selector: "svg:g[app-sticks-lines]",
  template: `<svg:polygon [attr.points]="stick.geometry" (click)="onClick()" style="fill:lime;stroke:purple;stroke-width:1"><title>{{stick.place}}</title></svg:polygon>`
})
export class SticksLinesComponent implements OnInit {

  toggle = false;
  @Input() stick: SticksData =  { id: 2002, place:"Ger", geometry: "" };
    
  
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

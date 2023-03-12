import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: "svg:g[app-sticks-lines]",
  template: `<svg:polygon [attr.points]="stick.geometry" (click)="onClick()" class="lineSelect" [ngClass]="{linedeSelect:stick.isSelected}"><title>{{stick.place}}</title></svg:polygon>`,
  styles: [ ` .lineSelect{ padding: 250px 50px 75px 100px; stroke:red; fill:yellow; stroke-width:4} .linedeSelect{ padding: 250px 50px 75px 100px; stroke:blue; fill:yellow; stroke-width:1}` ]
})
export class SticksLinesComponent implements OnInit {

  toggle = false;
  @Input() stick!: any;
    
  
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

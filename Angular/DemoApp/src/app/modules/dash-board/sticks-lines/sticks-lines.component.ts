import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: "svg:g[app-sticks-lines]",
  template: `<svg:polygon [attr.points]="stick.geometry" (click)="onClick()" style="fill:lime;stroke:black;stroke-width:1"><title>{{stick.place}}</title></svg:polygon>`
})
export class SticksLinesComponent implements OnInit {

  toggle = false;
  @Input() stick: any =  {};
    
  
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

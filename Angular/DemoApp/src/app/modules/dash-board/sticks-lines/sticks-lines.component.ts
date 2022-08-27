import { Component, OnInit } from '@angular/core';

@Component({
  selector: "svg:g[app-sticks-lines]",
  template: `<svg:polygon points="220,10 300,210 170,250 123,234" style="fill:lime;stroke:purple;stroke-width:1" />`
})
export class SticksLinesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

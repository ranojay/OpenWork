import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sticks-chart',
  template: `
    <svg
      [attr.width]="width"
      [attr.height]="height"
      [style.left.px]="-margin"
      [style.top.px]="-margin"
    >
      <svg:g app-sticks-lines></svg:g>
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
  constructor() { }

  ngOnInit(): void {
  }

}

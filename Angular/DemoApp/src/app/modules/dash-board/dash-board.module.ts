import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SticksDashBoardComponent } from './sticks-dash-board/sticks-dash-board.component';
import { SticksChartComponent } from './sticks-chart/sticks-chart.component';
import { SticksLinesComponent } from './sticks-lines/sticks-lines.component';
import { SticksTableComponent } from './sticks-table/sticks-table.component';



@NgModule({
  declarations: [
    SticksDashBoardComponent,
    SticksChartComponent,
    SticksLinesComponent,
    SticksTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SticksDashBoardComponent
  ]
})
export class DashBoardModule { }

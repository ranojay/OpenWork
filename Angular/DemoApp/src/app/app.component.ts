import { Component } from '@angular/core';
import { DataBaseService } from './Services/data-base.service';
import { SticksData } from './Services/sticks-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoApp';
  constructor(private dataBase: DataBaseService) {}

  sticks: SticksData[] = this.dataBase.getData();
}

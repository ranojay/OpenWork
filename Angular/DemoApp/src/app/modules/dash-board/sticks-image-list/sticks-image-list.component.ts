import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sticks-image-list',
  templateUrl: './sticks-image-list.component.html',
  styleUrls: ['./sticks-image-list.component.css']
})
export class SticksImageListComponent implements OnInit {

  @Input() sticks: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}

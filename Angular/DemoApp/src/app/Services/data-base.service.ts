import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  data: [{ id: number; place: string; geometry: string }] = require("../../assets/data.json");
  constructor() { }

  getData() {
    return this.data;
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sticks-form',
  templateUrl: './sticks-form.component.html',
  styleUrls: ['./sticks-form.component.css']
})
export class SticksFormComponent implements OnInit {
  sticksForm!: FormGroup;
  inputs: string[] = ["name", "email", "phone"];

  ngOnInit() {
   
    this.sticksForm = new FormGroup({});
    this.inputs.forEach(inp=>{
      this.sticksForm.addControl(inp,new FormControl())
    });
  }

  onSubmit(form: FormGroup) {
    console.log(form);
  }
}
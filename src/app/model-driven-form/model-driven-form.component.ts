import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {

  form : FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      firstname : new FormControl("alex"),
      lastname : new FormControl(),
      languages : new FormControl()
    });
  }
  public onSubmit(user){
    console.log(user);
  }

}

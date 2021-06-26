import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model-form',
  templateUrl: './ng-model-form.component.html',
  styleUrls: ['./ng-model-form.component.css']
})
export class NgModelFormComponent implements OnInit {

  userName:string
  Password:string

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form)
  {
    console.log(form.form.value)
  }
}

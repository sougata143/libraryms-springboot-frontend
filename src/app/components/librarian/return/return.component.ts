import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit {

  form: FormGroup;

  issuebookid = new FormControl("", Validators.required);

  constructor(fb: FormBuilder) {
    this.form = fb.group({
    "issuebookid" : this.issuebookid
    });
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log("form submitted" + this.form);
    console.log();
  }

}

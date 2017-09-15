import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  form: FormGroup;

  name = new FormControl("", Validators.required);
  email = new FormControl("", Validators.required);
  sub = new FormControl("", Validators.required);
  age = new FormControl("", Validators.required);
  contact = new FormControl("", Validators.required);

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      "name" : this.name,
      "email" : this.email,
      "sub" : this.sub,
      "age" : this.age,
      "contact" : this.contact,
      
    });
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log("form submitted" + this.form);
    console.log();
  }

}

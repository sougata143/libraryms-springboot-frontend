import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-librarian',
  templateUrl: './add-librarian.component.html',
  styleUrls: ['./add-librarian.component.css']
})
export class AddLibrarianComponent implements OnInit {

  form: FormGroup;

  userid = new FormControl("", Validators.required);
  username = new FormControl("", Validators.required);
  email = new FormControl("", Validators.required);
  password = new FormControl("", Validators.required);
  mobile = new FormControl("", Validators.required);

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      "userid" : this.userid,
      "username" : this.username,
      "email" : this.email,
      "password" : this.password,
      "mobile" : this.mobile
    });
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log("form submitted" + this.form);
    console.log();
  }

}

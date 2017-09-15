import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../services/user-service.service';
import { ReactiveFormsModule,FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

   form: FormGroup;

   email = new FormControl("", Validators.required);
  password = new FormControl("", Validators.required);
  
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      "email" : this.email,
      "password" : this.password
    });
   }

  ngOnInit() {

    //this.userServiceService.getUser().subscribe(/*data var to be retrieved*/) => {
    //this./*data var*/ = /*data var*/
    //}

  }

  onSubmit(){
    console.log("form submitted" + this.form);
    console.log();
  }

}

import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-issue-books',
  templateUrl: './issue-books.component.html',
  styleUrls: ['./issue-books.component.css']
})
export class IssueBooksComponent implements OnInit {

  form: FormGroup;

  bookid = new FormControl("", Validators.required);
  name = new FormControl("", Validators.required);
  studentid = new FormControl("", Validators.required);
  issuedate = new FormControl("", Validators.required);

  constructor(fb : FormBuilder) {
    this.form = fb.group({
      "bookid" : this.bookid,
      "name" : this.name,
      "studentid" : this.studentid,
      "issuedate" : this.issuedate
    });
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log("form submitted" + this.form);
    console.log();
  }

}

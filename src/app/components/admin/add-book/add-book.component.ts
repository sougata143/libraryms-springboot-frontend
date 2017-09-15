import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BookserviceService } from '../../../services/bookservice.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  form: FormGroup;

  name = new FormControl("", Validators.required);
  publisher = new FormControl("", Validators.required);
  writer = new FormControl("", Validators.required);

  constructor(private fb: FormBuilder, private bookserviceService : BookserviceService) {
    this.form = fb.group({
      "name" : this.name,
      "writer" : this.writer,
      "publisher" : this.publisher
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log("form submitted" + this.form.value);
    this.bookserviceService.addBooks(this.form.value)
        .subscribe(res => {});
    console.log();
  }

}

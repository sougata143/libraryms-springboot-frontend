import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../../../services/bookservice.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  books : Books[];

  constructor(private bookserviceService : BookserviceService) { }

  ngOnInit() {
    this.bookserviceService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }

}
interface Books{
  name:string,
  publisher:string,
  writer:string
}

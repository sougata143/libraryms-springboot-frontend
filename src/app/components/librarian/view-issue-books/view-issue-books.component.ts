import { Component, OnInit } from '@angular/core';
import {IsuuebooksService} from '../../../services/isuuebooks.service';

@Component({
  selector: 'app-view-issue-books',
  templateUrl: './view-issue-books.component.html',
  styleUrls: ['./view-issue-books.component.css']
})
export class ViewIssueBooksComponent implements OnInit {

  issuebooks : issuebooks[];

  constructor(private isuuebooksService: IsuuebooksService) { }

  ngOnInit() {
    this.isuuebooksService.getIssuedBooks().subscribe(issuebooks => {
      this.issuebooks = issuebooks;
    });
  }

}

interface issuebooks{
  id: number,
  bookid: number,
  name: string,
  studentid: number,
  issuedate: string

}

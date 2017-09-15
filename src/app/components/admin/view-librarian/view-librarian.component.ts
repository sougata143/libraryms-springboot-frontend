import { Component, OnInit } from '@angular/core';
import {LibrarianService} from '../../../services/librarian.service';

@Component({
  selector: 'app-view-librarian',
  templateUrl: './view-librarian.component.html',
  styleUrls: ['./view-librarian.component.css']
})
export class ViewLibrarianComponent implements OnInit {

  constructor(private librarianService : LibrarianService) { }

  librarians : librarians[];

  ngOnInit() {
    this.librarianService.getLibrarian().subscribe(librarians => {
      this.librarians = librarians;
    });
  }

}

interface librarians{
  id: number,
  name: string,
  email: string,
  mobile: string
}
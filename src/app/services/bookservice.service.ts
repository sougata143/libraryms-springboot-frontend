import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class BookserviceService {


  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http : Http) { }

  getBooks(){
    return this.http.get("/api/library/books")
      .map((res) => res.json());
  }

  addBooks(books){
    return this.http.post("/api/library/booksave", JSON.stringify(books), )
    .map(res => res.json());
  }

  updateBooks(books){
    return this.http.put("/api/library/updatebook{id}", JSON.stringify(books));
  }

  deleteBooks(id){
    return this.http.delete("/api/library/bookdelete{id}");
  }

  
}

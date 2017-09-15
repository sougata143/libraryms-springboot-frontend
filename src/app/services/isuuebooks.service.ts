import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class IsuuebooksService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }


  getIssuedBooks(){
    return this.http.get("/api/library/issuebooks")
    .map(res => res.json());
  }

  addIssuedBooks(books){
    return this.http.post("/api/library/saveissuebooks", JSON.stringify(books))
    .map(res => res.json());
  }

  updateIssuedBooks(books){
    return this.http.put("/api/library/updateisuue/{id}", JSON.stringify(books));
  }

  deleteIssuedBooks(id){
    return this.http.delete("/api/library/deleteissue/{id}");
  }


}

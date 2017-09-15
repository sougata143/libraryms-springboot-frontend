import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LibrarianService {

  constructor(private http : Http) { }

  url : string = "http://localhost:3000/librarian";
  url2 : string = "../../assets/json/librarian.json";

  getLibrarian(){
    return this.http.get(this.url)
    .map(res => res.json());
  }

    addLibrarian(librarian){
    return this.http.post(this.url, JSON.stringify(librarian))
    .map(res => res.json());
  }

  updateLibrarian(librarian){
    return this.http.put(this.getLibrarianUrl(librarian.id), JSON.stringify(librarian));
  }

  deleteLibrarian(id){
    return this.http.delete(this.getLibrarianUrl(id));
  }

  private getLibrarianUrl(id){
    return this.url + "/" + id;
  }


}

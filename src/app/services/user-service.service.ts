import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserServiceService {

  constructor(public http: Http) { }

  getUser(){
    return this.http.get('"/api/library"/users')
      .map(res => res.json());
  }

}

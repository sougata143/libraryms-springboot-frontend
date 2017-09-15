import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class StudentserviceService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http : Http) { }

  getStudent(){
    return this.http.get("/api/library/student")
    .map(res => res.json());
  }

    addStudent(student){
    return this.http.post("/api/library/studentsave", JSON.stringify(student))
    .map(res => res.json());
  }

  updateStudent(student){
    return this.http.put("/api/library/updatestudent/{id}", JSON.stringify(student));
  }

  deleteStudent(id){
    return this.http.delete("/api/library/deletestudent/{id}");
  }

  
}

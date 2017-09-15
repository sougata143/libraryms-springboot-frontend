import { Component, OnInit } from '@angular/core';
import { StudentserviceService } from '../../../services/studentservice.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  constructor(private studentserviceService : StudentserviceService) { }

  students : students[];



  ngOnInit() {
    this.studentserviceService.getStudent().subscribe((students) => {
      this.students = students;
    });
  }

}

interface students{
  studentid: number,
  studentname: string,
  studentemail: string,
  address: string,
  age: number,
  sex: string
}

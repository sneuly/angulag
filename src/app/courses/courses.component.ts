import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(service: CoursesService) {
    this.courses = service.get();
   }

  ngOnInit() {
  }

  title: string = 'List of courses';
  courses: string[];

  getTitle(){
    return this.title;
  }
}

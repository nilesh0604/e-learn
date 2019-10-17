import { Component, OnInit } from '@angular/core';
import {Course} from './../course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.sass']
})
export class CourseListComponent implements OnInit {

  courseList: Course[];

  constructor() { }

  ngOnInit() {
  }

}

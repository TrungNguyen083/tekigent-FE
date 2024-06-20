import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { coursesData } from '../../constants/course-management.constant';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})

export class CourseListComponent implements OnInit{
  courses = coursesData;

  table = {
    page: 1,
    first: 0,
    rows: 6,
    pageCount: 6,
    totalRecord: coursesData.length,
  };

  @Output() pagingInfo = new EventEmitter();

  ngOnInit() {
    this.updatePagingInfo();
  }

  get paginatedCourses() {
    const start = (this.table.page - 1) * this.table.rows;
    const end = start + this.table.rows;
    return this.courses.slice(start, end);
  }

  onPageChange(event: any) {
    this.table.page = event.page + 1;
    this.table.first = event.first;
    this.table.rows = event.rows;
    this.pagingInfo.emit(event);
  }

  private updatePagingInfo() {
    this.pagingInfo.emit({
      page: this.table.page,
      first: this.table.first,
      rows: this.table.rows,
      totalRecords: this.table.totalRecord
    });
  }
}



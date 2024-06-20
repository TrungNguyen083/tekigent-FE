import { Component, EventEmitter, OnInit } from '@angular/core';
import { IStudent, IStudentListResponse, IStudentParams } from '../../models/student-management.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PageChangeEvent } from 'src/app/components/share/models/pagingInfo.model';
import { TekigentTable } from 'src/app/components/share/models/tekigent-table.model';
import { defaultTablePagination } from 'src/app/constants/app.constant';
import { listCourseStudent, studentTableCols } from '../../constants/student-management.constant';
import { configPagination } from 'src/app/utils/configPagination';
import { PaginatedData } from 'src/app/models/global.model';



@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  tableData: TekigentTable<IStudent> = {
    ...defaultTablePagination,
    data: {
      header: studentTableCols,
      body: [],
    },
  };

  listStudent?: IStudentListResponse;
  studentsPagi!: PaginatedData<IStudent>;
  courseId!: number;
  gapPageNumber = 1;

  studentParams: IStudentParams = { pageNo: 1, pageSize: 10 };
  selectedStudents = new Set<IStudent>();
  selectedStudentsCount = 0;
  uncheckItems = new EventEmitter<void>();

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.listStudent = this.getStudentListByCourseId(+id);
        this.courseId = +id;
      }
    });

    const listStudentPagination: PaginatedData<IStudent> = {
      pagination: {
        pageNo: 1,
        pageSize: 15,
        totalPages: Math.ceil((this.listStudent?.students?.length ?? 0) / 10),
        totalItems: this.listStudent?.students?.length ?? 0,
      },
      data: this.listStudent?.students ?? []
    };

    const pagination = configPagination(listStudentPagination.pagination);
    const data = {
      ...pagination,
      data: {
        header: [...this.tableData.data.header],
        body: listStudentPagination.data,
      },
    };

    this.tableData = data;
    this.studentsPagi = listStudentPagination;
  }

  getStudentListByCourseId(courseId: number): IStudentListResponse | undefined {
    return listCourseStudent.find(item => item.course.id === courseId);
  }

  searchValue(search: string): void {
    this.handleEmployeeParams('name', search);
    // this.getEmployees();
  }

  handleEmployeeParams(
    key: string,
    value: string | number | Date | string[] | boolean,
  ): void {
    this.studentParams = {
      ...this.studentParams,
      [key]: value,
    };
  }

  onPageChange(e: PageChangeEvent): void {
    this.handleEmployeeParams('pageNo', e.page + this.gapPageNumber);
    this.studentParams = {
      ...this.studentParams,
      // pagingInfo: {
      //   ...this.studentParams.pagingInfo,
      //   pageNo: e.page + this.gapPageNumber,
      // },
    };
    // this.getEmployees();
  }

  onSelectionChange(event: any) {
    if (event.checked) {
      this.selectedStudents.add(event.student);
    } else {
      this.selectedStudents.delete(event.student);
    }
    this.selectedStudentsCount = this.selectedStudents.size;
  }

  bulkAward() {
    this.selectedStudents.forEach(student => {
      // Perform publish action for each credential
      console.log(`Publishing credential with ID: ${student.firstName} ${student.lastName}`);
      // Implement your publish logic here
    });

    // Clear selected credentials after publishing
    this.selectedStudents.clear();
    this.selectedStudentsCount = 0;
    this.uncheckItems.emit();
  }

  goBack() {
    this.router.navigate(['/course-management']);
  }

  navigateWithCourse() {
    this.router.navigate(['/course-management/course-form'], { state: this.listStudent?.course });
  }
}

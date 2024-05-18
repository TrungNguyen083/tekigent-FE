import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IStudent, IStudentListResponse, IStudentParams } from '../../models/student-management.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ShareModule } from 'src/app/components/share/share.module';
import { PageChangeEvent } from 'src/app/components/share/models/pagingInfo.model';
import { TekigentTable } from 'src/app/components/share/models/tekigent-table.model';
import { defaultTablePagination } from 'src/app/constants/app.constant';
import { studentTableCols } from '../../constants/student-management.constant';
import { StudentItemComponent } from '../student-item/student-item.component';
import { configPagination } from 'src/app/utils/configPagination';
import { PaginatedData } from 'src/app/models/global.model';

const listCourseStudent: IStudentListResponse[] = [
  {
    id: 1,
    course: {
      id: 1,
      courseName: "Backend Fundamental"
    },
    students: [
      {
        id: 1,
        firstName: "Nguyen",
        lastName: "Nguyen",
        email: "nguyennguyen@gmail.com",
        imgSrc: "https://avatars.design/wp-content/uploads/2022/09/male-bald-team-avatars-photo-to-illustration.png"
      },
      {
        id: 2,
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com"
      },
      {
        id: 3,
        firstName: "Alice",
        lastName: "Smith",
        email: "alicesmith@example.com"
      },
      {
        id: 4,
        firstName: "Emma",
        lastName: "Johnson",
        email: "emmajohnson@example.com"
      },
      {
        id: 5,
        firstName: "Michael",
        lastName: "Williams",
        email: "michaelwilliams@example.com"
      },
      {
        id: 6,
        firstName: "Sophia",
        lastName: "Brown",
        email: "sophiabrown@example.com"
      },
      {
        id: 7,
        firstName: "James",
        lastName: "Jones",
        email: "jamesjones@example.com"
      },
      {
        id: 8,
        firstName: "Olivia",
        lastName: "Garcia",
        email: "oliviagarcia@example.com"
      },
      {
        id: 9,
        firstName: "William",
        lastName: "Martinez",
        email: "williammartinez@example.com"
      },
      {
        id: 10,
        firstName: "Isabella",
        lastName: "Lopez",
        email: "isabellalopez@example.com"
      }
    ]
  },
  {
    id: 2,
    course: {
      id: 2,
      courseName: "Backend Advanced"
    },
    students: [
      {
        id: 11,
        firstName: "David",
        lastName: "Lee",
        email: "davidlee@example.com"
      },
      {
        id: 12,
        firstName: "Emily",
        lastName: "Thompson",
        email: "emilythompson@example.com"
      },
      {
        id: 13,
        firstName: "Daniel",
        lastName: "Harris",
        email: "danielharris@example.com"
      },
      {
        id: 14,
        firstName: "Sophie",
        lastName: "Clark",
        email: "sophieclark@example.com"
      },
      {
        id: 15,
        firstName: "Matthew",
        lastName: "Lewis",
        email: "matthewlewis@example.com"
      },
      {
        id: 16,
        firstName: "Chloe",
        lastName: "Roberts",
        email: "chloeroberts@example.com"
      },
      {
        id: 17,
        firstName: "Andrew",
        lastName: "Hill",
        email: "andrewhill@example.com"
      },
      {
        id: 18,
        firstName: "Emma",
        lastName: "Walker",
        email: "emmawalker@example.com"
      },
      {
        id: 19,
        firstName: "Benjamin",
        lastName: "Young",
        email: "benjaminyoung@example.com"
      },
      {
        id: 20,
        firstName: "Lily",
        lastName: "Evans",
        email: "lilyevans@example.com"
      }
    ]
  },
  {
    id: 3,
    course: {
      id: 3,
      courseName: "Frontend Fundamental"
    },
    students: [
      {
        id: 21,
        firstName: "Alexander",
        lastName: "Scott",
        email: "alexanderscott@example.com"
      },
      {
        id: 22,
        firstName: "Mia",
        lastName: "Baker",
        email: "miabaker@example.com"
      },
      {
        id: 23,
        firstName: "Ethan",
        lastName: "Adams",
        email: "ethanadams@example.com"
      },
      {
        id: 24,
        firstName: "Charlotte",
        lastName: "Nelson",
        email: "charlottenelson@example.com"
      },
      {
        id: 25,
        firstName: "William",
        lastName: "Carter",
        email: "williamcarter@example.com"
      },
      {
        id: 26,
        firstName: "Abigail",
        lastName: "Turner",
        email: "abigailturner@example.com"
      },
      {
        id: 27,
        firstName: "Lucas",
        lastName: "Parker",
        email: "lucasparker@example.com"
      },
      {
        id: 28,
        firstName: "Ava",
        lastName: "Wright",
        email: "avawright@example.com"
      },
      {
        id: 29,
        firstName: "Henry",
        lastName: "Mitchell",
        email: "henrymitchell@example.com"
      },
      {
        id: 30,
        firstName: "Grace",
        lastName: "Campbell",
        email: "gracecampbell@example.com"
      }
    ]
  },
];

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
  standalone: true,
  imports: [CommonModule, ButtonModule, TableModule, ShareModule, StudentItemComponent]
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

  reward() {
    throw new Error('Method not implemented.');
  }

  goBack() {
    this.router.navigate(['/course-management']);
  }
}

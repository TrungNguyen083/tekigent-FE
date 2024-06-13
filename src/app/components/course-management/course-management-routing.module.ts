import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseManagementComponent } from './course-management.component';
import { StudentManagementComponent } from '../student-management/student-management.component';
import { CourseInfoFormComponent } from './components/course-info-form/course-info-form.component';
import { CourseListComponent } from './components/course-list/course-list.component';

const routes: Routes = [
  {
    path: '',
    component: CourseManagementComponent,
    data: { breadcrumbs: ['Course Management'] },
    children: [
      {
        path: '',
        component: CourseListComponent,
      },
      {
        path: 'course-form',
        component: CourseInfoFormComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseManagementRoutingModule {}

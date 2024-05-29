import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseManagementComponent } from './course-management.component';
import { StudentManagementComponent } from '../student-management/student-management.component';

const routes: Routes = [
  {
    path: '',
    component: CourseManagementComponent,
    data: { breadcrumbs: ['Course Management'] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseManagementRoutingModule {}

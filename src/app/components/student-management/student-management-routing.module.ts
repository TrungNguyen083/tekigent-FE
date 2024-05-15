import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentManagementComponent } from './student-management.component';

const routes: Routes = [
  {
    path: '',
    component: StudentManagementComponent,
    data: { breadcrumbs: ['Student Management'] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentManagementRoutingModule {}

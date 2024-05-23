import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentManagementComponent } from './student-management.component';

const routes: Routes = [
  {
    path: ':id',
    component: StudentManagementComponent,
    data: { breadcrumbs: ['Student Management'] },
    children: [
      {
        path: ':id',
        component: StudentManagementComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentManagementRoutingModule {}

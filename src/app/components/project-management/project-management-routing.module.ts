import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectManagementComponent } from './project-management.component';
import { CourseInfoFormComponent } from '../course-management/components/course-info-form/course-info-form.component';
import { ProjectListComponent } from './components/project-list/project-list.component';

const routes: Routes = [{
  path: '',
  data: { breadcrumbs: ['Project Management'] },
  component: ProjectManagementComponent,
  children: [
    {
      path: '',
      component: ProjectListComponent,
    },
    {
      path: 'course-form',
      component: CourseInfoFormComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectManagementRoutingModule { }

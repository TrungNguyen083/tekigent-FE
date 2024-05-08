import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectManagementComponent } from './project-management.component';
import { ProjectInfoFormComponent } from './components/project-info-form/project-info-form.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { CollectionListComponent } from './components/collection-management/components/collection-list/collection-list.component';

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
      path: 'new-project',
      component: ProjectInfoFormComponent
    },
    {
      path: 'collection-management',
      component: CollectionListComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectManagementRoutingModule { }

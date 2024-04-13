import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectManagementRoutingModule } from './project-management-routing.module';
import { ProjectManagementComponent } from './project-management.component';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProjectItemCardComponent } from './components/project-item-card/project-item-card.component';
import { ProjectInfoFormComponent } from './components/project-info-form/project-info-form.component';
import { AppTopbarModule } from 'src/app/layout/app-topbar.module';
import { PaginatorModule } from 'primeng/paginator';
import { ProjectListComponent } from './components/project-list/project-list.component';


@NgModule({
  declarations: [
    ProjectManagementComponent,
    ProjectListComponent,
    ProjectItemCardComponent,
    ProjectInfoFormComponent,
  ],
  imports: [
    CommonModule,
    ProjectManagementRoutingModule,
    ButtonModule,
    DropdownModule,
    AppTopbarModule,
    PaginatorModule,
  ]
})
export class ProjectManagementModule { }

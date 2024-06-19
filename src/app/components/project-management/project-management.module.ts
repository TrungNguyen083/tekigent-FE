import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectManagementRoutingModule } from './project-management-routing.module';
import { ProjectManagementComponent } from './project-management.component';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProjectItemCardComponent } from './components/project-item-card/project-item-card.component';
import { AppTopbarModule } from 'src/app/layout/app-topbar.module';
import { PaginatorModule } from 'primeng/paginator';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    ProjectManagementComponent,
    ProjectListComponent,
    ProjectItemCardComponent,
    ProjectFormComponent,
  ],
  imports: [
    CommonModule,
    ProjectManagementRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    DropdownModule,
    AppTopbarModule,
    PaginatorModule,
    InputTextModule,
  ]
})
export class ProjectManagementModule { }

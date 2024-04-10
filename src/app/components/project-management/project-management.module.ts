import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectManagementRoutingModule } from './project-management-routing.module';
import { ProjectManagementComponent } from './project-management.component';
import { ShareModule } from '../share/share.module';
import { AppTopbarModule } from 'src/app/layout/app-topbar.module';


@NgModule({
  declarations: [
    ProjectManagementComponent
  ],
  imports: [
    CommonModule,
    ProjectManagementRoutingModule,
    ShareModule,
    AppTopbarModule
  ]
})
export class ProjectManagementModule { }

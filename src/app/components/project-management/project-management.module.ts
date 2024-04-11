import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectManagementRoutingModule } from './project-management-routing.module';
import { ProjectManagementComponent } from './project-management.component';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProjectItemCardComponent } from './components/project-item-card/project-item-card.component';
import { EvaluationCycleInfoFormComponent } from './components/evaluation-cycle-info-form/evaluation-cycle-info-form.component';
import { AppTopbarModule } from 'src/app/layout/app-topbar.module';


@NgModule({
  declarations: [
    ProjectManagementComponent,
    ProjectItemCardComponent,
    EvaluationCycleInfoFormComponent
  ],
  imports: [
    CommonModule,
    ProjectManagementRoutingModule,
    ButtonModule,
    DropdownModule,
    AppTopbarModule
  ]
})
export class ProjectManagementModule { }

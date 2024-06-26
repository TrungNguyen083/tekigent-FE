import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { AppTopbarModule } from 'src/app/layout/app-topbar.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ShareModule } from '../share/share.module';
import { StudentItemComponent } from './components/student-item/student-item.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentManagementRoutingModule } from './student-management-routing.module';
import { StudentManagementComponent } from './student-management.component';
import { AwardFormComponent } from './components/award-form/award-form.component';
import { ConfirmationService } from 'primeng/api';



@NgModule({
  declarations: [
    StudentManagementComponent,
    StudentListComponent,
    StudentItemComponent,
    AwardFormComponent,
  ],
  imports: [
    ConfirmDialogModule,
    StudentManagementRoutingModule,
    AppTopbarModule,
    CommonModule,
    TableModule,
    ShareModule,
    ButtonModule,
    CheckboxModule,
    FormsModule
  ],
  providers: [ConfirmationService]
})
export class StudentManagementModule { }

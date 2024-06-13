import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseManagementComponent } from './course-management.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { AppTopbarModule } from "../../layout/app-topbar.module";
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CourseManagementRoutingModule } from './course-management-routing.module';
import { PaginatorModule } from 'primeng/paginator';
import { CourseInfoFormComponent } from './components/course-info-form/course-info-form.component';
import { CourseEarningCriteriaComponent } from './components/course-earning-criteria/course-earning-criteria.component';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        CourseManagementComponent,
        CourseListComponent,
        CourseItemComponent,
        CourseInfoFormComponent,
        CourseEarningCriteriaComponent,
    ],
    imports: [
        CourseManagementRoutingModule,
        CommonModule,
        AppTopbarModule,
        PaginatorModule,
        ButtonModule,
        ReactiveFormsModule,
    ]
})
export class CourseManagementModule { }
                
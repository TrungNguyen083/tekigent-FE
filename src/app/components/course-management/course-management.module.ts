import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseManagementComponent } from './course-management.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { AppTopbarModule } from "../../layout/app-topbar.module";
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CourseManagementRoutingModule } from './course-management-routing.module';
import { PaginatorModule } from 'primeng/paginator';



@NgModule({
    declarations: [
        CourseManagementComponent,
        CourseListComponent,
        CourseItemComponent
    ],
    imports: [
        CourseManagementRoutingModule,
        CommonModule,
        AppTopbarModule,
        PaginatorModule
    ]
})
export class CourseManagementModule { }
                
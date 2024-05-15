import { Component } from '@angular/core';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentItemComponent } from './components/student-item/student-item.component';
import { CommonModule } from '@angular/common';
import { AppTopbarModule } from "../../layout/app-topbar.module";

@Component({
    selector: 'app-student-management',
    templateUrl: './student-management.component.html',
    styleUrls: ['./student-management.component.scss'],
    standalone: true,
    imports: [CommonModule, StudentListComponent, StudentItemComponent, AppTopbarModule],
    
})
export class StudentManagementComponent {

}

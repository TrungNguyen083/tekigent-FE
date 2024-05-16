import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { IStudent } from '../../models/student-management.model';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.scss'],
  standalone: true,
  imports: [CommonModule, ButtonModule]
})
export class StudentItemComponent {
  @HostBinding('class') hostClass = 'tekigent-student-item';
  @Input() student!: IStudent;
  defaultImg = 'assets/images/profile-image-default.jpg';
}

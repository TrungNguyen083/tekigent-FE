import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IStudent } from '../../models/student-management.model';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class StudentItemComponent {
  @Input() student!: IStudent;
}

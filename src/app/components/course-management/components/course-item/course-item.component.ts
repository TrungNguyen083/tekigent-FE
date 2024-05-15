import { Component, Input } from '@angular/core';
import { ICourse } from '../../models/course-management.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent {
  @Input() course!: ICourse;
}

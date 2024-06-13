import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'course-earning-criteria',
  templateUrl: './course-earning-criteria.component.html',
  styleUrls: ['./course-earning-criteria.component.scss']
})
export class CourseEarningCriteriaComponent {
  @Input() index!: number; // Input index of the criteria
  @Output() deleteCriteria = new EventEmitter<number>(); // Output event to delete the criteria

  removeCriteria() {
    // Emit the index to delete this criteria
    this.deleteCriteria.emit(this.index);
  }
}

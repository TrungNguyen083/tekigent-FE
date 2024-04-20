import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'project-earning-criteria',
  templateUrl: './project-earning-criteria.component.html',
  styleUrls: ['./project-earning-criteria.component.scss']
})
export class ProjectEarningCriteriaComponent {
  @Input() index!: number; // Input index of the criteria
  @Output() deleteCriteria = new EventEmitter<number>(); // Output event to delete the criteria

  removeCriteria() {
    // Emit the index to delete this criteria
    this.deleteCriteria.emit(this.index);
  }
}

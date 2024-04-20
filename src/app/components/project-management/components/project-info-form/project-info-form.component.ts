import { Component } from '@angular/core';

@Component({
  selector: 'evaluation-cycle-info-form',
  templateUrl: './project-info-form.component.html',
  styleUrls: ['./project-info-form.component.scss']
})
export class ProjectInfoFormComponent {
  criteriaIndices: number[] = [];

  addEarningCriteria() {
    this.criteriaIndices.push(this.criteriaIndices.length + 1);
    console.log("Time: ", this.criteriaIndices.length);
  }

  removeEarningCriteria(index: number) {
    this.criteriaIndices.splice(index, 1);
  }

}

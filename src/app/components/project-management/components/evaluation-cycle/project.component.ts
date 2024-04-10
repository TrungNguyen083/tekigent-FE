import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';

const cycleStatusOptions = [
  {
    label: 'Fully Configured',
    value: 1,
  },
  {
    label: 'Configured not complete',
    value: 2,
  },
];
const evaluations = [
  {
    name: 'Scrum course',
    identifierName: 'Trong Dao',
    unpublishedNo: 5,
    status: 'Fully Configured',
    lastUpdate: 'Updated Mar 28, 2024',
    credentialImage: ""
  },
  {
    name: 'Backend Fundamentals',
    identifierName: 'Viet Dang',
    unpublishedNo: 5,
    status: 'Configured not complete',
    lastUpdate: 'Updated Mar 28, 2024',
    credentialImage: ""
  },
  {
    name: 'Backend Advanced',
    identifierName: 'Trong Dao',
    unpublishedNo: 5,
    status: 'Fully Configured',
    lastUpdate: 'Updated Mar 28, 2024',
    credentialImage: ""
  },
];
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class EvaluationCycleComponent {
  cycleStatusOptions = cycleStatusOptions;
  evaluations = evaluations;
}

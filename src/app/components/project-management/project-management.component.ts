import { Component } from '@angular/core';

const projectStatus = [
  {
    label: 'Fully Configured',
    value: 1,
  },
  {
    label: 'Configured not complete',
    value: 2,
  },
];

const fiterDropDown = [
  {
    label: 'Collections',
    value: 1,
  },
  {
    label: 'Default Project Settings',
    value: 2,
  },
];

const projects = [
  {
    name: 'Scrum course',
    identifierName: 'Trong Dao',
    credentialsNo: 20,
    unpublishedNo: 5,
    status: 'Fully Configured',
    lastUpdated: 'Mar 28, 2024',
    credentialImage: ""
  },
  {
    name: 'Backend Fundamentals',
    identifierName: 'Viet Dang',
    credentialsNo: 20,
    unpublishedNo: 5,
    status: 'Configured not complete',
    lastUpdated: 'Mar 28, 2024',
    credentialImage: ""
  },
  {
    name: 'Backend Advanced',
    identifierName: 'Trong Dao',
    credentialsNo: 20,
    unpublishedNo: 5,
    status: 'Fully Configured',
    lastUpdated: 'Mar 28, 2024',
    credentialImage: ""
  },
  {
    name: 'Backend Advanced',
    identifierName: 'Trong Dao',
    credentialsNo: 20,
    unpublishedNo: 5,
    status: 'Fully Configured',
    lastUpdated: 'Mar 28, 2024',
    credentialImage: ""
  },
];
@Component({
  selector: 'app-project',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.scss'],
})
export class ProjectManagementComponent {
  projectStatus = projectStatus;
  fiterDropDown = fiterDropDown;
  projects = projects;
}

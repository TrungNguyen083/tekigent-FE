import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PagingInfo } from '../../../share/models/pagingInfo.model';
import { TekigentTable } from '../../../share/models/tekigent-table.model';
import { Router } from '@angular/router';
import { IProject } from '../../models/project-management.model';
import { tutorsData } from 'src/app/components/course-management/components/course-list/course-list.component';

const collectionDropdown = [
  {
    label: 'Fully Configured',
    value: 1,
  },
  {
    label: 'Configured not complete',
    value: 2,
  },
];

const appearanceDropdown = [
  {
    label: 'All',
    value: 1,
  },
  {
    label: 'Certificate',
    value: 2,
  },
  {
    label: 'Badge',
    value: 3,
  },
  {
    label: 'Certificate & Badge',
    value: 4,
  },
  {
    label: 'No Design',
    value: 5,
  },
];

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

export const projectsData: IProject[] = [
  {
    id: 1,
    name: 'Scrum course',
    identifier: tutorsData[0],
    credentialsNo: 20,
    unpublishedNo: 5,
    status: 1,
    lastUpdated: 'Mar 28, 2024',
    certificateImage: "https://think.edu.vn/wp-content/uploads/2022/01/diploma-la-gi.jpg",
    courseWebsite: "scrum.com",
    description: "Description for Scrum course",
    skills: "Planning, Teamwork, ...",
    primary: "Certificate"
  },
  {
    id: 2,
    name: 'Backend Fundamentals',
    identifier: tutorsData[1],
    credentialsNo: 20,
    unpublishedNo: 5,
    status: 0,
    lastUpdated: 'Mar 28, 2024',
    certificateImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0XfjPa75d3BmkF77tgE38OPc4NtyaE0nooLC6C5WxbA&s",
    courseWebsite: "backendfundamental.com",
    description: "Description for Backend Fundamental Course",
    skills: "Java Core, How to use Stream API, DB, ....",
    primary: "Badge"
  },
  {
    id: 3,
    name: 'Backend Advanced',
    identifier: tutorsData[0],
    credentialsNo: 20,
    unpublishedNo: 5,
    status: 1,
    lastUpdated: 'Mar 28, 2024',
    certificateImage: "https://fullstack.edu.vn/images/f8-certificate.png",
    courseWebsite: "backendadvanced.com",
    description: "Description for Backend Advanced Course",
    skills: "Spring boot Framework, GraphQL API, ...",
    primary: "Certificate"
  },
  {
    id:4,
    name: 'Frontend Advanced',
    identifier: tutorsData[1],
    credentialsNo: 20,
    unpublishedNo: 5,
    status: 1,
    lastUpdated: 'Mar 28, 2024',
    certificateImage: "https://marketplace.canva.com/EAFHBiEZGD8/1/0/1600w/canva-red-and-yellow-minimalist-employee-of-the-month-certificate-67ATPnoOO0M.jpg",
    courseWebsite: "frontendAdvanced.com",
    description: "Description for Frontend Advanced",
    skills: "HTML, SCSS, Tailwind, Angular Framework",
    primary: "Certificate"
  },
];
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent {

  constructor(private router: Router) {}

  table: TekigentTable<unknown> = {
    page: 1,
    first: 0,
    rows: 5,
    pageCount: 5,
    totalRecord: projectsData.length,
    data: {
      header: [],
      body: [],
    },
  };

  @Output() pagingInfo = new EventEmitter();
  @Input() currentPagingInfo: PagingInfo = {
    page: this.table.page!,
    first: this.table.first!,
    rows: this.table.rows!,
    pageCount: this.table.pageCount!,
    totalRecord: this.table.totalRecord!,
  };
  
  onPageChange(event: unknown) {
    this.pagingInfo.emit(event);
  }
  collectionDropdown = collectionDropdown;
  appearanceDropdown = appearanceDropdown;
  projectStatus = projectStatus;
  fiterDropDown = fiterDropDown;
  projects = projectsData;

  onManageDropdownChange(event: any) {
    if (event.value === 1) { // Assuming 'Collections' has value 1
      this.router.navigate(['/collection-management']);
      // console.log("Click into this")
    }
  }
}

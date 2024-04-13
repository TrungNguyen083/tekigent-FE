import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PagingInfo } from '../../../share/models/pagingInfo.model';
import { TekigentTable } from '../../../share/models/tekigent-table.model';

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
    label: 'Fully Configured',
    value: 1,
  },
  {
    label: 'Configured not complete',
    value: 2,
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

const projects = [
  {
    name: 'Scrum course',
    identifierName: 'Trong Dao',
    credentialsNo: 20,
    unpublishedNo: 5,
    status: 'Fully Configured',
    lastUpdated: 'Mar 28, 2024',
    certificateImage: "https://think.edu.vn/wp-content/uploads/2022/01/diploma-la-gi.jpg"
  },
  {
    name: 'Backend Fundamentals',
    identifierName: 'Viet Dang',
    credentialsNo: 20,
    unpublishedNo: 5,
    status: 'Configured not complete',
    lastUpdated: 'Mar 28, 2024',
    certificateImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0XfjPa75d3BmkF77tgE38OPc4NtyaE0nooLC6C5WxbA&s"
  },
  {
    name: 'Backend Advanced',
    identifierName: 'Trong Dao',
    credentialsNo: 20,
    unpublishedNo: 5,
    status: 'Fully Configured',
    lastUpdated: 'Mar 28, 2024',
    certificateImage: "https://fullstack.edu.vn/images/f8-certificate.png"
  },
  {
    name: 'Backend Advanced',
    identifierName: 'Trong Dao',
    credentialsNo: 20,
    unpublishedNo: 5,
    status: 'Fully Configured',
    lastUpdated: 'Mar 28, 2024',
    certificateImage: "https://marketplace.canva.com/EAFHBiEZGD8/1/0/1600w/canva-red-and-yellow-minimalist-employee-of-the-month-certificate-67ATPnoOO0M.jpg"
  },
];
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent {

  table: TekigentTable<unknown> = {
    page: 1,
    first: 0,
    rows: 5,
    pageCount: 5,
    totalRecord: projects.length,
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
  projects = projects;
}

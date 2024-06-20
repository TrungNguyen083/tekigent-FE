import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProjectFormComponent } from '../project-form/project-form.component';
import { collectionDropdown, appearanceDropdown, projectStatus, fiterDropDown, projectsData } from '../../constants/project-management.constant';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  collectionDropdown = collectionDropdown;
  appearanceDropdown = appearanceDropdown;
  projectStatus = projectStatus;
  fiterDropDown = fiterDropDown;
  projects = projectsData;


  ref!: DynamicDialogRef;


  constructor(private router: Router, public dialogService: DialogService,) { }

  table = {
    page: 1,
    first: 0,
    rows: 4,
    pageCount: 4,
    totalRecord: projectsData.length,
  };

  @Output() pagingInfo = new EventEmitter();

  ngOnInit() {
    this.updatePagingInfo();
  }

  get paginatedProjects() {
    const start = (this.table.page - 1) * this.table.rows;
    const end = start + this.table.rows;
    return this.projects.slice(start, end);
  }

  onPageChange(event: any) {
    this.table.page = event.page + 1;
    this.table.first = event.first;
    this.table.rows = event.rows;
    this.pagingInfo.emit(event);
  }

  private updatePagingInfo() {
    this.pagingInfo.emit({
      page: this.table.page,
      first: this.table.first,
      rows: this.table.rows,
      totalRecords: this.table.totalRecord
    });
  }

  onManageDropdownChange(event: any) {
    if (event.value === 1) { // Assuming 'Collections' has value 1
      this.router.navigate(['/collection-management']);
      // console.log("Click into this")
    }
  }

  openAddProjectModal() {
    this.ref = this.dialogService.open(ProjectFormComponent, {
      header: 'Create Project',
      contentStyle: { overflow: 'auto' },
      width: '30vw',
    });
  }
}


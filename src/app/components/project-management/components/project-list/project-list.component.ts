import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PagingInfo } from '../../../share/models/pagingInfo.model';
import { TekigentTable } from '../../../share/models/tekigent-table.model';
import { Router } from '@angular/router';
import { IProject } from '../../models/project-management.model';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProjectFormComponent } from '../project-form/project-form.component';

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
    name: 'Backend Fundamentals',
    description: "Description for Backend Fundamental Course",
    projectBgImage: "https://cdn.sanity.io/images/tlr8oxjg/production/884d88c6672936f825ca1aa0683b6e1b80684c0d-1456x816.png?w=3840&q=100&fit=clip&auto=format",
    lastUpdated: 'Mar 28, 2024',
    credentialsNo: 20,
    unpublishedNo: 5,
  },
  {
    id: 2,
    name: 'Backend Advanced',
    description: "Description for Backend Advanced Course",
    projectBgImage: "https://www.netguru.com/hs-fs/hubfs/DALL%C2%B7E%202023-10-30%2010.33.27%20-%20A%20photo%20of%20a%20modern%20workspace%20with%20a%20computer%20displaying%20a%20code%20editor%20focused%20on%20back-end%20development.%20Surrounding%20the%20computer%20are%20holographic%20proje.png?width=1000&height=571&name=DALL%C2%B7E%202023-10-30%2010.33.27%20-%20A%20photo%20of%20a%20modern%20workspace%20with%20a%20computer%20displaying%20a%20code%20editor%20focused%20on%20back-end%20development.%20Surrounding%20the%20computer%20are%20holographic%20proje.png",
    lastUpdated: 'Mar 28, 2024',
    credentialsNo: 20,
    unpublishedNo: 5,
  },
  {
    id: 3,
    name: 'Frontend Fundamentals',
    description: "Description for Frontend Fundamentals",
    projectBgImage: "https://media.licdn.com/dms/image/D4D12AQFAOubrpgo9qw/article-cover_image-shrink_720_1280/0/1684513803226?e=2147483647&v=beta&t=WrtpSCp6Pp90UqypkE7bT5enK2VXYjeSwyrE_KEzzKk",
    lastUpdated: 'Mar 28, 2024',
    credentialsNo: 20,
    unpublishedNo: 5,
  },
  {
    id: 4,
    name: 'Frontend Advanced',
    description: "Description for Frontend Advanced",
    projectBgImage: "https://cdn.sanity.io/images/tlr8oxjg/production/d2f16531bde974464ad7ab74dc335790dbdebffa-1192x668.png?w=3840&q=80&fit=clip&auto=format",
    lastUpdated: 'Mar 28, 2024',
    credentialsNo: 20,
    unpublishedNo: 5,
  },
];
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent {
  ref!: DynamicDialogRef;
  

  constructor(private router: Router, public dialogService: DialogService,) { }

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

  openAddProjectModal() {
    this.ref = this.dialogService.open(ProjectFormComponent, {
      header: 'Create project',
      contentStyle: { overflow: 'auto' },
      width: '30vw',
    });
  }
}

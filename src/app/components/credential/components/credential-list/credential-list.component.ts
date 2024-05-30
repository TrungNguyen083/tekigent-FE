import { Component, OnInit } from '@angular/core';
import { ICredential, ICredentialParams } from '../../models/credential.model';
import { PageChangeEvent } from 'src/app/components/share/models/pagingInfo.model';
import { PaginatedData } from 'src/app/models/global.model';
import { TekigentTable } from 'src/app/components/share/models/tekigent-table.model';
import { defaultTablePagination } from 'src/app/constants/app.constant';
import { credentialTableCols, engagement, status } from '../../constants/credential.constant';
import { configPagination } from 'src/app/utils/configPagination';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-credential-list',
  templateUrl: './credential-list.component.html',
  styleUrls: ['./credential-list.component.scss']
})
export class CredentialListComponent implements OnInit {
  //Filter mock data:
  collectionOptions = collections;
  projectOptions = projects;
  statusOptions = status;
  engagementOptions = engagement;

  tableData: TekigentTable<ICredential> = {
    ...defaultTablePagination,
    data: {
      header: credentialTableCols,
      body: [],
    },
  };
  gapPageNumber = 1;
  credentialsPagi!: PaginatedData<ICredential>;
  credentialParams: ICredentialParams = { pageNo: 1, pageSize: 10 };

  selectedCredential = 0;
  filterForm!: FormGroup;

  ngOnInit(): void {
    const pagination = configPagination(credentialPagination.pagination);
    const data = {
      ...pagination,
      data: {
        header: [...this.tableData.data.header],
        body: credentialPagination.data,
      },
    };

    this.tableData = data;
    this.credentialsPagi = credentialPagination;
  }

  searchValue(search: string): void {
    this.handleCredentialParams('id', search);
    // this.getEmployees();
  }

  handleCredentialParams(
    key: string,
    value: string | number | Date | string[] | boolean,
  ): void {
    this.credentialParams = {
      ...this.credentialParams,
      [key]: value,
    };
  }

  onPageChange(e: PageChangeEvent): void {
    this.handleCredentialParams('pageNo', e.page + this.gapPageNumber);
    this.credentialParams = {
      ...this.credentialParams,
      // pagingInfo: {
      //   ...this.studentParams.pagingInfo,
      //   pageNo: e.page + this.gapPageNumber,
      // },
    };
    // this.getEmployees();
  }

  creaateCredential() {
    throw new Error('Method not implemented.');
  }

  onFilter() {
    throw new Error('Method not implemented.');
  }
}


const credentialData: ICredential[] = [
  {
    id: 567696,
    recipient: {
      id: 1,
      firstName: "Nguyen",
      lastName: "Nguyen",
      email: "nguyen@gmail.com",
    },
    project: {
      id: 1,
      name: "Project 1",
    },
    issueDate: "May 18, 2024",
    publishStatus: 2,
    linkedinStatus: 0,
    viewStatus: 0,
    engagedStatus: 0,
  },
  {
    id: 237984,
    recipient: {
      id: 2,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@gmail.com",
    },
    project: {
      id: 2,
      name: "Project 2",
    },
    issueDate: "May 19, 2024",
    publishStatus: 0,
    linkedinStatus: 0,
    viewStatus: 1,
    engagedStatus: 0,
  },
  {
    id: 729834,
    recipient: {
      id: 3,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@gmail.com",
    },
    project: {
      id: 3,
      name: "Project 3",
    },
    issueDate: "May 20, 2024",
    publishStatus: 1,
    viewStatus: 0,
    engagedStatus: 1,
    linkedinStatus: 0,
  },
  {
    id: 873642,
    recipient: {
      id: 4,
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice.johnson@gmail.com",
    },
    project: {
      id: 4,
      name: "Project 4",
    },
    issueDate: "May 21, 2024",
    publishStatus: 1,
    viewStatus: 1,
    engagedStatus: 0,
    linkedinStatus: 1,
  },
  {
    id: 198231,
    recipient: {
      id: 5,
      firstName: "Bob",
      lastName: "Brown",
      email: "bob.brown@gmail.com",
    },
    project: {
      id: 5,
      name: "Project 5",
    },
    issueDate: "May 22, 2024",
    publishStatus: 0,
    linkedinStatus: 0,
    viewStatus: 0,
    engagedStatus: 1,
  },
  {
    id: 283752,
    recipient: {
      id: 6,
      firstName: "Charlie",
      lastName: "Davis",
      email: "charlie.davis@gmail.com",
    },
    project: {
      id: 1,  // Same project as item 1
      name: "Project 1",
    },
    issueDate: "May 23, 2024",
    publishStatus: 1,
    viewStatus: 1,
    engagedStatus: 0,
    linkedinStatus: 1,
  },
  {
    id: 873265,
    recipient: {
      id: 7,
      firstName: "Diana",
      lastName: "Evans",
      email: "diana.evans@gmail.com",
    },
    project: {
      id: 2,  // Same project as item 2
      name: "Project 2",
    },
    issueDate: "May 24, 2024",
    publishStatus: 1,
    viewStatus: 0,
    engagedStatus: 1,
    linkedinStatus: 0,
  },
  {
    id: 298437,
    recipient: {
      id: 8,
      firstName: "Edward",
      lastName: "Foster",
      email: "edward.foster@gmail.com",
    },
    project: {
      id: 3,  // Same project as item 3
      name: "Project 3",
    },
    issueDate: "May 25, 2024",
    publishStatus: 0,
    linkedinStatus: 1,
    viewStatus: 1,
    engagedStatus: 0,
  },
  {
    id: 238752,
    recipient: {
      id: 9,
      firstName: "Fiona",
      lastName: "Green",
      email: "fiona.green@gmail.com",
    },
    project: {
      id: 4,  // Same project as item 4
      name: "Project 4",
    },
    issueDate: "May 26, 2024",
    publishStatus: 1,
    viewStatus: 0,
    engagedStatus: 1,
    linkedinStatus: 0,
  },
  {
    id: 235198,
    recipient: {
      id: 10,
      firstName: "George",
      lastName: "Hill",
      email: "george.hill@gmail.com",
    },
    project: {
      id: 5,  // Same project as item 5
      name: "Project 5",
    },
    issueDate: "May 27, 2024",
    publishStatus: 1,
    viewStatus: 1,
    engagedStatus: 0,
    linkedinStatus: 1,
  }
];

const credentialPagination: PaginatedData<ICredential> = {
  pagination: {
    pageNo: 1,
    pageSize: 15,
    totalPages: Math.ceil(credentialData.length / 10),
    totalItems: credentialData.length,
  },
  data: credentialData,
};

const collections = [
  {
    label: 'Collection 1',
    value: 0,
  },
  {
    label: 'Collection 2',
    value: 1,
  },
  {
    label: 'Collection 3',
    value: 2,
  },
];

const projects = [
  {
    label: 'Project 1',
    value: 0,
  },
  {
    label: 'Project 2',
    value: 1,
  },
  {
    label: 'Project 3',
    value: 2,
  },
  {
    label: 'Project 4',
    value: 3,
  },
  {
    label: 'Project 5',
    value: 4,
  },
]


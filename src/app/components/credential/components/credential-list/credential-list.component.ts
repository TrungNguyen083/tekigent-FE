import { Component, OnInit } from '@angular/core';
import { ICredential, ICredentialParams } from '../../models/credential.model';
import { PageChangeEvent } from 'src/app/components/share/models/pagingInfo.model';
import { PaginatedData } from 'src/app/models/global.model';
import { TekigentTable } from 'src/app/components/share/models/tekigent-table.model';
import { defaultTablePagination } from 'src/app/constants/app.constant';
import { collections, credentialPagination, credentialTableCols, engagement, projects, status } from '../../constants/credential.constant';
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
  selectedCredentials = new Set<any>();
  selectedCredentialsCount = 0;
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

  onSelectionChange(event: any) {
    if (event.checked) {
      this.selectedCredentials.add(event.credential);
    } else {
      this.selectedCredentials.delete(event.credential);
    }
    this.selectedCredentialsCount = this.selectedCredentials.size;
  }
}





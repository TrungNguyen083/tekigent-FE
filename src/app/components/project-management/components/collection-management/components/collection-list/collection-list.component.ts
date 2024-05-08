import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ICollection, ICollectionParams } from '../../models/collection-management.model';
import { PageChangeEvent } from 'src/app/components/share/models/pagingInfo.model';
import { TekigentTable } from 'src/app/components/share/models/tekigent-table.model';
import { defaultTablePagination } from 'src/app/constants/app.constant';
import { collectionHeader } from '../../constants/collection-management.constain';
import { PaginatedData } from 'src/app/models/global.model';
import { configPagination } from 'src/app/utils/configPagination';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CollectionCreateFormComponent } from '../collection-create-form/collection-create-form.component';


const collectionDropdown = [
  {
    label: 'Collection Visibility',
    value: 1,
  },
  {
    label: 'Public',
    value: 2,
  },
  {
    label: 'Private',
    value: 3,
  },
];

const collectionsData: ICollection[] = [
  {
    id: 1,
    name: 'Collection 1',
    description: "Description Of Collection 1",
    noOfProject: 5,
  },
  {
    id: 2,
    name: 'Collection 2',
    description: "Description Of Collection 2",
    noOfProject: 5,
  },
  {
    id: 3,
    name: 'Collection 3',
    description: "Description Of Collection 3",
    noOfProject: 5,
  },
  {
    id: 4,
    name: 'Collection 4',
    description: "Description Of Collection 4",
    noOfProject: 5,
  },
  
];

const collectionsPagination: PaginatedData<ICollection> = {
  pagination: {
    pageNo: 1,
    pageSize: 10,
    totalPages: Math.ceil(collectionsData.length / 10),
    totalItems: collectionsData.length,
  },
  data: collectionsData
}

@Component({
  selector: 'collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.scss'],
})
export class CollectionListComponent implements OnInit {
  filterForm!: FormGroup;
  collections!: PaginatedData<ICollection>;
  ref!: DynamicDialogRef;

  collectionParams: ICollectionParams = { pageNo: 1 };
  gapPageNumber = 1;
  tableData: TekigentTable<ICollection> = {
    ...defaultTablePagination,
    data: {
      header: collectionHeader,
      body: [],
    },
  };

  constructor(
    public dialogService: DialogService,
  ) { }

  ngOnInit(): void {
    const pagination = configPagination(collectionsPagination.pagination);
    const data = {
      ...pagination,
      data: {
        header: [...this.tableData.data.header],
        body: collectionsPagination.data,
      },
    };

    this.tableData = data;
    this.collections = collectionsPagination;
  }

  handleCollectionParams(
    key: string,
    value: string | number | Date | string[] | boolean,
  ): void {
    this.collectionParams = {
      ...this.collectionParams,
      [key]: value,
    };
  }
  onFilter() {
    const formValues = this.filterForm.value;

    for (const key in formValues) {
      const value = formValues[key];
      if (value) {
        this.handleCollectionParams(key, value);
      }
    }

    this.getCollections();
  }

  searchValue(search: string): void {
    this.handleCollectionParams('search', search);
    this.getCollections();
  }

  getCollections() {
    return collectionsData;
  }

  onPageChange(e: PageChangeEvent): void {
    this.handleCollectionParams('pageNo', e.page + this.gapPageNumber);
    this.getCollections();
  }

  openAddCollectionModal() {
    this.ref = this.dialogService.open(CollectionCreateFormComponent, {
      header: 'Create profile',
      contentStyle: { overflow: 'auto' },
      width: '30vw',
    });
  }

  collectionDropdown = collectionDropdown;
}

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
import { CollectionFormComponent } from '../collection-form/collection-form.component';


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

export const collectionsData: ICollection[] = [
  {
    id: 1,
    name: 'Backend Collection',
    noOfProject: 5,
    description: "Description Of Backend Collection",
  },
  {
    id: 2,
    name: 'Frontend Collection',
    noOfProject: 5,
    description: "Description Of Frontend Collection",
  },
  {
    id: 3,
    name: 'QC Collection',
    noOfProject: 5,
    description: "Description Of QC Collection",
  },
  {
    id: 4,
    name: 'DA Collection',
    noOfProject: 5,
    description: "Description Of DA Collection",
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
    this.ref = this.dialogService.open(CollectionFormComponent, {
      header: 'Create Collection',
      contentStyle: { overflow: 'auto' },
      width: '30vw',
    });
  }

  collectionDropdown = collectionDropdown;
}

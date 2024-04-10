import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { Observable } from 'rxjs';

import { CheckboxChangeEvent } from 'primeng/checkbox';
import { defaultTablePagination } from 'src/app/constants/app.constant';
import { PaginatedData } from 'src/app/models/global.model';
import { configPagination } from 'src/app/utils/configPagination';
import { TekigentTable } from '../../../share/models/tekigent-table.model';
import { PageChangeEvent } from '../../../share/models/pagingInfo.model';
import {
  userAccount,
  userLabelItems,
} from '../../constants/credential.constant';
import {
  IAccountParams,
  IEmployeeAccount,
} from '../../models/credential.model';
import { EmployeeAccountStore } from '../../store/credential.store.service';
import { UserActivateFormComponent } from '../user-activate-form/user-activate-form.component';
import { mapToDropdownOptions } from 'src/app/utils/mapToDropdownOptions';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  labelItems: MenuItem[] = userLabelItems;
  activeItem: MenuItem = this.labelItems[0];
  employeeAccounts$: Observable<PaginatedData<IEmployeeAccount>> =
    this.accountStore.employeeAccounts$;
  employeeAccounts!: PaginatedData<IEmployeeAccount>;

  selectedAccountIds: number[] = [];
  tableData: TekigentTable<IEmployeeAccount> = {
    ...defaultTablePagination,
    data: {
      header: userAccount,
      body: [],
    },
  };
  filterForm!: FormGroup;
  roleOptions!: { label: string; value: number }[];
  accountParams: IAccountParams = { pageNo: 1 };
  gapPageNumber = 1;
  headerChecked$ = this.accountStore.headerChecked$;
  activateModalRef!: DynamicDialogRef;

  constructor(
    private fb: FormBuilder,
    private accountStore: EmployeeAccountStore,
    public dialogService: DialogService,
  ) {
    this.filterForm = this.fb.group({
      roles: '',
    });
  }
  get roles() {
    return this.filterForm.get('roles')?.value;
  }
  ngOnInit(): void {
    this.accountStore.getEmployeeAccounts(this.accountParams);
    this.accountStore.getRoles();

    this.employeeAccounts$.subscribe(result => {
      const pagination = configPagination(result.pagination)
      const data = {
        ...pagination,
        data: {
          header: [...this.tableData.data.header],
          body: result.data,
        },
      };

      this.tableData = data;
      this.employeeAccounts = result;
    });

    this.accountStore.roles$.subscribe(roles => {
      this.roleOptions = mapToDropdownOptions(roles, "name", "roleId")
    });
    this.accountStore.selectedAccountIds$.subscribe(accountIds => {
      this.selectedAccountIds = accountIds;
    });
  }

  handleClearAll() {
    this.filterForm.setValue({
      roles: [],
    });
    this.onFilter();
  }

  isClearAllVisible() {
    return this.roles.length;
  }
  searchValue(search: string): void {
    this.handleAccountParams('search', search);
    this.getAccounts();
  }
  onPageChange(e: PageChangeEvent): void {
    this.handleAccountParams('pageNo', e.page + this.gapPageNumber);
    this.getAccounts();
  }
  onActiveItemChange(label: MenuItem): void {
    this.activeItem = label;
    if (this.activeItem.id) {
      this.handleAccountParams(
        'status',
        this.activeItem.id === '1' ? true : false,
      );
    } else {
      delete this.accountParams.status;
    }

    this.getAccounts();
    // this.accountStore.removeAllAccount();
    // this.accountStore.setHeaderChecked(false);
  }
  getAccounts() {
    this.accountStore.getEmployeeAccounts(this.accountParams);
  }
  handleAccountParams(
    key: string,
    value: string | number | Date | string[] | boolean,
  ): void {
    this.accountParams = {
      ...this.accountParams,
      [key]: value,
    };
  }
  onFilter() {
    const formValues = this.filterForm.value;

    for (const key in formValues) {
      const value = formValues[key];
      if (value) {
        this.handleAccountParams(key, value);
      }
    }

    this.getAccounts();
  }

  onUpdateFields() {
    this.activateModalRef = this.dialogService.open(UserActivateFormComponent, {
      header: 'Update Fields',
      contentStyle: { overflow: 'visible' },
      width: '30vw',
      data: {
        selectedIds: this.selectedAccountIds,
      },
    });

    this.activateModalRef.onClose.subscribe(({ success }) => {
      if (!success) return;
      this.accountStore.removeAllAccount();
      this.accountStore.getEmployeeAccounts(this.accountParams);
      this.accountStore.setHeaderChecked(false);
    });
  }

  handleCheckAll(e: CheckboxChangeEvent) {
    const { checked } = e;

    if (checked) {
      this.employeeAccounts.data.forEach((account) => this.accountStore.addAccount(account.userId))
    } else {
      this.accountStore.removeAllAccount();
    }
  }
}

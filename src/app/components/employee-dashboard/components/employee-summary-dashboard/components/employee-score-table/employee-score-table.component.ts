import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import _ from 'lodash';
import { TekigentTable } from 'src/app/components/share/models/tekigent-table.model';
import {
  PageChangeEvent,
  PagingInfo,
} from 'src/app/components/share/models/pagingInfo.model';
import { topSkillsetTableCol } from '../../constants/employee-summary-dashboard.constant';

@Component({
  selector: 'employee-score-table',
  templateUrl: './employee-score-table.component.html',
  styleUrls: ['./employee-score-table.component.scss'],
})
export class EmployeeScoreTableComponent<IEmployeeScore> implements OnChanges {
  @Input() tableData: IEmployeeScore[] = [];
  @Input() tableHeader!: string;
  @Input() pagination!: PagingInfo;
  @Output() pageChage = new EventEmitter();

  table: TekigentTable<IEmployeeScore> = this.createTable(this.tableData);
  shortTable: TekigentTable<IEmployeeScore> = this.createTable(this.tableData);
  isFullTableShown = false;
  pageGapNumber = 1;

  ngOnChanges(): void {
    this.updateTables();
  }

  onPageChange(e: PageChangeEvent) {
    this.pageChage.emit(e);
  }

  showFullTable() {
    this.isFullTableShown = true;
  }

  private createTable(data: IEmployeeScore[]): TekigentTable<IEmployeeScore> {
    return {
      ...this.pagination,
      data: {
        header: topSkillsetTableCol,
        body: data,
      },
    };
  }
  private updateTables(): void {
    this.table = {
      ...this.pagination,
      data: {
        header: [...this.table.data.header],
        body: this.tableData,
      },
    };
    this.shortTable.data.body = _.take(this.tableData, 5);
  }
}

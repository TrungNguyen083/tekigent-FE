import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { CheckboxChangeEvent } from 'primeng/checkbox';
import { TekigentTable } from '../models/tekigent-table.model';

@Component({
  selector: 'tekigent-table',
  templateUrl: './tekigent-table.component.html',
  styleUrls: ['./tekigent-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TekigentTableComponent {
  @HostBinding('class') hostClass = 'tekigent-table-host';

  @Output() pagingInfo = new EventEmitter();

  @Output() headerCheckboxChange = new EventEmitter();

  @Input() isCheckboxShown = false;

  @Input() isPaginationShown = false;

  @Input() isSortIconShown = false;

  @Input() contentRef!: TemplateRef<unknown>;

  @Input() table: TekigentTable<unknown> = {
    page: 0,
    first: 0,
    rows: 0,
    pageCount: 0,
    totalRecord: 0,
    data: {
      header: [],
      body: [],
    },
  };
  @Input() headerChecked: boolean | null = false;
  @Input() tableStyle: {[key: string]: string} = { 'min-width': '80rem' };

  onPageChange(event: Event) {
    this.pagingInfo.emit(event);
  }

  isNumber(val: unknown): boolean {
    return typeof val === 'number';
  }
  onHeaderCheckboxChange(e: CheckboxChangeEvent) {
    this.headerCheckboxChange.emit(e);
  }
}

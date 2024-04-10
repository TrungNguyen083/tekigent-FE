import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PagingInfo } from '../models/pagingInfo.model';

@Component({
  selector: 'tekigent-pagination',
  templateUrl: './tekigent-pagination.component.html',
  styleUrls: ['./tekigent-pagination.component.scss']
})
export class TekigentPaginationComponent {
  @Output() pagingInfo = new EventEmitter();
  @Input() currentPagingInfo: PagingInfo = {
    page: 0,
    first: 0,
    rows: 0,
    pageCount: 0,
    totalRecord: 0,
  };

  onPageChange(event: unknown) {
    this.pagingInfo.emit(event);
  }
}

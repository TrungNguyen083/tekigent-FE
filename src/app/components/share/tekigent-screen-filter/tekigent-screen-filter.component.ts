import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, tap } from 'rxjs';

@Component({
  selector: 'tekigent-screen-filter',
  templateUrl: './tekigent-screen-filter.component.html',
  styleUrls: ['./tekigent-screen-filter.component.scss'],
})
export class TekigentScreenFilterComponent implements OnInit {
  @Output() getSearchValue = new EventEmitter<string>();

  @Output() dateFilterChange = new EventEmitter<Date[]>();

  @Output() filterChange = new EventEmitter<string>();

  @Input() isDateFilterShow = true;

  searchValue!: string;

  queryField = new FormControl();

  ngOnInit(): void {
    this.getSearchValueInternal();
  }

  getDateRange(dateRange: Date[]) {
    this.dateFilterChange.emit(dateRange);
  }

  getSearchValueInternal() {
    this.queryField.valueChanges
      .pipe(
        debounceTime(500),
        tap(res => {
          this.getSearchValue.emit(res);
        }),
      )
      .subscribe();
  }
}

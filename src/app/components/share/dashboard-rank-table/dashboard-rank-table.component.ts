import { Component, Input } from '@angular/core';
import { TekigentTable } from '../models/tekigent-table.model';

@Component({
  selector: 'app-dashboard-rank-table',
  templateUrl: './dashboard-rank-table.component.html',
  styleUrls: ['./dashboard-rank-table.component.scss']
})
export class DashboardRankTableComponent<T> {
  @Input() tableTitle!: string;
  @Input() table!: TekigentTable<T>;
}

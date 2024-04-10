import { Component, Input } from '@angular/core';
import { TekigentTable } from 'src/app/components/share/models/tekigent-table.model';

@Component({
  selector: 'app-evaluation-rating-control-item',
  templateUrl: './evaluation-rating-control-item.component.html',
  styleUrls: ['./evaluation-rating-control-item.component.scss']
})
export class EvaluationRatingControlItemComponent {
  @Input() title!: string;
  @Input() table!: TekigentTable<any>;
}

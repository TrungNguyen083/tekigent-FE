import { Component, HostBinding, Input } from '@angular/core';
import { ICollection } from '../../models/collection-management.model';

@Component({
  selector: 'collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.scss']
})
export class CollectionItemComponent {
  @HostBinding('class') hostClass = 'tekigent-collection-item';
  @Input() collection!: ICollection;
}

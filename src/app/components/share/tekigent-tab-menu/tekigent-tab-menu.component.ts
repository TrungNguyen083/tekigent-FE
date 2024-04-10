import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'tekigent-tab-menu',
  templateUrl: './tekigent-tab-menu.component.html',
  styleUrls: ['./tekigent-tab-menu.component.scss'],
})
export class TekigentTabMenuComponent {
  @Input() labelItems!: MenuItem[];
  @Input() activeItem!: MenuItem;
  @Input() isCheckboxShown = false;
  @Output() handleActiveItemChange = new EventEmitter();

  itemChanges(item: MenuItem): void {
    this.handleActiveItemChange.emit(item);
  }
}

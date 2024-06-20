import { Component, HostBinding, Input } from '@angular/core';
import { ICollection } from '../../models/collection-management.model';
import { CollectionFormComponent } from '../collection-form/collection-form.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.scss']
})
export class CollectionItemComponent {
  @HostBinding('class') hostClass = 'tekigent-collection-item';
  @Input() collection!: ICollection;
  ref!: DynamicDialogRef;

  constructor(
    public dialogService: DialogService,
  ) { }


  navigateWithCollection() {
    this.ref = this.dialogService.open(CollectionFormComponent, {
      header: 'Collection Setting',
      contentStyle: { overflow: 'auto' },
      width: '30vw',
      data: this.collection,
    });
  }
}

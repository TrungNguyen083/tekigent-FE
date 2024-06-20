import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProjectFormComponent } from '../project-form/project-form.component';

@Component({
  selector: 'project-item-card',
  templateUrl: './project-item-card.component.html',
  styleUrls: ['./project-item-card.component.scss']
})
export class ProjectItemCardComponent {

  @Input() project!: any;
  ref!: DynamicDialogRef;
  

  constructor(public dialogService: DialogService,) { }

  navigateWithProject() {
      this.ref = this.dialogService.open(ProjectFormComponent, {
        header: 'Project Setting',
        contentStyle: { overflow: 'auto' },
        width: '30vw',
        data: this.project,
      });
  }
}

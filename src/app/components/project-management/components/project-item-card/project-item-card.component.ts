import { Component, Input } from '@angular/core';

@Component({
  selector: 'project-item-card',
  templateUrl: './project-item-card.component.html',
  styleUrls: ['./project-item-card.component.scss']
})
export class ProjectItemCardComponent {
  @Input() project!: any;
}

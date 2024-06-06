import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'project-item-card',
  templateUrl: './project-item-card.component.html',
  styleUrls: ['./project-item-card.component.scss']
})
export class ProjectItemCardComponent {

  @Input() project!: any;
  constructor(private router: Router) {}

  navigateWithProject() {
    this.router.navigate(['/project-management/project-form'], { state: this.project });
  }
}

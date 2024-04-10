import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { evaluationCycleLabelItems } from './constants/project-management.constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.scss']
})
export class ProjectManagementComponent {
  labelItems: MenuItem[] = evaluationCycleLabelItems;
  activeItem: MenuItem = this.labelItems[0];

  constructor(private router: Router){}

  onActiveItemChange(item: MenuItem): void {
    this.router.navigate([`project-management/${item.label}`]);
  }
}

import { Component, Input } from '@angular/core';
import { EAccountRole } from '../../models/credential.model';

@Component({
  selector: 'role-badge',
  templateUrl: './role-badge.component.html',
  styleUrls: ['./role-badge.component.scss'],
})
export class RoleBadgeComponent {
  @Input() role!: number;
  accountRole = EAccountRole
}

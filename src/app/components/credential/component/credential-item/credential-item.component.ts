import { Component, HostBinding, Input } from '@angular/core';
import { ICredential } from '../../models/credential.model';
import { CheckboxChangeEvent, CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-credential-item',
  templateUrl: './credential-item.component.html',
  styleUrls: ['./credential-item.component.scss'],
  standalone: true,
  imports: [CommonModule, CheckboxModule, FormsModule, ButtonModule]
})
export class CredentialItemComponent {
  @HostBinding('class') hostClass = 'tekigent-student-item';
  @Input() credential!: ICredential;
  defaultImg = 'assets/images/profile-image-default.jpg';
  checked = false;
  credentialIds!: number[];

  ngOnInit(): void {
    this.checked = this.credentialIds.includes(this.credential.id);
  }


  onCheckChange(e: CheckboxChangeEvent) {
    const { checked } = e;
    if (checked) {
      console.log(this.credentialIds);
    } else {
      console.log(this.credentialIds);
    }
  }

  getStatusIcon(status: number, baseClass: string): string {
    if (status === 0) return `${baseClass}`;
    if (status === 1) return `${baseClass} text-green-500`;
    if (status === 2) return `pi-clock text-red-500`;
    return '';
  }
}

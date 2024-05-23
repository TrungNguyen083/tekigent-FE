import { Component, HostBinding, Input } from '@angular/core';
import { ICredential } from '../../models/credential.model';
import { CheckboxChangeEvent } from 'primeng/checkbox';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credential-item',
  templateUrl: './credential-item.component.html',
  styleUrls: ['./credential-item.component.scss']
})
export class CredentialItemComponent {

  @HostBinding('class') hostClass = 'tekigent-student-item';
  @Input() credential!: ICredential;
  defaultImg = 'assets/images/profile-image-default.jpg';
  checked = false;
  credentialIds!: number[];

  constructor(private router: Router) { }

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

  // navigateToDetail(credentialId: number) {
  //   this.router.navigate(['/credential', credentialId]);
  // }
}

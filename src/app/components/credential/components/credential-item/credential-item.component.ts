import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { ICredential } from '../../models/credential.model';
import { CheckboxChangeEvent } from 'primeng/checkbox';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credential-item',
  templateUrl: './credential-item.component.html',
  styleUrls: ['./credential-item.component.scss']
})
export class CredentialItemComponent implements OnInit {

  @HostBinding('class') hostClass = 'tekigent-credential-item';
  @Input() credential!: ICredential;
  @Output() selectionChange = new EventEmitter<any>();
  defaultImg = 'assets/images/profile-image-default.jpg';
  checked = false;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }


  onCheckChange(e: CheckboxChangeEvent, credential: ICredential) {
    this.checked = e.checked;
    this.selectionChange.emit({ credential, checked: this.checked });
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

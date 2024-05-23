import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credential-detail',
  templateUrl: './credential-detail.component.html',
  styleUrls: ['./credential-detail.component.scss']
})
export class CredentialDetailComponent {

  constructor(private router: Router) { }
  goBack() {
    this.router.navigate(['/credential']);
  }

  reward() {
    throw new Error('Method not implemented.');
  }
}

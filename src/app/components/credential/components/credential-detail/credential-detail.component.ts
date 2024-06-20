import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICredential } from '../../models/credential.model';
import { credentialData } from '../../constants/credential.constant';

@Component({
  selector: 'app-credential-detail',
  templateUrl: './credential-detail.component.html',
  styleUrls: ['./credential-detail.component.scss']
})
export class CredentialDetailComponent implements OnInit {
  credentialDetail?: ICredential;
  credentialId!: number;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.credentialDetail = this.getCredentialDetail(+id);
        this.credentialId = +id;
      }
    });

    console.log(this.credentialDetail);
  }

  getCredentialDetail(credentialId: number): ICredential | undefined {
    return credentialData.find(credential => credential.id === credentialId);
  }

  goBack() {
    this.router.navigate(['/credential']);
  }

  reward() {
    throw new Error('Method not implemented.');
  }
  
  saveChangeCredential() {
    throw new Error('Method not implemented.');
  }
}

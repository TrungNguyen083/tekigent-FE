import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class CredentialService {

  constructor(private apollo: Apollo) {}
}

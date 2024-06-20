import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class ProjectManagementService {

  constructor(private apollo: Apollo) {}
}

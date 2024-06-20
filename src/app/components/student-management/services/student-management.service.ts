import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class StudentManagementService {

  constructor(private apollo: Apollo) {}
}

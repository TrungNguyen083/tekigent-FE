import { Component, Inject, OnInit } from '@angular/core';
import { IStudent } from '../../models/student-management.model';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-award-form',
  templateUrl: './award-form.component.html',
  styleUrls: ['./award-form.component.scss']
})
export class AwardFormComponent implements OnInit {
  student: IStudent;

  constructor(public config: DynamicDialogConfig, private router: Router, public ref: DynamicDialogRef) {
    this.student = this.config.data.student;
  }

  ngOnInit(): void {
    console.log(this.student);
  }

  navigateCredential() {
    this.router.navigate(['/credential']);
    this.ref.close();
  }
}

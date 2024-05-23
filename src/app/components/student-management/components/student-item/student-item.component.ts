import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { IStudent } from '../../models/student-management.model';
import { CheckboxChangeEvent } from 'primeng/checkbox';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.scss']
})
export class StudentItemComponent implements OnInit{

  @HostBinding('class') hostClass = 'tekigent-student-item';
  @Input() student!: IStudent;
  defaultImg = 'assets/images/profile-image-default.jpg';
  checked = false;
  studentIds!: number[];

  ngOnInit(): void {
    this.checked = this.studentIds.includes(this.student.id);
  }


  onCheckChange(e: CheckboxChangeEvent) {
    const { checked } = e;
    if (checked) {
      console.log(this.studentIds);
    } else {
      console.log(this.studentIds);
    }
  }
}

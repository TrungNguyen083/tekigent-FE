import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { IStudent } from '../../models/student-management.model';
import { CheckboxChangeEvent } from 'primeng/checkbox';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AwardFormComponent } from '../award-form/award-form.component';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.scss']
})
export class StudentItemComponent implements OnInit {

  @HostBinding('class') hostClass = 'tekigent-student-item';
  @Input() student!: IStudent;
  @Output() selectionChange = new EventEmitter<any>();
  defaultImg = 'assets/images/profile-image-default.jpg';
  checked = false;
  ref!: DynamicDialogRef;

  ngOnInit(): void {
  }

  constructor(
    public dialogService: DialogService, private confirmationService: ConfirmationService
  ) { }


  onCheckChange(e: CheckboxChangeEvent, student: IStudent) {
    this.checked = e.checked;
    this.selectionChange.emit({ student, checked: this.checked });
  }

  confirmAward(student: IStudent) {
    this.confirmationService.confirm({
      message: 'Are you sure to give award to ' + student.firstName + ' ' + student.lastName + '?',
      header: 'Award Confirmation',
      icon: 'pi pi-gift',
      accept: () => {
        this.openAwardModal(student);
      },
      reject: () => {

      }
    });
  }

  openAwardModal(student: IStudent) {
    this.ref = this.dialogService.open(AwardFormComponent, {
      header: 'Award Credential',
      contentStyle: { overflow: 'auto' },
      width: '60vw',
      data: { student: student }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { NotificationService } from 'src/app/shared/message/notification.service';

@Component({
  selector: 'app-collection-create-form',
  templateUrl: './collection-create-form.component.html',
  styleUrls: ['./collection-create-form.component.scss']
})
export class CollectionCreateFormComponent implements OnInit {
  createCollection!: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.createCollection = this.fb.group({
      collectionName: ['', [Validators.required, Validators.maxLength(100)]],
      collectionDecription: ['', [Validators.required, Validators.maxLength(100)]],
    });
  }

  onSubmit() {
    console.log("Submit successfully!")
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NotificationService } from 'src/app/shared/message/notification.service';

@Component({
  selector: 'app-collection-form',
  templateUrl: './collection-form.component.html',
  styleUrls: ['./collection-form.component.scss']
})
export class CollectionFormComponent implements OnInit {
  createCollection!: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.loadCollectionData();
  }

  initForm() {
    this.createCollection = this.fb.group({
      collectionName: ['', [Validators.required, Validators.maxLength(100)]],
      collectionDecription: ['', [Validators.required, Validators.maxLength(100)]],
    });
  }

  loadCollectionData() {
    if (this.config.data) {
      this.createCollection.patchValue({
        collectionName: this.config.data.name,
        collectionDecription: this.config.data.description,
      });
    }
  }

  onSubmit() {
    console.log("Submit successfully!")
  }
}

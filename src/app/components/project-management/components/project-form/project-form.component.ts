import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { NotificationService } from 'src/app/shared/message/notification.service';
import { collectionsData } from '../collection-management/components/collection-list/collection-list.component';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent {
  createProject!: FormGroup;
  isLoading = false;
  collections = collectionsData;

  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.createProject = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.maxLength(100)]],
      projectBgImage: [null, Validators.required],
      collection: [null, Validators.required]
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.createProject.patchValue({
        projectBgImage: file
      });
    }
  }

  onSubmit() {
    console.log("Submit successfully!")
  }

}

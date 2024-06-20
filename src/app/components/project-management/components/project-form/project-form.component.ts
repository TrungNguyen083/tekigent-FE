import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
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
  imageSrc: string | ArrayBuffer | null = null;

  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.loadProjectData();
  }

  initForm() {
    this.createProject = this.fb.group({
      selectedCollection: [null],
      name: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.maxLength(100)]],
      projectBgImage: [null, Validators.required],
    });
  }

  loadProjectData() {
    if (this.config.data) {
      this.createProject.patchValue({
        selectedCollection: this.config.data.collection,
        name: this.config.data.name,
        description: this.config.data.description,
        projectBgImage: this.config.data.projectBgImage
      });
      if (this.config.data.projectBgImage) {
        this.imageSrc = this.config.data.projectBgImage;
      }
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file && file.type.match('image.*')) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result;
        this.createProject.patchValue({
          projectBgImage: file
        });
      };
      reader.readAsDataURL(file);
    } else {
      event.target.value = '';
    }
  }

  onSubmit() {
    console.log("Submit successfully!")
  }

}

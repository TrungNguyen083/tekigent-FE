import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProject } from '../../models/project-management.model';

@Component({
  selector: 'evaluation-cycle-info-form',
  templateUrl: './project-info-form.component.html',
  styleUrls: ['./project-info-form.component.scss']
})
export class ProjectInfoFormComponent implements OnInit {


  criteriaIndices: number[] = [];
  addProjectForm!: FormGroup;
  isLoading = false;
  project!: IProject;

  constructor(
    private fb: FormBuilder, private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
    this.project = history.state;
    console.log("Project: ", this.project);
    this.initForm();
    if (this.hasRequiredProjectProperties(this.project)) {
      console.log("True");
      this.patchFormValues();
    } else {
      console.log("False");
    }
  }

  hasRequiredProjectProperties(project: any): boolean {
    return project && project.name && project.identifier && project.identifier.tutorName && project.courseWebsite && project.description && project.skills && project.primary;
  }

  initForm() {
    this.addProjectForm = this.fb.group({
      displayName: ['', [Validators.required, Validators.maxLength(100)]],
      identifier: ['', [Validators.required, Validators.maxLength(100)]],
      courseWebsite: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.maxLength(300)]],
      skills: ['', [Validators.required, Validators.maxLength(100)]],
      awardType: ['Certificate', [Validators.required]],
    });
  }

  patchFormValues() {
    const formData = {
      displayName: this.project.name,
      identifier: this.project.identifier.tutorName,
      courseWebsite: this.project.courseWebsite,
      description: this.project.description,
      skills: this.project.skills,
      awardType: this.project.primary
    };

    this.addProjectForm.patchValue(formData);
  }

  goBack() {
    this.router.navigate(['/project-management']);
  }

  onSubmit() {
    throw new Error('Method not implemented.');
  }

  addEarningCriteria() {
    this.criteriaIndices.push(this.criteriaIndices.length + 1);
  }

  removeEarningCriteria(index: number) {
    this.criteriaIndices.splice(index, 1);
  }

}

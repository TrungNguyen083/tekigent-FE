import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
    private fb: FormBuilder, private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // this.route.queryParams.subscribe(params => {
    //   this.project = params as IProject;
    //   console.log("Current Project: ", this.project);
    // });
    this.project = history.state;
    console.log("Current Project: ", this.project);
    this.initForm();
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

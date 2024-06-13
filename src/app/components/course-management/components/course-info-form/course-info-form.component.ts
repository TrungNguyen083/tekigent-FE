import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourse } from '../../models/course-management.model';

@Component({
  selector: 'course-info-form',
  templateUrl: './course-info-form.component.html',
  styleUrls: ['./course-info-form.component.scss']
})
export class CourseInfoFormComponent implements OnInit {


  criteriaIndices: number[] = [];
  addCourseForm!: FormGroup;
  isLoading = false;
  course!: ICourse;

  constructor(
    private fb: FormBuilder, private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
    this.course = history.state;
    this.initForm();
    if (this.hasRequiredProjectProperties(this.course)) this.patchFormValues();
  }

  hasRequiredProjectProperties(course: any): boolean {
    return course && course.courseName && course.identifier && course.identifier.tutorName && course.courseWebsite && course.description && course.skills && course.primary;
  }

  initForm() {
    this.addCourseForm = this.fb.group({
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
      displayName: this.course.courseName,
      identifier: this.course.identifier.tutorName,
      courseWebsite: this.course.courseWebsite,
      description: this.course.description,
      skills: this.course.skills,
      awardType: this.course.primary
    };

    this.addCourseForm.patchValue(formData);
  }

  goBack() {
    this.router.navigate(['/course-management']);
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

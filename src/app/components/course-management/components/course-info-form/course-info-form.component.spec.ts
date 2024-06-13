import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInfoFormComponent } from './course-info-form.component';
import { beforeEach, describe, it } from 'node:test';

describe('CourseInfoFormComponent', () => {
  let component: CourseInfoFormComponent;
  let fixture: ComponentFixture<CourseInfoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseInfoFormComponent]
    });
    fixture = TestBed.createComponent(CourseInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

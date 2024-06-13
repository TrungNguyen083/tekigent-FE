import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEarningCriteriaComponent } from './course-earning-criteria.component';
import { describe, beforeEach, it } from 'node:test';

describe('CourseEarningCriteriaComponent', () => {
  let component: CourseEarningCriteriaComponent;
  let fixture: ComponentFixture<CourseEarningCriteriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseEarningCriteriaComponent]
    });
    fixture = TestBed.createComponent(CourseEarningCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

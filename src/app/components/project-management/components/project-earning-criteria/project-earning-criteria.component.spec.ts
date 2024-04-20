import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEarningCriteriaComponent } from './project-earning-criteria.component';

describe('ProjectEarningCriteriaComponent', () => {
  let component: ProjectEarningCriteriaComponent;
  let fixture: ComponentFixture<ProjectEarningCriteriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectEarningCriteriaComponent]
    });
    fixture = TestBed.createComponent(ProjectEarningCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

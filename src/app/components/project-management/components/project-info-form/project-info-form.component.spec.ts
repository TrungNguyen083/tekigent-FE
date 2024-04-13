import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInfoFormComponent } from './project-info-form.component';
import { beforeEach, describe, it } from 'node:test';

describe('ProjectInfoFormComponent', () => {
  let component: ProjectInfoFormComponent;
  let fixture: ComponentFixture<ProjectInfoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectInfoFormComponent]
    });
    fixture = TestBed.createComponent(ProjectInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

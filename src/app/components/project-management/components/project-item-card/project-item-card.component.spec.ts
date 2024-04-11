import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectItemCardComponent } from './project-item-card.component';
import { describe, beforeEach, it } from 'node:test';

describe('ProjectItemCardComponent', () => {
  let component: ProjectItemCardComponent;
  let fixture: ComponentFixture<ProjectItemCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectItemCardComponent]
    });
    fixture = TestBed.createComponent(ProjectItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationItemCardComponent } from './evaluation-item-card.component';
import { describe, beforeEach, it } from 'node:test';

describe('EvaluationItemCardComponent', () => {
  let component: EvaluationItemCardComponent;
  let fixture: ComponentFixture<EvaluationItemCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluationItemCardComponent]
    });
    fixture = TestBed.createComponent(EvaluationItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

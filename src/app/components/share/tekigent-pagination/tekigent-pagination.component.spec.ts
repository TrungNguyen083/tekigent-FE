import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TekigentPaginationComponent } from './tekigent-pagination.component';
import { describe, beforeEach, it } from 'node:test';

describe('TekigentPaginationComponent', () => {
  let component: TekigentPaginationComponent;
  let fixture: ComponentFixture<TekigentPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TekigentPaginationComponent]
    });
    fixture = TestBed.createComponent(TekigentPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

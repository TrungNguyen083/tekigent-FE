import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionListComponent } from './collection-list.component';
import { describe, beforeEach, it } from 'node:test';

describe('CollectionListComponent', () => {
  let component: CollectionListComponent;
  let fixture: ComponentFixture<CollectionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectionListComponent]
    });
    fixture = TestBed.createComponent(CollectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionItemComponent } from './collection-item.component';
import { describe, beforeEach, it } from 'node:test';

describe('ProjectItemCardComponent', () => {
  let component: CollectionItemComponent;
  let fixture: ComponentFixture<CollectionItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectionItemComponent]
    });
    fixture = TestBed.createComponent(CollectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

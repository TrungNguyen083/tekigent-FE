import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionCreateFormComponent } from './collection-create-form.component';

describe('CollectionCreateFormComponent', () => {
  let component: CollectionCreateFormComponent;
  let fixture: ComponentFixture<CollectionCreateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectionCreateFormComponent]
    });
    fixture = TestBed.createComponent(CollectionCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

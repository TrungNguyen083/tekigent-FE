import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TekigentTableComponent } from './tekigent-table.component';

describe('TekigentTableComponent', () => {
  let component: TekigentTableComponent;
  let fixture: ComponentFixture<TekigentTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TekigentTableComponent]
    });
    fixture = TestBed.createComponent(TekigentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function beforeEach(arg0: () => void) {
  throw new Error('Function not implemented.');
}


import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TekigentScreenFilterComponent } from './tekigent-screen-filter.component';

describe('TekigentScreenFilterComponent', () => {
  let component: TekigentScreenFilterComponent;
  let fixture: ComponentFixture<TekigentScreenFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TekigentScreenFilterComponent]
    });
    fixture = TestBed.createComponent(TekigentScreenFilterComponent);
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


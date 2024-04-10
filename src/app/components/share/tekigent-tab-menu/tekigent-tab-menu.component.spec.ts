import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TekigentTabMenuComponent } from './tekigent-tab-menu.component';

describe('TekigentTabMenuComponent', () => {
  let component: TekigentTabMenuComponent;
  let fixture: ComponentFixture<TekigentTabMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TekigentTabMenuComponent]
    });
    fixture = TestBed.createComponent(TekigentTabMenuComponent);
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


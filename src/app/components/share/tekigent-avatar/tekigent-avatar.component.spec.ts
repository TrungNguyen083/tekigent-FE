import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TekigentAvatarComponent } from './tekigent-avatar.component';
import { describe, beforeEach, it } from 'node:test';

describe('TekigentAvatarComponent', () => {
  let component: TekigentAvatarComponent;
  let fixture: ComponentFixture<TekigentAvatarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TekigentAvatarComponent]
    });
    fixture = TestBed.createComponent(TekigentAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

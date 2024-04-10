import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TekigentChartComponent } from './tekigent-chart.component';
import { describe, beforeEach, it } from 'node:test';


describe('TekigentChartComponent', () => {
  let component: TekigentChartComponent;
  let fixture: ComponentFixture<TekigentChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TekigentChartComponent]
    });
    fixture = TestBed.createComponent(TekigentChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

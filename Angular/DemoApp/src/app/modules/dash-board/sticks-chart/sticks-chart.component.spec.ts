import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SticksChartComponent } from './sticks-chart.component';

describe('SticksChartComponent', () => {
  let component: SticksChartComponent;
  let fixture: ComponentFixture<SticksChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SticksChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SticksChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

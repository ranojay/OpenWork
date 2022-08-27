import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SticksLinesComponent } from './sticks-lines.component';

describe('SticksLinesComponent', () => {
  let component: SticksLinesComponent;
  let fixture: ComponentFixture<SticksLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SticksLinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SticksLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

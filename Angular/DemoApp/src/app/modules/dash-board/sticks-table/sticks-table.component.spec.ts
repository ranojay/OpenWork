import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SticksTableComponent } from './sticks-table.component';

describe('SticksTableComponent', () => {
  let component: SticksTableComponent;
  let fixture: ComponentFixture<SticksTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SticksTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SticksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SticksDashBoardComponent } from './sticks-dash-board.component';

describe('SticksDashBoardComponent', () => {
  let component: SticksDashBoardComponent;
  let fixture: ComponentFixture<SticksDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SticksDashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SticksDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SticksFormComponent } from './sticks-form.component';

describe('SticksFormComponent', () => {
  let component: SticksFormComponent;
  let fixture: ComponentFixture<SticksFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SticksFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SticksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

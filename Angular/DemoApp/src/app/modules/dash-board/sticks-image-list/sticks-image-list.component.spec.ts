import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SticksImageListComponent } from './sticks-image-list.component';

describe('SticksImageListComponent', () => {
  let component: SticksImageListComponent;
  let fixture: ComponentFixture<SticksImageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SticksImageListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SticksImageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

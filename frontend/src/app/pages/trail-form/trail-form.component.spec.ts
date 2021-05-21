import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailFormComponent } from './trail-form.component';

describe('TrailFormComponent', () => {
  let component: TrailFormComponent;
  let fixture: ComponentFixture<TrailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

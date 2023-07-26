import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrakerComponent } from './traker.component';

describe('TrakerComponent', () => {
  let component: TrakerComponent;
  let fixture: ComponentFixture<TrakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrakerComponent],
    });
    fixture = TestBed.createComponent(TrakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

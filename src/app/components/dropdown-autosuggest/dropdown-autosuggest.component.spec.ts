import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownAutosuggestComponent } from './dropdown-autosuggest.component';

describe('DropdownAutosuggestComponent', () => {
  let component: DropdownAutosuggestComponent;
  let fixture: ComponentFixture<DropdownAutosuggestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownAutosuggestComponent]
    });
    fixture = TestBed.createComponent(DropdownAutosuggestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

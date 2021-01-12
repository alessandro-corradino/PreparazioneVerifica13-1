import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBirraComponent } from './search-birra.component';

describe('SearchBirraComponent', () => {
  let component: SearchBirraComponent;
  let fixture: ComponentFixture<SearchBirraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBirraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBirraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

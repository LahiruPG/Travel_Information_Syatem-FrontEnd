import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePlaceCategoryComponent } from './manage-place-category.component';

describe('ManagePlaceCategoryComponent', () => {
  let component: ManagePlaceCategoryComponent;
  let fixture: ComponentFixture<ManagePlaceCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePlaceCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePlaceCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

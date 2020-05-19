import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCategoryComponent } from './remove-category.component';

describe('RemoveCategoryComponent', () => {
  let component: RemoveCategoryComponent;
  let fixture: ComponentFixture<RemoveCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

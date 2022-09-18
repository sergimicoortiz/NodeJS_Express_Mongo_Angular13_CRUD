import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDetailsComponent } from './crud-details.component';

describe('CrudDetailsComponent', () => {
  let component: CrudDetailsComponent;
  let fixture: ComponentFixture<CrudDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

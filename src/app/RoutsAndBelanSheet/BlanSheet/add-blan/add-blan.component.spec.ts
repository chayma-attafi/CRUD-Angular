import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlanComponent } from './add-blan.component';

describe('AddBlanComponent', () => {
  let component: AddBlanComponent;
  let fixture: ComponentFixture<AddBlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

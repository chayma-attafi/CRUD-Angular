import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBlanComponent } from './edit-blan.component';

describe('EditBlanComponent', () => {
  let component: EditBlanComponent;
  let fixture: ComponentFixture<EditBlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBlanComponent } from './list-blan.component';

describe('ListBlanComponent', () => {
  let component: ListBlanComponent;
  let fixture: ComponentFixture<ListBlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

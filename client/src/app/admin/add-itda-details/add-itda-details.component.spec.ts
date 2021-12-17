import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItdaDetailsComponent } from './add-itda-details.component';

describe('AddItdaDetailsComponent', () => {
  let component: AddItdaDetailsComponent;
  let fixture: ComponentFixture<AddItdaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddItdaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItdaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

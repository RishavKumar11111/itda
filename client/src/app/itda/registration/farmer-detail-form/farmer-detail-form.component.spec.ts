import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerDetailFormComponent } from './farmer-detail-form.component';

describe('FarmerDetailFormComponent', () => {
  let component: FarmerDetailFormComponent;
  let fixture: ComponentFixture<FarmerDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerDetailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

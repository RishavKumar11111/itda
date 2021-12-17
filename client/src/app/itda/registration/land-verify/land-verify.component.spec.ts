import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandVerifyComponent } from './land-verify.component';

describe('LandVerifyComponent', () => {
  let component: LandVerifyComponent;
  let fixture: ComponentFixture<LandVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

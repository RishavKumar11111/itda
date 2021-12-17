import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LayoutService } from 'src/app/services/layout/layout.service';

declare function loadSteps(): any;
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  pageTitle: string;
  breadcrumbList: Array<string>;
  farmerDetailsForm: FormGroup;
  pumpSetModelForm: FormGroup;
  landRecordForm: FormGroup;
  constructor(
    private layoutService: LayoutService,
    private fb: FormBuilder
  ) { 
    this.pageTitle = 'Registartion';
    this.breadcrumbList = ['Farmer Registration'];
    this.farmerDetailsForm = fb.group({
      farmerId: ['', [Validators.required]],
      farmerName: ['', [Validators.required]],
      fatherName: ['', [Validators.required]],
      mobileNo: ['', [Validators.required]],
      caste: ['', [Validators.required]],
      aadhaarNo: ['', [Validators.required]],
      isPreviouslyTaken: ['', [Validators.required]],
      districtName: ['', [Validators.required]],
      blockName: ['', Validators.required],
      gpName: ['', Validators.required],
      villageName: ['', Validators.required]
    });
    this.pumpSetModelForm = fb.group({
      fuel: ['', [Validators.required]],
      make: ['', [Validators.required]],
      model: ['', [Validators.required]],
      hp: ['', [Validators.required]]
    });
    this.landRecordForm = fb.group({
      source: ['', [Validators.required]],
      blockCode: ['', [Validators.required]],
      gpCode: ['', [Validators.required]],
      villageCode: ['', [Validators.required]],
      khataNo: ['', [Validators.required]],
      plotNo: ['', [Validators.required]],
      tenants: ['', [Validators.required]],
      areaInHector: ['', [Validators.required]],
      areaInAcre: ['', [Validators.required]],
      landType: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    loadSteps();
    setTimeout(() => { 
      this.layoutService.setTitle(this.pageTitle);
      this.layoutService.setBreadcrumb(this.breadcrumbList);
    });  
  }
  submit() {
    console.log(this.farmerDetailsForm.value);
    console.log(this.pumpSetModelForm.value);
    console.log(this.landRecordForm.value);
  }
}

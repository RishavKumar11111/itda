import { AuthService } from './../../../services/auth/auth.service';
import { ItdaService } from './../../../services/itda/itda.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmer-detail-form',
  templateUrl: './farmer-detail-form.component.html',
  styleUrls: ['./farmer-detail-form.component.css']
})
export class FarmerDetailFormComponent implements OnInit {

  prefixOfFarmerID: string = '';
  @Input() farmerDetailsForm: any;
  showFarmerDetails: boolean = false;
  isFarmerValid: boolean;
  invalidFarmerMessage: string;
  constructor(
    private toastr: ToastrService,
    private itdaService: ItdaService,
    private authService: AuthService
  ) { 
    this.getPSDDistrictName();
    this.invalidFarmerMessage = '';
    this.isFarmerValid = false;
  }

  ngOnInit(): void {
  }
  
  getPSDDistrictName() {
    this.itdaService.getPSDDistrictName(this.authService.getUserId()).subscribe(result => {
      this.prefixOfFarmerID = result.PDSDistrictName;
    }, error => this.toastr.error(error.statusText, error.status));
  }
  getFarmerDetails():any {
    if(this.farmerId != '') {
        this.showFarmerDetails = true;
        this.itdaService.getFarmerDetails(`${this.prefixOfFarmerID}/${this.farmerId}`).subscribe(result => {
              this.farmerName = result.VCHFARMERNAME;
              this.farmerFatherName = result.VCHFATHERNAME;
              this.farmerMobileNo = result.VCHMOBILENO;
              this.farmerAadhaarNo = result.vchaadharno;
              this.farmerCaste = result.Category_Value;
              this.farmerIsPreviouslyTaken = result.IsTaken === 'NEW' ? 'No' : 'Yes';
              this.farmerDistrictName = result.vch_DistrictName;
              this.farmerBlockName = result.vch_BlockName;
              this.farmerGPName = result.vch_GPNameOr;
              this.farmerVillageName = result.vch_VillageNameOr;
              if(this.farmerCaste === 'ST') {
                  if(this.farmerIsPreviouslyTaken === 'No') {
                      if(this.farmerAadhaarNo) {
                        this.isFarmerValid = true;
                        this.invalidFarmerMessage = '';
                      } else {
                        this.toastr.error('Farmer must have an Aadhaar number to proceed', 'Update at nearest AAO');
                        this.invalidFarmerMessage = `*** Farmer must have an Aadhaar number to proceed. Please update your Aadhar at nearest AAO.***`
                        this.isFarmerValid = false;
                      }
                  } else {
                    this.toastr.error('Farmer already taken pump set in Farm mechinary system.');
                    this.invalidFarmerMessage = '*** Farmer already taken pump set in Farm mechinary system. You cannot get pump set twice. ***';
                    this.isFarmerValid = false;
                  }
              } else {
                this.toastr.error('Farmer must comes unser ST caste.');
                this.invalidFarmerMessage = '*** Farmer must comes unser ST caste. ***';
                this.isFarmerValid = false;
              }
        }, error => {
          this.showFarmerDetails = false;
          this.toastr.error(error.statusText, error.status)
        });
    } else {
      this.toastr.error('Please enter valid farmer-ID');
      document.getElementById('farmerId')?.focus();
    }
    
  }


  get farmerId() {
    return this.farmerDetailsForm.value['farmerId']
  }
  get farmerName() {
    return this.farmerDetailsForm.value['farmerName']
  }
  get farmerAadhaarNo() {
    return this.farmerDetailsForm.value['aadhaarNo']
  }
  get farmerCaste() {
    return this.farmerDetailsForm.value['caste']
  }
  get farmerIsPreviouslyTaken() {
    return this.farmerDetailsForm.value['isPreviouslyTaken']
  }
  get farmerFatherName() {
    return this.farmerDetailsForm.value['fatherName']
  }
  get farmerMobileNo() {
    return this.farmerDetailsForm.value['mobileNo']
  }
  get farmerDistrictName() {
    return this.farmerDetailsForm.value['districtName']
  }
  get farmerBlockName() {
    return this.farmerDetailsForm.value['blockName']
  }
  get farmerGPName() {
    return this.farmerDetailsForm.value['gpName']
  }
  get farmerVillageName() {
    return this.farmerDetailsForm.value['villageName']
  }
  // set farmerId(value: number) {
  //   this.farmerDetailsForm.value['farmerId'] = `${this.prefixOfFarmerID}/${value}`;
  // }
  set farmerName(value: string) {
    this.farmerDetailsForm.value['farmerName'] = value;
  }
  set farmerAadhaarNo(value: string) {
    this.farmerDetailsForm.value['aadhaarNo'] = value;
  }
  set farmerCaste(value: string) {
    this.farmerDetailsForm.value['caste'] = value;
  }
  set farmerIsPreviouslyTaken(value: string) {
    this.farmerDetailsForm.value['isPreviouslyTaken'] = value;
  }
  set farmerFatherName(value: string) {
    this.farmerDetailsForm.value['fatherName'] = value;
  }
  set farmerMobileNo(value: string) {
    this.farmerDetailsForm.value['mobileNo'] = value;
  }
  set farmerDistrictName(value: string) {
    this.farmerDetailsForm.value['districtName'] = value;
  }
  set farmerBlockName(value: string) {
    this.farmerDetailsForm.value['blockName'] = value;
  }
  set farmerGPName(value: string) {
    this.farmerDetailsForm.value['gpName'] = value;
  }
  set farmerVillageName(value: string) {
    this.farmerDetailsForm.value['villageName'] = value;
  }

}

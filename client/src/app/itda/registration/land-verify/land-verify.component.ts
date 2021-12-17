import { AuthService } from './../../../services/auth/auth.service';
import { ItdaService } from './../../../services/itda/itda.service';
import { ToastrService } from 'ngx-toastr';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-land-verify',
  templateUrl: './land-verify.component.html',
  styleUrls: ['./land-verify.component.css']
})
export class LandVerifyComponent implements OnInit {

  @Input() landRecordForm: any;
  blockList: any;
  gpList: any;
  villageList: any;
  revenueDistrictCode: any;
  constructor(
    private toastr: ToastrService,
    private itdaService: ItdaService,
    private authService: AuthService
  ) { 
    this.getBlockList();
    this.getRevenueDistrictCode();
  }

  ngOnInit(): void {
  }
  getBlockList() {
    this.itdaService.getBlockList(this.authService.getUserId()).subscribe(result => {
      this.blockList = result;
    }, error => this.toastr.error(error.statusText, error.status))
  }
  loadGpList() {
    this.itdaService.getGPList(this.landRecordForm.value['blockCode']).subscribe(result => {
      this.gpList = result;
    }, error => this.toastr.error(error.statusText, error.status))
  }
  loadVillageList() {
    this.itdaService.getVillageList(this.landRecordForm.value['gpCode']).subscribe(result => {
      this.villageList = result;
    }, error => this.toastr.error(error.statusText, error.status))
  }
  getRevenueDistrictCode() {
    this.itdaService.getRevenueDistrictCode(this.authService.getUserId()).subscribe(result => {
      this.revenueDistrictCode = result.RevenueDistrictCode;
    }, error => this.toastr.error(error.statusText, error.status))
  }
  getKhataNoList() {
    this.itdaService.getKhataNoList(this.revenueDistrictCode, this.VillageCode).subscribe()
  }


  get VillageCode() {
    return this.landRecordForm.value['villageCode'];
  }

}

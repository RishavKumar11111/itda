import { ItdaService } from './../../../services/itda/itda.service';
import { ToastrService } from 'ngx-toastr';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-selection',
  templateUrl: './model-selection.component.html',
  styleUrls: ['./model-selection.component.css']
})
export class ModelSelectionComponent implements OnInit {

  @Input() pumpSetModelForm: any;
  makeList: any;
  fuelList: any;
  modelList: any;
  constructor(
    private toastr: ToastrService,
    private itdaService: ItdaService
  ) { 

    this.getMakeList();
    this.getFuelList();
  }

  ngOnInit(): void {
  }
  getMakeList() {
    this.itdaService.getMakeList().subscribe(result => {
      this.makeList = result;
    }, error => this.toastr.error(error.statusText, error.status));
  }
  getFuelList() {
    this.itdaService.getFuelList().subscribe(result => {
      this.fuelList = result;
    }, error => this.toastr.error(error.statusText, error.status))
  }
  getModelList() {
    let makeId = this.pumpSetModelForm.value['make'];
    let fuelCode = this.pumpSetModelForm.value['fuel'];
    if(makeId && fuelCode) {
      this.itdaService.getModelList(makeId, fuelCode).subscribe(result => {
        this.modelList = result;
        if(result.length == 0) {
          this.toastr.warning('No model found in this Make and Fuel');
          this.pumpSetModelForm.value['model'] = '';
        }
      }, error => this.toastr.error(error.statusText, error.status))
    }
  }

}

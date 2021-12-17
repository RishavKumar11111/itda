import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';
import { LayoutService } from 'src/app/services/layout/layout.service';

@Component({
  selector: 'app-add-itda-details',
  templateUrl: './add-itda-details.component.html',
  styleUrls: ['./add-itda-details.component.css']
})
export class AddItdaDetailsComponent implements OnInit {
  pageTitle: string;
  breadcrumbList: Array<string>;
  dataSource: Array<any>;
  constructor(
    private layoutService: LayoutService,
    private service: AdminService
  ) {
    this.pageTitle = 'Project Managers';
    this.breadcrumbList = ['Add P.M. details'];
    this.dataSource = [];
  }

  ngOnInit(): void {
      setTimeout(() => { 
        this.layoutService.setTitle(this.pageTitle);
        this.layoutService.setBreadcrumb(this.breadcrumbList);
      });
      this.loadAllItdaList();
  }
  
  loadAllItdaList() {
      this.service.getAllItdaList().subscribe(result => {
          this.dataSource = result;
          this.dataSource.forEach(e => {
            e.isEditable = false;
          })
      }, error => console.log(error.statusText))
  }
  editItdaDetails(x: any, index: any) {
    x.isEditable = true;
    setTimeout(() => {
      document.getElementById(`Name${index}`)?.focus()
    }, 500)
  }
  update(x: any) {
    let data = {
      Name: x.Name,
      MobileNo: x.MobileNo
    }
    this.service.updateItdaDetails(x.ITDACode, data).subscribe(result => {
          x.isEditable = false;
          this.loadAllItdaList();
    }, error => console.log(error.statusText) )
  }


}

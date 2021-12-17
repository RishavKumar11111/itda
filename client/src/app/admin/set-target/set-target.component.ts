import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';
import { LayoutService } from 'src/app/services/layout/layout.service';

@Component({
  selector: 'app-set-target',
  templateUrl: './set-target.component.html',
  styleUrls: ['./set-target.component.css']
})
export class SetTargetComponent implements OnInit {
  pageTitle: string;
  breadcrumbList: Array<string>;
  dataSource: Array<any> = [];
  constructor(
    private service: AdminService,
    private layoutService: LayoutService
  ) { 
    this.pageTitle = 'Target';
    this.breadcrumbList = ['Set Target for P.M.'];
  }

  ngOnInit(): void {
    setTimeout(() => { 
      this.layoutService.setTitle(this.pageTitle);
      this.layoutService.setBreadcrumb(this.breadcrumbList);
    });
    this.loadTargetListOfAllItda();
  }

  loadTargetListOfAllItda() {
      this.service.loadTargetListOfAllItda().subscribe(result => {
          this.dataSource = result;
          this.dataSource.forEach(e => {
            e.isEditable = false;
          })
      }, error => console.log(error.statusText))
  }
  editItdaDetails(x: any, index: any) {
    x.isEditable = true;
    setTimeout(() => {
      document.getElementById(`Target${index}`)?.focus()
    }, 500)
  }
  update(x: any) {
    let data = {
      Target: x.Target
    }
    this.service.setItdaTarget(x.ITDACode, data).subscribe(result => {
          x.isEditable = false;
          this.loadTargetListOfAllItda();
    }, error => console.log(error.statusText) )
  }

}

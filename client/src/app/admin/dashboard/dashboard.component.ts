import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout/layout.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pageTitle: string;
  breadcrumbList: Array<string>;
  constructor(private layoutService: LayoutService) {
      this.pageTitle = 'Dashboard';
      this.breadcrumbList = ['Dashboard'];
      if( !localStorage.getItem('firstLoad') ) {
        localStorage['firstLoad'] = true;
        window.location.reload();
      } else
        localStorage.removeItem('firstLoad');
    
  }

  ngOnInit(): void {
    setTimeout(() => { 
      this.layoutService.setTitle(this.pageTitle);
      this.layoutService.setBreadcrumb(this.breadcrumbList);
    });  }

}

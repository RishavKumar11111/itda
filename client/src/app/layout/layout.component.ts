import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../services/layout/layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  pageHeading: string;
  breadcrumbList: Array<string>;
  constructor(
    private layoutService: LayoutService
  ) {
    this.pageHeading = 'Dashboard';
    this.breadcrumbList = ['Dashboard'];
  }

  ngOnInit(): void {
    this.layoutService.title.subscribe(value => this.pageHeading = value);
    this.layoutService.breadcrumb.subscribe((value: any) => {
      this.breadcrumbList = value;
    });
  }

}

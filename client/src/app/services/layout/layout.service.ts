import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private defaultTitle = 'Page Title';
  private titleSubject: BehaviorSubject<string> = new BehaviorSubject(this.defaultTitle);
  public title: Observable<string>;

  private breadcrumbSubject: BehaviorSubject<string> = new BehaviorSubject('');
  public breadcrumb: Observable<string>;

  constructor() {
    this.title = this.titleSubject.asObservable();
    this.breadcrumb = this.breadcrumbSubject.asObservable();
  }
  ngOnInit(): void {
    
  }

  public setTitle(title: string) {
      this.titleSubject.next(title);
  }
  public setBreadcrumb(breadcrumbList: any) {
      this.breadcrumbSubject.next(breadcrumbList);
  }
}

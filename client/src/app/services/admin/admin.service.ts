import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { serverUrl } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  routeName: string = `admin`;
  constructor(
    private http: HttpClient,
  ) { }

  getAllItdaList(): Observable<any> {
    return this.http.get(`${serverUrl}/${this.routeName}/getAllItdaList`);
  }
  updateItdaDetails(itdaCode: number, data: {}): Observable<any> {
    return this.http.post(`${serverUrl}/${this.routeName}/updateItdaDetails/${itdaCode}`, data);
  }
  loadTargetListOfAllItda(): Observable<any> {
    return this.http.get(`${serverUrl}/${this.routeName}/getTargetListOfAllItda`);
  }
  setItdaTarget(itdaCode: number, data: {}): Observable<any> {
    return this.http.post(`${serverUrl}/${this.routeName}/setItdaTarget/${itdaCode}`, data);
  }
}

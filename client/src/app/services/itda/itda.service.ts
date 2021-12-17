import { serverUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItdaService {
  routeName: string = `itda`;

  constructor(
    private http: HttpClient
  ) { }

  getPSDDistrictName(userId: string | null): Observable<any> {
    return this.http.get(`${serverUrl}/${this.routeName}/getPSDDistrictName/${userId}`);
  }
  getFarmerDetails(farmerId: string) : Observable<any> {
    return this.http.get(`http://www.apicol.nic.in/api/FMN/GETPUMPTAKEN?FARMER_ID=${farmerId}`);
  }
  getMakeList(): Observable<any> {
    return this.http.get(`http://www.apicol.nic.in/api/FMN/GETPUMPMAKE`)
  }
  getFuelList(): Observable<any> {
    return this.http.get(`http://www.apicol.nic.in/api/FMN/GetFUEL`);
  }
  getModelList(makeId: any, fuelCode: any): Observable<any> {
    return this.http.get(`http://www.apicol.nic.in/api/FMN/GETPUMPMODEL?MakeID=${makeId}&fuel=${fuelCode}`);
  }
  getBlockList(userId: string | null): Observable<any> {
    return this.http.get(`${serverUrl}/${this.routeName}/getBlockList/${userId}`);
  }
  getGPList(blockCode: number): Observable<any> {
    return this.http.get(`${serverUrl}/${this.routeName}/getGPList/${blockCode}`);
  }
  getVillageList(gpCode: number): Observable<any> {
    return this.http.get(`${serverUrl}/${this.routeName}/getVillageList/${gpCode}`);
  }
  getRevenueDistrictCode(userId: string | null): Observable<any> {
    return this.http.get(`${serverUrl}/${this.routeName}/getRevenueDistrictCode/${userId}`);
  }
  getKhataNoList(revenueDistrictCode: number, villageCode: number): Observable<any> {
    return this.http.get(`http://bhulekh.ori.nic.in/OdishaCropInsurance.asmx/AgriCensusRORKhata?distCode=${revenueDistrictCode}&villCensusCode=${villageCode}`);
  }
}

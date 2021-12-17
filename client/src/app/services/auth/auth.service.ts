import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { serverUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  route: string = 'auth';
  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  getUserRole() {
    return localStorage.getItem('role');
  }
  setUserRole(role: string) {
    return localStorage.setItem('role', role);
  }
  getUserName() {
    return localStorage.getItem('userName');
  }
  setUserName(userName: string) {
    return localStorage.setItem('userName', userName);
  }
  getUserId() {
    return localStorage.getItem('userId');
  }
  setUserId(userId: string) {
    return localStorage.setItem('userId', userId);
  }
  clearLocalStorage() {
    localStorage.clear();
    return true;
  }
  signOut() {
    this.clearLocalStorage();
    this.router.navigate(['/']);
  }
  signIn(data: {}): Observable<any> {
    return this.http.post(`${serverUrl}/${this.route}/signIn`, data);
  }
}

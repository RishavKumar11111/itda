import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  userRole: string | null = '';
  userName: string | null = '';
  constructor(
    private authService: AuthService
  ) {
    this.userName = this.authService.getUserName();
    this.userRole = authService.getUserRole();
  }

  ngOnInit(): void {
    
  }
  signOut() {
    this.authService.signOut();
  }

}

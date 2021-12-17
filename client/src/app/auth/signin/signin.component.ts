import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm: any;
  @ViewChild('signFormElement') el: any;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.signinForm = this.fb.group({
      userId: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }
  signIn() {
    if(this.signinForm.valid) {
      this.authService.signIn(this.signinForm.value).subscribe(result => {
        if(result.isSuccess) {
            this.toastr.success(result.message)
            this.authService.setUserRole(result.userRole);
            this.authService.setUserName(result.userName);
            this.authService.setUserId(result.userId);
            switch (result.userRole) {
              case 'ADMIN': {
                this.router.navigate(['admin']);
                break;
              }
              case 'ITDA': {
                this.router.navigate(['itda']);
                break;
              }
            }
        } else {
          this.toastr.error(result.message)
        }
      }, error => this.toastr.error(error.statusText, error.status));
    } else {
          for (const key of Object.keys(this.signinForm.controls)) {
                if (this.signinForm.controls[key].invalid) {
                  this.toastr.error(`Please enter valid ${key}`, 'Invalid', {
                    positionClass: 'toast-bottom-center'
                  })
                  const invalidControl = this.el.nativeElement.querySelector('[formcontrolname="' + key + '"]');
                  invalidControl.focus();
                  break;
              }
          }
    }
  }

}

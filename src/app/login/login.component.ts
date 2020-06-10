import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';
import {loginTO} from '../to/loginTO';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  user: any;

  constructor(private authenticationService: AuthenticationService) {
    this.user = new FormGroup({
      emailField: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ]),
      passField: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
  }

  get primEmail() {
    return this.user.get('emailField');
  }

  get passwordValue() {
    return this.user.get('passField');
  }

  login() {
    const loginTo = new loginTO();
    if (this.primEmail.status === 'VALID' && this.passwordValue.status === 'VALID') {
      loginTo.email = this.primEmail.value;
      loginTo.password = this.passwordValue.value;
      console.log(loginTo);
    } else if (this.primEmail.status === 'INVALID' && this.passwordValue.status === 'INVALID') {
      alert('Please check your email id and password field for errors');
    } else if (this.primEmail.status === 'VALID' && this.passwordValue.status === 'INVALID') {
      alert('Please check your password field for errors');
    } else {
      alert('Please check your email ID field for errors');
    }

    // console.log(this.authenticationService.login(loginTo));
  }


  private handleSuccessfulResponse(response: any) {
    console.log(response);
  }
}

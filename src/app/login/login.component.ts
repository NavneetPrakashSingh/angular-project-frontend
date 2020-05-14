import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';
import {loginTO} from "../to/loginTO";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  login() {
    // alert(this.email + this.password);
    const loginTo = new loginTO();
    loginTo.email = this.email;
    loginTo.password = this.password;
    console.log(this.authenticationService.login(loginTo));
  }

  private handleSuccessfulResponse(response: any) {
    console.log(response);
  }
}

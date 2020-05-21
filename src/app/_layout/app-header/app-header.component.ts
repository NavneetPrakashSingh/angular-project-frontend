import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../service/authentication.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {
    authenticationService.getLoggedInName.subscribe(name => this.changeName(name));
  }

  title = 'mdb-angular-free';
  mainText = 'Welcome !';
  loginText = 'Login';
  loginUrl = '/login';
  registerText = 'Register';
  registerUrl = '/register';
  showRegister = true;


  private changeName(name: string): void {
    this.mainText = 'Welcome,' + name;
    this.loginText = 'Profile';
    this.loginUrl = '/profile';
    this.showRegister = false;
  }

  ngOnInit(): void {
  }

}

import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {loginTO} from '../to/loginTO';
import {registerTO} from '../to/registerTO';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  login(login: loginTO) {
    try {
      alert(environment.serverUrl);
      const url = environment.serverUrl + 'api/login';
      return this.httpClient.post<any>(url, {
        email: login.email,
        password: login.password
      }).subscribe(res => {
        if (res.token != null) {
          this.getLoggedInName.emit(login.email);
          localStorage.setItem('username', login.email);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/parking']);
        }
      });
    } catch (e) {
      console.log(e);
    }

  }

  register(register: registerTO) {
    return register.email;
  }
}

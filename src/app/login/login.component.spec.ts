import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AuthenticationService} from '../service/authentication.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [LoginComponent],
      providers: [AuthenticationService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('form invalid when empty', () => {
    expect(component.user.valid).toBeFalsy();
  });

  it('email is required', () => {
    let errors = {};
    const email = component.user.controls.emailField;
    errors = email.errors || {},
      expect(errors['required']).toBeTruthy();
  });

  it('password is required', () => {
    let errors = {};
    const email = component.user.controls.passField;
    errors = email.errors || {},
      expect(errors['required']).toBeTruthy();
  });

  it('email should be in proper format', () => {
    let errors = {};
    const email = component.user.controls.emailField;
    email.setValue('test');
    errors = email.errors || {};
    expect(errors['pattern']).toBeTruthy();
  });

  it('email should be in proper format', () => {
    let errors = {};
    const email = component.user.controls.emailField;
    email.setValue('test@gmail.com');
    errors = email.errors || {};
    expect(errors['pattern']).toBeFalsy();
  });
});

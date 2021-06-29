import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userName: AbstractControl;
  email: AbstractControl;
  password: AbstractControl;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });

    this.userName = this.loginForm.get('username');
    this.email = this.loginForm.get('email');
    this.password = this.loginForm.get('password');
  }

  invalidUserNameMessage() {
    const errors = this.userName.errors;
    if (errors?.required) {
      return 'You must enter a user name';
    }
  }

  invalidEmailMessage() {
    const errors = this.email.errors;
    if (errors?.required) {
      return 'You must enter an Email';
    }
    if (errors?.email) {
      return 'You must enter a valid Email';
    }
  }

  invalidPasswordMessage() {
    const errors = this.password.errors;
    if (errors?.required) {
      return 'You must enter a password';
    }
  }

  onSubmitLoginForm() {
    this.router.navigate(['/rooms']);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', Validators.required),
  });
  displayError: any = { email: false, password: false };

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.displayAllErrors();
    console.log(this.loginForm.get('email'));
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  displayAllErrors() {
    Object.keys(this.displayError).map(
      (key: string) => (this.displayError[key] = true)
    );
  }
}

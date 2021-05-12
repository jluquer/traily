import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

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

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.displayErrors();
    if (
      this.email &&
      this.email.valid &&
      this.password &&
      this.password.valid
    ) {
      this.authService.login(this.email.value, this.password.value).subscribe(
        (_data) => {},
        (_err) => {
          this.displayErrors(false);
        }
      );
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  displayErrors(display = true) {
    Object.keys(this.displayError).map(
      (key: string) => (this.displayError[key] = display)
    );
  }
}

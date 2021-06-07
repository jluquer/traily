import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
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
  invalid = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  /**
   * This function is used when the user submits the login form.
   * It will check if the email and password inputs are correct,
   * and if they are correct then it will send the petition
   * to log in to the backend.
   */
  onSubmit(): void {
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
          this.invalid = true;
        }
      );
    }
  }

  /**
   * Returns the email form control from the form group.
   * @returns an email
   */
  get email(): AbstractControl | null {
    return this.loginForm.get('email');
  }

  /**
   * Returns the password form control from the form group.
   * @returns a password.
   */
  get password(): AbstractControl | null {
    return this.loginForm.get('password');
  }

  /**
   * Allows to display errors or not. Changing the values of
   * displayError variable.
   * 
   * @param display boolean to display errors or not
   */
  displayErrors(display = true): void {
    Object.keys(this.displayError).map(
      (key: string) => (this.displayError[key] = display)
    );
  }
}

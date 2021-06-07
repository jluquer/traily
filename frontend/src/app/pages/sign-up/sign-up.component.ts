import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alerts/alert.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router,
    private alert: AlertService
  ) {}
  signUpForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  });
  displayErrors = false;

  ngOnInit(): void {}

  /**
   * This function is used when the user submits the login form.
   * It will check if inputs are correct, and if they are correct
   * then it will send the petition to create the user to the
   * backend.
   */
  onSubmit() {
    this.displayErrors = true;

    if (
      this.signUpForm &&
      this.signUpForm.valid &&
      this.email &&
      this.password &&
      this.firstName &&
      this.lastName
    )
      this.userService
        .createUser({
          email: this.email.value,
          password: this.password.value,
          name: `${this.firstName.value} ${this.lastName.value}`,
        })
        .subscribe(
          (_data) => {
            this.alert
              .success('Your account have been created')
              .subscribe(() => {
                this.router.navigateByUrl('login');
              });
          },
          (_err) => {
            this.alert.error('Email already in use, try again!');
          }
        );
  }

  /**
   * Returns the email form control from the form group.
   * @returns a email.
   */
  get email(): AbstractControl | null {
    return this.signUpForm.get('email');
  }

  /**
   * Returns the password form control from the form group.
   * @returns a password.
   */
  get password(): AbstractControl | null {
    return this.signUpForm.get('password');
  }

  /**
   * Returns the first name form control from the form group.
   * @returns a first name.
   */
  get firstName(): AbstractControl | null {
    return this.signUpForm.get('firstName');
  }

  /**
   * Returns the last name form control from the form group.
   * @returns a last name.
   */
  get lastName(): AbstractControl | null {
    return this.signUpForm.get('lastName');
  }
}

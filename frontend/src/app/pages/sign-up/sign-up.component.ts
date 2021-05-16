import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get firstName() {
    return this.signUpForm.get('firstName');
  }

  get lastName() {
    return this.signUpForm.get('lastName');
  }
}

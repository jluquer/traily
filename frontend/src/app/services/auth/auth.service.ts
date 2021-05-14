import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = environment.host + 'auth/';
  private helper = new JwtHelperService();

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  login(email: string, password: string) {
    return this.http.post(this.authUrl + 'login', { email, password }).pipe(
      map((data: any) => {
        this.setToken(data.token);
        this.router.navigateByUrl('dashboard');
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('login');
  }

  get isLogged(): boolean {
    const userToken = this.getToken();
    if (!userToken) return false;

    const isExpired = this.helper.isTokenExpired(userToken);
    if (isExpired) this.logout();

    return !isExpired;
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}

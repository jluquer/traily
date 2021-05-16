import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  private authUrl = environment.host + 'auth/';
  private helper = new JwtHelperService();
  public isLogged$ = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient, private router: Router) {
    this.isLogged$.next(this.isLogged);
  }

  login(email: string, password: string) {
    return this.http.post(this.authUrl + 'login', { email, password }).pipe(
      map((data: any) => {
        this.setToken(data.token);
        this.router.navigateByUrl('dashboard');
        this.isLogged$.next(true);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.isLogged$.next(false);
    this.router.navigateByUrl('login');
  }

  private get isLogged(): boolean {
    const userToken = this.getToken();
    if (!userToken) return false;

    const isExpired = this.helper.isTokenExpired(userToken);
    if (isExpired) this.logout();

    return !isExpired;
  }

  getLoggedUserId(): number | undefined {
    const token = this.getToken() ?? undefined;
    const decodedToken = this.helper.decodeToken(token);
    if (!decodedToken) return undefined;
    return decodedToken.userId;
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  ngOnDestroy() {
    this.isLogged$.unsubscribe();
  }
}

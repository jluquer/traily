import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

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

  /**
   * Log in to the app and return an api token if credentials are correct.
   *
   * @param email user email
   * @param password user password
   * @returns api token or error
   */
  login(email: string, password: string): Observable<any> {
    return this.http.post(this.authUrl + 'login', { email, password }).pipe(
      map((data: any) => {
        this.setToken(data.token);
        this.router.navigateByUrl('dashboard');
        this.isLogged$.next(true);
      })
    );
  }

  /**
   * Logout from application removing all information stored in local storage 
   * and changing isLogged observable value.
   */
  logout(): void {
    localStorage.removeItem('token');
    this.isLogged$.next(false);
    this.router.navigateByUrl('login');
  }

  /**
   * Check if the user is logged or not.
   * 
   * @returns
   */
  private get isLogged(): boolean {
    const userToken = this.getToken();
    if (!userToken) return false;

    const isExpired = this.helper.isTokenExpired(userToken);
    if (isExpired) this.logout();

    return !isExpired;
  }

  /**
   * Get the logged user id from local storage.
   * 
   * @returns user id
   */
  getLoggedUserId(): number | undefined {
    const token = this.getToken() ?? undefined;
    const decodedToken = this.helper.decodeToken(token);
    if (!decodedToken) return undefined;
    return decodedToken.userId;
  }

  /**
   * Stores the api token in local storage.
   * 
   * @param token api token
   */
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  /**
   * Get the api token from local storage.
   * 
   * @returns api token
   */
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  ngOnDestroy() {
    this.isLogged$.unsubscribe();
  }
}

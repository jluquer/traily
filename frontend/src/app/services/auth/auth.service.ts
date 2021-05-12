import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = environment.host + 'auth/';

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService,
    private router: Router
  ) {}

  login(email: string, password: string) {
    return this.http.post(this.authUrl + 'login', { email, password }).pipe(
      map((data: any) => {
        this.localStorage.setToken(data.token);
        this.router.navigateByUrl('dashboard');
      })
    );
  }
}

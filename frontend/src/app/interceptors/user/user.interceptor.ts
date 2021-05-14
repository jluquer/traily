import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable()
export class UserInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authToken = this.authService.getToken();
    if (this.requiresAuthorization(req.url) && this.authService.isLogged)
      req.headers.set('Authorization', `Bearer ${authToken}`);

    return next.handle(req);
  }

  private requiresAuthorization(url: string): boolean {
    const unrestrictedUrls = ['user/create', 'auth/login'];

    for (let i = 0; i < unrestrictedUrls.length; i++) {
      if (url.includes(unrestrictedUrls[i])) return false;
    }

    return true;
  }
}

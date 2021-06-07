import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class UserInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  /**
   * Intercept all the requests and adds the api token if needed.
   * 
   * @param req 
   * @param next 
   * @returns 
   */
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authToken = this.authService.getToken();

    if (this.requiresAuthorization(req.url)) {
      req = req.clone({
        setHeaders: {
          authorization: `Bearer ${authToken}`,
        },
      });
    }

    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(err);
      })
    );
  }

  /**
   * Check if the url given requires token or not.
   * 
   * @param url to send petition.
   * @returns true if the route requires authorization.
   */
  private requiresAuthorization(url: string): boolean {
    const unrestrictedUrls = ['user/create', 'auth/login'];

    for (let i = 0; i < unrestrictedUrls.length; i++) {
      if (url.includes(unrestrictedUrls[i])) return false;
    }

    return true;
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CheckLoginGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * Allow angular router to activate the route if the user is not 
   * logged.
   * 
   * @returns true if the user is not logged.
   */
  canActivate(): Observable<boolean> {
    return this.authService.isLogged$.pipe(
      first(),
      tap((isLogged) => {
        if (isLogged) this.router.navigate(['/dashboard']);
      }),
      map((isLogged) => !isLogged)
    );
  }
}

import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CheckLoginGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  canActivate(): boolean {
    return !this.authService.isLogged;
  }
}

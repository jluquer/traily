import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLogged: boolean | null = null;
  userId?: number;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isLogged$.subscribe((logged) => (this.isLogged = logged));
    this.userId = this.authService.getLoggedUserId();
  }

  logout() {
    this.authService.logout();
  }
}

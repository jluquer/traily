import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLogged: boolean | null = null;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isLogged$.subscribe((logged) => (this.isLogged = logged));
  }

  logout() {
    this.authService.logout();
  }
}

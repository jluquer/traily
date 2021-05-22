import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  isLogged: boolean | null = null;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isLogged$.subscribe((logged) => (this.isLogged = logged));
  }
}

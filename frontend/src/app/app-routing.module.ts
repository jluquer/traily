import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { CheckLoginGuard } from './guards/check-login/check-login.guard';
import { LoggedGuard } from './guards/logged/logged.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'login', component: LoginComponent, canActivate: [CheckLoginGuard] },
  {
    path: 'signup',
    component: SignUpComponent,
    canActivate: [CheckLoginGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoggedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

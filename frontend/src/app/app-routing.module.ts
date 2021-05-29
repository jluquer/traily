import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { CheckLoginGuard } from './guards/check-login/check-login.guard';
import { LoggedGuard } from './guards/logged/logged.guard';
import { TrailsComponent } from './pages/trails/trails.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { TrailFormComponent } from './pages/trail-form/trail-form.component';
import { UsersComponent } from './pages/users/users.component';
import { TrailComponent } from './pages/trail/trail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

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
  { path: 'trails', component: TrailsComponent, canActivate: [LoggedGuard] },
  {
    path: 'trail/create',
    component: TrailFormComponent,
    canActivate: [LoggedGuard],
  },
  {
    path: 'trail/edit/:trailId',
    component: TrailFormComponent,
    canActivate: [LoggedGuard],
  },
  {
    path: 'trail/:trailId',
    component: TrailComponent,
    canActivate: [LoggedGuard],
  },
  {
    path: 'profile/:userId',
    component: UserProfileComponent,
    canActivate: [LoggedGuard],
  },
  { path: 'users', component: UsersComponent, canActivate: [LoggedGuard] },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

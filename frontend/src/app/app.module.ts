import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';

import { UserInterceptor } from './interceptors/user/user.interceptor';

import { AppComponent } from './app.component';
import { TrailListComponent } from './components/trail-list/trail-list.component';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TrailsComponent } from './pages/trails/trails.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { TrailFormComponent } from './pages/trail-form/trail-form.component';
import { UsersComponent } from './pages/users/users.component';
import { TrailComponent } from './pages/trail/trail.component';
import { ChartComponent } from './components/chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    HeaderComponent,
    TrailListComponent,
    TrailsComponent,
    UserProfileComponent,
    TrailFormComponent,
    FileUploaderComponent,
    UsersComponent,
    UserSearchComponent,
    FooterComponent,
    TrailComponent,
    ChartComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MomentModule,
    ChartsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UserInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

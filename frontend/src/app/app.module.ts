import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserInterceptor } from './interceptors/user/user.interceptor';
import { HeaderComponent } from './components/header/header.component';
import { TrailListComponent } from './components/trail-list/trail-list.component';
import { MomentModule } from 'angular2-moment';
import { TrailsComponent } from './pages/trails/trails.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { TrailFormComponent } from './pages/trail-form/trail-form.component';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MomentModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UserInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

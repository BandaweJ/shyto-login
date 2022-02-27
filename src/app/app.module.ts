import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'shyto-login'),
  ],
  providers: [AuthService],
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

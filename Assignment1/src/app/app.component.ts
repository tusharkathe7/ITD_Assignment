import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './auth-user/login/login.component';
import { RegisterComponent } from './auth-user/register/register.component';
import { ForgotPasswordComponent } from './auth-user/forgot-password/forgot-password.component';
import { User1Component } from './auth-user/user/user1/user1.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent,RegisterComponent,ForgotPasswordComponent,User1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Assignment1';
}

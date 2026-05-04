import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginWithGoogle() {
    window.location.href = 'http://localhost:3000/auth/google';
  }
}

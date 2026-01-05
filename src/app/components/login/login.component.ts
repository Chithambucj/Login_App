import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../models/login-request.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData: LoginRequest = {
    username: '',
    password: ''
  };

  errorMessage = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.loginData).subscribe({
      next: () => alert('Login Successful'),
      error: () => this.errorMessage = 'Invalid credentials'
    });
  }
}

import { Component } from '@angular/core';
import { handleLoginForm } from './login-iniciar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor() {
    document.addEventListener('DOMContentLoaded', () => {
      handleLoginForm();    });
  }
}
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);

  // Створюємо групу полів, які Angular буде відстежувати
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  onLogin() {
    if (this.loginForm.valid) {
    // Передаємо дані форми (username та password) у сервіс
    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        // Якщо сервер відповів успішно — переходимо на резюме
        this.router.navigate(['/resume']);
      },
      error: (err) => {
        // Якщо логін/пароль невірні — показуємо помилку
        console.error('Вхід не вдався', err);
        alert('Невірний логін або пароль!');
      }
    });
    
  }}
}
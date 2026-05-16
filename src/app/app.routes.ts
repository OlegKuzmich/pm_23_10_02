import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { authGuard } from './guards/auth-guard';
import { inject } from '@angular/core'; // Переконайтеся, що inject імпортовано
import { AuthService } from './services/auth'; // Перевірте шлях до сервісу

export const routes: Routes = [
  { path: 'login', component: Login },
  { 
    path: 'resume', 
    // Замість component: Resume пишемо динамічний імпорт:
    loadComponent: () => import('./components/resume/resume').then(m => m.Resume),
    canActivate: [authGuard] 
  },
  { 
    path: '', 
    redirectTo: () => {
      const authService = inject(AuthService);
      // Якщо користувач авторизований — кидаємо на резюме, якщо ні — на логін
      return authService.isAuthenticated() ? '/resume' : '/login';
    }, 
    pathMatch: 'full' 
  }
];
import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { authGuard } from './guards/auth-guard';
import { inject } from '@angular/core'; 
import { AuthService } from './services/auth';

export const routes: Routes = [
  { path: 'login', component: Login },
  { 
    path: 'resume', 
    loadComponent: () => import('./components/resume/resume').then(m => m.Resume),
    canActivate: [authGuard] 
  },
  { 
    path: '', 
    redirectTo: () => {
      const authService = inject(AuthService);
      return authService.isAuthenticated() ? '/resume' : '/login';
    }, 
    pathMatch: 'full' 
  }
];
import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: 'login', component: Login },
  { 
    path: 'resume', 
    // Замість component: Resume пишемо динамічний імпорт:
    loadComponent: () => import('./components/resume/resume').then(m => m.Resume),
    canActivate: [authGuard] 
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
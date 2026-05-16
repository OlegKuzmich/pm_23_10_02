import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router} from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule], // Додаємо CommonModule для *ngIf та RouterLink
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBar{
  // Інжектуємо потрібні сервіси
  public authService = inject(AuthService); 
  private router = inject(Router);

  // Метод для кліку на назву додатку "MyResumeApp"
  onBrandClick() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/resume']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  // Метод для кнопки Вихід
  onLogout() {
    
    this.authService.logout();
    
  }
}

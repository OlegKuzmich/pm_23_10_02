import { Injectable, signal,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private http = inject(HttpClient); // Додали це
  private router = inject(Router);

  isLoggedIn = signal<boolean>(localStorage.getItem('isLoggedIn') === 'true');

  // Оновлений метод
  login(credentials: any): Observable<any> {
    // Відправляємо дані на сервер (порт 3000, як у твоєму server.js)
    return this.http.post('http://localhost:3000/api/login', credentials).pipe(
      tap((res: any) => {
        if (res.success) {
          localStorage.setItem('isLoggedIn', 'true');
          this.isLoggedIn.set(true);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn.set(false);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn();
  }
}
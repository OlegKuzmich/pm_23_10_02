import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Це адреса твого Node.js сервера, який ти створив раніше
  private apiUrl = 'http://localhost:3000/api/user';

  constructor(private http: HttpClient) { }

  // Метод для отримання даних з JSON-файлу (GET-запит)
  getUserData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Метод для запису даних у JSON-файл (POST-запит)
  saveUserData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
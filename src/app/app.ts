import { Component, signal, OnInit, ChangeDetectorRef } from '@angular/core'; // Додали OnInit тут
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { MainContent } from './components/main-content/main-content';
import { Sidebar } from './components/sidebar/sidebar';
import { DataService } from './services/data'; // Додали імпорт сервісу

@Component({
  selector: 'app-root',
  imports: [Header, MainContent, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App implements OnInit { 
  
  userData: any;

  constructor(private dataService: DataService, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.dataService.getUserData().subscribe({
      next: (data) => {
       
        this.userData = data ; 
        this.cd.detectChanges();

        console.log('Дані успішно записані в App:', this.userData);
      },
      error: (err) => {
        console.error('Сервер не відповідає:', err);
      }
    });
  }
}

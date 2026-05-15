import { Component,  OnInit, ChangeDetectorRef } from '@angular/core'; // Додали OnInit тут
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { MainContent } from './components/main-content/main-content';
import { Sidebar } from './components/sidebar/sidebar';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-resume',
  imports: [Header, MainContent, Sidebar],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume implements OnInit  {

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

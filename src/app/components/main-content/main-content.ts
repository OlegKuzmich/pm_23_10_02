import { Component } from '@angular/core';
import { Education } from './components/education/education';
import { Experience } from './components/experience/experience';
import { Expertise } from './components/expertise/expertise';

@Component({
  selector: 'app-main-content',
  imports: [Education, Experience, Expertise],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss',
})
export class MainContent {
  
}

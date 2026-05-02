import { Component,Output,Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {
  @Input() about: any;


  isAboutVisible: boolean = false; 

  toggleAboutMe() {
    this.isAboutVisible = !this.isAboutVisible;
  }
}

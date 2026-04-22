import { Component,Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {
  
  aboutMe:string="Lorem ipsum uterf hello fit arrow djgh bjdyh hdibsp hgos hgpwh g dfsg s g ds gds g ds gd sg sd gd sg ds gd s gds g ds gds g ds gds g sd gds "
  
  isAboutVisible: boolean = false; 

  toggleAboutMe() {
    this.isAboutVisible = !this.isAboutVisible;
  }
}

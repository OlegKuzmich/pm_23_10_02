import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  imports: [],
  templateUrl: './contact-info.html',
  styleUrl: './contact-info.scss',
})
export class ContactInfo {
  @Input() contactInfo: any;

  
  isContactVisible: boolean = false;

  toggleContact(){
    this.isContactVisible = !this.isContactVisible;
  }

}

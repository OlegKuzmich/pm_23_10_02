import { Component, Input} from '@angular/core';
import { AboutMe } from './components/about-me/about-me';
import { ContactInfo } from './components/contact-info/contact-info';
import { Hobbies } from './components/hobbies/hobbies';

@Component({
  selector: 'app-sidebar',
  imports: [AboutMe,ContactInfo,Hobbies],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  @Input() userData: any;


  showAlert(hobby:string){
    alert(`Hobby clicked: ${hobby}`)

  }

}
  


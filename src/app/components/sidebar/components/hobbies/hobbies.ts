import { Component } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  imports: [],
  templateUrl: './hobbies.html',
  styleUrl: './hobbies.scss',
})
export class Hobbies {
  

  isHobbiesVisible: boolean = false;

  toggleHobbies(){
    this.isHobbiesVisible=!this.isHobbiesVisible;
  }


  
  @Output() hobbyClicked = new EventEmitter<string>();
  onHobby(name:string){
    this.hobbyClicked.emit(name);
  }
}

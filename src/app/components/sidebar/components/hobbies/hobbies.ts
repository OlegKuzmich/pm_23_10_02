import { Component } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  imports: [],
  templateUrl: './hobbies.html',
  styleUrl: './hobbies.scss',
})
export class Hobbies {
@Output() hobbyClicked = new EventEmitter<string>();

  onHobby(name:string){
    this.hobbyClicked.emit(name);
  }

  isHobbiesVisible: boolean = false;

  toggleHobbies(){
    this.isHobbiesVisible=!this.isHobbiesVisible;
  }
}

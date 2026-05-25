import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  @Input() education :any[]=[]; 
}

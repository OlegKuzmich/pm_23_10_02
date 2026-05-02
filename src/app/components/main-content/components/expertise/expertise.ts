import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expertise',
  imports: [CommonModule],
  templateUrl: './expertise.html',
  styleUrl: './expertise.scss',
})
export class Expertise {
  @Input() expertise: any[]=[];
}

import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-information',
  imports: [CommonModule, FormsModule],
  templateUrl: './information.html',
  styleUrl: './information.scss',
})
export class Information {
  @Input() userData:any;
}

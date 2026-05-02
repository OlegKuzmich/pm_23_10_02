import { Component, Input} from '@angular/core';
import { Information } from './information/information';
@Component({
  selector: 'app-header',
  imports: [Information],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @Input() userData: any;
}

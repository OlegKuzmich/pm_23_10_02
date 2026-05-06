import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../../services/data';


@Component({
  selector: 'app-information',
  imports: [CommonModule, FormsModule],
  templateUrl: './information.html',
  styleUrl: './information.scss',
})
export class Information {
  @Input() userData:any;


  constructor(private dataService: DataService) {}

  saveData() {
    this.dataService.saveUserData(this.userData).subscribe({
      next: (response) => {
        alert('Дані успішно збережено!');
        console.log(response.message);
      },
      error: (err) => {
        console.error('Помилка при збереженні:', err);
        alert('Не вдалося зберегти дані.');
      }
    });
  }

}

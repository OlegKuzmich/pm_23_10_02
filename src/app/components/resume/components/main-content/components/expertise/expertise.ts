import { Component,Input,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../../../../../services/data';

@Component({
  selector: 'app-expertise',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './expertise.html',
  styleUrl: './expertise.scss',
})
export class Expertise implements OnInit {
  @Input() userData: any; 
  @Input() expertise: any[] = [];

  skillForm!: FormGroup;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.skillForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'percent': new FormControl(0, [Validators.required, Validators.min(1), Validators.max(100)])
    });
  }

  addSkill() {
    if (this.skillForm.valid) {
      const newSkill = {
        name: this.skillForm.value.name,
        percent: this.skillForm.value.percent
      };


      this.expertise.push(newSkill);

  
      this.dataService.saveUserData(this.userData).subscribe({
        next: (response: any) => {
          console.log('Дані успішно оновлені в JSON!');
          this.skillForm.reset({ name: '', percent: 0 });
        },
        error: (err: any) => {
          console.error('Помилка при збереженні:', err);
          alert('Не вдалося зберегти навичку у файл.');
        }
      });
    }
  }

  deleteSkill(index: number) {
  
    this.expertise.splice(index, 1);


    this.dataService.saveUserData(this.userData).subscribe({
      next: (response: any) => {
        console.log('Навичку видалено, файл оновлено!');
      },
      error: (err: any) => {
        console.error('Помилка при видаленні:', err);
        alert('Не вдалося видалити навичку з файлу.');
      }
    });
  }
}
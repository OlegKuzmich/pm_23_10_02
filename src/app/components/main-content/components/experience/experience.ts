import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {

  experienceList:any[] = [
    {
      position: 'Senior UI/UX Designer',
      period: 'Present',
      isCurrent: true,
      company: 'SoftServe / Lviv',
      description: 'Very Good Worker'
    },
    {
      position: 'Junior Designer',
      period: '2011-2019',
      isCurrent: false,
      company: 'Previous Company / Kyiv',
      description: 'Some Description'
    }
  ];
}

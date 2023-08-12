import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    { name: 'HTML', progress: 80 },
    { name: 'CSS', progress: 70 },
    { name: 'JavaScript', progress: 90 },
    { name: 'Angular', progress: 75 },
    { name: 'React', progress: 70 },
    { name: 'Java', progress: 90 },
    { name: 'Nodejs', progress: 75 },
    // Add more skills as needed
  ];
}

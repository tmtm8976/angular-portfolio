import { Component } from '@angular/core';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  downloadFile() {
    const link = document.createElement('a');
  link.href = '../../assets/resume.pdf'; // Replace with the actual path to your CV file
  link.download = 'resume.pdf'; // Replace with the desired file name
  link.click();
  }
}


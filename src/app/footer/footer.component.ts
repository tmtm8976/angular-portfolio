import { Component } from '@angular/core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faGithub as fabGithub, faFacebook, faLinkedin  } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  githubIcon = fabGithub;
  facebookIcon = faFacebook;
  linkedinIcon = faLinkedin;
  constructor() { }
  ngOnInit() {
  }
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PersonaliaComponent } from './personalia/personalia.component';

@Component({
  selector: 'programmer',
  templateUrl: "app/programmer/programmer.component.html",
  styleUrls: ['app/app.component.css']
})
export class ProgrammerComponent {
  title = 'Website van Esra Hofstede';
}

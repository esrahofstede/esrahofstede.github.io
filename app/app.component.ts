import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { RecruiterComponent } from './recruiter/recruiter.component';
import { ProgrammerComponent } from './programmer/programmer.component';
import { SomeoneComponent } from './someone/someone.component';
import { SelectorComponent } from './selector/selector.component';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  template: '<div class="container"><router-outlet></router-outlet></div>',
  styleUrls: ['css/reset.css'],
  providers: []
})
export class AppComponent {
  title = 'Website van Esra Hofstede';

}

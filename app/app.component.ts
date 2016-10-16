import { Component } from '@angular/core';

import { RecruiterComponent } from './recruiter';
import { SelectorComponent } from './selector/selector.component';

@Component({
  selector: 'my-app',
  template: '<div class="container"><router-outlet></router-outlet></div>',
  styleUrls: ['css/reset.css'],
  providers: []
})
export class AppComponent {
  title = 'Website van Esra Hofstede';

}

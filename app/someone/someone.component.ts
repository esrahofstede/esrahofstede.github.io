import { Component } from '@angular/core';

import { PersonaliaService } from './../shared/personalia.service';


@Component({
  selector: 'someone',
  template: `
    <p>voor router van recruiter</p>
    <router-outlet></router-outlet>
    <p>na router van recruiter</p>
  `,
  styleUrls: ['app/app.component.css'],
  providers: [
    PersonaliaService
  ]
})
export class SomeoneComponent {
  
}

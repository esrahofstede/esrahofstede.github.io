import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { PersonaliaComponent } from './personalia/personalia.component';
import { PitchComponent } from './pitch/pitch.component';
import { SkillsComponent } from './skills/skills.component';


@Component({
  selector: 'my-app',
  templateUrl: 'app/recruiter/recruiter.component.html',
  styleUrls: ['app/reset.css', 'app/recruiter/recruiter.component.css'],
  directives: [ROUTER_DIRECTIVES, PersonaliaComponent, PitchComponent, SkillsComponent]
})
export class RecruiterComponent { 
}

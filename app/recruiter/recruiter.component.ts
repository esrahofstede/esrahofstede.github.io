import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { PersonaliaComponent } from './personalia/personalia.component';
import { PitchComponent } from './pitch/pitch.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/recruiter/recruiter.component.html',
  styleUrls: ['css/reset.css', 'app/recruiter/recruiter.component.css']
})
export class RecruiterComponent { 
}

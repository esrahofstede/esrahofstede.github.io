import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Skill } from './../../shared/skill';
import { Skills } from './../../shared/skill';
import { SkillsService } from './../../shared/skills.service';

@Component({
  selector: 'skills',
  templateUrl: 'app/recruiter/skills/skills.component.html',
  styleUrls:  ['app/recruiter/skills/skills.component.css'],
  providers: [SkillsService]
})
export class SkillsComponent {
  skills: Skills;  

  constructor(
    private _router: Router,
    private _skillsService: SkillsService ) { 
    }

  getWidth(i: number, skillType: string){
    var indicator = this.skills[skillType][i].indication;
    return indicator + "0%";
  }

  getSkills() {
    this._skillsService.getSkills().then(skills => this.setSkills(skills));
  }

  setSkills(skills: Skills){
    this.skills = skills;
  }

  ngOnInit() {
    this.getSkills();
  }
}

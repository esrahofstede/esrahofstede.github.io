import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Skill, Skills, Certificaat } from './../../shared/skill';
import { SkillsService } from './../../shared/skills.service';

@Component({
  selector: 'skills',
  templateUrl: 'app/recruiter/skills/skills.component.html',
  styleUrls:  ['app/recruiter/skills/skills.component.css'],
  providers: [SkillsService]
})
export class SkillsComponent {
  skills: Skills;  
  languagesView: LanguageSVG = {
    radius: 80,
    strokewidth: 10,
    strokedasharray: 80 * 2 * 3.14 //radius * perimeter of circle
  };

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

class LanguageSVG {
  radius: number;
  strokewidth: number;
  strokedasharray: number;
}



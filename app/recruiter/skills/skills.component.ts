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
      radius: 40,
      strokewidth: 20,
      strokedasharray: function () {
        return this.radius * 2 * 3.14;
      },
      strokedashoffset : function (percentage: number) {
          return 251.2 - 251.2 * percentage / 100;
        }
    };
  straal = 40;

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

  setLanguageView(){
    this.languagesView = {
      radius: 40,
      strokewidth: 20,
      strokedasharray: function () {
        return this.radius * 2 * 3.14;
      },
      strokedashoffset : function (percentage: number) {
          return 251.2 - 251.2 * percentage / 100;
        }
    };
  }

  setSkills(skills: Skills){
    this.skills = skills;
  }

  ngOnInit() {
    this.getSkills();
  }
}

let LanguagesView : LanguageSVG = {
  radius: 40,
  strokewidth: 20,
  strokedasharray: function () {
    return this.radius * 2 * 3.14;
  },
  strokedashoffset : function (percentage: number) {
    return 251.2 - 251.2 * percentage / 100;
  }
};

class LanguageSVG {
  radius: number;
  strokewidth: number;
  strokedasharray: Function;
  strokedashoffset: Function;
}



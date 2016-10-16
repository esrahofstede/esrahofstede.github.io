import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WorkExperience } from './../../shared/workExperience';
import { WorkExperienceService } from './../../shared/workExperience.service';

@Component({
  selector: 'work',
  templateUrl: 'app/recruiter/work/work.component.html',
  styleUrls:  ['app/recruiter/work/work.component.css'],
  providers: [WorkExperienceService]
})
export class WorkComponent {
  workExperiences: WorkExperience;  
  
  constructor(
    private _router: Router,
    private _workService: WorkExperienceService ) { 
    }

  getWork() {
    this._workService.getWork().then(workExperiences => this.setWork(workExperiences));
  }

  setWork(workExperiences: WorkExperience){
    this.workExperiences = workExperiences;
  }

  ngOnInit() {
    this.getWork();
  }
}


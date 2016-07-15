import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Skill } from './skill';
import { Skills } from './skill';

@Injectable()
export class SkillsService {
  private skillsUrl = 'app/skills';  // URL to web api

  constructor(private http: Http) { }

  getSkills() {
    return this.http.get(this.skillsUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

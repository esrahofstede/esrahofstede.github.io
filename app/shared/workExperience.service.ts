import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/common/http';



import { WorkExperience } from './workExperience';

@Injectable()
export class WorkExperienceService {
  private workExperienceUrl = 'app/workexperience';  // URL to web api

  constructor(private http: Http) { }

  getWork() {
    return this.http.get(this.workExperienceUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

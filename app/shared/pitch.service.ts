import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Pitch } from './pitch';

@Injectable()
export class PitchService {
  private pitchUrl = 'app/pitch';  // URL to web api

  constructor(private http: Http) { }

  getPitch() {
    return this.http.get(this.pitchUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

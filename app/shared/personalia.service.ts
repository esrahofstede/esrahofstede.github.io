import { Injectable } from '@angular/core';
import { Headers, HttpClient } from '@angular/common/http';



import { Personalia } from './personalia';

@Injectable()
export class PersonaliaService {
  private personaliaUrl = 'app/personalia';  // URL to web api

  constructor(private http: Http) { }

  getPersonalia(): Promise<Personalia> {
    return this.http.get(this.personaliaUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

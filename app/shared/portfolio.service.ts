import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Portfolio } from './portfolio';

@Injectable()
export class PortfolioService {
  private portfolioUrl = 'app/portfolio';  // URL to web api

  constructor(private http: Http) { }

  getPortfolio(): Promise<Portfolio> {
    return this.http.get(this.portfolioUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

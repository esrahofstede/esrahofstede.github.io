import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Portfolio, Company, Project } from './../../shared/portfolio';
import { PortfolioService } from './../../shared/portfolio.service';

@Component({
  selector: 'portfolio',
  templateUrl: 'app/recruiter/portfolio/portfolio.component.html',
  styleUrls:  ['app/recruiter/portfolio/portfolio.component.css'],
  providers: [PortfolioService]
})
export class PortfolioComponent {
  portfolio: Portfolio;  

  constructor(
    private _router: Router,
    private _portfolioService: PortfolioService) { 
    }

  getPortfolio() {
    this._portfolioService.getPortfolio().then(portfolio => this.setPortfolio(portfolio));
  }

  setPortfolio(portfolio: Portfolio){
    this.portfolio = portfolio;
  }

  ngOnInit() {
    this.getPortfolio();
  }
}

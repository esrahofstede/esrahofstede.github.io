import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Portfolio, Company, Project } from './../../shared/portfolio';
import { PortfolioService } from './../../shared/portfolio.service';

@Component({
  selector: 'portfolio',
  templateUrl: 'app/recruiter/portfolio/portfolio.component.html',
  styleUrls:  ['app/recruiter/portfolio/portfolio.component.css' ],
  providers: [PortfolioService]
})
export class PortfolioComponent {
  portfolio: Portfolio;
  showWebsite: boolean;
  showProject: boolean;
  showAlles: boolean;

  constructor(
    private _router: Router,
    private _portfolioService: PortfolioService) { 
      this.showWebsite = true;
      this.showProject = true;
      this.showAlles = true;
    }

  getPortfolio() {
    this._portfolioService.getPortfolio().then(portfolio => this.setPortfolio(portfolio));
  }

  setPortfolio(portfolio: Portfolio){
    this.portfolio = portfolio;
  }

  activate(portfolioType: string){
    console.log(portfolioType);
    if(portfolioType == "alles"){
      console.log("alles == " + portfolioType);
      this.showWebsite = true;
      this.showProject = true;
      this.showAlles = true;
    } else if(portfolioType == "website"){
      console.log("website == " + portfolioType);
      this.showWebsite = true;
      this.showProject = false;
      this.showAlles = false;
    } else {
       console.log("else == " + portfolioType);
      this.showProject = true;
      this.showWebsite = false;
      this.showAlles = false;
    }
    console.log("project: " + this.showProject);
    console.log("website: " + this.showWebsite);
  }
  
  ngOnInit() {
    this.getPortfolio();
  }
}

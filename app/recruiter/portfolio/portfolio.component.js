"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var portfolio_service_1 = require('./../../shared/portfolio.service');
var PortfolioComponent = (function () {
    function PortfolioComponent(_router, _portfolioService) {
        this._router = _router;
        this._portfolioService = _portfolioService;
        this.showWebsite = true;
        this.showProject = true;
        this.showAlles = true;
    }
    PortfolioComponent.prototype.getPortfolio = function () {
        var _this = this;
        this._portfolioService.getPortfolio().then(function (portfolio) { return _this.setPortfolio(portfolio); });
    };
    PortfolioComponent.prototype.setPortfolio = function (portfolio) {
        this.portfolio = portfolio;
    };
    PortfolioComponent.prototype.activate = function (portfolioType) {
        console.log(portfolioType);
        if (portfolioType == "alles") {
            console.log("alles == " + portfolioType);
            this.showWebsite = true;
            this.showProject = true;
            this.showAlles = true;
        }
        else if (portfolioType == "website") {
            console.log("website == " + portfolioType);
            this.showWebsite = true;
            this.showProject = false;
            this.showAlles = false;
        }
        else {
            console.log("else == " + portfolioType);
            this.showProject = true;
            this.showWebsite = false;
            this.showAlles = false;
        }
        console.log("project: " + this.showProject);
        console.log("website: " + this.showWebsite);
    };
    PortfolioComponent.prototype.ngOnInit = function () {
        this.getPortfolio();
    };
    PortfolioComponent = __decorate([
        core_1.Component({
            selector: 'portfolio',
            templateUrl: 'app/recruiter/portfolio/portfolio.component.html',
            styleUrls: ['app/recruiter/portfolio/portfolio.component.css'],
            providers: [portfolio_service_1.PortfolioService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, portfolio_service_1.PortfolioService])
    ], PortfolioComponent);
    return PortfolioComponent;
}());
exports.PortfolioComponent = PortfolioComponent;
//# sourceMappingURL=portfolio.component.js.map
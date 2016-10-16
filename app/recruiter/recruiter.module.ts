import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruiterComponent } from './recruiter.component';
import { PersonaliaComponent } from './personalia/personalia.component';
import { PitchComponent } from './pitch/pitch.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { MasonryModule } from 'angular2-masonry';

@NgModule({
    imports: [CommonModule, MasonryModule],
    declarations: [
        RecruiterComponent, 
        PersonaliaComponent, 
        PitchComponent,
        PortfolioComponent, 
        SkillsComponent, 
        WorkComponent
    ],
    exports: [RecruiterComponent]
})

export class RecruiterModule { }
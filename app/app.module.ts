import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }   from './app.component';
import { RecruiterModule } from './recruiter/recruiter.module';
import { SelectorModule } from './selector/selector.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports:      [
        BrowserModule,
        HttpModule, 
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        RouterModule.forRoot(routes), 
        RecruiterModule,
        SelectorModule
    ],
    bootstrap:    [AppComponent],
})
export class AppModule {}
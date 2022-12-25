import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Personalia } from '../../shared/personalia';
import { PersonaliaService } from '../../shared/personalia.service';

@Component({
  selector: 'personalia',
  templateUrl: 'app/recruiter/personalia/personalia.component.html',
  styleUrls:  ['app/recruiter/personalia/personalia.component.css'],
  providers: [PersonaliaService]
})
export class PersonaliaComponent {
  personalia: Personalia;  

  constructor(
    private _router: Router,
    private _personaliaService: PersonaliaService) { 
    }

  getPersonalia() {
    this._personaliaService.getPersonalia().then(personalia => this.setPersonalia(personalia));
  }

  setPersonalia(personalia: Personalia){
    this.personalia = personalia;
  }

  ngOnInit() {
    this.getPersonalia();
  }
}

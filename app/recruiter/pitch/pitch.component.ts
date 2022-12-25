import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pitch } from '../../shared/pitch';
import { PitchService } from '../../shared/pitch.service';

@Component({
  selector: 'pitch',
  templateUrl: 'app/recruiter/pitch/pitch.component.html',
  styleUrls:  ['app/recruiter/pitch/pitch.component.css'],
  providers: [PitchService]
})
export class PitchComponent {
  pitch: Pitch;  

  constructor(
    private _router: Router,
    private _pitchService: PitchService) { 
    }

  getPitch() {
    this._pitchService.getPitch().then(pitch => this.setPitch(pitch));
  }

  setPitch(pitch: Pitch){
    this.pitch = pitch;
  }

  ngOnInit() {
    this.getPitch();
  }
}

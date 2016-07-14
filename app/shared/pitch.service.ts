import { Injectable } from 'angular2/core';

import { Pitch } from './pitch';
import { ElevatorPitch } from './mock-pitch';

@Injectable()
export class PitchService {
  getPitch() {
    return Promise.resolve(ElevatorPitch);
  }

  getPitchSlowly() {
    return new Promise<Pitch>(resolve =>
      setTimeout(()=>resolve(ElevatorPitch), 2000) // 2 seconds
    );
  }
}

import { Injectable } from 'angular2/core';

import { Personalia } from './personalia';
import { PersonBasicInformation } from './mock-personalia';

@Injectable()
export class PersonaliaService {
  getPersonalia() {
    return Promise.resolve(PersonBasicInformation);
  }

  getPersonaliaSlowly() {
    return new Promise<Personalia>(resolve =>
      setTimeout(()=>resolve(PersonBasicInformation), 2000) // 2 seconds
    );
  }
}

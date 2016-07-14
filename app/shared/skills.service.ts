import { Injectable } from 'angular2/core';

import { Skill } from './skill';
import { Skills } from './skill';
import { MySkills } from './mock-skills';

@Injectable()
export class SkillsService {
  getSkills() {
    return Promise.resolve(MySkills);
  }

  getSkillsSlowly() {
    return new Promise<Skills>(resolve =>
      setTimeout(()=>resolve(MySkills), 2000) // 2 seconds
    );
  }
}

export class Skills {
  ProgrammingLanguages: Skill[];
  SpeakingLanguages: Skill[];
  Frameworks: Skill[];
  Software: Skill[];
  Personal: Skill[];
  Knowledge: string[];
  Certificaten: Certificaat[];
}

export class Skill {
  name: string;
  indication: number;
}

export class Certificaat {
  name: string;
  date: string;
  place: string;
  description: string;
}
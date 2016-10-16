export class Portfolio {
  Projects: Project[];
  Websites: Project[];
}

export class Project {
  Name: string;
  Description: string;
  Url: string;
  Customer: Company;
  Employer: Company;
  Image: {
    Url: string;
    widthRatio: number;
    heightRatio: number;
  }
}

export class Company {
  Name: string;
  Url: string;
}
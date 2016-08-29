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
  Image: string;
}

export class Company {
  Name: string;
  Url: string;
}
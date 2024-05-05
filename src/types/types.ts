export interface IJDData {
  jdUid: string;
  jdLink: string;
  jobDetailsFromCompany: string;
  maxJdSalary: number;
  minJdSalary?: number;
  salaryCurrencyCode: string;
  location: string;
  minExp: number;
  maxExp: number;
  jobRole: string;
  companyName: string;
  logoUrl: string;
}

export interface IFilters {
  role: string;
  numberOfEmployees: {
    min: string;
    max: string;
  };
  experience: {
    min: number;
    max: number;
  };
  remote: boolean;
  minimumBasePay: number;
  searchCompanyName: string;
}

export interface IFormObject {
  label: string;
  id: string;
  options: any[];
}

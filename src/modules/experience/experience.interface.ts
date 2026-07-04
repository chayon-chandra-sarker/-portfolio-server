export interface IExperience {
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date | null;
  isCurrent?: boolean;
  description: string;
  companyLogo?: string;
  location?: string;
}
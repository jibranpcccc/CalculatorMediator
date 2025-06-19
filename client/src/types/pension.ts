export interface PensionCalculationData {
  birthDate: string;
  salary: string;
  workYears: string;
  gender: string;
}

export interface PensionResult {
  estimatedPension: number;
  retirementAge: number;
  yearsToRetirement: number;
  totalContributions?: number;
  pensionPoints?: number;
  penalty?: number;
}

export interface Article {
  title: string;
  description: string;
  category: string;
  date: string;
  href: string;
  imageUrl: string;
}

export interface SiloData {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
  href: string;
  color: string;
}

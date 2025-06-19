import type { PensionCalculationData, PensionResult } from "@/types/pension";

export function calculatePension(data: PensionCalculationData): PensionResult {
  // Validate input data
  if (!data.birthDate || !data.salary || !data.workYears || !data.gender) {
    throw new Error("Missing required calculation data");
  }

  const birthYear = new Date(data.birthDate).getFullYear();
  const currentYear = new Date().getFullYear();
  
  // Validate birth year
  if (isNaN(birthYear) || birthYear < 1920 || birthYear > currentYear) {
    throw new Error("Invalid birth date");
  }
  
  const age = currentYear - birthYear;
  const salary = parseFloat(data.salary);
  const workYears = parseInt(data.workYears);

  // Validate numeric inputs
  if (isNaN(salary) || salary <= 0 || salary > 100000) {
    throw new Error("Invalid salary amount");
  }
  
  if (isNaN(workYears) || workYears < 0 || workYears > 50) {
    throw new Error("Invalid work years");
  }

  // Romanian retirement age calculation based on current legislation
  const retirementAge = data.gender === "male" ? 65 : 63; // Simplified for 2025
  const yearsToRetirement = Math.max(0, retirementAge - age);

  // Basic pension calculation formula (simplified)
  // Real formula would be more complex and include contribution points
  const averageSalary = salary; // In real calculation, this would be career average
  const contributionRate = 0.25; // 25% contribution rate
  const totalContributions = averageSalary * contributionRate * 12 * (workYears + yearsToRetirement);
  
  // Pension calculation using Romanian pension point system (simplified)
  const pensionPoints = totalContributions / 10000; // Simplified conversion
  const estimatedPension = Math.max(0, Math.round(pensionPoints * 81.7)); // Current pension point value (approximated)

  return {
    estimatedPension,
    retirementAge,
    yearsToRetirement,
    totalContributions: Math.round(totalContributions),
    pensionPoints: Math.round(pensionPoints * 100) / 100,
  };
}

export function calculateEarlyRetirement(data: PensionCalculationData, targetAge: number): PensionResult {
  const result = calculatePension(data);
  const penaltyPerYear = 0.06; // 6% penalty per year for early retirement
  const yearsBefore = result.retirementAge - targetAge;
  const penalty = Math.min(yearsBefore * penaltyPerYear, 0.3); // Max 30% penalty
  
  return {
    ...result,
    estimatedPension: Math.round(result.estimatedPension * (1 - penalty)),
    retirementAge: targetAge,
    yearsToRetirement: Math.max(0, targetAge - (new Date().getFullYear() - new Date(data.birthDate).getFullYear())),
    penalty: penalty * 100,
  };
}

export function calculatePillarIII(monthlyContribution: number, years: number, returnRate: number = 0.05): number {
  // Compound interest calculation for private pension (Pillar III)
  const monthlyRate = returnRate / 12;
  const totalMonths = years * 12;
  
  const futureValue = monthlyContribution * 
    (Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate;
  
  return Math.round(futureValue);
}

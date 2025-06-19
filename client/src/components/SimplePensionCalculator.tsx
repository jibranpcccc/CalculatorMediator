import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator } from "lucide-react";

interface FormData {
  birthDate: string;
  salary: string;
  workYears: string;
  gender: string;
}

interface Result {
  estimatedPension: number;
  retirementAge: number;
  yearsToRetirement: number;
}

export default function SimplePensionCalculator() {
  const [formData, setFormData] = useState<FormData>({
    birthDate: "",
    salary: "",
    workYears: "",
    gender: "",
  });
  
  const [result, setResult] = useState<Result | null>(null);

  const calculatePension = (data: FormData): Result => {
    const birthYear = new Date(data.birthDate).getFullYear();
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    const salary = parseFloat(data.salary);
    const workYears = parseInt(data.workYears);

    const retirementAge = data.gender === "male" ? 65 : 63;
    const yearsToRetirement = Math.max(0, retirementAge - age);
    
    const averageSalary = salary;
    const contributionRate = 0.25;
    const totalContributions = averageSalary * contributionRate * 12 * (workYears + yearsToRetirement);
    const pensionPoints = totalContributions / 10000;
    const estimatedPension = Math.max(0, Math.round(pensionPoints * 81.7));

    return {
      estimatedPension,
      retirementAge,
      yearsToRetirement,
    };
  };

  const handleCalculate = () => {
    if (!formData.birthDate || !formData.salary || !formData.workYears || !formData.gender) {
      alert('Te rugăm să completezi toate câmpurile!');
      return;
    }

    const salary = parseFloat(formData.salary);
    const workYears = parseInt(formData.workYears);
    
    if (isNaN(salary) || salary <= 0) {
      alert('Te rugăm să introduci un salariu valid!');
      return;
    }
    
    if (isNaN(workYears) || workYears < 0) {
      alert('Te rugăm să introduci o vechime validă!');
      return;
    }

    try {
      const calculationResult = calculatePension(formData);
      setResult(calculationResult);
    } catch (error) {
      alert('A apărut o eroare la calcularea pensiei!');
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
      {/* Calculator Form */}
      <div className="form-section">
        <div className="text-center mb-6">
          <div className="icon-wrapper mx-auto mb-4 w-10 h-10 sm:w-12 sm:h-12">
            <Calculator className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 mb-3">Calculează Pensia Ta</h3>
          <p className="text-sm sm:text-base text-gray-600 font-medium px-2">Completează datele pentru un calcul precis și instant</p>
        </div>
        
        <div className="space-y-4 sm:space-y-5">
          <div className="space-y-1.5">
            <Label htmlFor="birthDate" className="text-sm font-semibold text-gray-800">
              📅 Data nașterii
            </Label>
            <Input
              type="date"
              id="birthDate"
              value={formData.birthDate}
              onChange={(e) => setFormData(prev => ({ ...prev, birthDate: e.target.value }))}
              className="input-modern w-full text-sm sm:text-base"
            />
          </div>
          
          <div className="space-y-1.5">
            <Label htmlFor="salary" className="text-sm font-semibold text-gray-800">
              💰 Salariul brut lunar actual (RON)
            </Label>
            <Input
              type="number"
              id="salary"
              placeholder="ex: 5000"
              value={formData.salary}
              onChange={(e) => setFormData(prev => ({ ...prev, salary: e.target.value }))}
              className="input-modern w-full text-sm sm:text-base"
            />
          </div>
          
          <div className="space-y-1.5">
            <Label htmlFor="workYears" className="text-sm font-semibold text-gray-800">
              ⏱️ Vechime în muncă (ani)
            </Label>
            <Input
              type="number"
              id="workYears"
              placeholder="ex: 15"
              value={formData.workYears}
              onChange={(e) => setFormData(prev => ({ ...prev, workYears: e.target.value }))}
              className="input-modern w-full text-sm sm:text-base"
            />
          </div>
          
          <div className="space-y-1.5">
            <Label htmlFor="gender" className="text-sm font-semibold text-gray-800">
              👤 Sexul
            </Label>
            <select
              id="gender"
              value={formData.gender}
              onChange={(e) => setFormData(prev => ({ ...prev, gender: e.target.value }))}
              className="input-modern w-full text-sm sm:text-base"
            >
              <option value="">Selectează...</option>
              <option value="male">Masculin</option>
              <option value="female">Feminin</option>
            </select>
          </div>
        </div>
        
        <Button 
          onClick={handleCalculate}
          disabled={!formData.birthDate || !formData.salary || !formData.workYears || !formData.gender}
          className="btn-modern w-full py-3 sm:py-4 text-sm sm:text-base font-bold shadow-xl rounded-xl mt-5"
          size="lg"
        >
          <div className="flex items-center justify-center gap-2">
            <Calculator className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Calculează Pensia Acum</span>
          </div>
        </Button>
      </div>
      
      {/* Results Section */}
      <div className="gradient-card rounded-xl p-6 sm:p-8 border shadow-xl">
        <div className="text-center mb-6">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 via-red-500 to-amber-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
            <span className="text-xl sm:text-2xl">📊</span>
          </div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 mb-2">Rezultatele Calculului</h3>
          <p className="text-sm sm:text-base text-gray-600 font-medium">Analiza detaliată și precisă a pensiei tale</p>
        </div>
        
        {result ? (
          <div className="space-y-5">
            <div className="result-card text-center">
              <div className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Pensia Estimată</div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 bg-clip-text text-transparent mb-2">
                {result.estimatedPension.toLocaleString()}
              </div>
              <div className="text-sm sm:text-base font-bold text-gray-700">RON per lună</div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="stats-card text-center">
                <div className="text-xl sm:text-2xl mb-2">🎂</div>
                <div className="text-xs text-gray-600 mb-1 font-semibold">Vârsta pensionare</div>
                <div className="text-sm sm:text-base font-black text-gray-900">{result.retirementAge} ani</div>
              </div>
              
              <div className="stats-card text-center">
                <div className="text-xl sm:text-2xl mb-2">⏳</div>
                <div className="text-xs text-gray-600 mb-1 font-semibold">Ani până la pensie</div>
                <div className="text-sm sm:text-base font-black text-gray-900">{result.yearsToRetirement} ani</div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 shadow-lg">
              <div className="text-sm text-green-800 font-bold text-center">
                ⚠️ Calculul este estimativ și se bazează pe legislația actuală din 2025
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-8xl mb-6">📋</div>
            <div className="text-2xl text-gray-600 mb-4 font-bold">Completează formularul</div>
            <div className="text-lg text-gray-500 font-medium">pentru a vedea rezultatele calculului</div>
          </div>
        )}
      </div>
    </div>
  );
}
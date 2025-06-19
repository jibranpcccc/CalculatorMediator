import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator } from "lucide-react";
import { calculatePension } from "@/lib/pensionCalculations";
import { trackEvent } from "@/lib/analytics";
import type { PensionCalculationData, PensionResult } from "@/types/pension";

export default function PensionCalculator() {
  const [formData, setFormData] = useState<PensionCalculationData>({
    birthDate: "",
    salary: "",
    workYears: "",
    gender: "",
  });
  
  const [result, setResult] = useState<PensionResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof PensionCalculationData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    trackEvent('calculator_interaction', 'form', field);
  };

  const handleCalculate = async () => {
    if (!formData.birthDate || !formData.salary || !formData.workYears || !formData.gender) {
      return;
    }

    setIsCalculating(true);
    trackEvent('calculator_submission', 'pension_calculator');

    try {
      const calculationResult = calculatePension(formData);
      setResult(calculationResult);
    } catch (error) {
      console.error('Calculation error:', error);
    } finally {
      setIsCalculating(false);
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
            <Label htmlFor="birthDate" className="text-sm font-semibold text-gray-800 flex items-center gap-1.5">
              <span className="text-sm">📅</span>
              Data nașterii
            </Label>
            <Input
              type="date"
              id="birthDate"
              value={formData.birthDate}
              onChange={(e) => handleInputChange('birthDate', e.target.value)}
              className="input-modern w-full text-sm sm:text-base"
            />
          </div>
          
          <div className="space-y-1.5">
            <Label htmlFor="salary" className="text-sm font-semibold text-gray-800 flex items-center gap-1.5">
              <span className="text-sm">💰</span>
              <span className="hidden sm:inline">Salariul brut lunar actual (RON)</span>
              <span className="sm:hidden">Salariul lunar (RON)</span>
            </Label>
            <Input
              type="number"
              id="salary"
              placeholder="ex: 5000"
              value={formData.salary}
              onChange={(e) => handleInputChange('salary', e.target.value)}
              className="input-modern w-full text-sm sm:text-base"
            />
          </div>
          
          <div className="space-y-1.5">
            <Label htmlFor="workYears" className="text-sm font-semibold text-gray-800 flex items-center gap-1.5">
              <span className="text-sm">⏱️</span>
              Vechime în muncă (ani)
            </Label>
            <Input
              type="number"
              id="workYears"
              placeholder="ex: 15"
              value={formData.workYears}
              onChange={(e) => handleInputChange('workYears', e.target.value)}
              className="input-modern w-full text-sm sm:text-base"
            />
          </div>
          
          <div className="space-y-1.5">
            <Label htmlFor="gender" className="text-sm font-semibold text-gray-800 flex items-center gap-1.5">
              <span className="text-sm">👤</span>
              Sexul
            </Label>
            <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
              <SelectTrigger className="input-modern text-sm sm:text-base">
                <SelectValue placeholder="Selectează..." />
              </SelectTrigger>
              <SelectContent className="bg-white border-2 border-gray-200 rounded-xl shadow-xl">
                <SelectItem value="male" className="hover:bg-blue-50 cursor-pointer text-sm py-2">Masculin</SelectItem>
                <SelectItem value="female" className="hover:bg-blue-50 cursor-pointer text-sm py-2">Feminin</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Button 
          onClick={handleCalculate}
          disabled={isCalculating || !formData.birthDate || !formData.salary || !formData.workYears || !formData.gender}
          className="btn-modern w-full py-3 sm:py-4 text-sm sm:text-base font-bold shadow-xl rounded-xl mt-5"
          size="lg"
        >
          {isCalculating ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span className="hidden sm:inline">Se calculează...</span>
              <span className="sm:hidden">Calculez...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <Calculator className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">Calculează Pensia Acum</span>
              <span className="sm:hidden">Calculează</span>
            </div>
          )}
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

            {result.totalContributions && (
              <div className="stats-card text-center">
                <div className="text-xl sm:text-2xl mb-2">💳</div>
                <div className="text-xs text-gray-600 mb-1 font-semibold">Total contribuții estimate</div>
                <div className="text-sm sm:text-base font-bold text-gray-900">{result.totalContributions.toLocaleString()} RON</div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="text-3xl sm:text-4xl mb-3">🧮</div>
            <div className="text-base sm:text-lg text-gray-600 mb-2 font-bold">Completează formularul</div>
            <div className="text-sm text-gray-500 font-medium">pentru a vedea rezultatele calculului</div>
          </div>
        )}
        
        <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-200 shadow-md">
          <div className="text-xs sm:text-sm text-orange-800 font-semibold text-center">
            ⚠️ Calculul este estimativ și se bazează pe legislația actuală din 2025
          </div>
        </div>
      </div>
    </div>
  );
}

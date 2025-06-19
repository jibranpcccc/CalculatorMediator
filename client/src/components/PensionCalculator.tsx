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
    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
      {/* Calculator Form */}
      <div className="form-section">
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <div className="icon-wrapper mx-auto mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16">
            <Calculator className="h-6 w-6 sm:h-8 sm:w-8" />
          </div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 mb-3 sm:mb-4">Calculează Pensia Ta</h3>
          <p className="text-base sm:text-lg text-gray-600 font-medium px-2">Completează datele pentru un calcul precis și instant</p>
        </div>
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-2 sm:space-y-3">
            <Label htmlFor="birthDate" className="text-sm sm:text-base font-bold text-gray-800 flex items-center gap-2">
              <span className="text-lg sm:text-xl">📅</span>
              Data nașterii
            </Label>
            <Input
              type="date"
              id="birthDate"
              value={formData.birthDate}
              onChange={(e) => handleInputChange('birthDate', e.target.value)}
              className="input-modern w-full text-base sm:text-lg"
            />
          </div>
          
          <div className="space-y-2 sm:space-y-3">
            <Label htmlFor="salary" className="text-sm sm:text-base font-bold text-gray-800 flex items-center gap-2">
              <span className="text-lg sm:text-xl">💰</span>
              <span className="hidden sm:inline">Salariul brut lunar actual (RON)</span>
              <span className="sm:hidden">Salariul lunar (RON)</span>
            </Label>
            <Input
              type="number"
              id="salary"
              placeholder="ex: 5000"
              value={formData.salary}
              onChange={(e) => handleInputChange('salary', e.target.value)}
              className="input-modern w-full text-base sm:text-lg"
            />
          </div>
          
          <div className="space-y-2 sm:space-y-3">
            <Label htmlFor="workYears" className="text-sm sm:text-base font-bold text-gray-800 flex items-center gap-2">
              <span className="text-lg sm:text-xl">⏱️</span>
              Vechime în muncă (ani)
            </Label>
            <Input
              type="number"
              id="workYears"
              placeholder="ex: 15"
              value={formData.workYears}
              onChange={(e) => handleInputChange('workYears', e.target.value)}
              className="input-modern w-full text-base sm:text-lg"
            />
          </div>
          
          <div className="space-y-2 sm:space-y-3">
            <Label htmlFor="gender" className="text-sm sm:text-base font-bold text-gray-800 flex items-center gap-2">
              <span className="text-lg sm:text-xl">👤</span>
              Sexul
            </Label>
            <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
              <SelectTrigger className="input-modern text-base sm:text-lg">
                <SelectValue placeholder="Selectează..." />
              </SelectTrigger>
              <SelectContent className="bg-white border-2 border-gray-200 rounded-2xl shadow-xl">
                <SelectItem value="male" className="hover:bg-blue-50 cursor-pointer text-sm sm:text-base py-3">Masculin</SelectItem>
                <SelectItem value="female" className="hover:bg-blue-50 cursor-pointer text-sm sm:text-base py-3">Feminin</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Button 
          onClick={handleCalculate}
          disabled={isCalculating || !formData.birthDate || !formData.salary || !formData.workYears || !formData.gender}
          className="btn-modern w-full py-4 sm:py-5 lg:py-6 text-base sm:text-lg lg:text-xl font-black shadow-2xl rounded-2xl sm:rounded-3xl mt-6 sm:mt-8"
          size="lg"
        >
          {isCalculating ? (
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span className="hidden sm:inline">Se calculează...</span>
              <span className="sm:hidden">Calculez...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <Calculator className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="hidden sm:inline">🚀 Calculează Pensia Acum</span>
              <span className="sm:hidden">🚀 Calculează</span>
            </div>
          )}
        </Button>
      </div>
      
      {/* Results Section */}
      <div className="gradient-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border shadow-2xl">
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 via-red-500 to-amber-500 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl">
            <span className="text-2xl sm:text-3xl">📊</span>
          </div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 mb-3 sm:mb-4">Rezultatele Calculului</h3>
          <p className="text-base sm:text-lg text-gray-600 font-medium px-2">Analiza detaliată și precisă a pensiei tale</p>
        </div>
        
        {result ? (
          <div className="space-y-6 sm:space-y-8">
            <div className="result-card text-center">
              <div className="text-xs sm:text-sm lg:text-base font-bold text-gray-600 uppercase tracking-wider mb-3 sm:mb-4">Pensia Estimată</div>
              <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 bg-clip-text text-transparent mb-3 sm:mb-4">
                {result.estimatedPension.toLocaleString()}
              </div>
              <div className="text-base sm:text-lg lg:text-xl font-bold text-gray-700">RON per lună</div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="stats-card text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4">🎂</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600 mb-1 sm:mb-2 font-semibold">Vârsta pensionare</div>
                <div className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900">{result.retirementAge} ani</div>
              </div>
              
              <div className="stats-card text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4">⏳</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600 mb-1 sm:mb-2 font-semibold">Ani până la pensie</div>
                <div className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900">{result.yearsToRetirement} ani</div>
              </div>
            </div>

            {result.totalContributions && (
              <div className="stats-card text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4">💳</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600 mb-1 sm:mb-2 font-semibold">Total contribuții estimate</div>
                <div className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">{result.totalContributions.toLocaleString()} RON</div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-8 sm:py-12 lg:py-16">
            <div className="text-4xl sm:text-6xl lg:text-8xl mb-4 sm:mb-6">🧮</div>
            <div className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-3 sm:mb-4 font-bold px-2">Completează formularul</div>
            <div className="text-sm sm:text-base lg:text-lg text-gray-500 font-medium px-2">pentru a vedea rezultatele calculului</div>
          </div>
        )}
        
        <div className="mt-10 p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl border-2 border-orange-100 shadow-lg">
          <div className="text-sm text-orange-800 font-bold text-center">
            ⚠️ Calculul este estimativ și se bazează pe legislația actuală din 2025
          </div>
        </div>
      </div>
    </div>
  );
}

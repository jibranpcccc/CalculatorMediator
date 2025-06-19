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
    <div className="grid md:grid-cols-2 gap-16">
      {/* Calculator Form */}
      <div className="form-section">
        <div className="text-center mb-10">
          <div className="icon-wrapper mx-auto mb-6">
            <Calculator className="h-8 w-8" />
          </div>
          <h3 className="text-3xl font-black text-gray-900 mb-4">Calculează Pensia Ta</h3>
          <p className="text-lg text-gray-600 font-medium">Completează datele pentru un calcul precis și instant</p>
        </div>
        <div className="space-y-8">
          <div className="space-y-3">
            <Label htmlFor="birthDate" className="text-base font-bold text-gray-800 flex items-center gap-2">
              <span className="text-xl">📅</span>
              Data nașterii
            </Label>
            <Input
              type="date"
              id="birthDate"
              value={formData.birthDate}
              onChange={(e) => handleInputChange('birthDate', e.target.value)}
              className="input-modern w-full text-lg"
            />
          </div>
          
          <div className="space-y-3">
            <Label htmlFor="salary" className="text-base font-bold text-gray-800 flex items-center gap-2">
              <span className="text-xl">💰</span>
              Salariul brut lunar actual (RON)
            </Label>
            <Input
              type="number"
              id="salary"
              placeholder="ex: 5000"
              value={formData.salary}
              onChange={(e) => handleInputChange('salary', e.target.value)}
              className="input-modern w-full text-lg"
            />
          </div>
          
          <div className="space-y-3">
            <Label htmlFor="workYears" className="text-base font-bold text-gray-800 flex items-center gap-2">
              <span className="text-xl">⏱️</span>
              Vechime în muncă (ani)
            </Label>
            <Input
              type="number"
              id="workYears"
              placeholder="ex: 15"
              value={formData.workYears}
              onChange={(e) => handleInputChange('workYears', e.target.value)}
              className="input-modern w-full text-lg"
            />
          </div>
          
          <div className="space-y-3">
            <Label htmlFor="gender" className="text-base font-bold text-gray-800 flex items-center gap-2">
              <span className="text-xl">👤</span>
              Sexul
            </Label>
            <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
              <SelectTrigger className="input-modern text-lg">
                <SelectValue placeholder="Selectează..." />
              </SelectTrigger>
              <SelectContent className="bg-white border-2 border-gray-200 rounded-2xl shadow-xl">
                <SelectItem value="male" className="hover:bg-blue-50 cursor-pointer text-base py-3">Masculin</SelectItem>
                <SelectItem value="female" className="hover:bg-blue-50 cursor-pointer text-base py-3">Feminin</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Button 
          onClick={handleCalculate}
          disabled={isCalculating || !formData.birthDate || !formData.salary || !formData.workYears || !formData.gender}
          className="btn-modern w-full py-6 text-xl font-black shadow-2xl rounded-3xl mt-8"
          size="lg"
        >
          {isCalculating ? (
            <div className="flex items-center justify-center gap-3">
              <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Se calculează...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-3">
              <Calculator className="h-6 w-6" />
              <span>🚀 Calculează Pensia Acum</span>
            </div>
          )}
        </Button>
      </div>
      
      {/* Results Section */}
      <div className="gradient-card rounded-3xl p-10 border shadow-2xl">
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
            <span className="text-3xl">📊</span>
          </div>
          <h3 className="text-3xl font-black text-gray-900 mb-4">Rezultatele Calculului</h3>
          <p className="text-lg text-gray-600 font-medium">Analiza detaliată și precisă a pensiei tale</p>
        </div>
        
        {result ? (
          <div className="space-y-8">
            <div className="result-card text-center">
              <div className="text-base font-bold text-gray-600 uppercase tracking-wider mb-4">Pensia Estimată</div>
              <div className="text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-4">
                {result.estimatedPension.toLocaleString()}
              </div>
              <div className="text-xl font-bold text-gray-700">RON per lună</div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="stats-card text-center">
                <div className="text-4xl mb-4">🎂</div>
                <div className="text-base text-gray-600 mb-2 font-semibold">Vârsta pensionare</div>
                <div className="text-2xl font-black text-gray-900">{result.retirementAge} ani</div>
              </div>
              
              <div className="stats-card text-center">
                <div className="text-4xl mb-4">⏳</div>
                <div className="text-base text-gray-600 mb-2 font-semibold">Ani până la pensie</div>
                <div className="text-2xl font-black text-gray-900">{result.yearsToRetirement} ani</div>
              </div>
            </div>

            {result.totalContributions && (
              <div className="stats-card text-center">
                <div className="text-4xl mb-4">💳</div>
                <div className="text-base text-gray-600 mb-2 font-semibold">Total contribuții estimate</div>
                <div className="text-xl font-bold text-gray-900">{result.totalContributions.toLocaleString()} RON</div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-8xl mb-6">🧮</div>
            <div className="text-2xl text-gray-600 mb-4 font-bold">Completează formularul</div>
            <div className="text-lg text-gray-500 font-medium">pentru a vedea rezultatele calculului</div>
          </div>
        )}
        
        <div className="mt-10 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl border-2 border-blue-100 shadow-lg">
          <div className="text-sm text-blue-800 font-bold text-center">
            ⚠️ Calculul este estimativ și se bazează pe legislația actuală din 2025
          </div>
        </div>
      </div>
    </div>
  );
}

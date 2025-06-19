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
    <div className="grid md:grid-cols-2 gap-12">
      {/* Calculator Form */}
      <div className="space-y-6">
        <div className="text-center mb-8">
          <div className="icon-wrapper mx-auto mb-4">
            <Calculator className="h-6 w-6" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Calculează Pensia Ta</h3>
          <p className="text-gray-600">Completează datele pentru un calcul precis</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="birthDate" className="text-sm font-semibold text-gray-700">
            📅 Data nașterii
          </Label>
          <Input
            type="date"
            id="birthDate"
            value={formData.birthDate}
            onChange={(e) => handleInputChange('birthDate', e.target.value)}
            className="input-modern w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="salary" className="text-sm font-semibold text-gray-700">
            💰 Salariul brut lunar actual (RON)
          </Label>
          <Input
            type="number"
            id="salary"
            placeholder="ex: 5000"
            value={formData.salary}
            onChange={(e) => handleInputChange('salary', e.target.value)}
            className="input-modern w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="workYears" className="text-sm font-semibold text-gray-700">
            ⏱️ Vechime în muncă (ani)
          </Label>
          <Input
            type="number"
            id="workYears"
            placeholder="ex: 15"
            value={formData.workYears}
            onChange={(e) => handleInputChange('workYears', e.target.value)}
            className="input-modern w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="gender" className="text-sm font-semibold text-gray-700">
            👤 Sexul
          </Label>
          <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
            <SelectTrigger className="input-modern">
              <SelectValue placeholder="Selectează..." />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 rounded-xl shadow-lg">
              <SelectItem value="male" className="hover:bg-blue-50 cursor-pointer">Masculin</SelectItem>
              <SelectItem value="female" className="hover:bg-blue-50 cursor-pointer">Feminin</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button 
          onClick={handleCalculate}
          disabled={isCalculating || !formData.birthDate || !formData.salary || !formData.workYears || !formData.gender}
          className="btn-modern w-full py-4 text-lg font-bold shadow-lg"
          size="lg"
        >
          {isCalculating ? (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Se calculează...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              🚀 Calculează Pensia
            </div>
          )}
        </Button>
      </div>
      
      {/* Results Section */}
      <div className="gradient-card rounded-3xl p-8 border shadow-modern">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📊</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Rezultatele Calculului</h3>
          <p className="text-gray-600">Analiza detaliată a pensiei tale</p>
        </div>
        
        {result ? (
          <div className="space-y-6">
            <div className="result-card text-center">
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">Pensia Estimată</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {result.estimatedPension.toLocaleString()} RON
              </div>
              <div className="text-sm text-gray-500">per lună</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-4 border border-gray-100 text-center">
                <div className="text-2xl mb-2">🎂</div>
                <div className="text-sm text-gray-600 mb-1">Vârsta pensionare</div>
                <div className="text-xl font-bold text-gray-900">{result.retirementAge} ani</div>
              </div>
              
              <div className="bg-white rounded-2xl p-4 border border-gray-100 text-center">
                <div className="text-2xl mb-2">⏳</div>
                <div className="text-sm text-gray-600 mb-1">Ani până la pensie</div>
                <div className="text-xl font-bold text-gray-900">{result.yearsToRetirement} ani</div>
              </div>
            </div>

            {result.totalContributions && (
              <div className="bg-white rounded-2xl p-4 border border-gray-100 text-center">
                <div className="text-sm text-gray-600 mb-1">Total contribuții estimate</div>
                <div className="text-lg font-semibold text-gray-900">{result.totalContributions.toLocaleString()} RON</div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🧮</div>
            <div className="text-lg text-gray-600 mb-2">Completează formularul</div>
            <div className="text-sm text-gray-500">pentru a vedea rezultatele calculului</div>
          </div>
        )}
        
        <div className="mt-8 p-4 bg-blue-50 rounded-2xl border border-blue-100">
          <div className="text-xs text-blue-700 font-medium">
            ⚠️ Calculul este estimativ și se bazează pe legislația actuală din 2025
          </div>
        </div>
      </div>
    </div>
  );
}

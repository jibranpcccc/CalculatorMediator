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
    trackEvent('calculator_interaction', { field, value });
  };

  const handleCalculate = async () => {
    if (!formData.birthDate || !formData.salary || !formData.workYears || !formData.gender) {
      return;
    }

    setIsCalculating(true);
    trackEvent('calculator_submission', formData);

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
    <div className="grid md:grid-cols-2 gap-8">
      {/* Calculator Form */}
      <div className="space-y-6">
        <div>
          <Label htmlFor="birthDate" className="text-sm font-medium text-neutral-700 mb-2">
            Data nașterii
          </Label>
          <Input
            type="date"
            id="birthDate"
            value={formData.birthDate}
            onChange={(e) => handleInputChange('birthDate', e.target.value)}
            className="w-full"
          />
        </div>
        
        <div>
          <Label htmlFor="salary" className="text-sm font-medium text-neutral-700 mb-2">
            Salariul brut lunar actual (RON)
          </Label>
          <Input
            type="number"
            id="salary"
            placeholder="ex: 5000"
            value={formData.salary}
            onChange={(e) => handleInputChange('salary', e.target.value)}
            className="w-full"
          />
        </div>
        
        <div>
          <Label htmlFor="workYears" className="text-sm font-medium text-neutral-700 mb-2">
            Vechime în muncă (ani)
          </Label>
          <Input
            type="number"
            id="workYears"
            placeholder="ex: 15"
            value={formData.workYears}
            onChange={(e) => handleInputChange('workYears', e.target.value)}
            className="w-full"
          />
        </div>
        
        <div>
          <Label htmlFor="gender" className="text-sm font-medium text-neutral-700 mb-2">
            Sexul
          </Label>
          <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Selectează..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Masculin</SelectItem>
              <SelectItem value="female">Feminin</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button 
          onClick={handleCalculate}
          disabled={isCalculating || !formData.birthDate || !formData.salary || !formData.workYears || !formData.gender}
          className="w-full"
          size="lg"
        >
          <Calculator className="mr-2 h-5 w-5" />
          {isCalculating ? "Se calculează..." : "Calculează Pensia"}
        </Button>
      </div>
      
      {/* Results Section */}
      <div className="bg-neutral-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">Rezultatele calculului</h3>
        
        {result ? (
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-neutral-600">Pensia estimată</div>
                <div className="text-2xl font-bold text-primary">{result.estimatedPension.toLocaleString()} RON</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-neutral-600">Vârsta de pensionare</div>
                <div className="text-lg font-semibold text-neutral-900">{result.retirementAge} ani</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-neutral-600">Ani până la pensie</div>
                <div className="text-lg font-semibold text-neutral-900">{result.yearsToRetirement} ani</div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="text-center py-8 text-neutral-500">
            Completează formularul pentru a vedea rezultatele calculului
          </div>
        )}
        
        <div className="mt-6 text-xs text-neutral-500">
          * Calculul este estimativ și se bazează pe legislația actuală
        </div>
      </div>
    </div>
  );
}

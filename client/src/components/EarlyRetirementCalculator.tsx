import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Calculator } from "lucide-react";
import { calculateEarlyRetirement } from "@/lib/pensionCalculations";
import { trackEvent } from "@/lib/analytics";
import type { PensionCalculationData, PensionResult } from "@/types/pension";

export default function EarlyRetirementCalculator() {
  const [formData, setFormData] = useState<PensionCalculationData>({
    birthDate: "",
    salary: "",
    workYears: "",
    gender: "",
  });
  
  const [targetAge, setTargetAge] = useState("");
  const [result, setResult] = useState<PensionResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof PensionCalculationData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCalculate = async () => {
    if (!formData.birthDate || !formData.salary || !formData.workYears || !formData.gender || !targetAge) {
      return;
    }

    setIsCalculating(true);
    trackEvent('early_retirement_calculation', { ...formData, targetAge });

    try {
      const calculationResult = calculateEarlyRetirement(formData, parseInt(targetAge));
      setResult(calculationResult);
    } catch (error) {
      console.error('Calculation error:', error);
    } finally {
      setIsCalculating(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <Calculator className="text-primary" />
          Calculator Pensie Anticipată
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="birthDate">Data nașterii</Label>
              <Input
                type="date"
                id="birthDate"
                value={formData.birthDate}
                onChange={(e) => handleInputChange('birthDate', e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="salary">Salariul brut lunar (RON)</Label>
              <Input
                type="number"
                id="salary"
                placeholder="ex: 5000"
                value={formData.salary}
                onChange={(e) => handleInputChange('salary', e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="workYears">Vechime în muncă (ani)</Label>
              <Input
                type="number"
                id="workYears"
                placeholder="ex: 15"
                value={formData.workYears}
                onChange={(e) => handleInputChange('workYears', e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="gender">Sexul</Label>
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
            
            <div>
              <Label htmlFor="targetAge">Vârsta dorită de pensionare</Label>
              <Input
                type="number"
                id="targetAge"
                placeholder="ex: 62"
                value={targetAge}
                onChange={(e) => setTargetAge(e.target.value)}
              />
            </div>
            
            <Button 
              onClick={handleCalculate}
              disabled={isCalculating || !formData.birthDate || !formData.salary || !formData.workYears || !formData.gender || !targetAge}
              className="w-full"
            >
              {isCalculating ? "Se calculează..." : "Calculează Pensia Anticipată"}
            </Button>
          </div>
          
          {/* Results */}
          <div className="bg-neutral-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Rezultate</h3>
            
            {result ? (
              <div className="space-y-4">
                {result.penalty && result.penalty > 0 && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="text-amber-600 mt-0.5 flex-shrink-0" size={16} />
                      <div>
                        <p className="text-sm font-medium text-amber-800">Penalizare aplicată</p>
                        <p className="text-sm text-amber-700">{result.penalty.toFixed(1)}% reducere permanentă</p>
                      </div>
                    </div>
                  </div>
                )}
                
                <Card>
                  <CardContent className="p-4">
                    <div className="text-sm text-neutral-600">Pensia estimată cu penalizare</div>
                    <div className="text-2xl font-bold text-primary">{result.estimatedPension.toLocaleString()} RON</div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <div className="text-sm text-neutral-600">Vârsta de pensionare</div>
                    <div className="text-lg font-semibold text-neutral-900">{result.retirementAge} ani</div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="text-center py-8 text-neutral-500">
                Completează formularul pentru calcul
              </div>
            )}
            
            <div className="mt-6 text-xs text-neutral-500">
              * Calculul include penalizările pentru pensionarea anticipată
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

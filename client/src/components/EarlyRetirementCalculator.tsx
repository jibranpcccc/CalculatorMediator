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
    <Card className="glass-effect shadow-2xl border-0 rounded-3xl overflow-hidden">
      <CardHeader className="text-center py-8">
        <div className="icon-wrapper mx-auto mb-6">
          <Calculator className="h-8 w-8" />
        </div>
        <CardTitle className="text-3xl font-black text-gray-900 mb-4">
          Calculator Pensie Anticipată
        </CardTitle>
        <p className="text-lg text-gray-600 font-medium">Calculează impactul pensionării anticipate</p>
      </CardHeader>
      <CardContent className="p-10">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Form */}
          <div className="form-section">
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
                  Salariul brut lunar (RON)
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
              
              <div className="space-y-3">
                <Label htmlFor="targetAge" className="text-base font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-xl">🎯</span>
                  Vârsta dorită de pensionare
                </Label>
                <Input
                  type="number"
                  id="targetAge"
                  placeholder="ex: 62"
                  value={targetAge}
                  onChange={(e) => setTargetAge(e.target.value)}
                  className="input-modern w-full text-lg"
                />
              </div>
            </div>
            
            <Button 
              onClick={handleCalculate}
              disabled={isCalculating || !formData.birthDate || !formData.salary || !formData.workYears || !formData.gender || !targetAge}
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
                  <span>Calculează Pensia Anticipată</span>
                </div>
              )}
            </Button>
          </div>
          
          {/* Results */}
          <div className="gradient-card rounded-3xl p-10 border shadow-2xl">
            <div className="text-center mb-10">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 via-pink-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-3xl">⚠️</span>
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-4">Rezultate Pensie Anticipată</h3>
              <p className="text-lg text-gray-600 font-medium">Analiza detaliată cu penalizări incluse</p>
            </div>
            
            {result ? (
              <div className="space-y-8">
                {result.penalty && result.penalty > 0 && (
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-3xl p-6 shadow-lg">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="text-red-600 flex-shrink-0" size={24} />
                      <div>
                        <p className="text-lg font-bold text-red-800 mb-2">Penalizare aplicată</p>
                        <p className="text-base text-red-700 font-medium">{result.penalty.toFixed(1)}% reducere permanentă</p>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="result-card text-center">
                  <div className="text-base font-bold text-gray-600 uppercase tracking-wider mb-4">Pensia Estimată cu Penalizare</div>
                  <div className="text-6xl font-black bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    {result.estimatedPension.toLocaleString()}
                  </div>
                  <div className="text-xl font-bold text-gray-700">RON per lună</div>
                </div>
                
                <div className="stats-card text-center">
                  <div className="text-4xl mb-4">🎂</div>
                  <div className="text-base text-gray-600 mb-2 font-semibold">Vârsta de pensionare</div>
                  <div className="text-2xl font-black text-gray-900">{result.retirementAge} ani</div>
                </div>
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-8xl mb-6">⚠️</div>
                <div className="text-2xl text-gray-600 mb-4 font-bold">Completează formularul</div>
                <div className="text-lg text-gray-500 font-medium">pentru a vedea calculul pensiei anticipate</div>
              </div>
            )}
            
            <div className="mt-10 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl border-2 border-red-100 shadow-lg">
              <div className="text-sm text-red-800 font-bold text-center">
                ⚠️ Calculul include penalizările pentru pensionarea anticipată
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, AlertTriangle, TrendingDown } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { calculateEarlyRetirement } from "@/lib/pensionCalculations";
import { trackEvent } from "@/lib/analytics";
import type { PensionCalculationData, PensionResult } from "@/types/pension";

export default function CalculatorAnticipata() {
  const [formData, setFormData] = useState<PensionCalculationData>({
    birthDate: "",
    salary: "",
    workYears: "",
    gender: "",
  });
  
  const [targetAge, setTargetAge] = useState<string>("");
  const [result, setResult] = useState<PensionResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof PensionCalculationData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    trackEvent('calculator_interaction', 'early_retirement', field);
  };

  const handleCalculate = async () => {
    if (!formData.birthDate || !formData.salary || !formData.workYears || !formData.gender || !targetAge) {
      return;
    }

    setIsCalculating(true);
    trackEvent('calculator_submission', 'early_retirement_calculator');

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
    <>
      <SEOHead 
        title="Calculator Pensie Anticipată - Calculează Penalitățile și Beneficiile"
        description="Calculator pensie anticipată parțială România 2025. Calculează pensia ta cu ieșirea anticipată la pensie, penalitățile și beneficiile financiare."
        keywords="calculator pensie anticipata, pensie anticipata partiala, iesire anticipata pensie, penalitati pensie"
        canonicalUrl="https://calculatormediefacultate.com/calculator-anticipata"
        schemaType="calculator"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Hero Section */}
          <section className="text-center mb-12 sm:mb-16 mt-4 sm:mt-6">
            <div className="mb-6 sm:mb-8">
              <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-800 mb-6 sm:mb-8 shadow-lg border border-blue-200">
                <span className="mr-1.5 text-sm sm:text-base">⚡</span>
                Calculator Specializat pentru Pensie Anticipată
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight px-2 sm:px-4">
              Calculator <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Pensie</span>
              <br className="block" />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Anticipată</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-10 leading-relaxed font-medium px-4 sm:px-6">
              Calculează pensia ta cu ieșire anticipată și află penalitățile sau beneficiile financiare. 
              <span className="font-bold text-gray-800 block mt-1.5">Analiză detaliată conform legislației 2025.</span>
            </p>
          </section>

          {/* Main Calculator */}
          <section className="glass-effect rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-12 sm:mb-16">
            <div className="text-center mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                <TrendingDown className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-neutral-900 mb-2 sm:mb-3 px-2">
                Calculator Pensie Anticipată
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-medium px-2">
                Analizează impactul ieșirii anticipate la pensie
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Calculator Form */}
              <div className="form-section">
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

                  <div className="space-y-1.5">
                    <Label htmlFor="targetAge" className="text-sm font-semibold text-gray-800 flex items-center gap-1.5">
                      <span className="text-sm">🎯</span>
                      Vârsta dorită pentru pensionare
                    </Label>
                    <Input
                      type="number"
                      id="targetAge"
                      placeholder="ex: 62"
                      value={targetAge}
                      onChange={(e) => setTargetAge(e.target.value)}
                      className="input-modern w-full text-sm sm:text-base"
                    />
                  </div>
                </div>
                
                <Button 
                  onClick={handleCalculate}
                  disabled={isCalculating || !formData.birthDate || !formData.salary || !formData.workYears || !formData.gender || !targetAge}
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
                      <span className="hidden sm:inline">Calculează Pensia Anticipată</span>
                      <span className="sm:hidden">Calculează</span>
                    </div>
                  )}
                </Button>
              </div>
              
              {/* Results Section */}
              <div className="gradient-card rounded-xl p-6 sm:p-8 border shadow-xl">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <span className="text-xl sm:text-2xl">📊</span>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 mb-2">Rezultatele Calculului</h3>
                  <p className="text-sm sm:text-base text-gray-600 font-medium">Analiza pensiei anticipate</p>
                </div>
                
                {result ? (
                  <div className="space-y-5">
                    <div className="result-card text-center">
                      <div className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Pensia Anticipată Estimată</div>
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                        {result.estimatedPension.toLocaleString()}
                      </div>
                      <div className="text-sm sm:text-base font-bold text-gray-700">RON per lună</div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="stats-card text-center">
                        <div className="text-xl sm:text-2xl mb-2">🎯</div>
                        <div className="text-xs text-gray-600 mb-1 font-semibold">Vârsta pensionare</div>
                        <div className="text-sm sm:text-base font-black text-gray-900">{parseInt(targetAge)} ani</div>
                      </div>
                      
                      <div className="stats-card text-center">
                        <div className="text-xl sm:text-2xl mb-2">⏳</div>
                        <div className="text-xs text-gray-600 mb-1 font-semibold">Ani până la pensie</div>
                        <div className="text-sm sm:text-base font-black text-gray-900">{result.yearsToRetirement} ani</div>
                      </div>
                    </div>

                    {result.penalty && (
                      <div className="stats-card text-center bg-red-50 border-red-200">
                        <div className="text-xl sm:text-2xl mb-2">⚠️</div>
                        <div className="text-xs text-red-600 mb-1 font-semibold">Penalizare anticipată</div>
                        <div className="text-sm sm:text-base font-bold text-red-700">{result.penalty.toFixed(2)}%</div>
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
                
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 shadow-md">
                  <div className="text-xs sm:text-sm text-blue-800 font-semibold text-center">
                    ⚠️ Calculul este estimativ și se bazează pe legislația actuală din 2025
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Info Section */}
          <section className="mb-12 sm:mb-16">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-50 to-orange-50">
                <CardHeader className="text-center p-6">
                  <AlertTriangle className="h-8 w-8 text-amber-600 mx-auto mb-3" />
                  <CardTitle className="text-lg font-bold text-amber-800">Atenție la Penalizări</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="text-sm text-amber-700 space-y-2">
                    <li>• Reducerea cu 0.5% pentru fiecare lună de anticipare</li>
                    <li>• Penalizarea se aplică pe întreaga perioadă de pensionare</li>
                    <li>• Calculul se face față de vârsta standard de pensionare</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
                <CardHeader className="text-center p-6">
                  <Calculator className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <CardTitle className="text-lg font-bold text-green-800">Beneficii Anticipate</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="text-sm text-green-700 space-y-2">
                    <li>• Primești pensia mai devreme</li>
                    <li>• Poți planifica mai bine tranziția la pensie</li>
                    <li>• Beneficiezi de timp liber suplimentar</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
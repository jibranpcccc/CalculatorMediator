import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, TrendingUp, PiggyBank } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { calculatePillarIII } from "@/lib/pensionCalculations";
import { trackEvent } from "@/lib/analytics";

export default function CalculatorPilon3() {
  const [monthlyContribution, setMonthlyContribution] = useState<string>("");
  const [years, setYears] = useState<string>("");
  const [returnRate, setReturnRate] = useState<string>("5");
  const [result, setResult] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = async () => {
    if (!monthlyContribution || !years) {
      return;
    }

    setIsCalculating(true);
    trackEvent('calculator_submission', 'pillar_iii_calculator');

    try {
      const calculationResult = calculatePillarIII(
        parseFloat(monthlyContribution),
        parseInt(years),
        parseFloat(returnRate) / 100
      );
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
        title="Calculator Pilon III - Pensie Privată Facultativă România 2025"
        description="Calculator Pilon III pensie privată facultativă. Calculează beneficiile fiscale și acumulările din contribuțiile la pensia privată Pilonul 3."
        keywords="calculator pilon 3, pensie privata facultativa, pilon III, contributii pensie privata, beneficii fiscale"
        canonicalUrl="https://calculatormediefacultate.com/calculator-pilon3"
        schemaType="calculator"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Hero Section */}
          <section className="text-center mb-12 sm:mb-16 mt-4 sm:mt-6">
            <div className="mb-6 sm:mb-8">
              <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 text-green-800 mb-6 sm:mb-8 shadow-lg border border-green-200">
                <span className="mr-1.5 text-sm sm:text-base">💰</span>
                Calculator Specializat pentru Pilonul III
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight px-2 sm:px-4">
              Calculator <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Pilon</span>
              <br className="block" />
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">III</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-10 leading-relaxed font-medium px-4 sm:px-6">
              Calculează acumulările din pensia privată facultativă și beneficiile fiscale. 
              <span className="font-bold text-gray-800 block mt-1.5">Planifică-ți viitorul financiar cu Pilonul III.</span>
            </p>
          </section>

          {/* Main Calculator */}
          <section className="glass-effect rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-12 sm:mb-16">
            <div className="text-center mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                <PiggyBank className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-neutral-900 mb-2 sm:mb-3 px-2">
                Calculator Pilon III
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-medium px-2">
                Analizează beneficiile pensiei private facultative
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Calculator Form */}
              <div className="form-section">
                <div className="space-y-4 sm:space-y-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="monthlyContribution" className="text-sm font-semibold text-gray-800 flex items-center gap-1.5">
                      <span className="text-sm">💳</span>
                      Contribuția lunară (RON)
                    </Label>
                    <Input
                      type="number"
                      id="monthlyContribution"
                      placeholder="ex: 200"
                      value={monthlyContribution}
                      onChange={(e) => setMonthlyContribution(e.target.value)}
                      className="input-modern w-full text-sm sm:text-base"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <Label htmlFor="years" className="text-sm font-semibold text-gray-800 flex items-center gap-1.5">
                      <span className="text-sm">📅</span>
                      Perioada de contribuție (ani)
                    </Label>
                    <Input
                      type="number"
                      id="years"
                      placeholder="ex: 20"
                      value={years}
                      onChange={(e) => setYears(e.target.value)}
                      className="input-modern w-full text-sm sm:text-base"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <Label htmlFor="returnRate" className="text-sm font-semibold text-gray-800 flex items-center gap-1.5">
                      <span className="text-sm">📈</span>
                      Randamentul anual estimat (%)
                    </Label>
                    <Input
                      type="number"
                      id="returnRate"
                      placeholder="ex: 5"
                      value={returnRate}
                      onChange={(e) => setReturnRate(e.target.value)}
                      className="input-modern w-full text-sm sm:text-base"
                    />
                  </div>
                </div>
                
                <Button 
                  onClick={handleCalculate}
                  disabled={isCalculating || !monthlyContribution || !years}
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
                      <span className="hidden sm:inline">Calculează Pilon III</span>
                      <span className="sm:hidden">Calculează</span>
                    </div>
                  )}
                </Button>
              </div>
              
              {/* Results Section */}
              <div className="gradient-card rounded-xl p-6 sm:p-8 border shadow-xl">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <span className="text-xl sm:text-2xl">💰</span>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 mb-2">Rezultatele Calculului</h3>
                  <p className="text-sm sm:text-base text-gray-600 font-medium">Acumulări Pilon III</p>
                </div>
                
                {result ? (
                  <div className="space-y-5">
                    <div className="result-card text-center">
                      <div className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Suma Acumulată Totală</div>
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                        {result.toLocaleString()}
                      </div>
                      <div className="text-sm sm:text-base font-bold text-gray-700">RON la maturitate</div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="stats-card text-center">
                        <div className="text-xl sm:text-2xl mb-2">💳</div>
                        <div className="text-xs text-gray-600 mb-1 font-semibold">Contribuții totale</div>
                        <div className="text-sm sm:text-base font-black text-gray-900">
                          {(parseFloat(monthlyContribution) * parseInt(years) * 12).toLocaleString()} RON
                        </div>
                      </div>
                      
                      <div className="stats-card text-center">
                        <div className="text-xl sm:text-2xl mb-2">📈</div>
                        <div className="text-xs text-gray-600 mb-1 font-semibold">Câștig din investiții</div>
                        <div className="text-sm sm:text-base font-black text-gray-900">
                          {(result - (parseFloat(monthlyContribution) * parseInt(years) * 12)).toLocaleString()} RON
                        </div>
                      </div>
                    </div>

                    <div className="stats-card text-center bg-green-50 border-green-200">
                      <div className="text-xl sm:text-2xl mb-2">🎯</div>
                      <div className="text-xs text-green-600 mb-1 font-semibold">Deducere fiscală anuală</div>
                      <div className="text-sm sm:text-base font-bold text-green-700">
                        {Math.min(parseFloat(monthlyContribution) * 12, 400).toLocaleString()} EUR
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-3xl sm:text-4xl mb-3">🧮</div>
                    <div className="text-base sm:text-lg text-gray-600 mb-2 font-bold">Completează formularul</div>
                    <div className="text-sm text-gray-500 font-medium">pentru a vedea rezultatele calculului</div>
                  </div>
                )}
                
                <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-200 shadow-md">
                  <div className="text-xs sm:text-sm text-green-800 font-semibold text-center">
                    ⚠️ Calculul este estimativ și se bazează pe legislația actuală din 2025
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Info Section */}
          <section className="mb-12 sm:mb-16">
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardHeader className="text-center p-6">
                  <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <CardTitle className="text-lg font-bold text-blue-800">Beneficii Fiscale</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="text-sm text-blue-700 space-y-2">
                    <li>• Deducere până la 400 EUR/an</li>
                    <li>• Scutire la dividende și câștiguri</li>
                    <li>• Impozitare favorabilă la maturitate</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
                <CardHeader className="text-center p-6">
                  <PiggyBank className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <CardTitle className="text-lg font-bold text-purple-800">Flexibilitate</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="text-sm text-purple-700 space-y-2">
                    <li>• Contribuții variabile</li>
                    <li>• Opțiuni de investiție diverse</li>
                    <li>• Posibilitate de retragere parțială</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-50 to-orange-50">
                <CardHeader className="text-center p-6">
                  <Calculator className="h-8 w-8 text-amber-600 mx-auto mb-3" />
                  <CardTitle className="text-lg font-bold text-amber-800">Planificare</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="text-sm text-amber-700 space-y-2">
                    <li>• Complement la pensiile obligatorii</li>
                    <li>• Acumulare pe termen lung</li>
                    <li>• Protecție împotriva inflației</li>
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
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PiggyBank } from "lucide-react";
import { calculatePillarIII } from "@/lib/pensionCalculations";
import { trackEvent } from "@/lib/analytics";

export default function PillarIIICalculator() {
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [years, setYears] = useState("");
  const [returnRate, setReturnRate] = useState("5");
  const [result, setResult] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = async () => {
    if (!monthlyContribution || !years) {
      return;
    }

    setIsCalculating(true);
    trackEvent('pillar_iii_calculation', { monthlyContribution, years, returnRate });

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

  const maxDeductible = 400 * 5; // 400 EUR * 5 RON/EUR (approximate)
  const monthlyDeductible = maxDeductible / 12;

  return (
    <Card className="glass-effect shadow-2xl border-0 rounded-3xl overflow-hidden">
      <CardHeader className="text-center py-8">
        <div className="icon-wrapper-alt bg-gradient-to-br from-green-500 to-green-600 mx-auto mb-6">
          <PiggyBank className="text-white h-8 w-8" />
        </div>
        <CardTitle className="text-3xl font-black text-gray-900 mb-4">
          Calculator Contribuții Pilon III
        </CardTitle>
        <p className="text-lg text-gray-600 font-medium">Planifică-ți pensia privată cu contribuții optime</p>
      </CardHeader>
      <CardContent className="p-10">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Form */}
          <div className="form-section">
            <div className="space-y-8">
              <div className="space-y-3">
                <Label htmlFor="monthlyContribution" className="text-base font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-xl">💰</span>
                  Contribuție lunară (RON)
                </Label>
                <Input
                  type="number"
                  id="monthlyContribution"
                  placeholder={`max ${monthlyDeductible.toFixed(0)} pentru deducere`}
                  value={monthlyContribution}
                  onChange={(e) => setMonthlyContribution(e.target.value)}
                  className="input-modern w-full text-lg"
                />
                <p className="text-sm text-gray-600 font-medium">
                  Maxim {monthlyDeductible.toFixed(0)} RON/lună pentru deducere fiscală
                </p>
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="years" className="text-base font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-xl">📅</span>
                  Ani de contribuție
                </Label>
                <Input
                  type="number"
                  id="years"
                  placeholder="ex: 30"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                  className="input-modern w-full text-lg"
                />
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="returnRate" className="text-base font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-xl">📈</span>
                  Rata anuală de rentabilitate (%)
                </Label>
                <Input
                  type="number"
                  id="returnRate"
                  step="0.1"
                  value={returnRate}
                  onChange={(e) => setReturnRate(e.target.value)}
                  className="input-modern w-full text-lg"
                />
                <p className="text-sm text-gray-600 font-medium">
                  Media istorică: 3-7% anual
                </p>
              </div>
            </div>
            
            <Button 
              onClick={handleCalculate}
              disabled={isCalculating || !monthlyContribution || !years}
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
                  <PiggyBank className="h-6 w-6" />
                  <span>Calculează Acumularea</span>
                </div>
              )}
            </Button>
          </div>
          
          {/* Results */}
          <div className="gradient-card rounded-3xl p-10 border shadow-2xl">
            <div className="text-center mb-10">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-3xl">💎</span>
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-4">Proiecție Pilon III</h3>
              <p className="text-lg text-gray-600 font-medium">Estimarea acumulărilor private de pensie</p>
            </div>
            
            {result ? (
              <div className="space-y-8">
                <div className="result-card text-center">
                  <div className="text-base font-bold text-gray-600 uppercase tracking-wider mb-4">Valoare Acumulată Estimată</div>
                  <div className="text-6xl font-black bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                    {result.toLocaleString()}
                  </div>
                  <div className="text-xl font-bold text-gray-700">RON</div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="stats-card text-center">
                    <div className="text-4xl mb-4">💳</div>
                    <div className="text-base text-gray-600 mb-2 font-semibold">Total contribuții</div>
                    <div className="text-xl font-black text-gray-900">
                      {(parseFloat(monthlyContribution || "0") * 12 * parseInt(years || "0")).toLocaleString()} RON
                    </div>
                  </div>
                  
                  <div className="stats-card text-center">
                    <div className="text-4xl mb-4">📈</div>
                    <div className="text-base text-gray-600 mb-2 font-semibold">Câștig din investiții</div>
                    <div className="text-xl font-black text-green-600">
                      {(result - (parseFloat(monthlyContribution || "0") * 12 * parseInt(years || "0"))).toLocaleString()} RON
                    </div>
                  </div>
                </div>
                
                {parseFloat(monthlyContribution || "0") <= monthlyDeductible && (
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-3xl border-2 border-blue-200 shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl mb-2">💰</div>
                      <p className="text-lg font-bold text-blue-800 mb-2">
                        Avantaj fiscal anual
                      </p>
                      <p className="text-xl font-black text-green-700">
                        {(parseFloat(monthlyContribution || "0") * 12 * 0.1).toLocaleString()} RON economii
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-8xl mb-6">💎</div>
                <div className="text-2xl text-gray-600 mb-4 font-bold">Completează formularul</div>
                <div className="text-lg text-gray-500 font-medium">pentru a vedea proiecția Pilon III</div>
              </div>
            )}
            
            <div className="mt-10 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl border-2 border-green-100 shadow-lg">
              <div className="text-sm text-green-800 font-bold text-center">
                ℹ️ Calculul nu include comisioanele fondului de pensii
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

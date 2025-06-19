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
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <PiggyBank className="text-green-600" />
          Calculator Contribuții Pilon III
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="monthlyContribution">Contribuție lunară (RON)</Label>
              <Input
                type="number"
                id="monthlyContribution"
                placeholder={`max ${monthlyDeductible.toFixed(0)} pentru deducere`}
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(e.target.value)}
              />
              <p className="text-xs text-neutral-500 mt-1">
                Maxim {monthlyDeductible.toFixed(0)} RON/lună pentru deducere fiscală
              </p>
            </div>
            
            <div>
              <Label htmlFor="years">Ani de contribuție</Label>
              <Input
                type="number"
                id="years"
                placeholder="ex: 30"
                value={years}
                onChange={(e) => setYears(e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="returnRate">Rata anuală de rentabilitate (%)</Label>
              <Input
                type="number"
                id="returnRate"
                step="0.1"
                value={returnRate}
                onChange={(e) => setReturnRate(e.target.value)}
              />
              <p className="text-xs text-neutral-500 mt-1">
                Media istorică: 3-7% anual
              </p>
            </div>
            
            <Button 
              onClick={handleCalculate}
              disabled={isCalculating || !monthlyContribution || !years}
              className="w-full"
            >
              {isCalculating ? "Se calculează..." : "Calculează Acumularea"}
            </Button>
          </div>
          
          {/* Results */}
          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Proiecție Pilon III</h3>
            
            {result ? (
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="text-sm text-neutral-600">Valoare acumulată estimată</div>
                    <div className="text-2xl font-bold text-green-600">{result.toLocaleString()} RON</div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <div className="text-sm text-neutral-600">Total contribuții</div>
                    <div className="text-lg font-semibold text-neutral-900">
                      {(parseFloat(monthlyContribution || "0") * 12 * parseInt(years || "0")).toLocaleString()} RON
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <div className="text-sm text-neutral-600">Câștig din investiții</div>
                    <div className="text-lg font-semibold text-green-600">
                      {(result - (parseFloat(monthlyContribution || "0") * 12 * parseInt(years || "0"))).toLocaleString()} RON
                    </div>
                  </CardContent>
                </Card>
                
                {parseFloat(monthlyContribution || "0") <= monthlyDeductible && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Avantaj fiscal:</strong> Economii de {(parseFloat(monthlyContribution || "0") * 12 * 0.1).toLocaleString()} RON/an
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8 text-neutral-500">
                Completează formularul pentru proiecție
              </div>
            )}
            
            <div className="mt-6 text-xs text-neutral-500">
              * Calculul nu include comisioanele fondului de pensii
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

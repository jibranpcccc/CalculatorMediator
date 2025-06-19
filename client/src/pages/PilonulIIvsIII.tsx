import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeftRight, TrendingUp, Shield, DollarSign, Clock, Users } from "lucide-react";

export default function PilonulIIvsIII() {
  return (
    <>
      <SEOHead 
        title="Pilonul II vs Pilonul III - Comparație Pensii Private România"
        description="Comparație detaliată între Pilonul II și Pilonul III de pensii. Descoperă diferențele, avantajele și dezavantajele fiecărui sistem de pensii private din România."
        keywords="pilon 2 vs pilon 3, pensii private romania, comparatie pensii, pilonul ii, pilonul iii"
        canonicalUrl="https://calculatormediefacultate.com/pilonul-2-vs-3"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <section className="text-center mb-12 sm:mb-16 mt-4 sm:mt-6">
            <div className="mb-6 sm:mb-8">
              <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 text-green-800 mb-6 sm:mb-8 shadow-lg border border-green-200">
                <ArrowLeftRight className="mr-1.5 h-4 w-4" />
                Comparație Detaliată
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight px-2 sm:px-4">
              Pilonul II <span className="gradient-primary bg-clip-text text-transparent">vs</span>
              <br className="block" />
              <span className="gradient-primary bg-clip-text text-transparent">Pilonul III</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-10 leading-relaxed font-medium px-4 sm:px-6">
              Înțelege diferențele dintre cele două sisteme de pensii private din România
            </p>
          </section>

          {/* Comparison Overview */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                  <Shield className="h-6 w-6" />
                  Pilonul II (Obligatoriu)
                </CardTitle>
                <Badge className="bg-blue-200 text-blue-800 w-fit">Pensie Privată Obligatorie</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    <span className="text-sm">Contribuție: 3.75% din salariul brut</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">Obligatoriu pentru cei născuți după 1978</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">Plată la pensionare sau deces</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm">Randament mediu: 4-6% anual</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-500 to-green-600 text-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                  <TrendingUp className="h-6 w-6" />
                  Pilonul III (Facultativ)
                </CardTitle>
                <Badge className="bg-green-200 text-green-800 w-fit">Pensie Privată Facultativă</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    <span className="text-sm">Contribuție: La alegere (max 400€/an deductibil)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">Oricine poate adera voluntar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">Flexibilitate la retragere</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm">Randament variabil: 3-8% anual</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Comparison Table */}
          <Card className="border-0 shadow-xl bg-white mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                Comparație Detaliată
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Criteriu</th>
                      <th className="text-center py-3 px-4 font-semibold text-blue-600">Pilonul II</th>
                      <th className="text-center py-3 px-4 font-semibold text-green-600">Pilonul III</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    {[
                      {
                        criteriu: "Participare",
                        pilon2: "Obligatorie (născuți după 1978)",
                        pilon3: "Voluntară (oricine)"
                      },
                      {
                        criteriu: "Contribuții",
                        pilon2: "3.75% din salariul brut",
                        pilon3: "La alegere (recomandare: 5-10%)"
                      },
                      {
                        criteriu: "Deduceri fiscale",
                        pilon2: "Nu se aplică",
                        pilon3: "Până la 400€/an"
                      },
                      {
                        criteriu: "Vârsta minimă retragere",
                        pilon2: "Vârsta standard de pensionare",
                        pilon3: "60 de ani"
                      },
                      {
                        criteriu: "Flexibilitate retragere",
                        pilon2: "Limitată",
                        pilon3: "Mare flexibilitate"
                      },
                      {
                        criteriu: "Transferabilitate",
                        pilon2: "O dată pe an între fonduri",
                        pilon3: "Flexibilă între fonduri"
                      },
                      {
                        criteriu: "Comisioane",
                        pilon2: "2-2.5% anual",
                        pilon3: "1.5-3% anual"
                      },
                      {
                        criteriu: "Risc investițional",
                        pilon2: "Moderat (regulat)",
                        pilon3: "Variabil (alegerea ta)"
                      }
                    ].map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="py-3 px-4 font-medium text-gray-900">{row.criteriu}</td>
                        <td className="py-3 px-4 text-center text-blue-700">{row.pilon2}</td>
                        <td className="py-3 px-4 text-center text-green-700">{row.pilon3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Când să alegi Pilonul III?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-sm">Vrei control total asupra investițiilor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-sm">Beneficiezi de deduceri fiscale (salariu mare)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-sm">Vrei flexibilitate la retragere</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-sm">Poți contribui regulat și pe termen lung</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Strategia Recomandată
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Combinația Optimă</h4>
                  <p className="text-sm text-blue-700">
                    Folosește Pilonul II (obligatoriu) ca bază și completează cu Pilonul III 
                    pentru o pensie mai substanțială și mai flexibilă.
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Recomandare</h4>
                  <p className="text-sm text-green-700">
                    Contribuie 5-10% din venit la Pilonul III, profitând de deducerile fiscale 
                    și flexibilitatea oferită.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
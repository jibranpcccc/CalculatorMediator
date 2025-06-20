import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Shield, Target, DollarSign, PieChart, BarChart3 } from "lucide-react";

export default function StrategiiInvestitii() {
  return (
    <>
      <SEOHead 
        title="Strategii de Investiții pentru Pensie - Calculator Medie Facultate"
        description="Descoperă strategiile de investiții optime pentru pensie în România. Ghid complet pentru diversificare, risc și randament pe termen lung."
        keywords="strategii investitii pensie, portofoliu pensie, investitii termen lung, fonduri pensie"
        canonicalUrl="https://calculatormediefacultate.com/strategii-investitii"
        schemaType="article"
        articleData={{
          datePublished: "2025-01-01",
          dateModified: "2025-06-19",
          author: "Calculator Medie Facultate",
          category: "Planificare Pensii"
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <section className="text-center mb-12 sm:mb-16 mt-4 sm:mt-6">
            <div className="mb-6 sm:mb-8">
              <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-purple-100 via-blue-100 to-indigo-100 text-purple-800 mb-6 sm:mb-8 shadow-lg border border-purple-200">
                <TrendingUp className="mr-1.5 h-4 w-4" />
                Strategii de Investiții
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight px-2 sm:px-4">
              Investiții <span className="gradient-primary bg-clip-text text-transparent">Inteligente</span>
              <br className="block" />
              <span className="gradient-primary bg-clip-text text-transparent">pentru Pensie</span>
            </h1>
          </section>

          {/* Investment Strategies by Age */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <Target className="h-6 w-6 text-green-600" />
                  20-35 ani: Agresiv
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Acțiuni</span>
                    <span className="text-sm font-bold text-green-600">70-80%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Obligațiuni</span>
                    <span className="text-sm font-bold text-blue-600">15-25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Lichidități</span>
                    <span className="text-sm font-bold text-gray-600">5-10%</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Risc înalt, potențial de creștere mare. Timp suficient pentru recuperarea pierderilor.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <PieChart className="h-6 w-6 text-blue-600" />
                  35-50 ani: Moderat
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Acțiuni</span>
                    <span className="text-sm font-bold text-green-600">50-60%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Obligațiuni</span>
                    <span className="text-sm font-bold text-blue-600">30-40%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Lichidități</span>
                    <span className="text-sm font-bold text-gray-600">10-15%</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Echilibru între creștere și siguranță. Reducerea treptată a riscului.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <Shield className="h-6 w-6 text-purple-600" />
                  50+ ani: Conservator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Acțiuni</span>
                    <span className="text-sm font-bold text-green-600">30-40%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Obligațiuni</span>
                    <span className="text-sm font-bold text-blue-600">45-55%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Lichidități</span>
                    <span className="text-sm font-bold text-gray-600">15-20%</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Prioritate pe conservarea capitalului și venituri stabile.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Investment Options in Romania */}
          <Card className="border-0 shadow-xl bg-white mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                Opțiuni de Investiții în România
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Pilonul III",
                    description: "Pensie privată facultativă",
                    pros: ["Deducere fiscală", "Gestionare profesională", "Diversificare automată"],
                    cons: ["Comisioane", "Lichiditate limitată"],
                    risk: "Mediu",
                    return: "4-7% anual"
                  },
                  {
                    title: "Fonduri de Investiții",
                    description: "Portofolii diversificate",
                    pros: ["Diversificare", "Gestionare profesională", "Lichiditate bună"],
                    cons: ["Comisioane de administrare", "Risc de piață"],
                    risk: "Mediu-Înalt",
                    return: "5-10% anual"
                  },
                  {
                    title: "ETF-uri",
                    description: "Exchange Traded Funds",
                    pros: ["Costuri mici", "Diversificare", "Transparență"],
                    cons: ["Risc de piață", "Necesită cunoștințe"],
                    risk: "Mediu-Înalt", 
                    return: "6-12% anual"
                  },
                  {
                    title: "Depozite Bancare",
                    description: "Siguranță maximă",
                    pros: ["Garantate FGDB", "Risc zero", "Lichiditate"],
                    cons: ["Randament mic", "Risc inflație"],
                    risk: "Foarte mic",
                    return: "2-4% anual"
                  }
                ].map((option, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">{option.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{option.description}</p>
                    
                    <div className="space-y-2 mb-3">
                      <div className="text-xs">
                        <span className="font-semibold text-green-700">Avantaje:</span>
                        <ul className="list-disc list-inside text-green-600 ml-2">
                          {option.pros.map((pro, i) => (
                            <li key={i} className="text-xs">{pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-xs">
                        <span className="font-semibold text-red-700">Dezavantaje:</span>
                        <ul className="list-disc list-inside text-red-600 ml-2">
                          {option.cons.map((con, i) => (
                            <li key={i} className="text-xs">{con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-xs">
                      <span><strong>Risc:</strong> {option.risk}</span>
                    </div>
                    <div className="text-xs">
                      <strong>Randament:</strong> {option.return}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Principles */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                  Principii Fundamentale
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    "Diversifică investițiile pe clase de active",
                    "Investește regulat (dollar-cost averaging)",
                    "Păstrează o perspectivă pe termen lung",
                    "Reechilibrează portofoliul anual",
                    "Nu te lăsa influențat de emoții"
                  ].map((principle, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-sm text-gray-700">{principle}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-500 to-red-600 text-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-3">
                  <DollarSign className="h-6 w-6" />
                  Calculator Strategie
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-100 mb-4 text-sm">
                  Calculează strategia de investiții optimă pentru vârsta și profilul tău de risc
                </p>
                <a 
                  href="/calculator-pilon3" 
                  className="block w-full bg-white text-orange-600 font-bold py-3 px-4 rounded-lg text-center hover:bg-orange-50 transition-colors"
                >
                  Calculează Strategia
                </a>
              </CardContent>
            </Card>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
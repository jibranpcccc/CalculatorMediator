import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Calculator, Calendar, DollarSign, BarChart3, AlertTriangle } from "lucide-react";

export default function IndexareaPensiilor() {
  return (
    <>
      <SEOHead 
        title="Indexarea Pensiilor România 2025 - Calculator Medie Facultate"
        description="Ghid complet despre indexarea pensiilor în România pentru 2025. Formula de indexare, creșteri, calendar și impactul asupra pensionarilor."
        keywords="indexarea pensiilor 2025, cresterea pensiilor, formula indexare, majorarea pensiilor"
        canonicalUrl="https://calculatormediefacultate.com/indexarea-pensiilor"
        schemaType="article"
        articleData={{
          datePublished: "2025-01-01",
          dateModified: "2025-06-19",
          author: "Calculator Medie Facultate",
          category: "Legislatie Pensii"
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <section className="text-center mb-12 sm:mb-16 mt-4 sm:mt-6">
            <div className="mb-6 sm:mb-8">
              <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-yellow-100 via-amber-100 to-orange-100 text-yellow-800 mb-6 sm:mb-8 shadow-lg border border-yellow-200">
                <TrendingUp className="mr-1.5 h-4 w-4" />
                Indexarea Pensiilor 2025
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight px-2 sm:px-4">
              Creșterea <span className="gradient-primary bg-clip-text text-transparent">Pensiilor</span>
              <br className="block" />
              <span className="gradient-primary bg-clip-text text-transparent">în 2025</span>
            </h1>
          </section>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-2 border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Ce este indexarea pensiilor?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Indexarea pensiilor este mecanismul prin care valoarea pensiilor se ajustează anual 
                  pentru a menține puterea de cumpărare a pensionarilor în fața inflației și pentru 
                  a reflecta creșterea standardului de viață general.
                </p>
                <p>
                  În România, formula de indexare combină rata inflației cu creșterea salariului mediu 
                  brut, asigurând astfel că pensiile cresc în mod echilibrat și predictibil.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-yellow-500 to-orange-600 text-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Calculează Impactul
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-100 mb-4 text-sm">
                  Vezi cum afectează indexarea pensia ta
                </p>
                <a 
                  href="/" 
                  className="block w-full bg-white text-yellow-600 font-bold py-3 px-4 rounded-lg text-center hover:bg-yellow-50 transition-colors"
                >
                  Calculează Pensia
                </a>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-xl bg-white mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                Formula de indexare pentru 2025
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">50% Inflație</h3>
                  <p className="text-blue-700 text-sm">Rata inflației din anul precedent</p>
                  <div className="text-2xl font-bold text-blue-900 mt-2">4.1%</div>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">50% Salarii</h3>
                  <p className="text-green-700 text-sm">Creșterea salariului mediu brut</p>
                  <div className="text-2xl font-bold text-green-900 mt-2">12.3%</div>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-xl">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-orange-800 mb-2">Indexare 2025</h3>
                  <p className="text-orange-700 text-sm">Formula aplicată</p>
                  <div className="text-2xl font-bold text-orange-900 mt-2">8.2%</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-green-600" />
                  Calendarul indexărilor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">1 Ianuarie 2025</h4>
                    <p className="text-sm text-green-700 mb-1">
                      Indexarea anuală cu 8.2%
                    </p>
                    <div className="text-xs text-green-600">
                      Aplicată automat pentru toate pensiile
                    </div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">1 Aprilie 2025</h4>
                    <p className="text-sm text-blue-700 mb-1">
                      Majorarea pensiei minime la 1000 RON
                    </p>
                    <div className="text-xs text-blue-600">
                      Pentru pensiile sub pragul minim
                    </div>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">1 Septembrie 2025</h4>
                    <p className="text-sm text-purple-700 mb-1">
                      Ajustare suplimentară (dacă este necesar)
                    </p>
                    <div className="text-xs text-purple-600">
                      În funcție de evoluția economică
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                  Evoluția indexărilor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { year: "2021", percentage: "14.0%", type: "Excepțională" },
                    { year: "2022", percentage: "10.1%", type: "Înaltă" },
                    { year: "2023", percentage: "13.8%", type: "Înaltă" },
                    { year: "2024", percentage: "9.6%", type: "Moderată" },
                    { year: "2025", percentage: "8.2%", type: "Stabilă" }
                  ].map((indexation, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-semibold text-gray-900">{indexation.year}</div>
                        <div className="text-xs text-gray-600">{indexation.type}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-blue-600 text-lg">{indexation.percentage}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-xl bg-white mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                Exemple de creștere a pensiilor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    current: "1000 RON",
                    increase: "1082 RON",
                    gain: "+82 RON",
                    category: "Pensie mică"
                  },
                  {
                    current: "2000 RON", 
                    increase: "2164 RON",
                    gain: "+164 RON",
                    category: "Pensie medie"
                  },
                  {
                    current: "3000 RON",
                    increase: "3246 RON",
                    gain: "+246 RON",
                    category: "Pensie mare"
                  },
                  {
                    current: "4000 RON",
                    increase: "4328 RON",
                    gain: "+328 RON",
                    category: "Pensie maximă"
                  }
                ].map((example, index) => (
                  <div key={index} className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h4 className="font-bold text-yellow-800 mb-3">{example.category}</h4>
                    <div className="space-y-2">
                      <div>
                        <div className="text-sm text-gray-600">Înainte:</div>
                        <div className="font-bold text-gray-900">{example.current}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">După indexare:</div>
                        <div className="font-bold text-green-700">{example.increase}</div>
                      </div>
                      <div className="pt-2 border-t border-yellow-300">
                        <div className="text-sm text-yellow-700">Câștig:</div>
                        <div className="font-bold text-lg text-yellow-800">{example.gain}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <DollarSign className="h-6 w-6 text-green-600" />
                  Beneficiile indexării
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      benefit: "Menținerea puterii de cumpărare",
                      description: "Pensiile cresc cel puțin cu rata inflației"
                    },
                    {
                      benefit: "Participare la creșterea economică",
                      description: "Pensionarii beneficiază de creșterea salariilor"
                    },
                    {
                      benefit: "Predictibilitate și transparență",
                      description: "Formula clară și aplicată automat anual"
                    },
                    {
                      benefit: "Protecție socială îmbunătățită",
                      description: "Standardul de viață al pensionarilor este protejat"
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">{benefit.benefit}</h4>
                      <p className="text-sm text-green-700">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-red-500 to-orange-600 text-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Aspecte importante
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-1">Aplicare automată</h4>
                  <p className="text-sm text-red-100">
                    Indexarea se aplică automat, fără a fi nevoie 
                    de cereri din partea pensionarilor.
                  </p>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-1">Toate tipurile de pensii</h4>
                  <p className="text-sm text-red-100">
                    Se aplică pentru pensiile de stat, anticipate, 
                    de urmaș și de invaliditate.
                  </p>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-1">Calculul pe baza formulei</h4>
                  <p className="text-sm text-red-100">
                    Procentul exact poate varia în funcție de 
                    evoluția indicatorilor economici.
                  </p>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-1">Impactul fiscal</h4>
                  <p className="text-sm text-red-100">
                    Pensiile indexate pot depăși plafonul de impozitare 
                    de 2000 RON pentru unii pensionari.
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
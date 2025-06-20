import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calculator, TrendingUp, Shield, CheckCircle } from "lucide-react";

export default function PensieLimitaVarsta() {
  return (
    <>
      <SEOHead 
        title="Pensia pentru Limită de Vârstă România 2025 - Calculator Medie Facultate"
        description="Tot ce trebuie să știi despre pensia pentru limită de vârstă în România. Vârsta de pensionare, condiții, calcul și simulări pentru 2025."
        keywords="pensie limita varsta, varsta pensionare romania, pensie standard, calcul pensie 2025"
        canonicalUrl="https://calculatormediefacultate.com/pensie-limita-varsta"
        schemaType="article"
        articleData={{
          datePublished: "2025-01-01",
          dateModified: "2025-06-19",
          author: "Calculator Medie Facultate",
          category: "Tipuri Pensii"
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <section className="text-center mb-12 sm:mb-16 mt-4 sm:mt-6">
            <div className="mb-6 sm:mb-8">
              <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-800 mb-6 sm:mb-8 shadow-lg border border-blue-200">
                <Clock className="mr-1.5 h-4 w-4" />
                Pensia pentru Limită de Vârstă
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight px-2 sm:px-4">
              Pensia <span className="gradient-primary bg-clip-text text-transparent">Standard</span>
              <br className="block" />
              <span className="gradient-primary bg-clip-text text-transparent">România 2025</span>
            </h1>
          </section>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-2 border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Ce este pensia pentru limită de vârstă?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Pensia pentru limită de vârstă este forma standard de pensionare în România, 
                  acordată persoanelor care au atins vârsta legală de pensionare și îndeplinesc 
                  condițiile de stagiu de cotizare.
                </p>
                <p>
                  Aceasta este pensia cea mai avantajoasă din punct de vedere financiar, 
                  deoarece nu sunt aplicate penalizări și se calculează pe baza întregului 
                  stagiu de cotizare acumulat.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Calculator Rapid
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 mb-4 text-sm">
                  Calculează-ți pensia pentru limită de vârstă
                </p>
                <a 
                  href="/" 
                  className="block w-full bg-white text-blue-600 font-bold py-3 px-4 rounded-lg text-center hover:bg-blue-50 transition-colors"
                >
                  Începe Calculul
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  Condiții de acordare
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Vârsta standard</h4>
                    <ul className="space-y-1 text-sm text-blue-700">
                      <li>• Bărbați: 65 de ani</li>
                      <li>• Femei: 63 de ani (creștere treptată până la 65)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Stagiu de cotizare</h4>
                    <ul className="space-y-1 text-sm text-green-700">
                      <li>• Minim 15 ani de cotizare</li>
                      <li>• Pentru pensie completă: 35 ani (bărbați), 30 ani (femei)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                  Modul de calculare
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Formula de calcul</h4>
                    <p className="text-sm text-orange-700">
                      Pensie = Puncte acumulate × Valoarea punctului de pensie
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-700">Valoarea punctului (2025):</span>
                      <span className="font-bold text-gray-900">81.7 RON</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-700">Pensia minimă:</span>
                      <span className="font-bold text-gray-900">800 RON</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-700">Indexare:</span>
                      <span className="font-bold text-gray-900">Anuală</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-xl bg-white mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                Avantajele pensiei pentru limită de vârstă
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Fără penalizări",
                    description: "Nu se aplică reduceri pentru pensionarea la vârsta standard",
                    icon: "✅"
                  },
                  {
                    title: "Pensie maximă",
                    description: "Calculată pe întregul stagiu de cotizare acumulat",
                    icon: "💰"
                  },
                  {
                    title: "Indexare anuală",
                    description: "Pensia este indexată anual pentru a menține puterea de cumpărare",
                    icon: "📈"
                  },
                  {
                    title: "Stabilitate",
                    description: "Venit garantat pe toată durata vieții",
                    icon: "🛡️"
                  }
                ].map((advantage, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl mb-3">{advantage.icon}</div>
                    <h4 className="font-semibold text-gray-900 mb-2">{advantage.title}</h4>
                    <p className="text-sm text-gray-600">{advantage.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Cum să îți mărești pensia?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Lucrează cât mai mult timp pentru a acumula puncte",
                    "Încearcă să ai un salariu cât mai mare",
                    "Completează stagiul de cotizare prin cumpărarea vechimii",
                    "Amână pensionarea cu până la 5 ani pentru bonus",
                    "Combină cu o pensie privată (Pilonul III)"
                  ].map((tip, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{tip}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-500 to-red-600 text-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Informații importante
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-1">Atenție!</h4>
                  <p className="text-sm text-orange-100">
                    Vârsta de pensionare pentru femei crește treptat până în 2030, 
                    când va ajunge la 65 de ani.
                  </p>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-1">Stagiu incomplet</h4>
                  <p className="text-sm text-orange-100">
                    Cu mai puțin de 15 ani cotizare, poți primi indemnizația socială 
                    pentru pensionari (540 RON).
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
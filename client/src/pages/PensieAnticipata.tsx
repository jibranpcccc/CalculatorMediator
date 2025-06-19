import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Calculator, TrendingDown, Clock, Shield } from "lucide-react";

export default function PensieAnticipata() {
  return (
    <>
      <SEOHead 
        title="Pensia Anticipată Parțială România 2025 - Calculator Medie Facultate"
        description="Ghid complet despre pensia anticipată parțială în România. Condiții, penalizări, calcul și simulări pentru pensionarea anticipată în 2025."
        keywords="pensie anticipata, pensionare anticipata, pensie partiala, penalizari pensie"
        canonicalUrl="https://calculatormediefacultate.com/pensie-anticipata"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <section className="text-center mb-12 sm:mb-16 mt-4 sm:mt-6">
            <div className="mb-6 sm:mb-8">
              <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100 text-red-800 mb-6 sm:mb-8 shadow-lg border border-red-200">
                <AlertTriangle className="mr-1.5 h-4 w-4" />
                Pensie Anticipată Parțială
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight px-2 sm:px-4">
              Pensionarea <span className="gradient-primary bg-clip-text text-transparent">Anticipată</span>
              <br className="block" />
              <span className="gradient-primary bg-clip-text text-transparent">cu Penalizări</span>
            </h1>
          </section>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-2 border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Ce este pensia anticipată parțială?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Pensia anticipată parțială permite pensionarea cu până la 5 ani înainte de vârsta 
                  standard de pensionare, dar cu aplicarea unor penalizări permanente asupra cuantumului pensiei.
                </p>
                <p>
                  Această opțiune este disponibilă pentru persoanele care au un stagiu complet de cotizare 
                  și doresc să se pensioneze mai devreme, acceptând o pensie mai mică.
                </p>
                <div className="p-4 bg-red-50 border-l-4 border-red-500">
                  <p className="text-red-700 font-medium">
                    Atenție: Penalizările sunt permanente și se aplică pe toată durata vieții!
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-500 to-red-600 text-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Calculator Anticipată
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-100 mb-4 text-sm">
                  Calculează penalizările pentru pensionarea anticipată
                </p>
                <a 
                  href="/calculator-anticipata" 
                  className="block w-full bg-white text-orange-600 font-bold py-3 px-4 rounded-lg text-center hover:bg-orange-50 transition-colors"
                >
                  Calculează Penalizările
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
                    <h4 className="font-semibold text-blue-800 mb-2">Vârsta minimă</h4>
                    <ul className="space-y-1 text-sm text-blue-700">
                      <li>• Bărbați: 60 de ani (cu 5 ani mai devreme)</li>
                      <li>• Femei: 58 de ani (cu 5 ani mai devreme)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Stagiu complet</h4>
                    <ul className="space-y-1 text-sm text-green-700">
                      <li>• Bărbați: 35 ani de cotizare</li>
                      <li>• Femei: 30 ani de cotizare</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <TrendingDown className="h-6 w-6 text-red-600" />
                  Penalizări aplicabile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Calcul penalizări</h4>
                    <p className="text-sm text-red-700 mb-2">
                      0.75% pentru fiecare lună de anticipare
                    </p>
                    <div className="space-y-1 text-sm text-red-600">
                      <div>• 1 an mai devreme: -9% permanent</div>
                      <div>• 2 ani mai devreme: -18% permanent</div>
                      <div>• 3 ani mai devreme: -27% permanent</div>
                      <div>• 4 ani mai devreme: -36% permanent</div>
                      <div>• 5 ani mai devreme: -45% permanent</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-xl bg-white mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                Exemple de calcul
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Pensie standard",
                    age: "65 ani",
                    pension: "3000 RON",
                    penalty: "0%",
                    final: "3000 RON",
                    color: "green"
                  },
                  {
                    title: "3 ani mai devreme",
                    age: "62 ani",
                    pension: "3000 RON", 
                    penalty: "-27%",
                    final: "2190 RON",
                    color: "orange"
                  },
                  {
                    title: "5 ani mai devreme",
                    age: "60 ani",
                    pension: "3000 RON",
                    penalty: "-45%", 
                    final: "1650 RON",
                    color: "red"
                  }
                ].map((example, index) => (
                  <div key={index} className={`p-4 border-2 border-${example.color}-200 bg-${example.color}-50 rounded-lg`}>
                    <h4 className={`font-bold text-${example.color}-800 mb-3 text-center`}>{example.title}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Vârsta:</span>
                        <span className="font-bold">{example.age}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Pensie inițială:</span>
                        <span className="font-bold">{example.pension}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Penalizare:</span>
                        <span className={`font-bold text-${example.color}-700`}>{example.penalty}</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between">
                        <span className="text-gray-700 font-medium">Pensie finală:</span>
                        <span className={`font-bold text-lg text-${example.color}-800`}>{example.final}</span>
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
                  <Clock className="h-6 w-6 text-blue-600" />
                  Când să alegi pensia anticipată?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Situații favorabile:</h4>
                    <ul className="space-y-1 text-sm text-green-700">
                      <li>• Probleme grave de sănătate</li>
                      <li>• Muncă fizică extenuantă</li>
                      <li>• Alte surse de venit garantate</li>
                      <li>• Dorința de a profita de pensie cât timp ești sănătos</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Când să eviți:</h4>
                    <ul className="space-y-1 text-sm text-red-700">
                      <li>• Dacă pensia va fi principala sursă de venit</li>
                      <li>• Fără alte economii sau investiții</li>
                      <li>• Familie cu cheltuieli mari</li>
                      <li>• Speranță de viață mare în familie</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Alternative mai bune
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-1">Muncă part-time</h4>
                  <p className="text-sm text-purple-100">
                    Continuă să lucrezi part-time și să cotizezi, 
                    mărind pensia viitoare.
                  </p>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-1">Pensie privată</h4>
                  <p className="text-sm text-purple-100">
                    Investește în Pilonul III pentru venit suplimentar 
                    fără penalizări.
                  </p>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-1">Amânarea pensiei</h4>
                  <p className="text-sm text-purple-100">
                    Lucrează după vârsta standard pentru bonus 
                    de până la 25%.
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
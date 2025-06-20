import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calculator, TrendingUp, AlertCircle, CheckCircle, FileText } from "lucide-react";

export default function StagiuCotizare() {
  return (
    <>
      <SEOHead 
        title="Stagiul de Cotizare pentru Pensie România 2025 - Calculator Medie Facultate"
        description="Ghid complet despre stagiul de cotizare necesar pentru pensie în România. Calculează vechimea, completează stagiul și optimizează contribuțiile pentru 2025."
        keywords="stagiu cotizare pensie, vechime pensie, ani cotizare, completare stagiu"
        canonicalUrl="https://calculatormediefacultate.com/stagiu-cotizare"
        schemaType="article"
        articleData={{
          datePublished: "2025-01-01",
          dateModified: "2025-06-19",
          author: "Calculator Medie Facultate",
          category: "Legislatie Pensii"
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <section className="text-center mb-12 sm:mb-16 mt-4 sm:mt-6">
            <div className="mb-6 sm:mb-8">
              <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 text-green-800 mb-6 sm:mb-8 shadow-lg border border-green-200">
                <Clock className="mr-1.5 h-4 w-4" />
                Stagiul de Cotizare
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight px-2 sm:px-4">
              Vechimea <span className="gradient-primary bg-clip-text text-transparent">necesară</span>
              <br className="block" />
              <span className="gradient-primary bg-clip-text text-transparent">pentru Pensie</span>
            </h1>
          </section>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-2 border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Ce este stagiul de cotizare?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Stagiul de cotizare reprezintă perioada în care o persoană a contribuit la sistemul 
                  public de pensii prin plata contribuțiilor sociale obligatorii. Acest stagiu este 
                  esențial pentru obținerea dreptului la pensie și influențează direct cuantumul acesteia.
                </p>
                <p>
                  În România, stagiul minim pentru obținerea dreptului la pensie este de 15 ani, 
                  însă pentru o pensie completă și optimă sunt necesari 35 de ani pentru bărbați și 
                  30 de ani pentru femei.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Verifică Stagiul
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-100 mb-4 text-sm">
                  Calculează stagiul tău de cotizare și pensia estimată
                </p>
                <a 
                  href="/" 
                  className="block w-full bg-white text-green-600 font-bold py-3 px-4 rounded-lg text-center hover:bg-green-50 transition-colors"
                >
                  Calculează Acum
                </a>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-xl bg-white mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                Stagiul necesar pentru diferite tipuri de pensii
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    type: "Pensie minimă",
                    years: "15 ani",
                    description: "Stagiul minim pentru dreptul la pensie",
                    color: "red",
                    icon: "⚠️"
                  },
                  {
                    type: "Pensie standard",
                    years: "25 ani",
                    description: "Pentru o pensie decentă",
                    color: "orange",
                    icon: "📊"
                  },
                  {
                    type: "Pensie optimă",
                    years: "30-35 ani",
                    description: "Pentru pensia maximă posibilă",
                    color: "green",
                    icon: "🎯"
                  },
                  {
                    type: "Pensie anticipată",
                    years: "30-35 ani",
                    description: "Stagiu complet pentru anticipată",
                    color: "blue",
                    icon: "⏰"
                  }
                ].map((pension, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg border">
                    <div className="text-4xl mb-3">{pension.icon}</div>
                    <h4 className="font-bold text-gray-900 mb-2">{pension.type}</h4>
                    <div className="text-2xl font-bold text-green-600 mb-2">{pension.years}</div>
                    <p className="text-sm text-gray-600">{pension.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                  Cum se calculează stagiul
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Perioade incluse în stagiu:</h4>
                    <ul className="space-y-1 text-sm text-green-700">
                      <li>• Muncă cu contract de muncă</li>
                      <li>• Activitate independentă (PFA, SRL)</li>
                      <li>• Stagiul militar obligatoriu</li>
                      <li>• Concediul pentru creșterea copilului</li>
                      <li>• Perioada de șomaj indemnizat</li>
                      <li>• Studiile superioare (max 3 ani)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Formula de calcul:</h4>
                    <p className="text-sm text-blue-700">
                      Stagiul = Total luni cotizare ÷ 12 luni
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <FileText className="h-6 w-6 text-blue-600" />
                  Completarea stagiului
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Cumpărare vechime</h4>
                    <p className="text-sm text-orange-700 mb-2">
                      Poți cumpăra până la 5 ani de vechime pentru a completa stagiul.
                    </p>
                    <div className="text-sm text-orange-600">
                      Cost: ~12 salarii minime brute per an
                    </div>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Recalculare stagiu</h4>
                    <p className="text-sm text-purple-700">
                      Poți solicita recalcularea dacă ai perioade nerecunoscute anterior.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-xl bg-white mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                Impactul stagiului asupra pensiei
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Stagiu (ani)</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Pensie estimată*</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Observații</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["15", "800-1200 RON", "Pensia minimă garantată"],
                      ["20", "1200-1800 RON", "Pensie sub media națională"],
                      ["25", "1800-2500 RON", "Pensie aproape de media națională"],
                      ["30", "2500-3500 RON", "Pensie peste media națională"],
                      ["35+", "3500+ RON", "Pensia maximă posibilă"]
                    ].map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="py-3 px-4 font-medium text-gray-900">{row[0]}</td>
                        <td className="py-3 px-4 text-center text-green-700 font-bold">{row[1]}</td>
                        <td className="py-3 px-4 text-center text-gray-600 text-sm">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-xs text-gray-500 mt-2">*Pentru un salariu mediu de 6000 RON</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Cum să îți optimizezi stagiul
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Verifică periodic evidența stagiului la Casa de Pensii",
                    "Păstrează toate documentele care dovedesc vechimea",
                    "Solicită recunoașterea perioadelor neînregistrate",
                    "Consideră cumpărarea vechimii dacă îți lipsesc ani",
                    "Nu întrerupe contribuțiile voluntar fără motive întemeiate",
                    "Lucrează cât mai mult după vârsta de pensionare"
                  ].map((tip, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{tip}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-red-500 to-orange-600 text-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Atenționări importante
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-1">Întreruperi în stagiu</h4>
                  <p className="text-sm text-red-100">
                    Perioadele fără contribuții nu se calculează în stagiu, 
                    afectând dreptul și cuantumul pensiei.
                  </p>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-1">Verificare periodică</h4>
                  <p className="text-sm text-red-100">
                    Verifică anual evidența stagiului pentru a identifica 
                    și corecta eventualele erori.
                  </p>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-1">Documentare completă</h4>
                  <p className="text-sm text-red-100">
                    Păstrează toate documentele care dovedesc activitatea 
                    și contribuțiile plătite.
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
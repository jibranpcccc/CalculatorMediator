import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, TrendingUp, Calculator, Calendar, AlertTriangle } from "lucide-react";

export default function VarstaPensionare() {
  return (
    <>
      <SEOHead 
        title="Vârsta Standard de Pensionare România 2025 - Calculator Medie Facultate"
        description="Ghid complet despre vârsta standard de pensionare în România pentru 2025. Evoluția vârstei de pensionare, calendar modificări și impact asupra pensionarilor."
        keywords="varsta pensionare romania, varsta pensionare 2025, pensionare standard, modificari varsta"
        canonicalUrl="https://calculatormediefacultate.com/varsta-pensionare"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <section className="text-center mb-12 sm:mb-16 mt-4 sm:mt-6">
            <div className="mb-6 sm:mb-8">
              <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-100 via-cyan-100 to-teal-100 text-blue-800 mb-6 sm:mb-8 shadow-lg border border-blue-200">
                <Clock className="mr-1.5 h-4 w-4" />
                Vârsta Standard de Pensionare
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight px-2 sm:px-4">
              Vârsta de <span className="gradient-primary bg-clip-text text-transparent">Pensionare</span>
              <br className="block" />
              <span className="gradient-primary bg-clip-text text-transparent">în România</span>
            </h1>
          </section>

          <Card className="border-0 shadow-xl bg-white mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                Vârsta actuală de pensionare (2025)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="text-6xl mb-4">👨</div>
                  <h3 className="text-2xl font-bold text-blue-800 mb-2">Bărbați</h3>
                  <div className="text-4xl font-black text-blue-900 mb-2">65 ani</div>
                  <p className="text-blue-700 text-sm">Stabilă din 2015</p>
                </div>
                <div className="text-center p-6 bg-pink-50 rounded-xl">
                  <div className="text-6xl mb-4">👩</div>
                  <h3 className="text-2xl font-bold text-pink-800 mb-2">Femei</h3>
                  <div className="text-4xl font-black text-pink-900 mb-2">63 ani</div>
                  <p className="text-pink-700 text-sm">Creștere treptată până la 65 ani</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-2 border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-green-600" />
                  Calendarul modificărilor pentru femei
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-gray-200">
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">An naștere</th>
                          <th className="text-center py-3 px-4 font-semibold text-gray-900">Vârsta pensionare</th>
                          <th className="text-center py-3 px-4 font-semibold text-gray-900">An pensionare</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["1960", "60 ani", "2020"],
                          ["1965", "62 ani 8 luni", "2027-2028"],
                          ["1970", "65 ani", "2035"],
                          ["1975", "65 ani", "2040"],
                          ["1980", "65 ani", "2045"]
                        ].map((row, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                            <td className="py-3 px-4 font-medium text-gray-900">{row[0]}</td>
                            <td className="py-3 px-4 text-center text-blue-700 font-bold">{row[1]}</td>
                            <td className="py-3 px-4 text-center text-gray-700">{row[2]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Calculează Pensia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 mb-4 text-sm">
                  Află exact când te poți pensiona și ce pensie vei primi
                </p>
                <a 
                  href="/" 
                  className="block w-full bg-white text-blue-600 font-bold py-3 px-4 rounded-lg text-center hover:bg-blue-50 transition-colors"
                >
                  Calculează Acum
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                  Evoluția vârstei de pensionare
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Înainte de 2010</h4>
                    <div className="text-sm text-blue-700">
                      <div>Bărbați: 65 ani</div>
                      <div>Femei: 57-60 ani (în funcție de copii)</div>
                    </div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">2010-2030</h4>
                    <div className="text-sm text-green-700">
                      <div>Bărbați: 65 ani (stabil)</div>
                      <div>Femei: Creștere treptată la 65 ani</div>
                    </div>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">După 2030</h4>
                    <div className="text-sm text-purple-700">
                      <div>Ambele genuri: 65 ani</div>
                      <div>Posibile ajustări în funcție de speranța de viață</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <Users className="h-6 w-6 text-blue-600" />
                  Categorii speciale
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-semibold text-orange-800 mb-2">Condiții grele de muncă</h4>
                    <div className="text-sm text-orange-700">
                      <div>Reducere cu 2-10 ani</div>
                      <div>Ex: mineri, metalurgiști, militari</div>
                    </div>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-800 mb-2">Condiții deosebit de grele</h4>
                    <div className="text-sm text-red-700">
                      <div>Reducere cu 5-15 ani</div>
                      <div>Ex: subteran, radiații, chimicale</div>
                    </div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-800 mb-2">Pensii de serviciu</h4>
                    <div className="text-sm text-green-700">
                      <div>Reguli speciale</div>
                      <div>Ex: magistrați, diplomați, parlamentari</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-xl bg-white mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                Comparație internațională
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { country: "România", age: "65/63", trend: "Creștere" },
                  { country: "Germania", age: "67", trend: "Stabil" },
                  { country: "Franța", age: "62-67", trend: "Complex" },
                  { country: "Italia", age: "67", trend: "Stabil" },
                  { country: "Polonia", age: "65/60", trend: "Stabil" }
                ].map((country, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">{country.country}</h4>
                    <div className="text-2xl font-bold text-blue-600 mb-1">{country.age}</div>
                    <div className="text-xs text-gray-600">{country.trend}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Ce influențează vârsta de pensionare?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      factor: "Speranța de viață",
                      description: "Creșterea speranței de viață impune majorarea vârstei de pensionare"
                    },
                    {
                      factor: "Sustenabilitatea sistemului",
                      description: "Echilibrul între numărul de pensionari și cel de contribuabili"
                    },
                    {
                      factor: "Presiunea demografică",
                      description: "Îmbătrânirea populației și scăderea natalității"
                    },
                    {
                      factor: "Standardele europene",
                      description: "Armonizarea cu practicile din Uniunea Europeană"
                    }
                  ].map((factor, index) => (
                    <div key={index} className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">{factor.factor}</h4>
                      <p className="text-sm text-blue-700">{factor.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-500 to-red-600 text-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Sfaturi importante
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-1">Planificare din timp</h4>
                  <p className="text-sm text-orange-100">
                    Calculează-ți pensia cu noua vârstă de pensionare pentru a evita surprizele.
                  </p>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-1">Alternative pentru pensionare</h4>
                  <p className="text-sm text-orange-100">
                    Consideră pensia anticipată sau private pentru flexibilitate.
                  </p>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-1">Monitorizează modificările</h4>
                  <p className="text-sm text-orange-100">
                    Legislația se poate schimba - urmărește actualizările oficiale.
                  </p>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-1">Contribuții continue</h4>
                  <p className="text-sm text-orange-100">
                    Asigură-te că ai stagiul complet de cotizare pentru pensie maximă.
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
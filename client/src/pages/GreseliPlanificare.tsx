import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, X, CheckCircle } from "lucide-react";

export default function GreseliPlanificare() {
  return (
    <>
      <SEOHead 
        title="Top 5 Greșeli de Evitat la Planificarea Pensiei - Calculator Medie Facultate"
        description="Descoperă cele mai frecvente greșeli în planificarea pensiei și cum să le eviți. Ghid complet pentru o strategie de pensionare reușită în România."
        keywords="greseli planificare pensie, erori pensie, strategii pensie, sfaturi pensie"
        canonicalUrl="https://calculatormediefacultate.com/greseli-planificare"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <section className="text-center mb-12 sm:mb-16 mt-4 sm:mt-6">
            <div className="mb-6 sm:mb-8">
              <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100 text-red-800 mb-6 sm:mb-8 shadow-lg border border-red-200">
                <AlertTriangle className="mr-1.5 h-4 w-4" />
                Top 5 Greșeli de Evitat
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight px-2 sm:px-4">
              Greșelile care te <span className="gradient-primary bg-clip-text text-transparent">Costă</span>
              <br className="block" />
              <span className="gradient-primary bg-clip-text text-transparent">la Pensie</span>
            </h1>
          </section>

          <div className="space-y-8">
            {[
              {
                number: "1",
                title: "Amânarea începerii planificării",
                problem: "Mulți oameni cred că au suficient timp și amână planificarea pensiei până la 40-50 de ani.",
                impact: "Pierzi puterea dobânzii compuse. O diferență de 10 ani poate însemna jumătate din suma finală.",
                solution: "Începe să economisești pentru pensie imediat, chiar și cu sume mici (100-200 RON/lună)."
              },
              {
                number: "2", 
                title: "Bazarea exclusiv pe pensia de stat",
                problem: "Mulți se bazează doar pe Pilonul I, ignorând faptul că pensia de stat poate fi insuficientă.",
                impact: "Rata de înlocuire a venitului prin pensia de stat este de doar 40-50% din salariul mediu.",
                solution: "Diversifică cu Pilonul III, fonduri de investiții și alte instrumente de economisire."
              },
              {
                number: "3",
                title: "Ignorarea inflației",
                problem: "Calculele se fac în bani de azi, fără a ține cont de diminuarea puterii de cumpărare.",
                impact: "Cei 2000 RON de azi vor avea puterea de cumpărare de ~1000 RON în 20 de ani (inflație 3.5%).",
                solution: "Planifică pentru un venit real mai mare și investește în instrumente care bat inflația."
              },
              {
                number: "4",
                title: "Lipsa unui plan de urgență",
                problem: "Nu se ia în calcul posibilitatea pensionării anticipate din motive de sănătate.",
                impact: "Pensionarea anticipată poate reduce pensia cu până la 30% și elimină anii de contribuție finali.",
                solution: "Creează un fond de urgență și asigură-te pentru incapacitate de muncă."
              },
              {
                number: "5",
                title: "Neactualizarea planului",
                problem: "Planul de pensionare este făcut o dată și uitat, fără revizuiri periodice.",
                impact: "Schimbările din viață (salariu, familie, legislație) pot face planul ineficient.",
                solution: "Revizuiește anual planul și ajustează contribuțiile și strategia de investiții."
              }
            ].map((mistake, index) => (
              <Card key={index} className="border-0 shadow-xl bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {mistake.number}
                    </div>
                    {mistake.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                      <div className="flex items-center gap-2 mb-2">
                        <X className="h-5 w-5 text-red-600" />
                        <h4 className="font-semibold text-red-800">Problema</h4>
                      </div>
                      <p className="text-sm text-red-700">{mistake.problem}</p>
                    </div>
                    
                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-5 w-5 text-orange-600" />
                        <h4 className="font-semibold text-orange-800">Impactul</h4>
                      </div>
                      <p className="text-sm text-orange-700">{mistake.impact}</p>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <h4 className="font-semibold text-green-800">Soluția</h4>
                      </div>
                      <p className="text-sm text-green-700">{mistake.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-xl">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">Evită aceste greșeli!</h2>
              <p className="text-xl text-blue-100 mb-8">Începe să-ți planifici pensia corect chiar acum</p>
              <a 
                href="/" 
                className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-blue-50 transition-colors"
              >
                Calculează Pensia Ta
              </a>
            </CardContent>
          </Card>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
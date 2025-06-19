import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Route, TrendingUp, Shield } from "lucide-react";
import { Link } from "wouter";

export default function PensionPlanning() {
  return (
    <>
      <SEOHead 
        title="Ghid Complet pentru Planificarea Pensiei în România | 2025"
        description="Planifică-ți pensia strategică cu ghidul nostru complet. Evită greșelile costisitoare și maximizează-ți veniturile la bătrânețe."
        keywords="planificarea pensiei, strategii pensie, planificare financiară, pensie România"
      />
      
      <div className="min-h-screen bg-neutral-50">
        <Header />
        
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Route className="text-primary text-3xl" />
            </div>
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">
              Ghid Complet pentru Planificarea Pensiei în România
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Strategii experte pentru o pensie liniștită și independența financiară la bătrânețe
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <TrendingUp className="text-primary" />
                De ce este crucială planificarea pensiei?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-neutral-700">
                Planificarea pensiei nu este doar despre calcularea sumei pe care o vei primi de la stat. 
                Este despre crearea unei strategii complete care să îți asigure confortul financiar și 
                independența la bătrânețe.
              </p>
              <p className="text-neutral-700">
                În România, sistemul public de pensii oferă doar o parte din veniturile necesare pentru 
                menținerea standardului de viață. De aceea, planificarea proactivă este esențială.
              </p>
            </CardContent>
          </Card>

          {/* Key Topics Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Top 5 Greșeli de Evitat</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-red-500 mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">Amânarea planificării până la vârsta de 40-50 de ani</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-500 mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">Dependența exclusivă de pensia de stat</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-500 mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">Ignorarea inflației în calculele pe termen lung</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-500 mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">Neînțelegerea sistemului cu trei piloni</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-500 mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">Lipsa diversificării surselor de venit</span>
                  </li>
                </ul>
                <Link href="/greseli-planificare">
                  <Button variant="outline" className="mt-4 w-full">
                    Citește ghidul complet <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Strategii de Investiții</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">Diversificarea portofoliului de pensii</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">Optimizarea contribuțiilor la Pilonul III</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">Investiții în imobiliare pentru pensie</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">Planificarea fiscală pe termen lung</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">Instrumentele financiare pentru acumulare</span>
                  </li>
                </ul>
                <Link href="/strategii-investitii">
                  <Button variant="outline" className="mt-4 w-full">
                    Descoperă strategiile <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Pillar Comparison */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Shield className="text-primary" />
                Pilonul II vs. Pilonul III: Ghid de Decizie
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-3">Pilonul II (Obligatoriu)</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Contribuție obligatorie de 3.75% din salariu</li>
                    <li>• Administrat de fonduri de pensii private</li>
                    <li>• Plata sub formă de anuitate viageră</li>
                    <li>• Nu poți retrage banii înainte de pensionare</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-3">Pilonul III (Voluntar)</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Contribuție voluntară, până la 400 EUR/an deductibil</li>
                    <li>• Flexibilitate în alegerea fondului</li>
                    <li>• Posibilitatea retragerii anticipate</li>
                    <li>• Beneficii fiscale semnificative</li>
                  </ul>
                </div>
              </div>
              <Link href="/pilonul-2-vs-3">
                <Button className="mt-6">
                  Citește comparația detaliată <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Calculator Tools */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Instrumente de Planificare</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/calculator-pilon3">
                  <Button variant="outline" className="w-full h-auto p-4 flex flex-col items-start">
                    <span className="font-semibold mb-1">Calculator Contribuții Pilon III</span>
                    <span className="text-sm text-muted-foreground">Optimizează contribuțiile la pensia privată</span>
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" className="w-full h-auto p-4 flex flex-col items-start">
                    <span className="font-semibold mb-1">Calculator Pensie Principal</span>
                    <span className="text-sm text-muted-foreground">Estimează pensia ta de stat</span>
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Începe planificarea astăzi!</h3>
              <p className="mb-6 opacity-90">
                Cu cât începi mai devreme, cu atât vei avea o pensie mai confortabilă. 
                Nu amâna decizia care îți va influența următorii 20-30 de ani.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button size="lg" variant="secondary">
                    Calculează pensia ta
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    Contactează un expert
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

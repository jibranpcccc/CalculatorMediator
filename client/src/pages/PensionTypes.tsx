import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, List, Clock, Users, Shield, AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function PensionTypes() {
  return (
    <>
      <SEOHead 
        title="Calculator Medie Facultate - Tipuri de Pensii România 2025 Ghid Complet"
        description="Calculator Medie Facultate prezintă ghidul complet despre toate tipurile de pensii din România: pensie pentru limită de vârstă, anticipată, de urmaș și invaliditate."
        keywords="calculator medie facultate, tipuri de pensii românia, pensie de stat, pensie anticipată"
        canonicalUrl="https://calculatormediefacultate.com/tipuri-de-pensii"
      />
      
      <div className="min-h-screen bg-neutral-50">
        <Header />
        
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <List className="text-green-600 text-3xl" />
            </div>
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">
              Ghid Exhaustiv: Tipuri de Pensii din Sistemul Public din România
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Înțelege toate opțiunile disponibile și alege strategia potrivită pentru situația ta
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <p className="text-neutral-700 mb-4">
                Sistemul public de pensii din România oferă mai multe tipuri de pensii, fiecare cu 
                condiții specifice de acordare și modalități de calcul. Cunoașterea acestor opțiuni 
                este esențială pentru planificarea optimă a viitorului tău financiar.
              </p>
              <p className="text-neutral-700">
                În acest ghid vei găsi informații complete despre fiecare tip de pensie, 
                condițiile de acordare și cum poți beneficia de ele.
              </p>
            </CardContent>
          </Card>

          {/* Pension Types Grid */}
          <div className="space-y-8">
            
            {/* 1. Pensia pentru Limită de Vârstă */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">1. Pensia pentru Limită de Vârstă: Baza Sistemului</CardTitle>
                  <Badge>Cea mai comună</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-neutral-700">
                  Aceasta este forma principală de pensie din România, acordată persoanelor care au 
                  împlinit vârsta standard de pensionare și au stagiul minim de cotizare.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Condiții de acordare:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Vârsta: 65 ani (bărbați), 63 ani (femei)</li>
                      <li>• Stagiu minim: 15 ani de cotizare</li>
                      <li>• Contribuții la sistemul public</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Beneficii:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Pensie calculată pe baza punctelor</li>
                      <li>• Indexare anuală</li>
                      <li>• Plată viageră</li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-sm text-neutral-600">
                  Află în detaliu despre <Link href="/pensie-limita-varsta" className="text-primary hover:underline font-medium">condițiile pensiei pentru limită de vârstă</Link> în articolul nostru dedicat.
                </p>
              </CardContent>
            </Card>

            {/* 2. Pensia Anticipată */}
            <Card className="border-l-4 border-l-amber-500">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Clock className="text-amber-500" />
                    2. Pensia Anticipată și Pensia Anticipată Parțială
                  </CardTitle>
                  <Badge variant="outline">Cu penalizări</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-neutral-700">
                  Pentru persoanele care doresc să se pensioneze înainte de vârsta standard, 
                  cu condiția îndeplinirii unor criterii specifice.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Pensie Anticipată (fără penalizare):</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Vârsta: 60 ani (bărbați), 58 ani (femei)</li>
                      <li>• Stagiu: 35 ani (bărbați), 30 ani (femei)</li>
                      <li>• Fără reduceri la calculul pensiei</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Pensie Anticipată Parțială:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Cu 2 ani înainte de vârsta standard</li>
                      <li>• Penalizare de 0.5% pentru fiecare lună</li>
                      <li>• Stagiu minim de 15 ani</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-amber-50 p-4 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="text-amber-600 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-sm text-amber-800">
                      <strong>Atenție:</strong> Pensia anticipată parțială vine cu penalizări permanente. 
                      Calculează cu atenție impactul financiar pe termen lung.
                    </p>
                  </div>
                </div>
                
                <p className="text-sm text-neutral-600">
                  Dacă vrei să te retragi mai devreme, consultă ghidul nostru despre 
                  <Link href="/pensie-anticipata" className="text-primary hover:underline font-medium"> calculul și condițiile pensiei anticipate parțiale</Link>.
                </p>
              </CardContent>
            </Card>

            {/* 3. Pensia de Urmaș */}
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Users className="text-blue-500" />
                  3. Pensia de Urmaș: Protecție pentru Familie
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-neutral-700">
                  Pensie acordată membrilor de familie ai unei persoane decedate care era 
                  pensionar sau îndeplinea condițiile pentru pensionare.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Beneficiari:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Soțul/soția</li>
                      <li>• Copiii minori sau studenți</li>
                      <li>• Părinții în întreținere</li>
                      <li>• Copiii cu dizabilități</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Condiții:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Decedatul avea drept de pensie</li>
                      <li>• Relația de întreținere (pentru părinți)</li>
                      <li>• Vârsta limită pentru copii (26 ani studenți)</li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-sm text-neutral-600">
                  Înțelege cine beneficiază și cum se calculează citind articolul despre 
                  <Link href="/pensie-urmas" className="text-primary hover:underline font-medium">pensia de urmaș</Link>.
                </p>
              </CardContent>
            </Card>

            {/* 4. Pensia de Invaliditate */}
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Shield className="text-red-500" />
                  4. Pensia de Invaliditate
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-neutral-700">
                  Acordată persoanelor care și-au pierdut capacitatea de muncă din cauza 
                  unei boli sau accidente.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Gradul I (75-100%):</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Incapacitate totală</li>
                      <li>• Necesită îngrijire permanentă</li>
                      <li>• Indemnizație completă</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Gradul II (50-74%):</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Incapacitate gravă</li>
                      <li>• Muncă foarte limitată</li>
                      <li>• Indemnizație parțială</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Gradul III (30-49%):</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Incapacitate medie</li>
                      <li>• Poate munci parțial</li>
                      <li>• Indemnizație redusă</li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-sm text-neutral-600">
                  Detalii complete despre gradele de invaliditate găsești în ghidul nostru despre 
                  <Link href="/pensie-invaliditate" className="text-primary hover:underline font-medium">pensia de invaliditate</Link>.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Calculator Tools */}
          <Card className="mt-12 bg-gradient-to-r from-green-50 to-green-100">
            <CardHeader>
              <CardTitle>Calculatoare și Instrumente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/calculator-anticipata">
                  <Button variant="outline" className="w-full h-auto p-4 flex flex-col items-start">
                    <span className="font-semibold mb-1">Calculator Pensie Anticipată</span>
                    <span className="text-sm text-muted-foreground">Calculează penalizările pentru pensionarea anticipată</span>
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" className="w-full h-auto p-4 flex flex-col items-start">
                    <span className="font-semibold mb-1">Calculator Principal</span>
                    <span className="text-sm text-muted-foreground">Estimează toate tipurile de pensii</span>
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* External Link */}
          <Card className="mt-8 border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Shield className="text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Informații Oficiale</h4>
                  <p className="text-blue-800 text-sm mb-3">
                    Pentru informații actualizate și proceduri oficiale, consultă site-ul 
                    Casei Naționale de Pensii Publice.
                  </p>
                  <a 
                    href="https://www.cnpp.ro" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center"
                  >
                    Vizitează CNPP.ro <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="mt-12 bg-green-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Planifică-ți strategia de pensionare</h3>
              <p className="mb-6 opacity-90">
                Acum că înțelegi toate opțiunile disponibile, este timpul să îți 
                calculezi pensia și să alegi strategia optimă.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button size="lg" variant="secondary">
                    Calculează pensia ta
                  </Button>
                </Link>
                <Link href="/planificarea-pensiei">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-green-600">
                    Ghid de planificare
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

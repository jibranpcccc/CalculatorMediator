import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, AlertTriangle, Scale, Shield, Info, Users } from "lucide-react";

export default function Termeni() {
  return (
    <>
      <SEOHead 
        title="Termeni și Condiții - Calculator Medie Facultate"
        description="Termeni și condiții de utilizare Calculator Medie Facultate. Regulile și condițiile pentru folosirea calculatoarelor de pensie și serviciilor noastre."
        keywords="termeni si conditii, conditii utilizare, regulament, responsabilitati"
        canonicalUrl="https://calculatormediefacultate.com/termeni"
        schemaType="website"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <Header />
        
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Hero Section */}
          <section className="text-center mb-12 sm:mb-16 mt-4 sm:mt-6">
            <div className="mb-6 sm:mb-8">
              <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-100 via-orange-100 to-red-100 text-amber-800 mb-6 sm:mb-8 shadow-lg border border-amber-200">
                <span className="mr-1.5 text-sm sm:text-base">📋</span>
                Termeni și Condiții de Utilizare
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight px-2 sm:px-4">
              Termeni și <span className="bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">Condiții</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed font-medium px-4 sm:px-6">
              Regulile și condițiile pentru utilizarea serviciilor Calculator Medie Facultate.
              <span className="font-bold text-gray-800 block mt-1.5">Te rugăm să citești cu atenție acești termeni.</span>
            </p>
          </section>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Acceptance */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-xl font-bold text-blue-800">1. Acceptarea Termenilor</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Prin accesarea și utilizarea site-ului CalculatorMedieFacultate.com, accepti în totalitate 
                    acești termeni și condiții. Dacă nu ești de acord cu oricare dintre acești termeni, 
                    te rugăm să nu folosești serviciile noastre.
                  </p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-blue-800 font-semibold text-sm">
                      ✓ Utilizarea continuă a site-ului constituie acceptarea termenilor actualizați.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services Description */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Info className="h-6 w-6 text-green-600" />
                  <CardTitle className="text-xl font-bold text-green-800">2. Descrierea Serviciilor</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-4">
                  <p className="text-gray-700">CalculatorMedieFacultate.com oferă:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Calculatoare de pensii:</strong> Standard, anticipată, Pilon III</li>
                    <li>• <strong>Planificator financiar:</strong> Instrumente de planificare</li>
                    <li>• <strong>Conținut educațional:</strong> Ghiduri, articole, informații legislative</li>
                    <li>• <strong>Resurse gratuite:</strong> Toate serviciile sunt oferite gratuit</li>
                  </ul>
                  
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200 mt-4">
                    <p className="text-green-800 font-semibold text-sm">
                      ✓ Serviciile sunt oferite "ca atare" și pot fi modificate sau întrerupte fără notificare prealabilă.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="h-6 w-6 text-purple-600" />
                  <CardTitle className="text-xl font-bold text-purple-800">3. Responsabilitățile Utilizatorului</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-4">
                  <p className="text-gray-700">Ca utilizator, te angajezi să:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Furnizezi informații corecte pentru calculele de pensie</li>
                    <li>• Folosești serviciile doar în scopuri legale și personale</li>
                    <li>• Nu încerci să compromiti securitatea site-ului</li>
                    <li>• Respecti drepturile de proprietate intelectuală</li>
                    <li>• Nu reproduci sau distribui conținutul fără permisiune</li>
                  </ul>
                  
                  <h3 className="font-semibold text-purple-800 pt-4">Este interzis să:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Folosești serviciile pentru activități comerciale fără acordul nostru</li>
                    <li>• Introduci viruși sau cod malițios</li>
                    <li>• Accesezi în mod neautorizat sistemele noastre</li>
                    <li>• Creezi conturi false sau furnizezi informații false</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Limitations and Disclaimers */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <AlertTriangle className="h-6 w-6 text-orange-600" />
                  <CardTitle className="text-xl font-bold text-orange-800">4. Limitări și Excluderi de Responsabilitate</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-4">
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <p className="text-orange-800 font-semibold">
                      ⚠️ IMPORTANT: Calculele sunt estimative și nu constituie sfaturi financiare profesionale.
                    </p>
                  </div>
                  
                  <h3 className="font-semibold text-gray-800">Limitări importante:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Caracter estimativ:</strong> Rezultatele sunt aproximative, bazate pe legislația actuală</li>
                    <li>• <strong>Modificări legislative:</strong> Calculele pot deveni inexacte din cauza schimbărilor legale</li>
                    <li>• <strong>Fără garanții:</strong> Nu garantăm acuratețea absolută a calculelor</li>
                    <li>• <strong>Fără răspundere:</strong> Nu răspundem pentru deciziile luate pe baza calculelor</li>
                    <li>• <strong>Consultare profesională:</strong> Recomandăm consultarea unui specialist financiar</li>
                  </ul>
                  
                  <h3 className="font-semibold text-gray-800 pt-4">Excluderi de responsabilitate:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Pierderi financiare rezultate din utilizarea serviciilor</li>
                    <li>• Întreruperea sau indisponibilitatea temporară a serviciilor</li>
                    <li>• Erori în calculele sau informațiile furnizate</li>
                    <li>• Acțiunile terților sau linkurile externe</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="h-6 w-6 text-indigo-600" />
                  <CardTitle className="text-xl font-bold text-indigo-800">5. Proprietate Intelectuală</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Tot conținutul acestui site (texte, imagini, logo-uri, calculatoare, design) 
                    este protejat de drepturile de autor și aparține CalculatorMedieFacultate.com.
                  </p>
                  
                  <h3 className="font-semibold text-gray-800">Utilizare permisă:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Consultarea și folosirea calculatoarelor pentru uz personal</li>
                    <li>• Partajarea linkurilor către calculatoare</li>
                    <li>• Citarea cu mențiunea sursei</li>
                  </ul>
                  
                  <h3 className="font-semibold text-gray-800 pt-4">Utilizare nepermisă:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Copierea sau reproducerea conținutului fără permisiune</li>
                    <li>• Folosirea în scopuri comerciale</li>
                    <li>• Modificarea sau distribuirea codului sursa</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Privacy and Data */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Scale className="h-6 w-6 text-red-600" />
                  <CardTitle className="text-xl font-bold text-red-800">6. Legislație Aplicabilă și Jurisdicție</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Acești termeni și condiții sunt guvernați de legea română. Orice litigiu 
                    care poate apărea va fi soluționat de instanțele competente din România.
                  </p>
                  
                  <h3 className="font-semibold text-gray-800">Conformitate:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• GDPR (Regulamentul General privind Protecția Datelor)</li>
                    <li>• Legea nr. 506/2004 privind prelucrarea datelor cu caracter personal</li>
                    <li>• Legislația română aplicabilă comerțului electronic</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Modifications and Contact */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="p-6">
                <CardTitle className="text-xl font-bold text-gray-800">7. Modificări și Contact</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Modificarea termenilor:</h3>
                  <p className="text-gray-700">
                    Ne rezervăm dreptul de a modifica acești termeni în orice moment. 
                    Modificările vor intra în vigoare imediat după publicarea pe site.
                  </p>
                  
                  <h3 className="font-semibold text-gray-800">Separabilitate:</h3>
                  <p className="text-gray-700">
                    Dacă oricare dintre aceste prevederi este considerată invalidă, 
                    restul termenilor rămân în vigoare.
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-gray-800 mb-2">Contact pentru întrebări:</h3>
                    <p className="text-gray-700">
                      Email: contact@calculatormediefacultate.com<br/>
                      Timp de răspuns: maxim 48 de ore
                    </p>
                  </div>
                  
                  <p className="text-sm text-gray-500">
                    <strong>Ultima actualizare:</strong> 19 iunie 2025<br/>
                    <strong>Versiunea:</strong> 1.0<br/>
                    <strong>Data intrării în vigoare:</strong> 19 iunie 2025
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
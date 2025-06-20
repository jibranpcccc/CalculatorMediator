import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, UserCheck, Database, Globe } from "lucide-react";

export default function Confidentialitate() {
  return (
    <>
      <SEOHead 
        title="Politica de Confidențialitate - Calculator Medie Facultate"
        description="Politica de confidențialitate Calculator Medie Facultate. Află cum protejăm datele tale personale și care sunt drepturile tale conform GDPR."
        keywords="politica confidentialitate, protectia datelor, GDPR, privacitatea datelor"
        canonicalUrl="https://calculatormediefacultate.com/confidentialitate"
        schemaType="website"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Header />
        
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Hero Section */}
          <section className="text-center mb-12 sm:mb-16 mt-4 sm:mt-6">
            <div className="mb-6 sm:mb-8">
              <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-800 mb-6 sm:mb-8 shadow-lg border border-blue-200">
                <span className="mr-1.5 text-sm sm:text-base">🔒</span>
                Protecția Datelor Tale
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight px-2 sm:px-4">
              Politica de <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Confidențialitate</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed font-medium px-4 sm:px-6">
              Respectăm și protejăm confidențialitatea datelor tale personale conform reglementărilor GDPR.
              <span className="font-bold text-gray-800 block mt-1.5">Actualizat în conformitate cu legislația din 2025.</span>
            </p>
          </section>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Data Collection */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Database className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-xl font-bold text-blue-800">1. Colectarea Datelor</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Ce date colectăm:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Date de calcul:</strong> Vârsta, salariul, vechimea în muncă (doar pentru calculele de pensie)</li>
                    <li>• <strong>Date tehnice:</strong> Adresa IP, tipul browser-ului, timpul petrecut pe site</li>
                    <li>• <strong>Cookies:</strong> Pentru îmbunătățirea experienței utilizatorului</li>
                    <li>• <strong>Date de contact:</strong> Doar dacă ne contactezi voluntar</li>
                  </ul>
                  
                  <h3 className="font-semibold text-gray-800 pt-4">Ce NU colectăm:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Date personale identificabile permanent</li>
                    <li>• Informații bancare sau financiare sensibile</li>
                    <li>• Date biografice detaliate</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Eye className="h-6 w-6 text-green-600" />
                  <CardTitle className="text-xl font-bold text-green-800">2. Utilizarea Datelor</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-4">
                  <p className="text-gray-700">Folosim datele colectate pentru:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Calculele de pensie:</strong> Procesarea datelor introduse pentru rezultate precise</li>
                    <li>• <strong>Îmbunătățirea serviciilor:</strong> Analiza statistică pentru optimizare</li>
                    <li>• <strong>Suport tehnic:</strong> Rezolvarea problemelor și răspunsul la întrebări</li>
                    <li>• <strong>Conformitatea legală:</strong> Respectarea obligațiilor legale</li>
                  </ul>
                  
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200 mt-4">
                    <p className="text-green-800 font-semibold text-sm">
                      ✓ Datele de calcul sunt procesate local în browser-ul tău și nu sunt stocate permanent pe serverele noastre.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Lock className="h-6 w-6 text-purple-600" />
                  <CardTitle className="text-xl font-bold text-purple-800">3. Protecția Datelor</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-4">
                  <p className="text-gray-700">Măsurile de securitate implementate:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Criptare SSL:</strong> Toate comunicațiile sunt criptate</li>
                    <li>• <strong>Acces restricționat:</strong> Doar personalul autorizat are acces la date</li>
                    <li>• <strong>Backup securizat:</strong> Copii de siguranță criptate</li>
                    <li>• <strong>Monitorizare:</strong> Supraveghere continuă pentru încălcări de securitate</li>
                    <li>• <strong>Anonimizare:</strong> Datele statistice sunt anonimizate</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* User Rights */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <UserCheck className="h-6 w-6 text-orange-600" />
                  <CardTitle className="text-xl font-bold text-orange-800">4. Drepturile Tale</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-4">
                  <p className="text-gray-700">Conform GDPR, ai următoarele drepturi:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Dreptul la informare:</strong> Să știi ce date colectăm și cum le folosim</li>
                    <li>• <strong>Dreptul de acces:</strong> Să soliciți o copie a datelor tale</li>
                    <li>• <strong>Dreptul la rectificare:</strong> Să corectezi datele incorecte</li>
                    <li>• <strong>Dreptul la ștergere:</strong> Să soliciți ștergerea datelor ("dreptul de a fi uitat")</li>
                    <li>• <strong>Dreptul la portabilitate:</strong> Să primești datele într-un format structurat</li>
                    <li>• <strong>Dreptul la opoziție:</strong> Să te opui prelucrării datelor</li>
                  </ul>
                  
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 mt-4">
                    <p className="text-orange-800 font-semibold text-sm">
                      Pentru exercitarea acestor drepturi, contactează-ne la: contact@calculatormediefacultate.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Globe className="h-6 w-6 text-indigo-600" />
                  <CardTitle className="text-xl font-bold text-indigo-800">5. Cookies și Tehnologii Similar</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-4">
                  <p className="text-gray-700">Tipurile de cookies folosite:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Cookies esențiale:</strong> Necesare pentru funcționarea site-ului</li>
                    <li>• <strong>Cookies de performanță:</strong> Pentru analiza traficului (Google Analytics)</li>
                    <li>• <strong>Cookies funcționale:</strong> Pentru personalizarea experienței</li>
                  </ul>
                  
                  <p className="text-gray-700 pt-2">
                    Poți gestiona preferințele de cookies din setările browser-ului tău sau prin notificarea afișată la prima vizită.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Data Sharing */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="h-6 w-6 text-red-600" />
                  <CardTitle className="text-xl font-bold text-red-800">6. Partajarea Datelor</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <p className="text-red-800 font-semibold">
                      ❌ NU vindem, NU închiriem și NU partajăm datele tale personale cu terțe părți pentru scopuri comerciale.
                    </p>
                  </div>
                  
                  <p className="text-gray-700">Excepții (doar în cazuri strict necesare):</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Furnizori de servicii tehnice (hosting, analiză) - cu acorduri stricte de confidențialitate</li>
                    <li>• Autorități competente - doar la cererea legală</li>
                    <li>• Protecția drepturilor noastre legale</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact & Updates */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="p-6">
                <CardTitle className="text-xl font-bold text-gray-800">7. Contact și Actualizări</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Această politică de confidențialitate poate fi actualizată periodic pentru a reflecta 
                    modificările legislative sau ale serviciilor noastre.
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-gray-800 mb-2">Contact pentru protecția datelor:</h3>
                    <p className="text-gray-700">
                      Email: contact@calculatormediefacultate.com<br/>
                      Timp de răspuns: maxim 30 de zile
                    </p>
                  </div>
                  
                  <p className="text-sm text-gray-500">
                    <strong>Ultima actualizare:</strong> 19 iunie 2025<br/>
                    <strong>Versiunea:</strong> 1.0
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
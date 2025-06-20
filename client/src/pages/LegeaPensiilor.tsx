import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gavel, Calendar, TrendingUp, AlertCircle, FileText, Scale } from "lucide-react";

export default function LegeaPensiilor() {
  return (
    <>
      <SEOHead 
        title="Legea Pensiilor 2025 România - Calculator Medie Facultate"
        description="Ghid complet despre Legea Pensiilor 2025 din România. Modificări legislative, noutăți, impactul asupra pensionarilor și viitorilor pensionari."
        keywords="legea pensiilor 2025, modificari pensii, legislatie pensii romania, reforma pensii"
        canonicalUrl="https://calculatormediefacultate.com/legea-pensiilor"
        schemaType="article"
        articleData={{
          datePublished: "2025-01-01",
          dateModified: "2025-06-19",
          author: "Calculator Medie Facultate",
          category: "Legislatie Pensii"
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <section className="text-center mb-12 sm:mb-16 mt-4 sm:mt-6">
            <div className="mb-6 sm:mb-8">
              <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-100 via-yellow-100 to-orange-100 text-amber-800 mb-6 sm:mb-8 shadow-lg border border-amber-200">
                <Gavel className="mr-1.5 h-4 w-4" />
                Legea Pensiilor 2025
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight px-2 sm:px-4">
              Legislația <span className="gradient-primary bg-clip-text text-transparent">Actualizată</span>
              <br className="block" />
              <span className="gradient-primary bg-clip-text text-transparent">pentru 2025</span>
            </h1>
          </section>

          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            <Card className="lg:col-span-3 border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <Scale className="h-6 w-6 text-amber-600" />
                  Modificările importante din 2025
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Creșterea vârstei de pensionare",
                      details: "Vârsta standard pentru femei continuă să crească treptat către 65 de ani",
                      impact: "Afectează femeile născute după 1965",
                      badge: "Evolutiv"
                    },
                    {
                      title: "Indexarea pensiilor",
                      details: "Formula de indexare ține cont de inflație și creșterea salariului mediu",
                      impact: "Creștere estimată 7-10% în 2025",
                      badge: "Pozitiv"
                    },
                    {
                      title: "Pensia minimă",
                      details: "Majorarea pensiei minime la 1000 RON din 2025",
                      impact: "Beneficiază 1.2 milioane de pensionari",
                      badge: "Major"
                    },
                    {
                      title: "Pilonul II",
                      details: "Consolidarea fondurilor de pensii administrate privat",
                      impact: "Îmbunătățirea randamentelor",
                      badge: "Reformă"
                    }
                  ].map((change, index) => (
                    <div key={index} className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold text-gray-900">{change.title}</h4>
                        <Badge className="bg-amber-200 text-amber-800 text-xs">{change.badge}</Badge>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">{change.details}</p>
                      <p className="text-xs text-amber-700 font-medium">Impact: {change.impact}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white">
              <CardHeader>
                <CardTitle className="text-lg font-bold flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Cronologia 2025
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-white/10 rounded-lg">
                  <div className="text-sm font-semibold mb-1">Ianuarie</div>
                  <div className="text-xs text-amber-100">Indexarea pensiilor</div>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <div className="text-sm font-semibold mb-1">Aprilie</div>
                  <div className="text-xs text-amber-100">Pensia minimă la 1000 RON</div>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <div className="text-sm font-semibold mb-1">Septembrie</div>
                  <div className="text-xs text-amber-100">Reformă Pilonul II</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                  Îmbunătățiri pentru pensionari
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      benefit: "Creșterea pensiei minime",
                      before: "800 RON",
                      after: "1000 RON",
                      increase: "+25%"
                    },
                    {
                      benefit: "Indexarea standard",
                      before: "Formula veche",
                      after: "50% inflație + 50% salarii",
                      increase: "Stabilă"
                    },
                    {
                      benefit: "Accesul la servicii digitale",
                      before: "Doar fizic",
                      after: "Online + fizic",
                      increase: "Modern"
                    }
                  ].map((improvement, index) => (
                    <div key={index} className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">{improvement.benefit}</h4>
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div>
                          <div className="text-gray-600">Înainte:</div>
                          <div className="font-bold text-gray-700">{improvement.before}</div>
                        </div>
                        <div>
                          <div className="text-gray-600">Acum:</div>
                          <div className="font-bold text-green-700">{improvement.after}</div>
                        </div>
                        <div>
                          <div className="text-gray-600">Progres:</div>
                          <div className="font-bold text-green-600">{improvement.increase}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <FileText className="h-6 w-6 text-blue-600" />
                  Documente oficiale
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Legea nr. 263/2010 (actualizată)",
                    "OUG nr. 114/2018 modificată",
                    "Legea bugetului de stat 2025",
                    "HG privind indexarea pensiilor",
                    "Normele de aplicare CNPP"
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-blue-800 font-medium">{doc}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-xl bg-white mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                Comparație cu anii anteriori
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Indicator</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">2023</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">2024</th>
                      <th className="text-center py-3 px-4 font-semibold text-green-600">2025</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Pensia minimă (RON)", "800", "800", "1000"],
                      ["Punctul de pensie (RON)", "81.7", "81.7", "87.8"],
                      ["Vârsta pensionare femei", "62 ani 4 luni", "62 ani 8 luni", "63 ani"],
                      ["Indexare (%)", "13.8%", "9.6%", "8.2%"],
                      ["Numărul de pensionari", "4.8 mil", "4.9 mil", "5.0 mil"]
                    ].map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="py-3 px-4 font-medium text-gray-900">{row[0]}</td>
                        <td className="py-3 px-4 text-center text-gray-700">{row[1]}</td>
                        <td className="py-3 px-4 text-center text-gray-700">{row[2]}</td>
                        <td className="py-3 px-4 text-center text-green-700 font-bold">{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Ce trebuie să știi ca viitor pensionar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Planificare în avans</h4>
                    <p className="text-sm text-blue-700">
                      Verifică-ți stagiul de cotizare și estimează pensia cu noile reglementări.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Contribuții suplimentare</h4>
                    <p className="text-sm text-green-700">
                      Consideră Pilonul III pentru a completa pensia de stat.
                    </p>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-lg">
                    <h4 className="font-semibold text-amber-800 mb-2">Monitorizare constantă</h4>
                    <p className="text-sm text-amber-700">
                      Legislația se poate modifica - urmărește actualizările.
                    </p>
                  </div>
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
                  <h4 className="font-semibold mb-1">Modificări în curs</h4>
                  <p className="text-sm text-red-100">
                    Unele prevederi pot fi modificate prin acte normative ulterioare.
                  </p>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-1">Consultă specialiștii</h4>
                  <p className="text-sm text-red-100">
                    Pentru situații complexe, adresează-te la Casa de Pensii.
                  </p>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-1">Actualizări frecvente</h4>
                  <p className="text-sm text-red-100">
                    Verifică periodic modificările legislative publicate oficial.
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
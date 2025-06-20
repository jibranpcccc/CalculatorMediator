import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Shield, Calculator, AlertCircle } from "lucide-react";

export default function PensieUrmas() {
  return (
    <>
      <SEOHead 
        title="Pensia de Urmaș România 2025 - Calculator Medie Facultate"
        description="Ghid complet despre pensia de urmaș în România. Condiții, beneficiari, calcul și drepturi pentru urmașii unei persoane decedate în 2025."
        keywords="pensie urmas, pensie deces, beneficiari pensie, protectie familia"
        canonicalUrl="https://calculatormediefacultate.com/pensie-urmas"
        schemaType="article"
        articleData={{
          datePublished: "2025-01-01",
          dateModified: "2025-06-19",
          author: "Calculator Medie Facultate",
          category: "Tipuri Pensii"
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <section className="text-center mb-12 sm:mb-16 mt-4 sm:mt-6">
            <div className="mb-6 sm:mb-8">
              <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-pink-100 via-rose-100 to-red-100 text-pink-800 mb-6 sm:mb-8 shadow-lg border border-pink-200">
                <Heart className="mr-1.5 h-4 w-4" />
                Pensia de Urmaș
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight px-2 sm:px-4">
              Protecție <span className="gradient-primary bg-clip-text text-transparent">pentru</span>
              <br className="block" />
              <span className="gradient-primary bg-clip-text text-transparent">Familie</span>
            </h1>
          </section>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-2 border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Ce este pensia de urmaș?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Pensia de urmaș este o prestație socială acordată membrilor familiei unei persoane 
                  decedate care a fost asigurată în sistemul public de pensii și îndeplinea condițiile 
                  de stagiu de cotizare.
                </p>
                <p>
                  Această pensie oferă protecție financiară familiei în situații tragice și se 
                  calculează ca un procent din pensia pe care o primea sau ar fi primit-o defunctul.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-pink-500 to-rose-600 text-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Estimare Pensie
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pink-100 mb-4 text-sm">
                  Calculează pensia de urmaș pentru familia ta
                </p>
                <a 
                  href="/" 
                  className="block w-full bg-white text-pink-600 font-bold py-3 px-4 rounded-lg text-center hover:bg-pink-50 transition-colors"
                >
                  Calculează Pensia
                </a>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-xl bg-white mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                Cine poate beneficia de pensie de urmaș?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    category: "Soțul/Soția",
                    conditions: [
                      "Vârsta de cel puțin 50 de ani",
                      "Sau are în îngrijire copii sub 16 ani",
                      "Sau este invalid"
                    ],
                    percentage: "50%",
                    icon: "👫"
                  },
                  {
                    category: "Copiii",
                    conditions: [
                      "Sub 16 ani (sau 18 ani dacă învață)",
                      "Sub 26 ani dacă urmează studii superioare",
                      "Orice vârstă dacă sunt invalizi"
                    ],
                    percentage: "25% per copil",
                    icon: "👶"
                  },
                  {
                    category: "Părinții",
                    conditions: [
                      "Vârsta de cel puțin 65 ani (bărbați) sau 63 ani (femei)",
                      "Erau întreținuți de defunct",
                      "Nu au alte venituri suficiente"
                    ],
                    percentage: "25% per părinte",
                    icon: "👴"
                  }
                ].map((beneficiary, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">{beneficiary.icon}</div>
                      <h4 className="font-bold text-gray-900">{beneficiary.category}</h4>
                      <div className="text-lg font-bold text-pink-600 mt-1">{beneficiary.percentage}</div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Condiții:</h5>
                      <ul className="space-y-1">
                        {beneficiary.conditions.map((condition, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                            <div className="w-1 h-1 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                            {condition}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  Condiții pentru defunct
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Stagiu de cotizare</h4>
                    <div className="space-y-2 text-sm text-blue-700">
                      <div>• Sub 23 ani: 1 an cotizare</div>
                      <div>• 23-28 ani: 2 ani cotizare</div>
                      <div>• 28-33 ani: 3 ani cotizare</div>
                      <div>• Peste 33 ani: 5 ani cotizare</div>
                    </div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Deces în timpul muncii</h4>
                    <p className="text-sm text-green-700">
                      Dacă decesul survine în timpul activității, 
                      se acordă pensie de urmaș indiferent de stagiul de cotizare.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <Users className="h-6 w-6 text-green-600" />
                  Modul de calculare
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Formula de bază</h4>
                    <p className="text-sm text-orange-700 mb-2">
                      Pensie urmaș = Pensia defunctului × Procentul beneficiarului
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-700">Limita maximă:</span>
                      <span className="font-bold text-gray-900">100% din pensia defunctului</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-700">Pensia minimă:</span>
                      <span className="font-bold text-gray-900">540 RON</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-xl bg-white mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                Exemple de calculare
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    scenario: "Soție + 1 copil",
                    defunctPension: "2000 RON",
                    calculation: "50% + 25% = 75%",
                    survivorPension: "1500 RON"
                  },
                  {
                    scenario: "Soție + 2 copii",
                    defunctPension: "3000 RON", 
                    calculation: "50% + 25% + 25% = 100%",
                    survivorPension: "3000 RON"
                  },
                  {
                    scenario: "3 copii orfani",
                    defunctPension: "2500 RON",
                    calculation: "25% + 25% + 25% = 75%",
                    survivorPension: "1875 RON"
                  }
                ].map((example, index) => (
                  <div key={index} className="p-4 border-2 border-pink-200 bg-pink-50 rounded-lg">
                    <h4 className="font-bold text-pink-800 mb-3 text-center">{example.scenario}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Pensia defunctului:</span>
                        <span className="font-bold">{example.defunctPension}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Calcul:</span>
                        <span className="font-bold text-pink-700">{example.calculation}</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between">
                        <span className="text-gray-700 font-medium">Pensie urmaș:</span>
                        <span className="font-bold text-lg text-pink-800">{example.survivorPension}</span>
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
                <CardTitle className="text-xl font-bold text-gray-900">
                  Cum se solicită pensia de urmaș?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-3">
                    {[
                      "Depune cererea în termen de 12 luni de la deces",
                      "Prezintă certificatul de deces",
                      "Documente care dovedesc calitatea de urmaș",
                      "Dovada stagiului de cotizare al defunctului",
                      "Declarația pe propria răspundere privind veniturile"
                    ].map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-sm text-gray-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-red-500 to-pink-600 text-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Informații importante
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-1">Cumulul cu alte pensii</h4>
                  <p className="text-sm text-red-100">
                    Pensia de urmaș se poate cumula cu pensia proprie, 
                    dar numai până la plafonul legal stabilit.
                  </p>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-1">Pierderea dreptului</h4>
                  <p className="text-sm text-red-100">
                    Dreptul se pierde prin căsătoria soțului supraviețuitor 
                    sau prin împlinirea vârstei de către copii.
                  </p>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-1">Indexare</h4>
                  <p className="text-sm text-red-100">
                    Pensia de urmaș se indexează anual, 
                    la fel ca toate pensiile de stat.
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
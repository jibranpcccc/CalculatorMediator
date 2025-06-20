import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Heart, Users, Calculator, AlertCircle, CheckCircle } from "lucide-react";

export default function PensieInvaliditate() {
  return (
    <>
      <SEOHead 
        title="Pensia de Invaliditate România 2025 - Calculator Medie Facultate"
        description="Ghid complet despre pensia de invaliditate în România. Condiții, graduri de invaliditate, calcul și proceduri pentru obținerea pensiei de invaliditate în 2025."
        keywords="pensie invaliditate, grad invaliditate, pensie dizabilitate, protectie sociala"
        canonicalUrl="https://calculatormediefacultate.com/pensie-invaliditate"
        schemaType="article"
        articleData={{
          datePublished: "2025-01-01",
          dateModified: "2025-06-19",
          author: "Calculator Medie Facultate",
          category: "Tipuri Pensii"
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <section className="text-center mb-12 sm:mb-16 mt-4 sm:mt-6">
            <div className="mb-6 sm:mb-8">
              <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100 text-purple-800 mb-6 sm:mb-8 shadow-lg border border-purple-200">
                <Shield className="mr-1.5 h-4 w-4" />
                Pensia de Invaliditate
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight px-2 sm:px-4">
              Protecție <span className="gradient-primary bg-clip-text text-transparent">Socială</span>
              <br className="block" />
              <span className="gradient-primary bg-clip-text text-transparent">Specializată</span>
            </h1>
          </section>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-2 border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Ce este pensia de invaliditate?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Pensia de invaliditate este o prestație socială acordată persoanelor care au suferit 
                  o diminuare a capacității de muncă cu cel puțin 50% din cauza unei boli sau a unui accident.
                </p>
                <p>
                  Această pensie oferă protecție financiară persoanelor care nu mai pot lucra la capacitate 
                  normală și se calculează în funcție de gradul de invaliditate și stagiul de cotizare.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Estimare Pensie
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-100 mb-4 text-sm">
                  Calculează pensia de invaliditate estimată
                </p>
                <a 
                  href="/" 
                  className="block w-full bg-white text-purple-600 font-bold py-3 px-4 rounded-lg text-center hover:bg-purple-50 transition-colors"
                >
                  Calculează Pensia
                </a>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-xl bg-white mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                Gradurile de invaliditate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    grade: "Gradul I",
                    capacity: "50-74%",
                    description: "Capacitate de muncă redusă",
                    examples: ["Afecțiuni cronice moderate", "Limitări funcționale parțiale", "Poate lucra cu adaptări"],
                    color: "green",
                    icon: "🟢"
                  },
                  {
                    grade: "Gradul II", 
                    capacity: "25-49%",
                    description: "Capacitate de muncă sever redusă",
                    examples: ["Afecțiuni grave", "Limitări funcționale importante", "Muncă foarte limitată"],
                    color: "orange",
                    icon: "🟡"
                  },
                  {
                    grade: "Gradul III",
                    capacity: "Sub 25%",
                    description: "Incapacitate aproape totală",
                    examples: ["Afecțiuni foarte grave", "Dependență de îngrijire", "Imposibilitatea de a munci"],
                    color: "red",
                    icon: "🔴"
                  }
                ].map((grade, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">{grade.icon}</div>
                      <h4 className="font-bold text-gray-900">{grade.grade}</h4>
                      <div className="text-lg font-bold text-purple-600 mt-1">{grade.capacity}</div>
                      <p className="text-sm text-gray-600 mt-2">{grade.description}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Exemple:</h5>
                      <ul className="space-y-1">
                        {grade.examples.map((example, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                            <div className="w-1 h-1 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            {example}
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
                  <Heart className="h-6 w-6 text-red-600" />
                  Condiții de acordare
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Stagiu minim de cotizare</h4>
                    <div className="space-y-2 text-sm text-blue-700">
                      <div>• Sub 23 ani: 1 an</div>
                      <div>• 23-28 ani: 2 ani</div>
                      <div>• 28-33 ani: 3 ani</div>
                      <div>• 33-38 ani: 4 ani</div>
                      <div>• Peste 38 ani: 5 ani</div>
                    </div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Evaluare medicală</h4>
                    <p className="text-sm text-green-700">
                      Evaluarea se face de comisiile de expertiză medicală 
                      care stabilesc gradul de invaliditate.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <Users className="h-6 w-6 text-green-600" />
                  Calcularea pensiei
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Formula de calcul</h4>
                    <p className="text-sm text-orange-700 mb-2">
                      Se completează stagiul până la vârsta de 65 ani cu puncte medii
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-700">Pensia minimă:</span>
                      <span className="font-bold text-gray-900">800 RON</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-700">Fără penalizări:</span>
                      <span className="font-bold text-gray-900">Indiferent de vârstă</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-700">Indexare:</span>
                      <span className="font-bold text-gray-900">Anuală</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-xl bg-white mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                Procedura de obținere
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    step: "1",
                    title: "Evaluare medicală",
                    description: "Consultație la medicul de familie și trimitere la specialist"
                  },
                  {
                    step: "2",
                    title: "Comisia de expertiză",
                    description: "Evaluarea gradului de invaliditate de către comisia medicală"
                  },
                  {
                    step: "3",
                    title: "Depunerea dosarului",
                    description: "Completarea și depunerea documentelor la Casa de Pensii"
                  },
                  {
                    step: "4",
                    title: "Analiza și aprobare",
                    description: "Verificarea documentelor și calcularea pensiei"
                  }
                ].map((step, index) => (
                  <div key={index} className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                      {step.step}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Documente necesare
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Cererea de pensie completată",
                    "Actul de identitate",
                    "Certificatul de expertiză medicală",
                    "Adeverința de salarii (ultimii 5 ani)",
                    "Carnetul de muncă sau alte documente de vechime",
                    "Certificat de naștere",
                    "Dovada domiciliului"
                  ].map((doc, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{doc}</span>
                    </div>
                  ))}
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
                  <h4 className="font-semibold mb-1">Reevaluare periodică</h4>
                  <p className="text-sm text-red-100">
                    Gradul de invaliditate se reevaluează periodic, 
                    în funcție de evoluția stării de sănătate.
                  </p>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-1">Muncă cu invaliditate</h4>
                  <p className="text-sm text-red-100">
                    În anumite condiții, persoanele cu invaliditate 
                    pot lucra și primi pensie parțială.
                  </p>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-1">Asistență socială</h4>
                  <p className="text-sm text-red-100">
                    Pe lângă pensie, se pot acorda și alte 
                    forme de asistență socială specializată.
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
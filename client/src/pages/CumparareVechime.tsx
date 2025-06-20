import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Calculator, Clock, AlertCircle, CheckCircle, FileText } from "lucide-react";

export default function CumparareVechime() {
  return (
    <>
      <SEOHead 
        title="Cumpărarea Vechimii pentru Pensie România 2025 - Calculator Medie Facultate"
        description="Ghid complet despre cumpărarea vechimii în muncă pentru pensie în România. Condiții, costuri, proceduri și beneficii pentru completarea stagiului de cotizare în 2025."
        keywords="cumparare vechime pensie, completare stagiu, costuri vechime, proceduri pensie"
        canonicalUrl="https://calculatormediefacultate.com/cumparare-vechime"
        schemaType="article"
        articleData={{
          datePublished: "2025-01-01",
          dateModified: "2025-06-19",
          author: "Calculator Medie Facultate",
          category: "Legislatie Pensii"
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <section className="text-center mb-12 sm:mb-16 mt-4 sm:mt-6">
            <div className="mb-6 sm:mb-8">
              <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 text-indigo-800 mb-6 sm:mb-8 shadow-lg border border-indigo-200">
                <DollarSign className="mr-1.5 h-4 w-4" />
                Cumpărarea Vechimii în Muncă
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight px-2 sm:px-4">
              Completează <span className="gradient-primary bg-clip-text text-transparent">Stagiul</span>
              <br className="block" />
              <span className="gradient-primary bg-clip-text text-transparent">de Cotizare</span>
            </h1>
          </section>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-2 border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Ce înseamnă cumpărarea vechimii?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Cumpărarea vechimii în muncă este posibilitatea oferită de lege persoanelor care 
                  nu îndeplinesc condițiile de stagiu pentru pensie să completeze acest stagiu prin 
                  plata unor contribuții suplimentare la sistemul public de pensii.
                </p>
                <p>
                  Această opțiune permite obținerea dreptului la pensie sau îmbunătățirea cuantumului 
                  acesteia, fiind deosebit de utilă pentru persoanele cu perioade necontributive în carieră.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Calculează Costul
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-indigo-100 mb-4 text-sm">
                  Estimează costul cumpărării vechimii pentru situația ta
                </p>
                <a 
                  href="/" 
                  className="block w-full bg-white text-indigo-600 font-bold py-3 px-4 rounded-lg text-center hover:bg-indigo-50 transition-colors"
                >
                  Calculează Costul
                </a>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-xl bg-white mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                Cine poate cumpăra vechime?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    category: "Angajați activi",
                    description: "Persoane cu contract de muncă activ",
                    conditions: ["Să aibă cel puțin 1 an de cotizare", "Să nu fi împlinit vârsta de pensionare"],
                    icon: "👔"
                  },
                  {
                    category: "Persoane fizice autorizate",
                    description: "PFA și alte forme de activitate independentă",
                    conditions: ["Activitate autorizată în derulare", "Contribuții la zi"],
                    icon: "💼"
                  },
                  {
                    category: "Administratori de societăți",
                    description: "Administratori SRL și alte forme societare",
                    conditions: ["Funcția activă de administrator", "Opțiune de asigurare socială"],
                    icon: "🏢"
                  },
                  {
                    category: "Persoane în șomaj",
                    description: "Beneficiari de indemnizație de șomaj",
                    conditions: ["Înregistrare la ANOFM", "Stagiu anterior de cotizare"],
                    icon: "📋"
                  }
                ].map((category, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">{category.icon}</div>
                      <h4 className="font-bold text-gray-900">{category.category}</h4>
                      <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2 text-sm">Condiții:</h5>
                      <ul className="space-y-1">
                        {category.conditions.map((condition, i) => (
                          <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                            <div className="w-1 h-1 bg-indigo-500 rounded-full mt-1.5 flex-shrink-0"></div>
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
                  <Clock className="h-6 w-6 text-blue-600" />
                  Limite și condiții
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Perioada maximă</h4>
                    <p className="text-sm text-blue-700 mb-2">
                      Maximum 5 ani de vechime pe întreaga durată de viață
                    </p>
                    <div className="text-xs text-blue-600">
                      Poate fi cumpărată în tranșe
                    </div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Perioade eligibile</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Perioada de școlarizare post-liceală</li>
                      <li>• Stagiul militar</li>
                      <li>• Creșterea copilului</li>
                      <li>• Perioada de șomaj neindemnizat</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <DollarSign className="h-6 w-6 text-green-600" />
                  Calculul costurilor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Formula de calcul</h4>
                    <p className="text-sm text-orange-700 mb-2">
                      Cost = 25% × Salariul minim brut × 12 luni × Numărul de ani
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-700">Salariul minim (2025):</span>
                      <span className="font-bold text-gray-900">3700 RON</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-700">Cost/an:</span>
                      <span className="font-bold text-green-600">~11.100 RON</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-700">Cost maxim (5 ani):</span>
                      <span className="font-bold text-orange-600">~55.500 RON</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-xl bg-white mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                Exemple de costuri pentru cumpărarea vechimii
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    period: "1 an",
                    cost: "11.100 RON",
                    monthlyPayment: "925 RON/lună",
                    benefit: "Completarea stagiului minim"
                  },
                  {
                    period: "3 ani",
                    cost: "33.300 RON",
                    monthlyPayment: "2.775 RON/lună",
                    benefit: "Stagiu optim pentru pensie"
                  },
                  {
                    period: "5 ani",
                    cost: "55.500 RON",
                    monthlyPayment: "4.625 RON/lună",
                    benefit: "Maximum legal permis"
                  }
                ].map((example, index) => (
                  <div key={index} className="text-center p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                    <h4 className="font-bold text-indigo-800 mb-3">{example.period}</h4>
                    <div className="space-y-2">
                      <div>
                        <div className="text-sm text-gray-600">Cost total:</div>
                        <div className="font-bold text-gray-900 text-lg">{example.cost}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Plată în 12 rate:</div>
                        <div className="font-bold text-indigo-700">{example.monthlyPayment}</div>
                      </div>
                      <div className="pt-2 border-t border-indigo-300">
                        <div className="text-sm text-indigo-700">Beneficiu:</div>
                        <div className="font-medium text-xs text-indigo-600">{example.benefit}</div>
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
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <FileText className="h-6 w-6 text-blue-600" />
                  Procedura de cumpărare
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Verificarea eligibilității",
                      description: "Consultarea cu Casa de Pensii pentru a stabili dreptul la cumpărare"
                    },
                    {
                      step: "2",
                      title: "Depunerea cererii",
                      description: "Completarea și depunerea documentelor necesare"
                    },
                    {
                      step: "3",
                      title: "Calculul costului",
                      description: "Stabilirea sumei exacte în funcție de perioada solicitată"
                    },
                    {
                      step: "4",
                      title: "Plata contribuțiilor",
                      description: "Achitarea în rate sau integral, conform opțiunii alese"
                    },
                    {
                      step: "5",
                      title: "Înregistrarea stagiului",
                      description: "Actualizarea evidenței personale cu vechimea cumpărată"
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-blue-50 rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-1">{step.title}</h4>
                        <p className="text-sm text-blue-700">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-red-500 to-pink-600 text-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Aspecte importante
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-1">Analiză cost-beneficiu</h4>
                  <p className="text-sm text-red-100">
                    Evaluează dacă investiția în cumpărarea vechimii 
                    se justifică prin creșterea pensiei.
                  </p>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-1">Alternative mai avantajoase</h4>
                  <p className="text-sm text-red-100">
                    Consideră Pilonul III sau alte investiții 
                    care pot oferi randamente mai bune.
                  </p>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-1">Termene de plată</h4>
                  <p className="text-sm text-red-100">
                    Respectă termenele de plată pentru a evita 
                    anularea acordului de cumpărare.
                  </p>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-1">Impact asupra pensiei</h4>
                  <p className="text-sm text-red-100">
                    Vechimea cumpărată contribuie la dreptul la pensie, 
                    dar cu punctaj redus comparativ cu muncă efectivă.
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
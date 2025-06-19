import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Calculator, Target, TrendingUp, Shield, Clock } from "lucide-react";

export default function PlanificareGhid() {
  return (
    <>
      <SEOHead 
        title="Ghid Complet Planificare Pensie - Calculator Medie Facultate"
        description="Ghid complet pentru planificarea pensiei în România. Descoperă strategii eficiente, calculează pensia ta și planifică-ți viitorul financiar cu expertiza noastră."
        keywords="planificare pensie, ghid pensie, strategie pensie, calculare pensie, viitor financiar"
        canonicalUrl="https://calculatormediefacultate.com/planificare-ghid"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Hero Section */}
          <section className="text-center mb-12 sm:mb-16 mt-4 sm:mt-6">
            <div className="mb-6 sm:mb-8">
              <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-800 mb-6 sm:mb-8 shadow-lg border border-blue-200">
                <span className="mr-1.5 text-sm sm:text-base">📋</span>
                Ghid Complet pentru Planificarea Pensiei
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight px-2 sm:px-4">
              Planifică-ți <span className="gradient-primary bg-clip-text text-transparent">Pensia</span>
              <br className="block" />
              <span className="gradient-primary bg-clip-text text-transparent">Perfect</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-10 leading-relaxed font-medium px-4 sm:px-6">
              Ghidul complet pentru o planificare inteligentă a pensiei în România. 
              <span className="font-bold text-gray-800 block mt-1.5">Strategii dovedite pentru un viitor financiar sigur.</span>
            </p>
          </section>

          {/* Content Sections */}
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-8 space-y-8">
              {/* Introduction */}
              <Card className="border-0 shadow-xl bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                    <Target className="h-6 w-6 text-blue-600" />
                    De ce este importantă planificarea pensiei?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Planificarea pensiei este una dintre cele mai importante decizii financiare pe care le vei lua vreodată. 
                    În România, sistemul de pensii se bazează pe trei piloni, iar înțelegerea acestora este crucială pentru 
                    viitorul tău financiar.
                  </p>
                  <p>
                    Cu legislația în continuă schimbare și cu rata inflației care afectează puterea de cumpărare, 
                    planificarea din timp devine esențială pentru menținerea standardului de viață după pensionare.
                  </p>
                </CardContent>
              </Card>

              {/* Planning Steps */}
              <Card className="border-0 shadow-xl bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    Pașii pentru o planificare reușită
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Calculează pensia estimată",
                      description: "Folosește calculatoarele noastre pentru a estima pensia ta viitoare bazată pe contribuțiile actuale."
                    },
                    {
                      step: "2", 
                      title: "Stabilește ținta financiară",
                      description: "Determină de câți bani vei avea nevoie lunar pentru a menține standardul de viață dorit."
                    },
                    {
                      step: "3",
                      title: "Identifică lacunele",
                      description: "Compară pensia estimată cu ținta financiară pentru a identifica diferența care trebuie acoperită."
                    },
                    {
                      step: "4",
                      title: "Dezvoltă o strategie",
                      description: "Creează un plan de investiții și economii pentru a acoperi lacunele identificate."
                    },
                    {
                      step: "5",
                      title: "Monitorizează și ajustează",
                      description: "Revizuiește planul anual și fă ajustările necesare în funcție de schimbările din viață."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-blue-50 rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-700 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Investment Strategies */}
              <Card className="border-0 shadow-xl bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                    Strategii de investiții pentru pensie
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Pilonul III - Pensie Privată</h4>
                      <p className="text-sm text-green-700">
                        Contribuții deductibile fiscal până la 400 EUR anual. 
                        Randament pe termen lung și flexibilitate în gestionare.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Fonduri de Investiții</h4>
                      <p className="text-sm text-blue-700">
                        Diversificare automată a portofoliului cu costuri reduse. 
                        Potrivit pentru investitori începători.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Depozite Bancare</h4>
                      <p className="text-sm text-purple-700">
                        Siguranță maximă dar randament limitat. 
                        Recomandate pentru o parte din economii.
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">Imobiliare</h4>
                      <p className="text-sm text-orange-700">
                        Investiție pe termen lung cu potențial de apreciere. 
                        Generează venituri pasive prin chirie.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Quick Calculator */}
              <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-500 to-red-600 text-white">
                <CardHeader>
                  <CardTitle className="text-xl font-bold flex items-center gap-2">
                    <Calculator className="h-5 w-5" />
                    Calculator Rapid
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-100 mb-4 text-sm">
                    Calculează-ți pensia estimată în câteva secunde
                  </p>
                  <a 
                    href="/" 
                    className="block w-full bg-white text-orange-600 font-bold py-3 px-4 rounded-lg text-center hover:bg-orange-50 transition-colors"
                  >
                    Începe Calculul
                  </a>
                </CardContent>
              </Card>

              {/* Tips */}
              <Card className="border-0 shadow-xl bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    Sfaturi Esențiale
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Începe să economisești pentru pensie cât mai devreme",
                    "Diversifică sursele de venit pentru pensie",
                    "Revizuiește planul anual și fă ajustări",
                    "Profită de deducerile fiscale disponibile",
                    "Educă-te continuu despre opțiunile de investiții"
                  ].map((tip, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{tip}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Time Warning */}
              <Card className="border-0 shadow-xl bg-yellow-50 border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-yellow-800 flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Timpul este Esențial
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-yellow-700">
                    Cu cât începi mai devreme să planifici pentru pensie, 
                    cu atât mai mult vei beneficia de puterea dobânzii compuse. 
                    Chiar și contribuții mici făcute constant pot avea un impact major.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
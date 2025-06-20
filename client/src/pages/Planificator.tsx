import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, Target, Clock, PiggyBank, Shield } from "lucide-react";
import { Link } from "wouter";

export default function Planificator() {
  return (
    <>
      <SEOHead 
        title="Planificator Financiar - Planifică-ți Pensia și Viitorul Financiar"
        description="Planificator financiar complet pentru pensie România. Strategii de planificare, calculatoare specializate și ghiduri pentru un viitor financiar sigur."
        keywords="planificator financiar, planificare pensie, strategie financiara, planificare viitor"
        canonicalUrl="https://calculatormediefacultate.com/planificator"
        schemaType="calculator"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Hero Section */}
          <section className="text-center mb-12 sm:mb-16 mt-4 sm:mt-6">
            <div className="mb-6 sm:mb-8">
              <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 text-indigo-800 mb-6 sm:mb-8 shadow-lg border border-indigo-200">
                <span className="mr-1.5 text-sm sm:text-base">🎯</span>
                Planificator Financiar Complet
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight px-2 sm:px-4">
              Planificator <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Financiar</span>
              <br className="block" />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Inteligent</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-10 leading-relaxed font-medium px-4 sm:px-6">
              Planifică-ți viitorul financiar cu instrumentele noastre avansate de calcul și analiză. 
              <span className="font-bold text-gray-800 block mt-1.5">Strategii personalizate pentru o pensie confortabilă.</span>
            </p>
          </section>

          {/* Planning Tools Grid */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-neutral-900 text-center mb-8 sm:mb-10 px-4">
              Instrumentele Tale de Planificare
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Calculator Principal */}
              <Card className="border-0 shadow-xl bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="text-center p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Calculator className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-blue-800">Calculator Principal</CardTitle>
                  <CardDescription className="text-sm text-blue-600">
                    Calculează pensia ta standard
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="text-sm text-blue-700 space-y-2 mb-4">
                    <li>• Calcul pensie standard</li>
                    <li>• Analiză completă</li>
                    <li>• Rezultate instant</li>
                  </ul>
                  <Link href="/">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Calculează Acum
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Pensie Anticipată */}
              <Card className="border-0 shadow-xl bg-gradient-to-br from-white via-purple-50/30 to-violet-50/50 hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="text-center p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-purple-800">Pensie Anticipată</CardTitle>
                  <CardDescription className="text-sm text-purple-600">
                    Analizează ieșirea anticipată
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="text-sm text-purple-700 space-y-2 mb-4">
                    <li>• Calcul penalizări</li>
                    <li>• Analiză beneficii</li>
                    <li>• Scenarii multiple</li>
                  </ul>
                  <Link href="/calculator-anticipata">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      Calculează Anticipat
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Pilon III */}
              <Card className="border-0 shadow-xl bg-gradient-to-br from-white via-green-50/30 to-emerald-50/50 hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="text-center p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <PiggyBank className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-green-800">Pilon III</CardTitle>
                  <CardDescription className="text-sm text-green-600">
                    Pensie privată facultativă
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="text-sm text-green-700 space-y-2 mb-4">
                    <li>• Beneficii fiscale</li>
                    <li>• Acumulări estimate</li>
                    <li>• Planificare flexibilă</li>
                  </ul>
                  <Link href="/calculator-pilon3">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      Calculează Pilon III
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Strategy Section */}
          <section className="mb-12 sm:mb-16">
            <div className="glass-effect rounded-xl shadow-lg p-6 sm:p-8">
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-neutral-900 mb-3">
                  Strategii de Planificare Financiară
                </h2>
                <p className="text-sm sm:text-base text-gray-600 font-medium">
                  Abordări profesionale pentru un viitor financiar sigur
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Evaluare Situație Actuală</h3>
                      <p className="text-sm text-gray-600">Analizează veniturile, cheltuielile și obiectivele financiare curente pentru a stabili punctul de plecare.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Diversificare Pensii</h3>
                      <p className="text-sm text-gray-600">Combină Pilonul I (public), Pilonul II (privat obligatoriu) și Pilonul III (privat facultativ).</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Optimizare Fiscală</h3>
                      <p className="text-sm text-gray-600">Profită de deducerile fiscale și beneficiile oferite de sistemul de pensii private.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Monitorizare Regulată</h3>
                      <p className="text-sm text-gray-600">Revizuiește și ajustează strategia în funcție de schimbările legislative și personale.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Planificare Urgențe</h3>
                      <p className="text-sm text-gray-600">Creează un fond de urgență și asigură-te împotriva riscurilor majore.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">6</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Start Timpuriu</h3>
                      <p className="text-sm text-gray-600">Cu cât începi mai devreme, cu atât beneficiezi mai mult de puterea compoundingului.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Stats */}
          <section className="mb-12 sm:mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                <div className="text-2xl sm:text-3xl font-black text-blue-600 mb-2">65</div>
                <div className="text-sm text-blue-700 font-semibold">Vârsta standard de pensionare</div>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                <div className="text-2xl sm:text-3xl font-black text-green-600 mb-2">400€</div>
                <div className="text-sm text-green-700 font-semibold">Deducere max. Pilon III/an</div>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                <div className="text-2xl sm:text-3xl font-black text-purple-600 mb-2">0.5%</div>
                <div className="text-sm text-purple-700 font-semibold">Penalizare/lună anticipare</div>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
                <div className="text-2xl sm:text-3xl font-black text-orange-600 mb-2">35</div>
                <div className="text-sm text-orange-700 font-semibold">Ani stagiu complet</div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
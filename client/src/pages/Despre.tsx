import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Users, Target, Shield, Award, BookOpen } from "lucide-react";

export default function Despre() {
  return (
    <>
      <SEOHead 
        title="Despre Noi - Calculator Medie Facultate România"
        description="Despre Calculator Medie Facultate - misiunea, viziunea și echipa din spatele celui mai precis calculator de pensie din România. Află povestea noastră."
        keywords="despre calculator medie facultate, echipa, misiune, viziune, pensii romania"
        canonicalUrl="https://calculatormediefacultate.com/despre"
        schemaType="organization"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Hero Section */}
          <section className="text-center mb-12 sm:mb-16 mt-4 sm:mt-6">
            <div className="mb-6 sm:mb-8">
              <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-slate-100 via-gray-100 to-zinc-100 text-slate-800 mb-6 sm:mb-8 shadow-lg border border-slate-200">
                <span className="mr-1.5 text-sm sm:text-base">👥</span>
                Echipa Calculator Medie Facultate
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight px-2 sm:px-4">
              Despre <span className="bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">Calculator</span>
              <br className="block" />
              <span className="bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">Medie Facultate</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-10 leading-relaxed font-medium px-4 sm:px-6">
              Misiunea noastră este să oferim cele mai precise și accesibile instrumente de calcul pentru pensii în România. 
              <span className="font-bold text-gray-800 block mt-1.5">Transparență, precizie și încredere în fiecare calcul.</span>
            </p>
          </section>

          {/* Mission & Vision */}
          <section className="mb-12 sm:mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardHeader className="text-center p-6">
                  <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl font-black text-blue-800">Misiunea Noastră</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-blue-700 leading-relaxed">
                    Să democratizăm accesul la informațiile despre pensii și să oferim instrumentele necesare pentru o planificare financiară informată. 
                    Credem că fiecare român merită să știe exact ce îl așteaptă la pensie și să poată lua decizii financiare inteligente.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-pink-50">
                <CardHeader className="text-center p-6">
                  <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-xl font-black text-purple-800">Viziunea Noastră</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-purple-700 leading-relaxed">
                    Să devenim resursa de referință pentru calculele de pensii în România, oferind nu doar instrumente de calcul, 
                    ci și educație financiară completă pentru un viitor financiar sigur și planificat pentru toți românii.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Our Values */}
          <section className="mb-12 sm:mb-16">
            <div className="glass-effect rounded-xl shadow-lg p-6 sm:p-8">
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-gray-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-neutral-900 mb-3">
                  Valorile Noastre
                </h2>
                <p className="text-sm sm:text-base text-gray-600 font-medium">
                  Principiile care ne ghidează în tot ceea ce facem
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                  <Calculator className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-green-800 mb-2">Precizie</h3>
                  <p className="text-sm text-green-700">
                    Folosim cele mai actuale formule și legislație pentru calcule exacte și de încredere.
                  </p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                  <Shield className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-blue-800 mb-2">Transparență</h3>
                  <p className="text-sm text-blue-700">
                    Explicăm fiecare pas din calculele noastre și oferim informații clare despre metodologie.
                  </p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl">
                  <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-purple-800 mb-2">Accesibilitate</h3>
                  <p className="text-sm text-purple-700">
                    Instrumente gratuite și ușor de folosit pentru toți românii, indiferent de vârstă sau experiență.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What We Offer */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-neutral-900 text-center mb-8 px-4">
              Ce Oferim
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-red-50">
                <CardHeader className="text-center p-6">
                  <Calculator className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <CardTitle className="text-lg font-bold text-orange-800">Calculatoare Avansate</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="text-sm text-orange-700 space-y-2">
                    <li>• Calculator pensie standard</li>
                    <li>• Calculator pensie anticipată</li>
                    <li>• Calculator Pilon III</li>
                    <li>• Planificator financiar</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-teal-50 to-cyan-50">
                <CardHeader className="text-center p-6">
                  <BookOpen className="h-8 w-8 text-teal-600 mx-auto mb-3" />
                  <CardTitle className="text-lg font-bold text-teal-800">Educație Financiară</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="text-sm text-teal-700 space-y-2">
                    <li>• Ghiduri complete</li>
                    <li>• Articole specializate</li>
                    <li>• Actualizări legislative</li>
                    <li>• Strategii de planificare</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-indigo-50 to-purple-50">
                <CardHeader className="text-center p-6">
                  <Target className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
                  <CardTitle className="text-lg font-bold text-indigo-800">Suport Personalizat</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="text-sm text-indigo-700 space-y-2">
                    <li>• Răspunsuri la întrebări</li>
                    <li>• Clarificări legislative</li>
                    <li>• Suport tehnic</li>
                    <li>• Feedback și îmbunătățiri</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Commitment */}
          <section className="mb-12 sm:mb-16">
            <div className="text-center p-8 bg-gradient-to-br from-slate-100 to-gray-100 rounded-xl">
              <h2 className="text-xl sm:text-2xl font-black text-slate-800 mb-4">
                Angajamentul Nostru
              </h2>
              <p className="text-slate-700 leading-relaxed max-w-3xl mx-auto">
                Ne angajăm să menținem instrumentele noastre actualizate cu cele mai recente modificări legislative 
                și să oferim informații precise și de încredere. Suntem aici pentru a te ajuta să iei cele mai bune 
                decizii pentru viitorul tău financiar.
              </p>
              <div className="mt-6 flex justify-center gap-4 text-sm text-slate-600">
                <span className="flex items-center gap-1">
                  <Shield className="h-4 w-4" />
                  Actualizat 2025
                </span>
                <span className="flex items-center gap-1">
                  <Award className="h-4 w-4" />
                  Verificat Legal
                </span>
                <span className="flex items-center gap-1">
                  <Calculator className="h-4 w-4" />
                  Precis și Gratuit
                </span>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
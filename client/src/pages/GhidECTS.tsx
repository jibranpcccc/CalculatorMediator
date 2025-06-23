import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen, Star, Award, Calculator, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function GhidECTS() {
  return (
    <>
      <SEOHead 
        title="Ghid ECTS - Sistemul European de Credite Transferabile | Calculator Medie Facultate"
        description="Ghid complet despre sistemul ECTS: conversii de note, credite universitare, mobilități Erasmus și echivalențe pentru universitățile din România."
        keywords="ghid ECTS, credite universitare, conversii note, Erasmus, mobilitate studențească, sistem european credite"
        canonicalUrl="https://calculatormediefacultate.com/ghid-ects"
        schemaType="article"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <Header />
        
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb />
          
          {/* Page Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700">Ghid Educațional</Badge>
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">
              Ghidul Complet ECTS pentru Studenți
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Tot ce trebuie să știi despre sistemul European Credit Transfer System: 
              credite, conversii și mobilități universitare
            </p>
          </div>

          {/* ECTS Overview */}
          <section className="mb-16">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl text-blue-900">Ce este ECTS?</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-800 text-lg leading-relaxed">
                  <strong>European Credit Transfer and Accumulation System (ECTS)</strong> este un sistem european 
                  de transfer și acumulare de credite care facilitează mobilitatea studențească și 
                  recunoașterea calificărilor în spațiul european al învățământului superior.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Key Concepts */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 text-center mb-10">
              Concepte Cheie ECTS
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                    <Calculator className="h-5 w-5 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">Creditul ECTS</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Un credit ECTS reprezintă 25-30 ore de studiu și include cursuri, 
                    seminarii, studiu individual și evaluare.
                  </p>
                  <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                    <strong className="text-orange-700">1 an academic = 60 credite ECTS</strong>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                    <Star className="h-5 w-5 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Scala ECTS</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Sistemul de notare ECTS folosește literele A, B, C, D, E, F 
                    bazate pe distribuția statistică.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-green-700">A - Excelent</span>
                      <span className="text-gray-500">Top 10%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-blue-700">B - Foarte bine</span>
                      <span className="text-gray-500">Următorii 25%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                    <Award className="h-5 w-5 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Mobilitatea</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    ECTS facilitează recunoașterea studiilor efectuate în 
                    diferite țări europene prin programe ca Erasmus+.
                  </p>
                  <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                    <strong className="text-purple-700">Recunoaștere automată în UE</strong>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Grade Conversion Table */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 text-center mb-10">
              Tabel de Conversie Note ECTS ↔ România
            </h2>
            
            <Card>
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 p-4 text-left font-semibold">Nota ECTS</th>
                        <th className="border border-gray-200 p-4 text-left font-semibold">Descriere</th>
                        <th className="border border-gray-200 p-4 text-left font-semibold">Echivalent România</th>
                        <th className="border border-gray-200 p-4 text-left font-semibold">Procent studenți</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-green-50">
                        <td className="border border-gray-200 p-4 font-bold text-green-800 text-xl">A</td>
                        <td className="border border-gray-200 p-4 text-green-700">Excellent</td>
                        <td className="border border-gray-200 p-4 font-semibold">9.50 - 10.00</td>
                        <td className="border border-gray-200 p-4">Top 10%</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-200 p-4 font-bold text-blue-800 text-xl">B</td>
                        <td className="border border-gray-200 p-4 text-blue-700">Very Good</td>
                        <td className="border border-gray-200 p-4 font-semibold">8.50 - 9.49</td>
                        <td className="border border-gray-200 p-4">Următorii 25%</td>
                      </tr>
                      <tr className="bg-cyan-50">
                        <td className="border border-gray-200 p-4 font-bold text-cyan-800 text-xl">C</td>
                        <td className="border border-gray-200 p-4 text-cyan-700">Good</td>
                        <td className="border border-gray-200 p-4 font-semibold">7.50 - 8.49</td>
                        <td className="border border-gray-200 p-4">Următorii 30%</td>
                      </tr>
                      <tr className="bg-yellow-50">
                        <td className="border border-gray-200 p-4 font-bold text-yellow-800 text-xl">D</td>
                        <td className="border border-gray-200 p-4 text-yellow-700">Satisfactory</td>
                        <td className="border border-gray-200 p-4 font-semibold">6.50 - 7.49</td>
                        <td className="border border-gray-200 p-4">Următorii 25%</td>
                      </tr>
                      <tr className="bg-orange-50">
                        <td className="border border-gray-200 p-4 font-bold text-orange-800 text-xl">E</td>
                        <td className="border border-gray-200 p-4 text-orange-700">Sufficient</td>
                        <td className="border border-gray-200 p-4 font-semibold">6.00 - 6.49</td>
                        <td className="border border-gray-200 p-4">Ultimii 10%</td>
                      </tr>
                      <tr className="bg-red-50">
                        <td className="border border-gray-200 p-4 font-bold text-red-800 text-xl">F</td>
                        <td className="border border-gray-200 p-4 text-red-700">Fail</td>
                        <td className="border border-gray-200 p-4 font-semibold">1.00 - 5.99</td>
                        <td className="border border-gray-200 p-4">Respinși</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Practical Applications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 text-center mb-10">
              Aplicații Practice ECTS
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Pentru Mobilități Erasmus+</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Transferul creditelor între universități europene</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Recunoașterea automată a studiilor efectuate în străinătate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Calculul mediei pentru programele internaționale</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-xl text-green-900">Pentru Transferuri</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Transferul între facultăți din România</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Echivalarea studiilor pentru admiterea la master</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Recunoașterea calificărilor la angajare</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 text-center mb-10">
              Articole Relacionate
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/articol/sistem-credite-ects-romania">
                <Card className="hover:shadow-lg transition-all cursor-pointer group">
                  <CardContent className="p-6">
                    <BookOpen className="h-8 w-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                      Sistemul ECTS în România
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Cum funcționează sistemul ECTS în universitățile românești
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/articol/echivalenta-note-ects">
                <Card className="hover:shadow-lg transition-all cursor-pointer group">
                  <CardContent className="p-6">
                    <Calculator className="h-8 w-8 text-green-600 mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-green-600 transition-colors">
                      Conversii Note ECTS
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Ghid complet pentru conversia notelor între sisteme
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/clasificari-academice">
                <Card className="hover:shadow-lg transition-all cursor-pointer group">
                  <CardContent className="p-6">
                    <Award className="h-8 w-8 text-purple-600 mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-600 transition-colors">
                      Clasificări Academice
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Summa Cum Laude și alte distincții universitare
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Calculează-ți Media cu Credite ECTS</h2>
                <p className="text-orange-100 mb-6">
                  Folosește calculatorul nostru pentru a afla media ponderată cu credite ECTS
                </p>
                <Link href="/">
                  <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors inline-flex items-center gap-2">
                    Calculează Media
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
              </CardContent>
            </Card>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
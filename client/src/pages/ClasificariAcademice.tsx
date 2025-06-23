import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Award, Star, GraduationCap, Calculator, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "wouter";

export default function ClasificariAcademice() {
  return (
    <>
      <SEOHead 
        title="Clasificări Academice - Summa Cum Laude și Distincții Universitare | Calculator Medie Facultate"
        description="Ghid complet despre clasificările academice: Summa Cum Laude, Magna Cum Laude, Cum Laude. Criterii, calcule și impactul asupra carierei universitare."
        keywords="clasificări academice, Summa Cum Laude, Magna Cum Laude, distincții universitare, medie facultate, performanță academică"
        canonicalUrl="https://calculatormediefacultate.com/clasificari-academice"
        schemaType="article"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <Header />
        
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb />
          
          {/* Page Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-700">Ghid Academic</Badge>
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">
              Clasificările Academice în România
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Înțelege sistemul de distincții academice: de la Summa Cum Laude la Cum Laude 
              și impactul lor asupra carierei tale universitare
            </p>
          </div>

          {/* Classifications Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 text-center mb-10">
              Tipurile de Clasificări Academice
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-yellow-100 to-yellow-200 border-yellow-300 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                      <Trophy className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-yellow-800">🏆 Summa Cum Laude</CardTitle>
                      <p className="text-yellow-700 font-semibold">Media: 9.50 - 10.00</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-yellow-800 mb-4">
                    Cea mai înaltă distincție academică. Se acordă studenților cu performanțe excepționale 
                    și constante pe întreaga durată a studiilor.
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Beneficii:</h4>
                    <ul className="text-yellow-700 space-y-1 text-sm">
                      <li>• Prioritate la programele de master selective</li>
                      <li>• Eligibilitate pentru burse de cercetare</li>
                      <li>• Recunoaștere în CV și la angajare</li>
                      <li>• Acces la programe de doctorat de prestigiu</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-100 to-blue-200 border-blue-300 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-blue-800">🥈 Magna Cum Laude</CardTitle>
                      <p className="text-blue-700 font-semibold">Media: 8.50 - 9.49</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-800 mb-4">
                    Distincție de mare merit pentru performanțe academice foarte bune. 
                    Recunoaște consistența și dedicarea în studii.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Avantaje:</h4>
                    <ul className="text-blue-700 space-y-1 text-sm">
                      <li>• Considerare specială la admiterea la master</li>
                      <li>• Elegibilitate pentru burse de merit</li>
                      <li>• Credibilitate academică sporită</li>
                      <li>• Oportunități de cercetare și stagii</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-100 to-green-200 border-green-300 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-green-800">🥉 Cum Laude</CardTitle>
                      <p className="text-green-700 font-semibold">Media: 8.00 - 8.49</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-green-800 mb-4">
                    Distincție academică pentru performanțe bune și constante. 
                    Demonstrează competență solidă în domeniul de studiu.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Beneficii:</h4>
                    <ul className="text-green-700 space-y-1 text-sm">
                      <li>• Recunoaștere a performanțelor constante</li>
                      <li>• Avantaj în procesul de angajare</li>
                      <li>• Eligibilitate pentru programe postuniversitare</li>
                      <li>• Dovada competenței academice</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gray-800">📜 Fără Mențiune</CardTitle>
                      <p className="text-gray-700 font-semibold">Media: 6.00 - 7.99</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800 mb-4">
                    Absolvire cu succes, fără distincție academică specifică. 
                    Demonstrează finalizarea cu bine a programului de studii.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Caracteristici:</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Absolvire completă a programului</li>
                      <li>• Demonstrarea competențelor de bază</li>
                      <li>• Eligibilitate pentru piața muncii</li>
                      <li>• Posibilitatea continuării studiilor</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Statistics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 text-center mb-10">
              Distribuția Statistică a Clasificărilor
            </h2>
            
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div className="bg-yellow-100 p-6 rounded-lg">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">2-5%</div>
                    <div className="text-yellow-700 font-semibold">Summa Cum Laude</div>
                    <div className="text-sm text-yellow-600 mt-1">Foarte rar</div>
                  </div>
                  <div className="bg-blue-100 p-6 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">8-12%</div>
                    <div className="text-blue-700 font-semibold">Magna Cum Laude</div>
                    <div className="text-sm text-blue-600 mt-1">Rar</div>
                  </div>
                  <div className="bg-green-100 p-6 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">15-20%</div>
                    <div className="text-green-700 font-semibold">Cum Laude</div>
                    <div className="text-sm text-green-600 mt-1">Obișnuit</div>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <div className="text-3xl font-bold text-gray-600 mb-2">65-75%</div>
                    <div className="text-gray-700 font-semibold">Fără mențiune</div>
                    <div className="text-sm text-gray-600 mt-1">Majoritate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Calculation Example */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 text-center mb-10">
              Exemplu de Calcul pentru Summa Cum Laude
            </h2>
            
            <Card className="bg-gradient-to-r from-yellow-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Student la Informatică - 3 ani</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-yellow-100">
                        <th className="border border-gray-300 p-3 text-left">An/Semestru</th>
                        <th className="border border-gray-300 p-3 text-center">Media Semestrială</th>
                        <th className="border border-gray-300 p-3 text-center">Credite ECTS</th>
                        <th className="border border-gray-300 p-3 text-center">Puncte (Nota × Credite)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3">Anul I - Sem. 1</td>
                        <td className="border border-gray-300 p-3 text-center font-semibold">9.20</td>
                        <td className="border border-gray-300 p-3 text-center">30</td>
                        <td className="border border-gray-300 p-3 text-center">276</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Anul I - Sem. 2</td>
                        <td className="border border-gray-300 p-3 text-center font-semibold">9.40</td>
                        <td className="border border-gray-300 p-3 text-center">30</td>
                        <td className="border border-gray-300 p-3 text-center">282</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Anul II - Sem. 1</td>
                        <td className="border border-gray-300 p-3 text-center font-semibold">9.60</td>
                        <td className="border border-gray-300 p-3 text-center">30</td>
                        <td className="border border-gray-300 p-3 text-center">288</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Anul II - Sem. 2</td>
                        <td className="border border-gray-300 p-3 text-center font-semibold">9.80</td>
                        <td className="border border-gray-300 p-3 text-center">30</td>
                        <td className="border border-gray-300 p-3 text-center">294</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Anul III - Sem. 1</td>
                        <td className="border border-gray-300 p-3 text-center font-semibold">9.70</td>
                        <td className="border border-gray-300 p-3 text-center">30</td>
                        <td className="border border-gray-300 p-3 text-center">291</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Anul III - Sem. 2</td>
                        <td className="border border-gray-300 p-3 text-center font-semibold">9.90</td>
                        <td className="border border-gray-300 p-3 text-center">30</td>
                        <td className="border border-gray-300 p-3 text-center">297</td>
                      </tr>
                      <tr className="bg-yellow-100 font-bold">
                        <td className="border border-gray-300 p-3">TOTAL</td>
                        <td className="border border-gray-300 p-3 text-center">-</td>
                        <td className="border border-gray-300 p-3 text-center">180</td>
                        <td className="border border-gray-300 p-3 text-center">1728</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="bg-yellow-100 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-bold text-yellow-800 mb-2">Calculul Final:</h3>
                  <p className="text-lg text-yellow-700 mb-2">
                    <strong>Media finală = 1728 ÷ 180 = 9.60</strong>
                  </p>
                  <div className="text-2xl font-bold text-yellow-600">
                    🏆 SUMMA CUM LAUDE!
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Impact on Career */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 text-center mb-10">
              Impactul Clasificărilor asupra Carierei
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-xl text-orange-900">În Continuarea Studiilor</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      </div>
                      <span><strong>Master:</strong> Acceptare prioritară la programele selective</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      </div>
                      <span><strong>Doctorat:</strong> Avantaj major în competiția pentru locurile bugetate</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      </div>
                      <span><strong>Mobilități:</strong> Eligibilitate pentru burse Erasmus+ și programe de cercetare</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">În Cariera Profesională</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <span><strong>CV diferențiat:</strong> Menționarea pe diplomă și în aplicații</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <span><strong>Angajare:</strong> Preferință din partea angajatorilor pentru performanța academică</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <span><strong>Credibilitate:</strong> Demonstrarea disciplinei și excelenței în muncă</span>
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
              <Link href="/articol/clasificarea-academica-summa-cum-laude">
                <Card className="hover:shadow-lg transition-all cursor-pointer group">
                  <CardContent className="p-6">
                    <Trophy className="h-8 w-8 text-yellow-600 mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-yellow-600 transition-colors">
                      Summa Cum Laude Explicată
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Ghid detaliat pentru obținerea celei mai înalte distincții academice
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/articol/ghid-calcul-medie-facultate">
                <Card className="hover:shadow-lg transition-all cursor-pointer group">
                  <CardContent className="p-6">
                    <Calculator className="h-8 w-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                      Calculul Mediei la Facultate
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Cum să calculezi corect media pentru clasificări academice
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/ghid-ects">
                <Card className="hover:shadow-lg transition-all cursor-pointer group">
                  <CardContent className="p-6">
                    <BookOpen className="h-8 w-8 text-green-600 mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-green-600 transition-colors">
                      Ghidul ECTS
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Sistemul european de credite și impactul asupra clasificărilor
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Vizează o Clasificare Academică de Excepție!</h2>
                <p className="text-purple-100 mb-6">
                  Calculează-ți media și vezi ce clasificare poți obține cu performanțele tale actuale
                </p>
                <Link href="/">
                  <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center gap-2">
                    Calculează Media Acum
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
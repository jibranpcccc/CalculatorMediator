import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  University, 
  MapPin, 
  Users, 
  Star, 
  BookOpen,
  Trophy,
  Calculator,
  ExternalLink
} from "lucide-react";

export default function UniversitatiStat() {
  const universitati = [
    {
      nume: "Universitatea din București",
      oras: "București",
      studenti: "31,000+",
      rating: "9.2",
      specializari: 19,
      fondare: 1864,
      descriere: "Cea mai mare și prestigioasă universitate din România",
      caracteristici: ["QS World University Rankings", "Cercetare de top", "Bibliotecă centrală"],
      taxe: "Gratuit (buget)",
      website: "https://unibuc.ro"
    },
    {
      nume: "Universitatea Politehnica din București",
      oras: "București", 
      studenti: "25,000+",
      rating: "9.1",
      specializari: 14,
      fondare: 1818,
      descriere: "Lider în educația tehnică și inginerească",
      caracteristici: ["Top universitate tehnică", "Parteneriate industriale", "Inovație tehnologică"],
      taxe: "Gratuit (buget)",
      website: "https://upb.ro"
    },
    {
      nume: "Universitatea Babeș-Bolyai",
      oras: "Cluj-Napoca",
      studenti: "41,000+", 
      rating: "9.0",
      specializari: 21,
      fondare: 1919,
      descriere: "Cea mai mare universitate din Transilvania",
      caracteristici: ["Educație multilingvă", "Cercetare interdisciplinară", "Campus modern"],
      taxe: "Gratuit (buget)",
      website: "https://ubbcluj.ro"
    },
    {
      nume: "Universitatea Alexandru Ioan Cuza",
      oras: "Iași",
      studenti: "23,000+",
      rating: "8.9",
      specializari: 15,
      fondare: 1860,
      descriere: "Prima universitate modernă din România",
      caracteristici: ["Tradiție academică", "Bibliotecă universitară", "Cercetare avansată"],
      taxe: "Gratuit (buget)",
      website: "https://uaic.ro"
    },
    {
      nume: "Universitatea de Vest din Timișoara",
      oras: "Timișoara",
      studenti: "16,000+",
      rating: "8.7",
      specializari: 11,
      fondare: 1944,
      descriere: "Hub educațional în vestul României",
      caracteristici: ["Oraș european al culturii", "Programe internaționale", "Innovation hub"],
      taxe: "Gratuit (buget)",
      website: "https://uvt.ro"
    },
    {
      nume: "Universitatea din Craiova",
      oras: "Craiova",
      studenti: "18,000+",
      rating: "8.5",
      specializari: 13,
      fondare: 1947,
      descriere: "Centru academic în Oltenia",
      caracteristici: ["Campus integrat", "Cercetare aplicată", "Parteneriate regionale"],
      taxe: "Gratuit (buget)",
      website: "https://ucv.ro"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Universități de Stat România 2025 - Ghid Complet | Calculator Medie Facultate"
        description="Lista completă a universităților de stat din România: criterii de admitere, specializări, taxe și informații utile pentru viitori studenți în 2025."
        keywords="universitati de stat romania, admitere universitate, specializari, taxe universitare, bucuresti cluj iasi timisoara"
        canonicalUrl="https://calculatormediefacultate.com/universitati-stat"
        schemaType="article"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb />
          
          {/* Page Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700">Ghid Universitar</Badge>
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">
              Universități de Stat din România
            </h1>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto">
              Descoperă cele mai prestigioase universități de stat din România: criterii de admitere, 
              specializări disponibile, taxe și tot ce trebuie să știi pentru a face alegerea potrivită
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <University className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-600">55+</div>
                <div className="text-sm text-gray-600">Universități de Stat</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-green-600">400K+</div>
                <div className="text-sm text-gray-600">Studenți Înscriși</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <BookOpen className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-purple-600">1000+</div>
                <div className="text-sm text-gray-600">Programe de Studiu</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Trophy className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-orange-600">0 RON</div>
                <div className="text-sm text-gray-600">Taxă (locuri buget)</div>
              </CardContent>
            </Card>
          </div>

          {/* Universities List */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
              Top Universități de Stat
            </h2>
            
            <div className="grid gap-8">
              {universitati.map((uni, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-6">
                      {/* Main Info */}
                      <div className="lg:col-span-2">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{uni.nume}</h3>
                            <div className="flex items-center text-gray-600 mb-2">
                              <MapPin className="h-4 w-4 mr-2" />
                              <span>{uni.oras}</span>
                              <span className="mx-3">•</span>
                              <span>Fondată în {uni.fondare}</span>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-5 w-5 text-yellow-500 mr-1" />
                            <span className="font-bold text-lg">{uni.rating}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 mb-6">{uni.descriere}</p>
                        
                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                          <div className="bg-blue-50 p-4 rounded-lg text-center">
                            <div className="font-bold text-blue-600">{uni.studenti}</div>
                            <div className="text-sm text-blue-700">Studenți</div>
                          </div>
                          <div className="bg-green-50 p-4 rounded-lg text-center">
                            <div className="font-bold text-green-600">{uni.specializari}</div>
                            <div className="text-sm text-green-700">Facultăți</div>
                          </div>
                          <div className="bg-purple-50 p-4 rounded-lg text-center">
                            <div className="font-bold text-purple-600">{uni.taxe}</div>
                            <div className="text-sm text-purple-700">Taxă studiu</div>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3">Caracteristici principale:</h4>
                          <div className="flex flex-wrap gap-2">
                            {uni.caracteristici.map((caracteristica, idx) => (
                              <Badge key={idx} variant="secondary" className="bg-orange-100 text-orange-700">
                                {caracteristica}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Actions */}
                      <div className="space-y-4">
                        <a 
                          href={uni.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full"
                        >
                          <Button className="w-full" variant="default">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Site Oficial
                          </Button>
                        </a>
                        
                        <Link href="/calculator-bursa">
                          <Button className="w-full" variant="outline">
                            <Calculator className="mr-2 h-4 w-4" />
                            Calculator Bursă
                          </Button>
                        </Link>
                        
                        <Link href="/">
                          <Button className="w-full" variant="outline">
                            <BookOpen className="mr-2 h-4 w-4" />
                            Calculator Medie
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Admission Info */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
              Informații despre Admitere
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <BookOpen className="mr-3 h-6 w-6 text-blue-600" />
                    Criterii Generale de Admitere
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-bold text-blue-600">Licență</h4>
                      <p className="text-sm text-gray-600">Media de la Bacalaureat + Concurs de admitere/Dosare</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-bold text-green-600">Master</h4>
                      <p className="text-sm text-gray-600">Media de licență + Concurs de admitere/Dosare</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-bold text-purple-600">Doctorat</h4>
                      <p className="text-sm text-gray-600">Master + Proiect de cercetare + Interviu</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <Trophy className="mr-3 h-6 w-6 text-orange-600" />
                    Avantajele Universităților de Stat
                  </h3>
                  
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></div>
                      <span>Educație gratuită pentru locurile buget</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></div>
                      <span>Recunoaștere internațională a diplomelor</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></div>
                      <span>Profesori cu experiență și calificări înalte</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></div>
                      <span>Facilități moderne și laboratoare echipate</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></div>
                      <span>Programe de mobilitate internațională</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></div>
                      <span>Burse de merit și sociale disponibile</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Pregătit pentru Admitere?</h2>
                <p className="text-xl mb-8 text-blue-100">
                  Folosește instrumentele noastre pentru a te pregăti optimal
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/">
                    <Button 
                      size="lg" 
                      className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 font-semibold"
                    >
                      <Calculator className="mr-2 h-5 w-5" />
                      Calculator Medie
                    </Button>
                  </Link>
                  
                  <Link href="/calculator-bursa">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 font-semibold"
                    >
                      <Trophy className="mr-2 h-5 w-5" />
                      Calculator Bursă
                    </Button>
                  </Link>
                  
                  <Link href="/ghid-burse">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 font-semibold"
                    >
                      <BookOpen className="mr-2 h-5 w-5" />
                      Ghid Burse
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
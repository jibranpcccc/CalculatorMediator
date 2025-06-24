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
  Euro,
  Calculator,
  ExternalLink,
  Briefcase
} from "lucide-react";

export default function UniversitatiPrivate() {
  const universitati = [
    {
      nume: "Universitatea Româno-Americană",
      oras: "București",
      studenti: "8,000+",
      rating: "8.8",
      specializari: 12,
      fondare: 1991,
      descriere: "Prima universitate privată din România cu programe americane",
      caracteristici: ["Programe în limba engleză", "Parteneriate internaționale", "MBA acreditat"],
      taxe: "3,500-6,000 EUR/an",
      website: "https://rau.ro"
    },
    {
      nume: "Universitatea Titu Maiorescu",
      oras: "București", 
      studenti: "12,000+",
      rating: "8.6",
      specializari: 15,
      fondare: 1990,
      descriere: "Educație de calitate în domenii diverse",
      caracteristici: ["Medicină", "Drept", "Psihologie", "Economie"],
      taxe: "2,800-5,500 EUR/an",
      website: "https://utm.ro"
    },
    {
      nume: "Universitatea Creștină Dimitrie Cantemir",
      oras: "București",
      studenti: "15,000+", 
      rating: "8.4",
      specializari: 18,
      fondare: 1991,
      descriere: "Una dintre cele mai mari universități private",
      caracteristici: ["Multiple campusuri", "Programe flexibile", "Studii online"],
      taxe: "2,200-4,800 EUR/an",
      website: "https://cantemir.ro"
    },
    {
      nume: "Universitatea de Vest Vasile Goldiș",
      oras: "Arad",
      studenti: "7,500+",
      rating: "8.3",
      specializari: 8,
      fondare: 1990,
      descriere: "Excelență în medicină și științe sociale",
      caracteristici: ["Medicină dentară", "Farmacie", "Științe sociale"],
      taxe: "3,000-6,500 EUR/an",
      website: "https://uvvg.ro"
    },
    {
      nume: "Universitatea Nicolae Titulescu",
      oras: "București",
      studenti: "6,000+",
      rating: "8.2",
      specializari: 6,
      fondare: 1991,
      descriere: "Specializată în drept și științe administrative",
      caracteristici: ["Drept", "Relații internaționale", "Administrație publică"],
      taxe: "2,500-4,000 EUR/an",
      website: "https://univnt.ro"
    },
    {
      nume: "Universitatea Hyperion",
      oras: "București",
      studenti: "5,500+",
      rating: "8.0",
      specializari: 9,
      fondare: 1990,
      descriere: "Focus pe științe economice și informatică",
      caracteristici: ["Informatică aplicată", "Management", "Marketing"],
      taxe: "2,000-3,800 EUR/an",
      website: "https://hyperion.ro"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Universități Private România 2025 - Ghid Complet | Calculator Medie Facultate"
        description="Lista completă a universităților private din România: taxe, specializări, criterii de admitere și informații utile pentru viitori studenți în 2025."
        keywords="universitati private romania, taxe universitare, admitere universitate privata, specializari, bucuresti"
        canonicalUrl="https://calculatormediefacultate.com/universitati-private"
        schemaType="article"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb />
          
          {/* Page Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-700">Ghid Universitar</Badge>
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">
              Universități Private din România
            </h1>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto">
              Explorează universitățile private acreditate din România: taxe de studiu, 
              specializări exclusive, facilități moderne și avantajele educației private
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <University className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-purple-600">25+</div>
                <div className="text-sm text-gray-600">Universități Private</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-600">80K+</div>
                <div className="text-sm text-gray-600">Studenți Înscriși</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-green-600">300+</div>
                <div className="text-sm text-gray-600">Programe de Studiu</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Euro className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-orange-600">2-6K</div>
                <div className="text-sm text-gray-600">EUR/an (taxe)</div>
              </CardContent>
            </Card>
          </div>

          {/* Universities List */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
              Top Universități Private
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
                          <div className="bg-purple-50 p-4 rounded-lg text-center">
                            <div className="font-bold text-purple-600">{uni.studenti}</div>
                            <div className="text-sm text-purple-700">Studenți</div>
                          </div>
                          <div className="bg-blue-50 p-4 rounded-lg text-center">
                            <div className="font-bold text-blue-600">{uni.specializari}</div>
                            <div className="text-sm text-blue-700">Specializări</div>
                          </div>
                          <div className="bg-orange-50 p-4 rounded-lg text-center">
                            <div className="font-bold text-orange-600">{uni.taxe}</div>
                            <div className="text-sm text-orange-700">Taxă studiu</div>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3">Domenii de specializare:</h4>
                          <div className="flex flex-wrap gap-2">
                            {uni.caracteristici.map((caracteristica, idx) => (
                              <Badge key={idx} variant="secondary" className="bg-purple-100 text-purple-700">
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

          {/* Comparison Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
              Avantajele Universităților Private
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-green-800 mb-6 flex items-center">
                    <Briefcase className="mr-3 h-6 w-6" />
                    Avantaje Specifice
                  </h3>
                  
                  <ul className="space-y-3 text-green-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                      <span>Grupe mai mici de studenți (atenție personalizată)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                      <span>Facilități moderne și echipamente de ultimă generație</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                      <span>Programe adaptate cerințelor pieței muncii</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                      <span>Parteneriate cu companii și stagii garantate</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                      <span>Flexibilitate în programele de studiu</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                      <span>Suport pentru carieră și plasament</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-blue-800 mb-6 flex items-center">
                    <Euro className="mr-3 h-6 w-6" />
                    Considerații Financiare
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-bold text-blue-600">Taxe de studiu</h4>
                      <p className="text-sm text-blue-700">2,000 - 6,500 EUR/an (variază după specializare)</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-bold text-purple-600">Facilități de plată</h4>
                      <p className="text-sm text-purple-700">Rate lunare, discounturi pentru plata în avans</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-bold text-green-600">Burse private</h4>
                      <p className="text-sm text-green-700">Burse pentru performanță și situații speciale</p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-bold text-orange-600">ROI educațional</h4>
                      <p className="text-sm text-orange-700">Sanse mai mari de angajare rapid</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Admission Process */}
          <section className="mb-12">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-center mb-8">Procesul de Admitere</h2>
                
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold text-blue-600">1</span>
                    </div>
                    <h4 className="font-semibold mb-2">Aplicare Online</h4>
                    <p className="text-sm text-gray-600">Completează formularul de aplicare pe site-ul universității</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold text-green-600">2</span>
                    </div>
                    <h4 className="font-semibold mb-2">Documente</h4>
                    <p className="text-sm text-gray-600">Diploma de Bacalaureat, transcript academic, CV</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold text-purple-600">3</span>
                    </div>
                    <h4 className="font-semibold mb-2">Evaluare</h4>
                    <p className="text-sm text-gray-600">Examen/interviu de admitere (variază după universitate)</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold text-orange-600">4</span>
                    </div>
                    <h4 className="font-semibold mb-2">Înscriere</h4>
                    <p className="text-sm text-gray-600">Confirmare prin plata taxei de înscriere</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Calculează-ți Șansele de Admitere</h2>
                <p className="text-xl mb-8 text-purple-100">
                  Folosește instrumentele noastre pentru a evalua performanța academică
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/">
                    <Button 
                      size="lg" 
                      className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 font-semibold"
                    >
                      <Calculator className="mr-2 h-5 w-5" />
                      Calculator Medie
                    </Button>
                  </Link>
                  
                  <Link href="/calculator-bursa">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 font-semibold"
                    >
                      <Euro className="mr-2 h-5 w-5" />
                      Calculator Bursă
                    </Button>
                  </Link>
                  
                  <Link href="/universitati-stat">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 font-semibold"
                    >
                      <University className="mr-2 h-5 w-5" />
                      Universități Stat
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
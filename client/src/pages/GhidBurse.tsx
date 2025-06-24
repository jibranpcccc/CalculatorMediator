import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  GraduationCap, 
  Calculator, 
  Award, 
  FileText, 
  Clock, 
  Users, 
  TrendingUp,
  AlertCircle,
  CheckCircle,
  BookOpen
} from "lucide-react";

export default function GhidBurse() {
  return (
    <>
      <SEOHead 
        title="Ghid Complet Burse de Studiu România 2025 - Calculator Medie Facultate"
        description="Ghid complet pentru obținerea burselor de studiu în România: tipuri de burse, criterii, documente necesare, calendarul aplicațiilor și strategii de succes pentru studenți."
        keywords="ghid burse studiu, bursa merit, bursa sociala, bursa 1 decembrie, eligibilitate bursa, aplicare bursa universitate romania"
        canonicalUrl="https://calculatormediefacultate.com/ghid-burse"
        schemaType="article"
        articleData={{
          datePublished: "2025-01-01",
          dateModified: "2025-06-24",
          author: "Calculator Medie Facultate",
          category: "Ghiduri Educaționale"
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb />
          
          {/* Page Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-700">Ghid Educațional</Badge>
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">
              Ghidul Complet pentru Bursele de Studiu în România
            </h1>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto">
              Tot ce trebuie să știi despre tipurile de burse, criteriile de eligibilitate, 
              procesul de aplicare și strategiile pentru obținerea sprijinului financiar la facultate
            </p>
          </div>

          {/* Quick Calculator CTA */}
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 mb-12 text-white text-center">
            <Award className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Verifică-ți Eligibilitatea Acum</h2>
            <p className="mb-6 text-green-50">
              Folosește calculatorul nostru pentru a afla ce tip de bursă poți obține
            </p>
            <Link href="/calculator-bursa">
              <Button 
                size="lg" 
                className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8 py-3"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Calculator Bursă
              </Button>
            </Link>
          </div>

          {/* Types of Scholarships */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
              Tipuri de Burse în România (2025)
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-green-600">Bursa de Merit</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="font-semibold text-green-800">Criterii:</p>
                      <p className="text-green-700 text-sm">Media ≥ 8.5</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="font-semibold text-green-800">Sumă:</p>
                      <p className="text-green-700 text-sm">600-1000 RON/lună</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="font-semibold text-green-800">Caracteristici:</p>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Se acordă pe baza performanței</li>
                        <li>• Poate fi combinată cu bursa socială</li>
                        <li>• Evaluare semestrială</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-600">Bursa Socială</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Criterii:</p>
                      <p className="text-blue-700 text-sm">Situația financiară</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Sumă:</p>
                      <p className="text-blue-700 text-sm">400-800 RON/lună</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Caracteristici:</p>
                      <ul className="text-blue-700 text-sm space-y-1">
                        <li>• Pentru familii cu venituri mici</li>
                        <li>• Necesită documentație complexă</li>
                        <li>• Se poate combina cu merit</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-purple-600">Bursa 1 Decembrie</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="font-semibold text-purple-800">Criterii:</p>
                      <p className="text-purple-700 text-sm">Media ≥ 9.5</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="font-semibold text-purple-800">Sumă:</p>
                      <p className="text-purple-700 text-sm">1500+ RON/lună</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="font-semibold text-purple-800">Caracteristici:</p>
                      <ul className="text-purple-700 text-sm space-y-1">
                        <li>• Cea mai prestigioasă bursă</li>
                        <li>• Pentru rezultate excepționale</li>
                        <li>• Recunoaștere națională</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Application Process */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
              Procesul de Aplicare
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Clock className="h-8 w-8 text-orange-600 mr-3" />
                    <h3 className="text-2xl font-bold">Calendar Burse 2025</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-bold text-orange-600">Septembrie</h4>
                      <p className="text-sm text-gray-600">Depunerea dosarelor pentru semestrul I</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-bold text-blue-600">Octombrie</h4>
                      <p className="text-sm text-gray-600">Evaluarea și clasificarea candidaților</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-bold text-green-600">Noiembrie</h4>
                      <p className="text-sm text-gray-600">Comunicarea rezultatelor și acordarea burselor</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-bold text-purple-600">Februarie</h4>
                      <p className="text-sm text-gray-600">Reînnoirea pentru semestrul II</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <FileText className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold">Pași de Urmat</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-blue-600 font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Verifică criteriile</h4>
                        <p className="text-sm text-gray-600">Consultă regulamentul specific facultății tale</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-blue-600 font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Pregătește documentele</h4>
                        <p className="text-sm text-gray-600">Adună toate actele necesare din timp</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-blue-600 font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Completează cererea</h4>
                        <p className="text-sm text-gray-600">Folosește platforma online a universității</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-blue-600 font-bold text-sm">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Depune dosarul</h4>
                        <p className="text-sm text-gray-600">La secretariatul facultății în termenul stabilit</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Required Documents */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
              Documente Necesare
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-green-800 mb-6 flex items-center">
                    <CheckCircle className="mr-3 h-6 w-6" />
                    Pentru Bursa de Merit
                  </h3>
                  
                  <ul className="space-y-3 text-green-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                      <span>Cerere tip (se completează online)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                      <span>Foaia matricolă actualizată</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                      <span>Adeverință de student în original</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                      <span>Copie certificată a cărții de identitate</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                      <span>Declarație pe propria răspundere</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-blue-800 mb-6 flex items-center">
                    <Users className="mr-3 h-6 w-6" />
                    Pentru Bursa Socială (suplimentar)
                  </h3>
                  
                  <ul className="space-y-3 text-blue-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                      <span>Adeverințe de venit pentru toți membrii familiei</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                      <span>Certificat de naștere pentru toți membrii</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                      <span>Certificat de căsătorie/divorț (dacă aplicabil)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                      <span>Documente medicale (pentru persoane cu dizabilități)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                      <span>Declarația unică de venit</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Success Strategies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
              Strategii pentru Succès
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
                    <TrendingUp className="mr-3 h-6 w-6" />
                    Pentru Bursa de Merit
                  </h3>
                  
                  <ul className="space-y-3 text-orange-700">
                    <li>• Planifică studiul strategic pe discipline</li>
                    <li>• Concentrează-te pe materiile cu credite mari</li>
                    <li>• Participă activ la cursuri și seminarii</li>
                    <li>• Solicită consultații pentru clarificări</li>
                    <li>• Formează grupuri de studiu eficiente</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                    <FileText className="mr-3 h-6 w-6" />
                    Pentru Documentație
                  </h3>
                  
                  <ul className="space-y-3 text-blue-700">
                    <li>• Începe pregătirea din timp</li>
                    <li>• Verifică toate actele de mai multe ori</li>
                    <li>• Ține evidența termenelor limită</li>
                    <li>• Fă copii după toate documentele</li>
                    <li>• Consultă secretariatul pentru clarificări</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                    <Users className="mr-3 h-6 w-6" />
                    Pentru Menținerea Bursei
                  </h3>
                  
                  <ul className="space-y-3 text-green-700">
                    <li>• Menține media peste pragul minim</li>
                    <li>• Evită restanțele și absentele</li>
                    <li>• Respectă regulamentul universității</li>
                    <li>• Actualizează documentația la timp</li>
                    <li>• Comunică schimbările de situație</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Important Notes */}
          <section className="mb-12">
            <Card className="border-yellow-300 bg-yellow-50">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <AlertCircle className="h-8 w-8 text-yellow-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-yellow-800 mb-4">Informații Importante</h3>
                    <div className="space-y-3 text-yellow-700">
                      <p>• <strong>Termenele sunt stricte</strong> - depășirea lor duce la respingerea automată a cererii</p>
                      <p>• <strong>Documentele incomplete</strong> nu vor fi luate în considerare</p>
                      <p>• <strong>Criteriile variază</strong> între universități - consultă regulamentul specific</p>
                      <p>• <strong>Bursele se pot cumula</strong> - poți beneficia de merit + socială</p>
                      <p>• <strong>Plata se face lunar</strong> - de obicei până în data de 25</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Pregătit să Aplici pentru Bursă?</h2>
                <p className="text-xl mb-8 text-blue-100">
                  Folosește instrumentele noastre pentru a te pregăti optimal
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/calculator-bursa">
                    <Button 
                      size="lg" 
                      className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 font-semibold"
                    >
                      <Calculator className="mr-2 h-5 w-5" />
                      Calculator Eligibilitate
                    </Button>
                  </Link>
                  
                  <Link href="/">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 font-semibold"
                    >
                      <GraduationCap className="mr-2 h-5 w-5" />
                      Calculator Medie
                    </Button>
                  </Link>
                  
                  <Link href="/blog">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 font-semibold"
                    >
                      <BookOpen className="mr-2 h-5 w-5" />
                      Citește Ghidurile
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
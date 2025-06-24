import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  BookOpen, 
  Users, 
  Clock, 
  Star, 
  TrendingUp,
  Briefcase,
  Calculator,
  Award,
  Laptop,
  Heart,
  Gavel,
  Wrench
} from "lucide-react";

export default function ProgrameStudiu() {
  const domenii = [
    {
      nume: "Informatică și IT",
      icon: <Laptop className="h-8 w-8" />,
      color: "blue",
      programe: [
        { nume: "Informatică", durata: "3 ani", credite: 180, popularitate: "Foarte înaltă" },
        { nume: "Inginerie Software", durata: "3 ani", credite: 180, popularitate: "Foarte înaltă" },
        { nume: "Inteligență Artificială", durata: "3 ani", credite: 180, popularitate: "Înaltă" },
        { nume: "Securitate Cibernetică", durata: "3 ani", credite: 180, popularitate: "Înaltă" }
      ],
      perspectiveCariera: ["Programator", "Analist sistem", "DevOps Engineer", "Data Scientist"],
      salariuMediu: "4,000-8,000 RON"
    },
    {
      nume: "Medicină și Sănătate",
      icon: <Heart className="h-8 w-8" />,
      color: "red",
      programe: [
        { nume: "Medicină Generală", durata: "6 ani", credite: 360, popularitate: "Foarte înaltă" },
        { nume: "Medicină Dentară", durata: "6 ani", credite: 360, popularitate: "Înaltă" },
        { nume: "Farmacie", durata: "5 ani", credite: 300, popularitate: "Înaltă" },
        { nume: "Asistență Medicală", durata: "3 ani", credite: 180, popularitate: "Înaltă" }
      ],
      perspectiveCariera: ["Medic specialist", "Dentist", "Farmacist", "Asistent medical"],
      salariuMediu: "3,500-12,000 RON"
    },
    {
      nume: "Economie și Business",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "green",
      programe: [
        { nume: "Administrarea Afacerilor", durata: "3 ani", credite: 180, popularitate: "Foarte înaltă" },
        { nume: "Economie", durata: "3 ani", credite: 180, popularitate: "Înaltă" },
        { nume: "Marketing", durata: "3 ani", credite: 180, popularitate: "Înaltă" },
        { nume: "Contabilitate", durata: "3 ani", credite: 180, popularitate: "Înaltă" }
      ],
      perspectiveCariera: ["Manager", "Consultant financiar", "Marketing specialist", "Contabil"],
      salariuMediu: "2,800-7,000 RON"
    },
    {
      nume: "Drept și Științe Juridice",
      icon: <Gavel className="h-8 w-8" />,
      color: "purple",
      programe: [
        { nume: "Drept", durata: "4 ani", credite: 240, popularitate: "Foarte înaltă" },
        { nume: "Administrație Publică", durata: "3 ani", credite: 180, popularitate: "Medie" },
        { nume: "Relații Internaționale", durata: "3 ani", credite: 180, popularitate: "Medie" },
        { nume: "Științe Politice", durata: "3 ani", credite: 180, popularitate: "Medie" }
      ],
      perspectiveCariera: ["Avocat", "Notar", "Judecător", "Diplomat"],
      salariuMediu: "3,000-10,000 RON"
    },
    {
      nume: "Inginerie și Tehnologie",
      icon: <Wrench className="h-8 w-8" />,
      color: "orange",
      programe: [
        { nume: "Inginerie Electronică", durata: "4 ani", credite: 240, popularitate: "Înaltă" },
        { nume: "Inginerie Civilă", durata: "4 ani", credite: 240, popularitate: "Înaltă" },
        { nume: "Inginerie Mecanică", durata: "4 ani", credite: 240, popularitate: "Înaltă" },
        { nume: "Automatică și Calculatoare", durata: "4 ani", credite: 240, popularitate: "Foarte înaltă" }
      ],
      perspectiveCariera: ["Inginer de sistem", "Inginer de proiect", "Consultant tehnic", "Manager tehnic"],
      salariuMediu: "3,500-8,000 RON"
    },
    {
      nume: "Științe Sociale și Umane",
      icon: <Users className="h-8 w-8" />,
      color: "indigo",
      programe: [
        { nume: "Psihologie", durata: "3 ani", credite: 180, popularitate: "Foarte înaltă" },
        { nume: "Sociologie", durata: "3 ani", credite: 180, popularitate: "Medie" },
        { nume: "Jurnalism", durata: "3 ani", credite: 180, popularitate: "Medie" },
        { nume: "Limbi Străine", durata: "3 ani", credite: 180, popularitate: "Medie" }
      ],
      perspectiveCariera: ["Psiholog", "Sociolog", "Jurnalist", "Translator"],
      salariuMediu: "2,500-6,000 RON"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-700 border-blue-200",
      red: "bg-red-100 text-red-700 border-red-200",
      green: "bg-green-100 text-green-700 border-green-200",
      purple: "bg-purple-100 text-purple-700 border-purple-200", 
      orange: "bg-orange-100 text-orange-700 border-orange-200",
      indigo: "bg-indigo-100 text-indigo-700 border-indigo-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <>
      <SEOHead 
        title="Programe de Studiu România 2025 - Ghid Complet | Calculator Medie Facultate"
        description="Explorează programele de studiu disponibile în universitățile din România: licență, master, doctorat. Criterii de admitere, durata și perspective de carieră."
        keywords="programe studiu romania, licenta master doctorat, specializari universitare, admitere 2025, cariera"
        canonicalUrl="https://calculatormediefacultate.com/programe-studiu"
        schemaType="article"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb />
          
          {/* Page Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-700">Ghid Academic</Badge>
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">
              Programe de Studiu în România
            </h1>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto">
              Descoperă toate programele de studiu disponibile în universitățile românești: 
              de la licență la doctorat, cu informații despre durata, creditele ECTS și perspectivele de carieră
            </p>
          </div>

          {/* Study Levels Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
              Niveluri de Studiu
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-8 text-center">
                  <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">Licență (Bachelor)</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center justify-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>3-6 ani</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Award className="h-4 w-4 mr-2" />
                      <span>180-360 credite ECTS</span>
                    </div>
                    <p className="text-sm">Primul nivel al învățământului superior, oferă cunoștințe fundamentale</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">Master</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center justify-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>1-2 ani</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Award className="h-4 w-4 mr-2" />
                      <span>60-120 credite ECTS</span>
                    </div>
                    <p className="text-sm">Specializare avansată, pregătirea pentru cercetare sau cariere de top</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <Star className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">Doctorat (PhD)</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center justify-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>3-4 ani</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Award className="h-4 w-4 mr-2" />
                      <span>180 credite ECTS</span>
                    </div>
                    <p className="text-sm">Cel mai înalt nivel academic, cercetare originală și contribuții științifice</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Study Programs by Domain */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
              Domenii de Studiu Populare
            </h2>
            
            <div className="space-y-8">
              {domenii.map((domeniu, index) => (
                <Card key={index} className={`border-2 ${getColorClasses(domeniu.color)}`}>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`p-3 rounded-lg ${getColorClasses(domeniu.color)} mr-4`}>
                        {domeniu.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{domeniu.nume}</h3>
                        <p className="text-gray-600">Salariu mediu: {domeniu.salariuMediu}</p>
                      </div>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-6">
                      {/* Programs */}
                      <div>
                        <h4 className="font-bold mb-4">Programe principale:</h4>
                        <div className="space-y-3">
                          {domeniu.programe.map((program, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-lg border">
                              <div className="flex justify-between items-start mb-2">
                                <h5 className="font-semibold">{program.nume}</h5>
                                <Badge variant="secondary" className="text-xs">{program.popularitate}</Badge>
                              </div>
                              <div className="text-sm text-gray-600 space-y-1">
                                <div>Durata: {program.durata}</div>
                                <div>Credite ECTS: {program.credite}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Career Prospects */}
                      <div>
                        <h4 className="font-bold mb-4">Perspective de carieră:</h4>
                        <div className="bg-white p-4 rounded-lg border">
                          <ul className="space-y-2">
                            {domeniu.perspectiveCariera.map((cariera, idx) => (
                              <li key={idx} className="flex items-center text-sm">
                                <Briefcase className="h-4 w-4 mr-2 text-gray-500" />
                                {cariera}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Admission Requirements */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
              Criterii Generale de Admitere
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 text-blue-600">Licență</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Diplomă de Bacalaureat</li>
                    <li>• Media minimă de admitere (variază)</li>
                    <li>• Examen de admitere/dosare</li>
                    <li>• Probe specifice (pentru anumite domenii)</li>
                    <li>• Cunoștințe de limbă străină (opțional)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 text-green-600">Master</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Diplomă de licență</li>
                    <li>• Media de la licență (min. 6.00)</li>
                    <li>• Examen de admitere/interviu</li>
                    <li>• Scrisoare de intenție</li>
                    <li>• Recomandări academice</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 text-purple-600">Doctorat</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Diplomă de master</li>
                    <li>• Proiect de cercetare</li>
                    <li>• Interviu cu comisia</li>
                    <li>• Publicații academice (opțional)</li>
                    <li>• Competențe lingvistice</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Tips for Success */}
          <section className="mb-12">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-center mb-8">Sfaturi pentru o Aplicație de Succes</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold mb-4 text-blue-600">Pregătirea pentru admitere:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Informează-te despre cerințele specifice</li>
                      <li>• Pregătește-te timp de cel puțin 6 luni</li>
                      <li>• Practică exercițiile din anii precedenți</li>
                      <li>• Participă la cursuri pregătitoare</li>
                      <li>• Calculează-ți media cu anticipație</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-4 text-purple-600">În timpul studiilor:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Menține o medie înaltă pentru burse</li>
                      <li>• Participă la activități extracurriculare</li>
                      <li>• Construiește relații cu profesorii</li>
                      <li>• Caută stagii în domeniu</li>
                      <li>• Dezvoltă competențe suplimentare</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Calculează-ți Șansele de Admitere</h2>
                <p className="text-xl mb-8 text-green-100">
                  Folosește instrumentele noastre pentru a evalua performanța academică
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/">
                    <Button 
                      size="lg" 
                      className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 font-semibold"
                    >
                      <Calculator className="mr-2 h-5 w-5" />
                      Calculator Medie
                    </Button>
                  </Link>
                  
                  <Link href="/calculator-bursa">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 font-semibold"
                    >
                      <Award className="mr-2 h-5 w-5" />
                      Calculator Bursă
                    </Button>
                  </Link>
                  
                  <Link href="/universitati-stat">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 font-semibold"
                    >
                      <BookOpen className="mr-2 h-5 w-5" />
                      Universități
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
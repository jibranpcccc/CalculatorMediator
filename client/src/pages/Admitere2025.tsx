import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Calendar, 
  FileText, 
  Clock, 
  AlertCircle, 
  CheckCircle,
  Trophy,
  Calculator,
  BookOpen,
  Users,
  Target
} from "lucide-react";

export default function Admitere2025() {
  const calendareImportante = [
    {
      perioada: "Ianuarie - Februarie 2025",
      evenimente: [
        "Publicarea metodologiilor de admitere",
        "Începerea înregistrărilor online",
        "Lansarea ghidurilor de admitere"
      ],
      status: "completed"
    },
    {
      perioada: "Martie - Aprilie 2025",
      evenimente: [
        "Sesiunea de primăvară pentru unele programe",
        "Depunerea dosarelor pentru programe specifice",
        "Examene de admitere anticipate"
      ],
      status: "current"
    },
    {
      perioada: "Mai - Iunie 2025",
      evenimente: [
        "Susținerea examenelor de Bacalaureat",
        "Publicarea rezultatelor Bacalaureatului",
        "Înregistrarea pentru admiterea din vară"
      ],
      status: "upcoming"
    },
    {
      perioada: "Iulie - August 2025",
      evenimente: [
        "Sesiunea principală de admitere",
        "Examene de admitere și evaluări",
        "Publicarea rezultatelor și repartizarea"
      ],
      status: "upcoming"
    },
    {
      perioada: "Septembrie 2025",
      evenimente: [
        "Sesiunea de toamnă (locuri rămase libere)",
        "Confirmarea înscrierii și plata taxelor",
        "Începerea anului universitar"
      ],
      status: "upcoming"
    }
  ];

  const universităţiTop = [
    {
      nume: "Universitatea din București",
      tipAdmitere: "Examen + Dosare",
      mediaBac: "8.50+",
      locuriBuget: "5,000+",
      specialitatiTop: ["Informatică", "Medicină", "Drept", "Psihologie"]
    },
    {
      nume: "Universitatea Politehnica București",
      tipAdmitere: "Examen Matematică",
      mediaBac: "8.00+",
      locuriBuget: "3,500+", 
      specialitatiTop: ["Automatică", "Electronică", "Calculatoare", "Energetică"]
    },
    {
      nume: "Universitatea Babeș-Bolyai Cluj",
      tipAdmitere: "Dosare + Examen",
      mediaBac: "7.50+",
      locuriBuget: "4,000+",
      specialitatiTop: ["Business", "Științe", "Litere", "Matematică"]
    },
    {
      nume: "Universitatea Alexandru Ioan Cuza Iași",
      tipAdmitere: "Dosare",
      mediaBac: "7.00+",
      locuriBuget: "3,000+",
      specialitatiTop: ["Economie", "Istorie", "Geografie", "Biologie"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-700 border-green-200";
      case "current": return "bg-blue-100 text-blue-700 border-blue-200";
      case "upcoming": return "bg-gray-100 text-gray-700 border-gray-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "current": return <Clock className="h-5 w-5 text-blue-600" />;
      case "upcoming": return <Calendar className="h-5 w-5 text-gray-600" />;
      default: return <Calendar className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <>
      <SEOHead 
        title="Admitere Universitate 2025 - Calendar și Ghid Complet | Calculator Medie Facultate"
        description="Ghid complet pentru admiterea la universitate în 2025: calendar, criterii, documente necesare, sfaturi pentru pregătire și lista universităților de top."
        keywords="admitere universitate 2025, calendar admitere, bacalaureat 2025, criterii admitere, ghid student"
        canonicalUrl="https://calculatormediefacultate.com/admitere-2025"
        schemaType="article"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb />
          
          {/* Page Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-100 text-orange-700">Admitere 2025</Badge>
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">
              Ghidul Complet pentru Admiterea la Universitate 2025
            </h1>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto">
              Tot ce trebuie să știi despre admiterea la universitate în 2025: calendar, criterii, 
              documente necesare și strategii de pregătire pentru succesul tău academic
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-600">250K+</div>
                <div className="text-sm text-gray-600">Candidați în 2025</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-green-600">120K+</div>
                <div className="text-sm text-gray-600">Locuri disponibile</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Target className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-purple-600">85%</div>
                <div className="text-sm text-gray-600">Rata de admitere</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Trophy className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-orange-600">8.50</div>
                <div className="text-sm text-gray-600">Media necesară top</div>
              </CardContent>
            </Card>
          </div>

          {/* Calendar Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
              Calendarul Admiterii 2025
            </h2>
            
            <div className="space-y-6">
              {calendareImportante.map((perioada, index) => (
                <Card key={index} className={`border-2 ${getStatusColor(perioada.status)}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="mt-1">
                        {getStatusIcon(perioada.status)}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3">{perioada.perioada}</h3>
                        <ul className="space-y-2">
                          {perioada.evenimente.map((eveniment, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-current rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span>{eveniment}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Top Universities */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
              Universități de Top - Criterii Admitere 2025
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {universităţiTop.map((uni, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">{uni.nume}</h3>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-blue-50 p-3 rounded-lg text-center">
                        <div className="font-bold text-blue-600">{uni.tipAdmitere}</div>
                        <div className="text-sm text-blue-700">Tip admitere</div>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg text-center">
                        <div className="font-bold text-green-600">{uni.mediaBac}</div>
                        <div className="text-sm text-green-700">Media BAC</div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Locuri buget: {uni.locuriBuget}</h4>
                      <div className="text-sm text-gray-600">
                        <strong>Specialități populare:</strong> {uni.specialitatiTop.join(", ")}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Preparation Tips */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
              Strategii de Pregătire pentru Admitere
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                    <FileText className="mr-3 h-6 w-6" />
                    Documentație
                  </h3>
                  
                  <ul className="space-y-3 text-blue-700">
                    <li>• Pregătește dosarul din timp (cu 3 luni înainte)</li>
                    <li>• Verifică toate documentele de mai multe ori</li>
                    <li>• Fă copii legalizate pentru siguranță</li>
                    <li>• Ține evidența termenelor pentru fiecare universitate</li>
                    <li>• Consultă secretariatele pentru clarificări</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                    <BookOpen className="mr-3 h-6 w-6" />
                    Pregătire Academică
                  </h3>
                  
                  <ul className="space-y-3 text-green-700">
                    <li>• Studiază subiectele din anii precedenți</li>
                    <li>• Participă la cursuri pregătitoare specializate</li>
                    <li>• Formează grupuri de studiu cu colegi</li>
                    <li>• Solicită meditații pentru materiile dificile</li>
                    <li>• Exersează constant și sistematic</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                    <Target className="mr-3 h-6 w-6" />
                    Strategie și Planning
                  </h3>
                  
                  <ul className="space-y-3 text-purple-700">
                    <li>• Alege 3-5 universități ca opțiuni</li>
                    <li>• Calculează-ți media cu diferite scenarii</li>
                    <li>• Informează-te despre programele alternative</li>
                    <li>• Planifică-ți timpiul pentru fiecare examen</li>
                    <li>• Pregătește un plan B pentru situații neprevăzute</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Important Alert */}
          <section className="mb-12">
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <AlertCircle className="h-8 w-8 text-red-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-red-800 mb-4">Informații Critice pentru 2025</h3>
                    <div className="space-y-3 text-red-700">
                      <p>• <strong>Schimbări metodologie:</strong> Unele universități au modificat criteriile de admitere</p>
                      <p>• <strong>Termene strîcte:</strong> Nu există prelungiri pentru depunerea dosarelor</p>
                      <p>• <strong>Verificare BAC:</strong> Media de la Bacalaureat trebuie să fie minimum 6.00</p>
                      <p>• <strong>Documente digitale:</strong> Majoritatea proceselor se desfășoară online</p>
                      <p>• <strong>Taxe de dosare:</strong> Pregătește între 50-200 RON per aplicație</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Documents Checklist */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
              Lista Documentelor Necesare
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 text-blue-600">Documente Obligatorii</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span>Diploma de Bacalaureat (original + copie)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span>Foaia matricolă de la liceu</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span>Certificat de naștere (copie legalizată)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span>Carte de identitate (copie)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span>Fotografii color (format pașaport)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span>Adeverință medicală</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 text-purple-600">Documente Suplimentare</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-purple-600 mr-3" />
                      <span>Certificat de competențe lingvistice</span>
                    </div>
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-purple-600 mr-3" />
                      <span>Diplome de participare la olimpiade</span>
                    </div>
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-purple-600 mr-3" />
                      <span>Certificat de voluntariat</span>
                    </div>
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-purple-600 mr-3" />
                      <span>Portofoliu de lucrări (pentru arte/design)</span>
                    </div>
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-purple-600 mr-3" />
                      <span>Scrisoare de motivație</span>
                    </div>
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-purple-600 mr-3" />
                      <span>Recomandări de la profesori</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Pregătește-te pentru Admiterea 2025</h2>
                <p className="text-xl mb-8 text-orange-100">
                  Folosește instrumentele noastre pentru a evalua șansele de admitere
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/">
                    <Button 
                      size="lg" 
                      className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 font-semibold"
                    >
                      <Calculator className="mr-2 h-5 w-5" />
                      Calculator Medie
                    </Button>
                  </Link>
                  
                  <Link href="/calculator-bursa">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 font-semibold"
                    >
                      <Trophy className="mr-2 h-5 w-5" />
                      Calculator Bursă
                    </Button>
                  </Link>
                  
                  <Link href="/universitati-stat">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 font-semibold"
                    >
                      <BookOpen className="mr-2 h-5 w-5" />
                      Lista Universități
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
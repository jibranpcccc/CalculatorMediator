import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Scale, Calendar, Users, Calculator, FileText, ExternalLink, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function Legislation() {
  const legislationSections = [
    {
      title: "Legea Pensiilor 2025",
      description: "Modificările legislative recente și impactul asupra pensionarilor",
      icon: <Scale className="h-6 w-6" />,
      items: [
        "Noile criterii de vârstă pentru pensionare",
        "Modificări în calculul punctelor de pensie",
        "Indexarea anuală a pensiilor",
        "Drepturile pensionarilor în 2025"
      ],
      status: "Actualizat 2025"
    },
    {
      title: "Vârsta Standard de Pensionare",
      description: "Tabel complet cu vârstele de pensionare pe categorii",
      icon: <Calendar className="h-6 w-6" />,
      items: [
        "Bărbați: 65 de ani (standard)",
        "Femei: 63 de ani (trecere graduală)",
        "Condiții speciale de muncă",
        "Pensionarea anticipată parțială"
      ],
      status: "Verificat 2025"
    },
    {
      title: "Stagiul de Cotizare",
      description: "Cum se calculează corect stagiul contributiv",
      icon: <Clock className="h-6 w-6" />,
      items: [
        "Minim 15 ani pentru pensie",
        "35 ani pentru pensie completă",
        "Perioade asimilate stagiului",
        "Cumpărarea vechimii în muncă"
      ],
      status: "Ghid Complet"
    },
    {
      title: "Calculul Pensiei",
      description: "Formula oficială de calcul a pensiei în România",
      icon: <Calculator className="h-6 w-6" />,
      items: [
        "Punctele de pensie acumulate",
        "Valoarea punctului de pensie 2025",
        "Coeficientul de corecție",
        "Penalizări pentru pensionarea timpurie"
      ],
      status: "Valori 2025"
    }
  ];

  const officialResources = [
    {
      title: "Casa Națională de Pensii Publice",
      url: "https://www.cnpp.ro",
      description: "Site-ul oficial CNPP cu formulare și proceduri"
    },
    {
      title: "Legea nr. 263/2010",
      url: "#",
      description: "Legea sistemului unitar de pensii publice"
    },
    {
      title: "Hotărâri de Guvern",
      url: "#",
      description: "Reglementări și modificări legislative recente"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Calculator Medie Facultate - Legislație și Resurse Pensii România 2025"
        description="Ghid complet despre legislația pensiilor în România 2025. Înțelege legea pensiilor, vârsta de pensionare și calculul corect al pensiei."
        keywords="legislatie pensii, legea pensiilor 2025, varsta pensionare romania, stagiu cotizare"
        canonicalUrl="https://calculatormediefacultate.com/legislatie-si-resurse"
        schemaType="article"
        articleData={{
          datePublished: "2025-01-01",
          dateModified: "2025-06-19",
          author: "Calculator Medie Facultate",
          category: "Legislatie Pensii"
        }}
      />
      
      <div className="min-h-screen bg-neutral-50">
        <Header />
        
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Legislație și Resurse <span className="text-primary">Pensii România</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
              Ghid complet despre legislația pensiilor în România. Înțelege pe deplin drepturile și obligațiile tale 
              în sistemul de pensii, cu explicații clare și actualizate pentru 2025.
            </p>
          </div>

          {/* Current Status Badge */}
          <div className="flex justify-center mb-12">
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <FileText className="mr-2 h-4 w-4" />
              Actualizat conform legislației din 2025
            </Badge>
          </div>

          {/* Main Content Sections */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {legislationSections.map((section, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {section.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{section.title}</CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          {section.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {section.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-neutral-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Official Resources */}
          <div className="bg-white rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center">
              <BookOpen className="mr-3 h-6 w-6 text-primary" />
              Resurse Oficiale
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {officialResources.map((resource, index) => (
                <div key={index} className="p-4 border border-neutral-200 rounded-lg hover:border-primary/30 transition-colors">
                  <h3 className="font-semibold text-neutral-900 mb-2">{resource.title}</h3>
                  <p className="text-sm text-neutral-600 mb-3">{resource.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Accesează
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Key Updates for 2025 */}
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Modificări Importante în 2025
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-neutral-900 mb-3">Valoarea Punctului de Pensie</h3>
                <p className="text-neutral-700 mb-4">
                  Valoarea punctului de pensie pentru 2025 este de <strong>2.032 lei</strong>, 
                  reprezentând o creștere față de anul anterior conform mecanismului de indexare.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-3">Vârsta de Pensionare</h3>
                <p className="text-neutral-700 mb-4">
                  Vârsta standard de pensionare rămâne <strong>65 ani pentru bărbați</strong> și 
                  <strong>63 ani pentru femei</strong>, cu tranziția graduală către 65 ani pentru toate categoriile.
                </p>
              </div>
            </div>
          </div>

          {/* Calculator Integration */}
          <div className="text-center bg-primary rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Calculează-ți Pensia Conform Legislației Actuale</h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Folosește calculatorul nostru pentru a-ți estima pensia bazată pe legislația actuală și 
              modificările din 2025.
            </p>
            <Button size="lg" variant="secondary" className="inline-flex items-center">
              <Calculator className="mr-2 h-5 w-5" />
              Calculează Pensia Acum
            </Button>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

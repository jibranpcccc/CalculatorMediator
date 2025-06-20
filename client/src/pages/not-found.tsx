import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Calculator, BookOpen, Phone } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function NotFound() {
  return (
    <>
      <SEOHead 
        title="Pagina nu a fost găsită - Calculator Pensie România"
        description="Ne pare rău, pagina pe care o căutați nu există. Reveniți la calculatorul de pensii și găsiți informațiile de care aveți nevoie."
        keywords="eroare 404, pagina negasita, calculator pensie"
        canonicalUrl="https://calculatormediefacultate.com/404"
        schemaType="website"
      />
      
      <div className="min-h-screen bg-neutral-50">
        <Header />
        
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Pagina nu a fost găsită
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-8">
                Ne pare rău, pagina pe care o căutați nu există sau a fost mutată. 
                Vă rugăm să folosiți navigația de mai jos pentru a găsi informațiile de care aveți nevoie.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Link href="/">
                <Button variant="outline" className="w-full h-20 flex flex-col gap-2 hover:bg-primary hover:text-white">
                  <Home className="h-6 w-6" />
                  <span>Acasă</span>
                </Button>
              </Link>
              
              <Link href="/calculator-anticipata">
                <Button variant="outline" className="w-full h-20 flex flex-col gap-2 hover:bg-primary hover:text-white">
                  <Calculator className="h-6 w-6" />
                  <span>Calculator</span>
                </Button>
              </Link>
              
              <Link href="/blog">
                <Button variant="outline" className="w-full h-20 flex flex-col gap-2 hover:bg-primary hover:text-white">
                  <BookOpen className="h-6 w-6" />
                  <span>Blog</span>
                </Button>
              </Link>
              
              <Link href="/contact">
                <Button variant="outline" className="w-full h-20 flex flex-col gap-2 hover:bg-primary hover:text-white">
                  <Phone className="h-6 w-6" />
                  <span>Contact</span>
                </Button>
              </Link>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Căutați informații despre pensii?</h3>
              <p className="text-blue-700 mb-4">
                Explorați ghidurile noastre complete și calculatoarele avansate pentru planificarea pensiei.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/planificare-ghid">
                  <Button variant="default" size="sm">Ghid Planificare</Button>
                </Link>
                <Link href="/legea-pensiilor">
                  <Button variant="default" size="sm">Legislația Pensiilor</Button>
                </Link>
                <Link href="/faq">
                  <Button variant="default" size="sm">Întrebări Frecvente</Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

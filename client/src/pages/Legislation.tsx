import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function Legislation() {
  return (
    <>
      <SEOHead 
        title="Legea Pensiilor 2025 pe Înțelesul Tuturor | Legislație și Resurse"
        description="Înțelege pe deplin legislația actuală privind pensiile în România. Ghid complet cu explicații clare despre drepturile și obligațiile tale."
      />
      
      <div className="min-h-screen bg-neutral-50">
        <Header />
        
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-8">Legislație și Resurse</h1>
          <p className="text-xl text-neutral-600 mb-8">
            Această pagină va fi implementată cu conținut detaliat despre legislația pensiilor.
          </p>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

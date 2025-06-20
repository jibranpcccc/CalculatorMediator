import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";

export default function FAQ() {
  return (
    <>
      <SEOHead 
        title="Calculator Medie Facultate - Întrebări Frecvente despre Pensii România"
        description="Găsește răspunsuri la toate întrebările despre calculul pensiei, planificarea pensiei și legislația din România. Ghid complet FAQ."
        keywords="intrebari frecvente pensii, FAQ pensii romania, calculator pensie intrebari"
        canonicalUrl="https://calculatormediefacultate.com/faq"
        schemaType="website"
      />
      
      <div className="min-h-screen bg-neutral-50">
        <Header />
        
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">Întrebări Frecvente</h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Răspunsuri detaliate la cele mai comune întrebări despre calculul și planificarea pensiei în România
            </p>
          </div>

          <FAQSection 
            showCategories={true}
            title=""
          />
        </main>
        
        <Footer />
      </div>
    </>
  );
}
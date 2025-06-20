import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ArticleCard from "@/components/ArticleCard";
import { latestArticles } from "@/data/articles";

export default function Blog() {
  return (
    <>
      <SEOHead 
        title="Calculator Medie Facultate - Blog Ghiduri și Articole Pensii România"
        description="Calculator Medie Facultate - descoperă articole și ghiduri experte despre planificarea pensiei, legislația actuală și strategii pentru viitorul tău financiar."
        keywords="calculator medie facultate, blog pensii, ghiduri pensii, articole pensii romania"
        canonicalUrl="https://calculatormediefacultate.com/blog"
        schemaType="website"
      />
      
      <div className="min-h-screen bg-neutral-50">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">Blog</h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Articole și ghiduri experte pentru planificarea optimă a pensiei în România
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

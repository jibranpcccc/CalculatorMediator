import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ArticleCard from "@/components/ArticleCard";
import { useQuery } from "@tanstack/react-query";
import type { Article } from "@shared/schema";

export default function Blog() {
  const { data: articles, isLoading, error } = useQuery<Article[]>({
    queryKey: ['/api/articles'],
  });

  const formatDate = (dateString: string | Date | null) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('ro-RO', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  };

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

          {isLoading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 h-48 w-full rounded-t-lg mb-4"></div>
                  <div className="bg-gray-200 h-4 w-3/4 mb-2 rounded"></div>
                  <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
                </div>
              ))}
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-600">Eroare la încărcarea articolelor</p>
            </div>
          )}

          {articles && articles.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <ArticleCard 
                  key={article.id} 
                  title={article.title}
                  description={article.description}
                  category={article.category}
                  date={formatDate(article.createdAt)}
                  href={`/articol/${article.slug || article.id}`}
                  imageUrl={article.imageUrl || ''}
                />
              ))}
            </div>
          )}
        </main>
        
        <Footer />
      </div>
    </>
  );
}

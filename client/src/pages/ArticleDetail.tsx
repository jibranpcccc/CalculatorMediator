import { useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { Article } from "@shared/schema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";

export default function ArticleDetail() {
  const [match, params] = useRoute("/articol/:slug");
  const slug = params?.slug;

  const { data: article, isLoading, error } = useQuery<Article>({
    queryKey: ['/api/articles', slug],
    queryFn: async () => {
      const response = await fetch(`/api/articles/${slug}`);
      if (!response.ok) {
        throw new Error('Article not found');
      }
      return response.json();
    },
    enabled: !!slug,
  });

  const formatDate = (dateString: string | Date | null) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('ro-RO', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  const categoryColors = {
    "Planificare": "bg-primary text-primary-foreground",
    "Investiții": "bg-green-100 text-green-700",
    "Legislație": "bg-amber-100 text-amber-700",
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-neutral-50">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="bg-gray-200 h-8 w-3/4 mb-4 rounded"></div>
            <div className="bg-gray-200 h-4 w-1/2 mb-8 rounded"></div>
            <div className="bg-gray-200 h-96 w-full mb-8 rounded"></div>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="bg-gray-200 h-4 w-full rounded"></div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-neutral-50">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Articol nu a fost găsit</h1>
            <p className="text-gray-600 mb-8">Ne pare rău, articolul pe care îl căutați nu există.</p>
            <a href="/blog" className="text-primary hover:text-primary/80 font-medium">
              ← Înapoi la blog
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${article.title} - Calculator Medie Facultate`}
        description={article.description}
        keywords={`${article.category.toLowerCase()}, pensii romania, ${article.title.toLowerCase()}`}
        canonicalUrl={`https://calculatormediefacultate.com/articol/${article.slug}`}
        schemaType="article"
        articleData={{
          datePublished: article.createdAt?.toString(),
          dateModified: article.updatedAt?.toString(),
          author: "Calculator Medie Facultate",
          category: article.category,
        }}
      />
      
      <div className="min-h-screen bg-neutral-50">
        <Header />
        
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <article>
            {/* Article Header */}
            <header className="mb-8">
              <div className="mb-4">
                <Badge className={`${categoryColors[article.category as keyof typeof categoryColors] || 'bg-gray-100 text-gray-700'}`}>
                  {article.category}
                </Badge>
              </div>
              
              <h1 className="text-4xl font-bold text-neutral-900 mb-4 leading-tight">
                {article.title}
              </h1>
              
              <p className="text-xl text-neutral-600 mb-6 leading-relaxed">
                {article.description}
              </p>
              
              <div className="flex items-center gap-6 text-sm text-neutral-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(article.createdAt)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Calculator Medie Facultate</span>
                </div>
              </div>
            </header>

            {/* Article Image */}
            {article.imageUrl && (
              <div className="mb-8">
                <img 
                  src={article.imageUrl} 
                  alt={article.title}
                  className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            )}

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-neutral-900 prose-p:text-neutral-700 prose-a:text-primary prose-strong:text-neutral-900"
              dangerouslySetInnerHTML={{ 
                __html: article.content?.replace(/\n/g, '<br>').replace(/## /g, '<h2>').replace(/# /g, '<h1>') || ''
              }}
            />

            {/* Back to Blog Link */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <a href="/blog" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                ← Înapoi la toate articolele
              </a>
            </div>
          </article>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
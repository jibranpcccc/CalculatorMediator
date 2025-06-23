import { useRoute } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock } from "lucide-react";
import { Link } from "wouter";
import { getArticleBySlug } from "@/data/articleContent";

export default function ArticleDetail() {
  const [match, params] = useRoute("/articol/:slug");
  const slug = params?.slug;

  // Get article from static data instead of API
  const article = slug ? getArticleBySlug(slug) : undefined;
  const isLoading = false;
  const error = !article;

  const categoryColors = {
    "Ghiduri": "bg-orange-100 text-orange-700",
    "Educație": "bg-blue-100 text-blue-700",
    "Burse": "bg-green-100 text-green-700",
    "Clasificări": "bg-purple-100 text-purple-700",
    "ECTS": "bg-indigo-100 text-indigo-700",
    "Master": "bg-cyan-100 text-cyan-700",
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
        keywords={`${article.category.toLowerCase()}, calculator medie facultate, ${article.title.toLowerCase()}`}
        canonicalUrl={`https://calculatormediefacultate.com/articol/${article.slug}`}
        schemaType="article"
        articleData={{
          datePublished: article.date,
          dateModified: article.date,
          author: article.author,
          category: article.category,
        }}
      />
      
      <div className="min-h-screen bg-neutral-50">
        <Header />
        
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb />
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
              
              <div className="flex items-center gap-6 text-sm text-neutral-500 border-b border-neutral-200 pb-6">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime} citire</span>
                </div>
              </div>
            </header>

            {/* Article Image */}
            {article.imageUrl && (
              <div className="mb-8">
                <img 
                  src={article.imageUrl} 
                  alt={`Imagine principală pentru articolul: ${article.title}`}
                  className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg"
                  loading="lazy"
                  width="800"
                  height="320"
                />
              </div>
            )}

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-neutral-900 prose-p:text-neutral-700 prose-a:text-orange-600 prose-strong:text-neutral-900 prose-code:text-orange-600 prose-code:bg-orange-50 prose-code:px-1 prose-code:rounded"
              dangerouslySetInnerHTML={{ 
                __html: article.content || ''
              }}
            />

            {/* Back to Blog Link */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <Link href="/blog">
                <span className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors">
                  ← Citește mai multe articole educaționale
                </span>
              </Link>
            </div>
          </article>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
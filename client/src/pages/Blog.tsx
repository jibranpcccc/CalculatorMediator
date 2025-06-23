import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ArticleCard from "@/components/ArticleCard";
import Breadcrumb from "@/components/Breadcrumb";
import { getAllArticles } from "@/data/articleContent";

export default function Blog() {
  // Get articles from static data
  const articles = getAllArticles();

  return (
    <>
      <SEOHead 
        title="Blog Calculator Medie Facultate - Ghiduri și Articole Educaționale"
        description="Citește ghidurile noastre despre calculul mediei la facultate, sistemul ECTS, burse de studiu și clasificările academice în universitățile din România."
        keywords="calculator medie facultate, blog educație, ghiduri universitare, credite ECTS, burse studiu, medie ponderată"
        canonicalUrl="https://calculatormediefacultate.com/blog"
        schemaType="website"
      />
      
      {/* Blog Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Blog Calculator Medie Facultate",
            "description": "Ghiduri și articole educaționale despre calculul mediei la facultate, sistemul ECTS și universitățile din România",
            "url": "https://calculatormediefacultate.com/blog",
            "author": {
              "@type": "Organization",
              "name": "Calculator Medie Facultate"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Calculator Medie Facultate",
              "logo": {
                "@type": "ImageObject",
                "url": "https://calculatormediefacultate.com/images/logo.png"
              }
            },
            "blogPost": articles.map(article => ({
              "@type": "BlogPosting",
              "headline": article.title,
              "description": article.description,
              "url": `https://calculatormediefacultate.com/articol/${article.slug}`,
              "datePublished": article.date,
              "author": {
                "@type": "Organization",
                "name": article.author
              },
              "image": {
                "@type": "ImageObject",
                "url": `https://calculatormediefacultate.com${article.imageUrl}`
              },
              "articleSection": article.category
            }))
          })
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb />
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">Blog Educațional</h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Ghiduri complete și articole experte despre calculul mediei la facultate, 
              sistemul de credite ECTS și strategii pentru succesul academic în România
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard 
                key={article.id} 
                title={article.title}
                description={article.description}
                category={article.category}
                date={article.date}
                href={`/articol/${article.slug}`}
                imageUrl={article.imageUrl}
              />
            ))}
          </div>

          {/* Featured Content Section */}
          <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-8 text-neutral-900">
              De ce să citești ghidurile noastre?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="font-semibold mb-2">Informații Actualizate</h3>
                <p className="text-gray-600 text-sm">Conținut verificat și actualizat pentru anul academic 2024-2025</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="font-semibold mb-2">Exemple Practice</h3>
                <p className="text-gray-600 text-sm">Calculuri pas-cu-pas și exemple reale din universitățile românești</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="font-semibold mb-2">Verificat de Experți</h3>
                <p className="text-gray-600 text-sm">Toate informațiile sunt validate de specialiști în educația superioară</p>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

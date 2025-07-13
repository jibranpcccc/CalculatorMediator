import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, Shield, Clock, CheckCircle, ArrowRight, BookOpen, Route, List, Gavel, Users, Star, Phone, GraduationCap } from "lucide-react";
import { Link } from "wouter";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GradeCalculator from "@/components/GradeCalculator";
import TrustIndicators from "@/components/TrustIndicators";
import SiloSection from "@/components/SiloSection";
import ArticleCard from "@/components/ArticleCard";
import SEOHead from "@/components/SEOHead";
import { trackEvent } from "@/lib/analytics";
import { siloContent } from "@/data/siloContent";
import { getAllArticles } from "@/data/articleContent";

export default function Home() {
  // Get articles from static data
  const articles = getAllArticles().slice(0, 3); // Show first 3 articles
  const articlesLoading = false;

  // Initialize Ezoic ads when component mounts
  useEffect(() => {
    // Ensure ezstandalone is available and push the ad command
    if (window.ezstandalone && window.ezstandalone.cmd) {
      window.ezstandalone.cmd.push(function () {
        window.ezstandalone.showAds(101);
      });
    }
  }, []);

  return (
    <>
      <SEOHead 
        title="Calculator Medie Facultate - Calculează Media Generală Universitate Online"
        description="Calculator medie facultate gratuit - calculează media generală, media ponderată cu credite ECTS și clasificarea academică. Sistem de notare universitar românesc."
        keywords="calculator medie facultate, calcul medie universitate, medie ponderata credite, calculator note facultate, medie generala facultate, credite ECTS, sistem notare universitar"
        canonicalUrl="https://calculatormediefacultate.com"
        schemaType="calculator"
      />
      
      {/* Enhanced Calculator Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Calculator Medie Facultate",
            "description": "Calculator gratuit pentru calculul mediei la facultate cu credite ECTS și clasificări academice pentru universitățile din România",
            "url": "https://calculatormediefacultate.com",
            "applicationCategory": "EducationalApplication",
            "operatingSystem": "Web Browser",
            "browserRequirements": "Requires JavaScript. Requires HTML5.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "RON",
              "availability": "https://schema.org/InStock"
            },
            "featureList": [
              "Calculator medie generală",
              "Calculator medie ponderată cu credite ECTS", 
              "Clasificări academice automate",
              "Convertor note ECTS",
              "Calculator eligibilitate bursă"
            ],
            "about": {
              "@type": "Thing",
              "name": "Calculul mediei la facultate în România"
            },
            "creator": {
              "@type": "Organization",
              "name": "Calculator Medie Facultate",
              "url": "https://calculatormediefacultate.com"
            },
            "datePublished": "2025-01-01",
            "dateModified": "2025-01-23",
            "inLanguage": "ro-RO",
            "audience": {
              "@type": "Audience",
              "audienceType": "Studenți universitari români"
            }
          })
        }}
      />
      
      {/* FAQ Schema for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Cum se calculează media la facultate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Media la facultate se calculează prin două metode: media aritmetică simplă (toate notele au aceeași importanță) sau media ponderată cu credite ECTS (fiecare materie contează în funcție de numărul de credite)."
                }
              },
              {
                "@type": "Question", 
                "name": "Ce sunt creditele ECTS?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ECTS (European Credit Transfer System) este sistemul european de credite care măsoară încărcarea de lucru a studentului. Un credit ECTS reprezintă aproximativ 25-30 ore de lucru."
                }
              },
              {
                "@type": "Question",
                "name": "Ce înseamnă Summa Cum Laude?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Summa Cum Laude este cea mai înaltă distincție academică, acordată pentru media 10.00. Această clasificare demonstrează excelența academică excepțională."
                }
              }
            ]
          })
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 mobile-overflow-hidden safe-padding">
        <Header />
        
        <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Hero Section */}
          <section className="text-center mb-12 sm:mb-16 mt-4 sm:mt-6">
            <div className="mb-6 sm:mb-8">
              <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 text-blue-800 mb-6 sm:mb-8 shadow-lg border border-blue-200">
                <span className="mr-1.5 text-sm sm:text-base">🎓</span>
                <span className="hidden sm:inline">Cel mai precis calculator medie facultate din România</span>
                <span className="sm:hidden">Calculator #1 medie facultate</span>
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight px-2 sm:px-4">
              Calculator <span className="gradient-primary bg-clip-text text-transparent">Medie</span>
              <br className="block" />
              <span className="gradient-primary bg-clip-text text-transparent">Facultate</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-10 leading-relaxed font-medium px-4 sm:px-6">
              Calculează media generală și media ponderată cu credite ECTS în câteva secunde. 
              <span className="font-bold text-gray-800 block mt-1.5">Sistem universitar românesc - precis și rapid.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12 px-4 sm:px-6">
              <button 
                onClick={() => {
                  document.getElementById('calculator-section')?.scrollIntoView({ behavior: 'smooth' });
                  trackEvent('Button Click', 'Hero CTA - Calculate Grade');
                }}
                className="btn-modern px-5 sm:px-8 py-3 sm:py-4 rounded-xl text-white font-bold text-sm sm:text-base shadow-xl group w-full sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  <Calculator className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">Calculează Media Acum</span>
                  <span className="sm:hidden">Calculează Acum</span>
                </span>
              </button>
              <Link href="/blog">
                <button className="btn-secondary px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base group w-full sm:w-auto">
                  <span className="flex items-center justify-center gap-2">
                    <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                    <span className="hidden sm:inline">Ghid Note & Credite</span>
                    <span className="sm:hidden">Ghiduri</span>
                  </span>
                </button>
              </Link>
            </div>
            
            <TrustIndicators />
          </section>

          {/* Ezoic Ad Placement */}
          <section className="text-center mb-8 sm:mb-12">
            <div id="ezoic-pub-ad-placeholder-101"></div>
          </section>

          {/* Grade Calculator */}
          <section id="calculator-section" className="glass-effect rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-12 sm:mb-16 card-hover">
            <div className="text-center mb-6 sm:mb-8">
              <div className="icon-wrapper mx-auto mb-3 sm:mb-4 w-10 h-10 sm:w-12 sm:h-12">
                <Calculator className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-neutral-900 mb-2 sm:mb-3 px-2">
                Calculator Medie Facultate cu Credite ECTS
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-medium px-2">
                Introdu notele și creditele pentru calculul mediei generale și mediei ponderate
              </p>
            </div>
            
            <GradeCalculator />
          </section>

          {/* How to Calculate Section - SEO Content */}
          <section className="mb-12 sm:mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 text-center mb-8">
                Cum se calculează media la facultate în România
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Calculator className="mr-3 h-6 w-6 text-blue-600" />
                    Media Aritmetică Simplă
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Se calculează prin însumarea tuturor notelor și împărțirea la numărul de discipline:
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <code className="text-sm">Media = (Nota1 + Nota2 + ... + NotaN) / N</code>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Users className="mr-3 h-6 w-6 text-purple-600" />
                    Media Ponderată cu Credite ECTS
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Calculul oficial în sistemul universitar românesc, ținând cont de creditele fiecărei discipline:
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <code className="text-sm">Media = Σ(Nota × Credite) / Σ(Credite)</code>
                  </div>
                </Card>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-6 text-center">Sistemul de Notare Universitară Românesc</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">1-4</div>
                    <div className="text-sm text-gray-600">Respins</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">5-6</div>
                    <div className="text-sm text-gray-600">Suficient</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">7-8</div>
                    <div className="text-sm text-gray-600">Bine</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">9</div>
                    <div className="text-sm text-gray-600">Foarte Bine</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">10</div>
                    <div className="text-sm text-gray-600">Excelent</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Academic Tools Section */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-neutral-900 text-center mb-8 sm:mb-10 px-4 leading-tight">
              Instrumente Academice pentru Studenți
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              <Card className="card-hover border-0 shadow-xl bg-gradient-to-br from-white via-blue-50/25 to-indigo-50/30">
                <CardHeader className="text-center pb-6 sm:pb-8 p-6 sm:p-8">
                  <div className="icon-wrapper-alt bg-gradient-to-br from-blue-500 to-indigo-500 mx-auto mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16">
                    <Star className="text-white text-xl sm:text-2xl lg:text-3xl" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 leading-tight">Calculator Medie Bursă</CardTitle>
                  <CardDescription className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed px-2">
                    Verifică dacă îndeplinești condițiile de medie pentru obținerea bursei de studiu.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-0 px-4 sm:px-6 pb-6">
                  <Button className="btn-modern px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold group w-full sm:w-auto" asChild>
                    <Link href="/calculator-bursa">
                      <span className="flex items-center justify-center gap-2">
                        <span className="hidden sm:inline">Verifică eligibilitatea</span>
                        <span className="sm:hidden">Verifică</span>
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="card-hover border-0 shadow-xl bg-gradient-to-br from-white via-green-50/25 to-emerald-50/30">
                <CardHeader className="text-center pb-4 sm:pb-6 p-4 sm:p-6">
                  <div className="icon-wrapper-alt bg-gradient-to-br from-green-500 to-emerald-500 mx-auto mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16">
                    <BookOpen className="text-white text-xl sm:text-2xl lg:text-3xl" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 leading-tight">Convertor Note ECTS</CardTitle>
                  <CardDescription className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed px-2">
                    Convertește notele române în sistemul european ECTS și invers pentru mobilități.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-0 px-4 sm:px-6 pb-6">
                  <Button className="btn-modern px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold group w-full sm:w-auto" asChild>
                    <Link href="/convertor-ects">
                      <span className="flex items-center justify-center gap-2">
                        <span className="hidden sm:inline">Convertește note</span>
                        <span className="sm:hidden">Convertește</span>
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="card-hover border-0 shadow-xl bg-gradient-to-br from-white via-purple-50/25 to-violet-50/30 md:col-span-2 xl:col-span-1">
                <CardHeader className="text-center pb-4 sm:pb-6 p-4 sm:p-6">
                  <div className="icon-wrapper-alt bg-gradient-to-br from-purple-500 to-violet-500 mx-auto mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16">
                    <Star className="text-white text-xl sm:text-2xl lg:text-3xl" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 leading-tight">Calculator Admitere Master</CardTitle>
                  <CardDescription className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed px-2">
                    Calculează media de admitere la masterat pe baza mediei de licență și notei la examen.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-0 px-4 sm:px-6 pb-6">
                  <Button className="btn-modern px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold group w-full sm:w-auto" asChild>
                    <Link href="/calculator-master">
                      <span className="flex items-center justify-center gap-2">
                        <span className="hidden sm:inline">Calculează admitere</span>
                        <span className="sm:hidden">Calculează</span>
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ Section - Essential for SEO */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">
                Întrebări Frecvente despre Calculul Mediei la Facultate
              </h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-3">Ce este media ponderată cu credite ECTS?</h3>
                  <p className="text-gray-600">
                    Media ponderată cu credite ECTS este calculul oficial folosit în sistemul universitar românesc. 
                    Fiecare disciplină are un număr de credite ECTS care reflectă importanța și volumul de muncă. 
                    Media se calculează multiplicând nota cu creditele pentru fiecare disciplină, apoi împărțind suma totală la numărul total de credite.
                  </p>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-3">Cum se calculează media pentru bursă la facultate?</h3>
                  <p className="text-gray-600">
                    Pentru bursa de studiu se folosește media ponderată cu credite ECTS din anul anterior sau semestrul precedent. 
                    Criteriile variază între universități, dar în general este necesară o medie minimă de 8.00-8.50 pentru bursa de merit. 
                    Consultă regulamentul specific al universității tale pentru detalii exacte.
                  </p>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-3">Ce diferență este între media aritmetică și cea ponderată?</h3>
                  <p className="text-gray-600">
                    Media aritmetică se calculează prin însumarea notelor împărțită la numărul de discipline, fără să țină cont de credite. 
                    Media ponderată consideră creditele ECTS, dând mai multă importanță disciplinelor cu mai multe credite. 
                    Media ponderată este cea oficială pentru toate procedurile administrative universitare.
                  </p>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-3">Cum convertesc notele pentru mobilitate Erasmus?</h3>
                  <p className="text-gray-600">
                    Pentru mobilități Erasmus, notele românești (1-10) se convertesc în sistemul ECTS (A, B, C, D, E, F). 
                    Conversiile standard: 10 = A (Excelent), 9 = B (Foarte bine), 8 = C (Bine), 7 = D (Satisfăcător), 6 = E (Suficient), sub 6 = F (Respins). 
                    Fiecare universitate poate avea propriile echivalențe specifice.
                  </p>
                </Card>
              </div>
            </div>
          </section>

          {/* Academic Resources Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">
              Resurse Academice pentru Studenți
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <BookOpen className="mx-auto mb-4 h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold mb-3">Ghid Sistem Universitar</h3>
                <p className="text-gray-600 mb-4">
                  Înțelege sistemul de credite ECTS, clasificările academice și procedurile universitare din România.
                </p>
                <Link href="/ghid-universitar">
                  <Button className="w-full">Citește Ghidul</Button>
                </Link>
              </Card>
              
              <Card className="p-6 text-center">
                <Calculator className="mx-auto mb-4 h-12 w-12 text-green-600" />
                <h3 className="text-xl font-bold mb-3">Exemple Calcule</h3>
                <p className="text-gray-600 mb-4">
                  Vezi exemple practice de calcul al mediei pentru diferite situații academice și specializări.
                </p>
                <Link href="/exemple-calcule">
                  <Button className="w-full">Vezi Exemple</Button>
                </Link>
              </Card>
              
              <Card className="p-6 text-center">
                <Users className="mx-auto mb-4 h-12 w-12 text-purple-600" />
                <h3 className="text-xl font-bold mb-3">Suport Student</h3>
                <p className="text-gray-600 mb-4">
                  Ai întrebări despre calculul mediei? Contactează echipa noastră de specialiști academici.
                </p>
                <Link href="/contact">
                  <Button className="w-full">Contactează-ne</Button>
                </Link>
              </Card>
            </div>
          </section>

          {/* Latest Articles Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">
              Ultimele Articole de pe Blog
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articlesLoading && (
                <>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="animate-pulse">
                      <div className="bg-gray-200 h-48 w-full rounded-t-lg mb-4"></div>
                      <div className="bg-gray-200 h-4 w-3/4 mb-2 rounded"></div>
                      <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
                    </div>
                  ))}
                </>
              )}
              {articles && articles.length > 0 && (
                <>
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
                </>
              )}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/blog">
                <Button size="lg" className="inline-flex items-center">
                  Vezi toate articolele <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </section>

          {/* Trust and Authority Section */}
          <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                De ce să ne alegi pentru calculul mediei la facultate?
              </h2>
              <p className="text-xl text-neutral-700 mb-12">
                Suntem resursa de încredere pentru mii de studenți români care își calculează media universitară
              </p>
              
              <div className="grid md:grid-cols-4 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">25,000+</div>
                  <div className="text-neutral-700">Calcule medii efectuate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-neutral-700">Precizie ECTS</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-neutral-700">Disponibilitate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2025</div>
                  <div className="text-neutral-700">Sistem actualizat</div>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-8 text-neutral-600">
                <div className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2" />
                  <span>Conform ECTS oficial</span>
                </div>
                <div className="flex items-center">
                  <Shield className="text-blue-600 mr-2" />
                  <span>Date securizate SSL</span>
                </div>
                <div className="flex items-center">
                  <Clock className="text-blue-600 mr-2" />
                  <span>Calcul instant</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-blue-600 mr-2" />
                  <span>Suport expert</span>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="bg-gradient-to-br from-orange-600 via-red-600 to-orange-800 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-20 text-center text-white shadow-2xl mx-2 sm:mx-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black mb-4 sm:mb-6 lg:mb-8 leading-tight">Calculează-ți media la facultate astăzi!</h2>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/90 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto font-medium leading-relaxed px-4">
              Nu lăsa rezultatele la voia întâmplării. Folosește calculatorul nostru și ghidurile experte pentru a-ți optimiza performanțele academice.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center px-6 sm:px-8">
              <Button 
                size="lg" 
                className="btn-secondary px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-2xl sm:rounded-3xl font-black text-base sm:text-lg lg:text-xl group w-full sm:w-auto bg-[#f97415]"
                onClick={() => {
                  trackEvent('cta_click', 'user_interaction', 'calculator');
                  document.getElementById('calculator-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="flex items-center justify-center gap-2 sm:gap-3">
                  <Calculator className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">Calculează Media</span>
                  <span className="sm:hidden">Calculează</span>
                </span>
              </Button>
              <Link href="/blog">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-2xl sm:rounded-3xl font-black text-base sm:text-lg lg:text-xl border-2 sm:border-4 border-white bg-white text-orange-700 hover:bg-orange-100 transition-all duration-300 group w-full sm:w-auto"
                  onClick={() => trackEvent('cta_click', 'user_interaction', 'guides')}
                >
                  <span className="flex items-center justify-center gap-2 sm:gap-3">
                    <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
                    <span className="hidden sm:inline">Citește Ghidurile</span>
                    <span className="sm:hidden">Ghiduri</span>
                  </span>
                </Button>
              </Link>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

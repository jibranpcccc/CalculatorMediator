import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, Shield, Clock, CheckCircle, ArrowRight, BookOpen, Route, List, Gavel, Users, Star, Phone } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PensionCalculator from "@/components/PensionCalculator";
import TrustIndicators from "@/components/TrustIndicators";
import SiloSection from "@/components/SiloSection";
import ArticleCard from "@/components/ArticleCard";
import SEOHead from "@/components/SEOHead";
import { trackEvent } from "@/lib/analytics";
import { siloContent } from "@/data/siloContent";
import { latestArticles } from "@/data/articles";

export default function Home() {
  return (
    <>
      <SEOHead 
        title="Calculator Pensie 2025 - Calculează Online Pensia Rapid și Corect | calculatormediefacultate.ro"
        description="Folosește cel mai precis calculator de pensie online pentru a-ți estima venitul la bătrânețe. Planifică-ți viitorul financiar cu instrumentele și ghidurile noastre complete."
        keywords="calculator pensie, calcul pensie, simulator pensie online, pensia mea, calculatormediefacultate.ro"
        canonicalUrl="https://calculatormediefacultate.com"
      />
      
      <div className="min-h-screen bg-neutral-50">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Calculator Pensie Online: <br />
              <span className="text-primary">Află Pensia Ta în Câteva Secunde</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
              Folosește cel mai precis calculator de pensie din România pentru a-ți estima venitul la bătrânețe. 
              Planifică-ți viitorul financiar cu instrumentele și ghidurile noastre complete.
            </p>
            
            <TrustIndicators />
          </section>

          {/* Main Pension Calculator */}
          <section className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-neutral-900 flex items-center justify-center gap-3">
                <Calculator className="text-primary" />
                Calculator Principal de Pensie
              </h2>
            </div>
            
            <PensionCalculator />
          </section>

          {/* Tools and Resources Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">
              Planifică-ți Viitorul: Unelte și Resurse Esențiale
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="text-primary text-2xl" />
                  </div>
                  <CardTitle>Calculator Pensie Anticipată</CardTitle>
                  <CardDescription>
                    Calculează penalizările și estimează pensia ta dacă alegi să te pensionezi anticipat.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" className="inline-flex items-center">
                    Calculează acum <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-green-600 text-2xl" />
                  </div>
                  <CardTitle>Calculator Pilon III</CardTitle>
                  <CardDescription>
                    Estimează beneficiile unei pensii private și planifică contribuțiile optime.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" className="inline-flex items-center">
                    Calculează acum <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="text-amber-600 text-2xl" />
                  </div>
                  <CardTitle>Planificator Financiar</CardTitle>
                  <CardDescription>
                    Creează o strategie completă pentru o pensie liniștită și independența financiară.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" className="inline-flex items-center">
                    Începe planificarea <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Knowledge Hub Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">
              Învață Totul Despre Sistemul de Pensii din România
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {siloContent.map((silo, index) => (
                <SiloSection key={index} {...silo} />
              ))}
            </div>
          </section>

          {/* Latest Articles Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">
              Ultimele Articole de pe Blog
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestArticles.map((article, index) => (
                <ArticleCard key={index} {...article} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" className="inline-flex items-center">
                Vezi toate articolele <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </section>

          {/* Trust and Authority Section */}
          <section className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-12 mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                De ce să ne alegi pentru planificarea pensiei?
              </h2>
              <p className="text-xl text-neutral-700 mb-12">
                Suntem resursa de încredere pentru mii de români care își planifică viitorul financiar
              </p>
              
              <div className="grid md:grid-cols-4 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
                  <div className="text-neutral-700">Calcule efectuate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-neutral-700">Precizie calcule</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-neutral-700">Disponibilitate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2025</div>
                  <div className="text-neutral-700">Legislație actualizată</div>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-8 text-neutral-600">
                <div className="flex items-center">
                  <CheckCircle className="text-primary mr-2" />
                  <span>Validat de experți</span>
                </div>
                <div className="flex items-center">
                  <Shield className="text-primary mr-2" />
                  <span>Date securizate SSL</span>
                </div>
                <div className="flex items-center">
                  <Clock className="text-primary mr-2" />
                  <span>Actualizat în timp real</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-primary mr-2" />
                  <span>Suport expert</span>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="bg-primary rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Începe să-ți planifici pensia astăzi!</h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Nu lăsa viitorul la voia întâmplării. Folosește calculatoarele noastre și ghidurile experte pentru a-ți asigura o pensie liniștită.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="inline-flex items-center"
                onClick={() => trackEvent('cta_click', { type: 'calculator' })}
              >
                <Calculator className="mr-2 h-5 w-5" />
                Calculează Pensia
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="inline-flex items-center border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => trackEvent('cta_click', { type: 'guides' })}
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Citește Ghidurile
              </Button>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

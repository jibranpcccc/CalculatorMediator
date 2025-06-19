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
        title="Calculator Medie Facultate - Calculator Pensie România Online 2025"
        description="Calculator Medie Facultate - cel mai precis calculator de pensie online pentru România. Calculează pensia ta în câteva secunde cu instrumentele noastre profesionale."
        keywords="calculator medie facultate, calculator pensie, calcul pensie, simulator pensie online, pensia mea"
        canonicalUrl="https://calculatormediefacultate.com"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <section className="text-center mb-24">
            <div className="mb-12">
              <span className="inline-flex items-center px-8 py-4 rounded-full text-base font-black bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 text-purple-800 mb-8 shadow-xl border border-purple-200">
                <span className="mr-2 text-xl">⭐</span>
                Cel mai precis calculator de pensie din România
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-12 tracking-tight leading-tight">
              Calculator <span className="gradient-primary bg-clip-text text-transparent">Medie</span>
              <br className="hidden sm:block" />
              <span className="gradient-primary bg-clip-text text-transparent">Facultate</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 max-w-5xl mx-auto mb-16 leading-relaxed font-medium">
              Calculează pensia ta în câteva secunde cu cel mai avansat instrument de planificare financiară. 
              <span className="font-bold text-gray-800 block mt-2">Profesional, rapid și 100% precis.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button className="btn-modern px-12 py-6 rounded-3xl text-white font-black text-xl shadow-2xl group">
                <span className="flex items-center justify-center gap-3">
                  <Calculator className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  Calculează Pensia Acum
                </span>
              </button>
              <button className="btn-secondary px-12 py-6 rounded-3xl font-black text-xl group">
                <span className="flex items-center justify-center gap-3">
                  <BookOpen className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  Ghiduri Complete
                </span>
              </button>
            </div>
            
            <TrustIndicators />
          </section>

          {/* Main Pension Calculator */}
          <section className="glass-effect rounded-3xl shadow-modern-lg p-12 mb-24 card-hover">
            <div className="text-center mb-12">
              <div className="icon-wrapper mx-auto mb-6">
                <Calculator className="h-8 w-8" />
              </div>
              <h2 className="text-4xl font-black text-neutral-900 mb-4">
                Calculator Principal de Pensie
              </h2>
              <p className="text-lg text-gray-600 font-medium">
                Introdu datele tale pentru un calcul precis și instant
              </p>
            </div>
            
            <PensionCalculator />
          </section>

          {/* Tools and Resources Section */}
          <section className="mb-20">
            <h2 className="text-5xl font-black text-neutral-900 text-center mb-16">
              Planifică-ți Viitorul: Unelte și Resurse Esențiale
            </h2>
            
            <div className="grid md:grid-cols-3 gap-10">
              <Card className="card-hover border-0 shadow-xl bg-gradient-to-br from-white via-purple-50/20 to-blue-50/30">
                <CardHeader className="text-center pb-6">
                  <div className="icon-wrapper-alt bg-gradient-to-br from-purple-500 to-pink-500 mx-auto mb-6">
                    <Clock className="text-white text-3xl" />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-4">Calculator Pensie Anticipată</CardTitle>
                  <CardDescription className="text-lg text-gray-600 leading-relaxed">
                    Calculează penalizările și estimează pensia ta dacă alegi să te pensionezi anticipat.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <Button className="btn-modern px-8 py-4 rounded-2xl font-bold group">
                    <span className="flex items-center gap-2">
                      Calculează acum 
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="card-hover border-0 shadow-xl bg-gradient-to-br from-white via-blue-50/20 to-cyan-50/30">
                <CardHeader className="text-center pb-6">
                  <div className="icon-wrapper-alt bg-gradient-to-br from-blue-500 to-cyan-500 mx-auto mb-6">
                    <Users className="text-white text-3xl" />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-4">Calculator Pilon III</CardTitle>
                  <CardDescription className="text-lg text-gray-600 leading-relaxed">
                    Estimează beneficiile unei pensii private și planifică contribuțiile optime.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <Button className="btn-modern px-8 py-4 rounded-2xl font-bold group">
                    <span className="flex items-center gap-2">
                      Calculează acum 
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="card-hover border-0 shadow-xl bg-gradient-to-br from-white via-yellow-50/20 to-orange-50/30">
                <CardHeader className="text-center pb-6">
                  <div className="icon-wrapper-alt bg-gradient-to-br from-yellow-500 to-orange-500 mx-auto mb-6">
                    <Star className="text-white text-3xl" />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-4">Planificator Financiar</CardTitle>
                  <CardDescription className="text-lg text-gray-600 leading-relaxed">
                    Creează o strategie completă pentru o pensie liniștită și independența financiară.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <Button className="btn-modern px-8 py-4 rounded-2xl font-bold group">
                    <span className="flex items-center gap-2">
                      Începe planificarea 
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
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
          <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-blue-700 rounded-3xl p-16 text-center text-white shadow-2xl">
            <h2 className="text-5xl font-black mb-8">Începe să-ți planifici pensia astăzi!</h2>
            <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
              Nu lăsa viitorul la voia întâmplării. Folosește calculatoarele noastre și ghidurile experte pentru a-ți asigura o pensie liniștită.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="btn-secondary px-12 py-6 rounded-3xl font-black text-xl group"
                onClick={() => trackEvent('cta_click', 'user_interaction', 'calculator')}
              >
                <span className="flex items-center gap-3">
                  <Calculator className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  Calculează Pensia
                </span>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-12 py-6 rounded-3xl font-black text-xl border-4 border-white text-white hover:bg-white hover:text-blue-700 transition-all duration-300 group"
                onClick={() => trackEvent('cta_click', 'user_interaction', 'guides')}
              >
                <span className="flex items-center gap-3">
                  <BookOpen className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  Citește Ghidurile
                </span>
              </Button>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

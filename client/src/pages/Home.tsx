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
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 mobile-overflow-hidden safe-padding">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Hero Section */}
          <section className="text-center mb-12 sm:mb-16 mt-4 sm:mt-6">
            <div className="mb-6 sm:mb-8">
              <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-orange-100 via-amber-100 to-yellow-100 text-orange-800 mb-6 sm:mb-8 shadow-lg border border-orange-200">
                <span className="mr-1.5 text-sm sm:text-base">⭐</span>
                <span className="hidden sm:inline">Cel mai precis calculator de pensie din România</span>
                <span className="sm:hidden">Calculator #1 din România</span>
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight px-2 sm:px-4">
              Calculator <span className="gradient-primary bg-clip-text text-transparent">Medie</span>
              <br className="block" />
              <span className="gradient-primary bg-clip-text text-transparent">Facultate</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-10 leading-relaxed font-medium px-4 sm:px-6">
              Calculează pensia ta în câteva secunde cu cel mai avansat instrument de planificare financiară. 
              <span className="font-bold text-gray-800 block mt-1.5">Profesional, rapid și 100% precis.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12 px-4 sm:px-6">
              <button className="btn-modern px-5 sm:px-8 py-3 sm:py-4 rounded-xl text-white font-bold text-sm sm:text-base shadow-xl group w-full sm:w-auto">
                <span className="flex items-center justify-center gap-2">
                  <Calculator className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">Calculează Pensia Acum</span>
                  <span className="sm:hidden">Calculează Acum</span>
                </span>
              </button>
              <button className="btn-secondary px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base group w-full sm:w-auto">
                <span className="flex items-center justify-center gap-2">
                  <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">Ghiduri Complete</span>
                  <span className="sm:hidden">Ghiduri</span>
                </span>
              </button>
            </div>
            
            <TrustIndicators />
          </section>

          {/* Main Pension Calculator */}
          <section className="glass-effect rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-12 sm:mb-16 card-hover">
            <div className="text-center mb-6 sm:mb-8">
              <div className="icon-wrapper mx-auto mb-3 sm:mb-4 w-10 h-10 sm:w-12 sm:h-12">
                <Calculator className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-neutral-900 mb-2 sm:mb-3 px-2">
                Calculator Principal de Pensie
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-medium px-2">
                Introdu datele tale pentru un calcul precis și instant
              </p>
            </div>
            
            <PensionCalculator />
          </section>

          {/* Tools and Resources Section */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-neutral-900 text-center mb-8 sm:mb-10 px-4 leading-tight">
              Planifică-ți Viitorul: Unelte și Resurse Esențiale
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              <Card className="card-hover border-0 shadow-xl bg-gradient-to-br from-white via-orange-50/25 to-red-50/30">
                <CardHeader className="text-center pb-6 sm:pb-8 p-6 sm:p-8">
                  <div className="icon-wrapper-alt bg-gradient-to-br from-orange-500 to-red-500 mx-auto mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16">
                    <Clock className="text-white text-xl sm:text-2xl lg:text-3xl" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 leading-tight">Calculator Pensie Anticipată</CardTitle>
                  <CardDescription className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed px-2">
                    Calculează penalizările și estimează pensia ta dacă alegi să te pensionezi anticipat.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-0 px-4 sm:px-6 pb-6">
                  <Button className="btn-modern px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold group w-full sm:w-auto">
                    <span className="flex items-center justify-center gap-2">
                      <span className="hidden sm:inline">Calculează acum</span>
                      <span className="sm:hidden">Calculează</span>
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="card-hover border-0 shadow-xl bg-gradient-to-br from-white via-emerald-50/25 to-teal-50/30">
                <CardHeader className="text-center pb-4 sm:pb-6 p-4 sm:p-6">
                  <div className="icon-wrapper-alt bg-gradient-to-br from-emerald-500 to-teal-500 mx-auto mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16">
                    <Users className="text-white text-xl sm:text-2xl lg:text-3xl" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 leading-tight">Calculator Pilon III</CardTitle>
                  <CardDescription className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed px-2">
                    Estimează beneficiile unei pensii private și planifică contribuțiile optime.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-0 px-4 sm:px-6 pb-6">
                  <Button className="btn-modern px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold group w-full sm:w-auto">
                    <span className="flex items-center justify-center gap-2">
                      <span className="hidden sm:inline">Calculează acum</span>
                      <span className="sm:hidden">Calculează</span>
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="card-hover border-0 shadow-xl bg-gradient-to-br from-white via-blue-50/25 to-indigo-50/30 md:col-span-2 xl:col-span-1">
                <CardHeader className="text-center pb-4 sm:pb-6 p-4 sm:p-6">
                  <div className="icon-wrapper-alt bg-gradient-to-br from-blue-500 to-indigo-500 mx-auto mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16">
                    <Star className="text-white text-xl sm:text-2xl lg:text-3xl" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 leading-tight">Planificator Financiar</CardTitle>
                  <CardDescription className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed px-2">
                    Creează o strategie completă pentru o pensie liniștită și independența financiară.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-0 px-4 sm:px-6 pb-6">
                  <Button className="btn-modern px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold group w-full sm:w-auto">
                    <span className="flex items-center justify-center gap-2">
                      <span className="hidden sm:inline">Începe planificarea</span>
                      <span className="sm:hidden">Planifică</span>
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
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
          <section className="bg-gradient-to-br from-orange-600 via-red-600 to-orange-800 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-20 text-center text-white shadow-2xl mx-2 sm:mx-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black mb-4 sm:mb-6 lg:mb-8 leading-tight">Începe să-ți planifici pensia astăzi!</h2>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/90 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto font-medium leading-relaxed px-4">
              Nu lăsa viitorul la voia întâmplării. Folosește calculatoarele noastre și ghidurile experte pentru a-ți asigura o pensie liniștită.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center px-6 sm:px-8">
              <Button 
                size="lg" 
                className="btn-secondary px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-2xl sm:rounded-3xl font-black text-base sm:text-lg lg:text-xl group w-full sm:w-auto"
                onClick={() => trackEvent('cta_click', 'user_interaction', 'calculator')}
              >
                <span className="flex items-center justify-center gap-2 sm:gap-3">
                  <Calculator className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">Calculează Pensia</span>
                  <span className="sm:hidden">Calculează</span>
                </span>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-2xl sm:rounded-3xl font-black text-base sm:text-lg lg:text-xl border-2 sm:border-4 border-white text-white hover:bg-white hover:text-orange-700 transition-all duration-300 group w-full sm:w-auto"
                onClick={() => trackEvent('cta_click', 'user_interaction', 'guides')}
              >
                <span className="flex items-center justify-center gap-2 sm:gap-3">
                  <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">Citește Ghidurile</span>
                  <span className="sm:hidden">Ghiduri</span>
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

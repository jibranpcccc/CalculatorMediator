import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Clock, Heart, Shield, Calculator } from "lucide-react";

export default function TipuriPensiiGhid() {
  return (
    <>
      <SEOHead 
        title="Ghid Tipuri de Pensii România - Calculator Medie Facultate"
        description="Ghid complet despre tipurile de pensii din România: pensia pentru limită de vârstă, anticipată, de urmaș și de invaliditate. Calculează-ți pensia acum."
        keywords="tipuri pensii romania, pensie limita varsta, pensie anticipata, pensie urmas, pensie invaliditate"
        canonicalUrl="https://calculatormediefacultate.com/tipuri-pensii-ghid"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <section className="text-center mb-12 sm:mb-16 mt-4 sm:mt-6">
            <div className="mb-6 sm:mb-8">
              <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-100 via-orange-100 to-red-100 text-amber-800 mb-6 sm:mb-8 shadow-lg border border-amber-200">
                <BookOpen className="mr-1.5 h-4 w-4" />
                Ghid Complet Tipuri de Pensii
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight px-2 sm:px-4">
              Tipurile de <span className="gradient-primary bg-clip-text text-transparent">Pensii</span>
              <br className="block" />
              <span className="gradient-primary bg-clip-text text-transparent">din România</span>
            </h1>
          </section>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Pensia pentru Limită de Vârstă",
                icon: <Clock className="h-6 w-6" />,
                color: "blue",
                description: "Pensia standard acordată la vârsta legală de pensionare",
                details: {
                  varsta: "65 ani (bărbați), 63 ani (femei)",
                  stagiu: "Minim 15 ani de cotizare",
                  calcul: "Bazat pe punctele de pensie acumulate",
                  beneficii: ["Pensia cea mai avantajoasă", "Fără penalizări", "Indexare anuală"]
                }
              },
              {
                title: "Pensia Anticipată",
                icon: <Users className="h-6 w-6" />,
                color: "orange",
                description: "Pensionare înainte de vârsta standard cu anumite condiții",
                details: {
                  varsta: "Cu 5 ani mai devreme (condiții speciale)",
                  stagiu: "Minim 30-35 ani de cotizare",
                  calcul: "Cu penalizări de 0.75% pe lună",
                  beneficii: ["Pensionare mai devreme", "Flexibilitate", "Pentru munci grele"]
                }
              },
              {
                title: "Pensia de Urmaș",
                icon: <Heart className="h-6 w-6" />,
                color: "red",
                description: "Acordată urmașilor unei persoane decedate",
                details: {
                  varsta: "Fără limită de vârstă",
                  stagiu: "Defunctul trebuie să fi avut 15 ani cotizare",
                  calcul: "50-75% din pensia defunctului",
                  beneficii: ["Protecție familială", "Venit garantat", "Pentru copii și soți"]
                }
              },
              {
                title: "Pensia de Invaliditate",
                icon: <Shield className="h-6 w-6" />,
                color: "purple",
                description: "Pentru persoanele cu capacitate de muncă diminuată",
                details: {
                  varsta: "Orice vârstă",
                  stagiu: "Variabil în funcție de vârstă",
                  calcul: "Bazat pe gradul de invaliditate",
                  beneficii: ["Protecție socială", "Asistență medicală", "Indemnizații"]
                }
              }
            ].map((pension, index) => (
              <Card key={index} className="border-0 shadow-xl bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-${pension.color}-100 text-${pension.color}-600`}>
                      {pension.icon}
                    </div>
                    {pension.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm">{pension.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-700">Vârsta:</span>
                        <span className="text-sm font-bold text-gray-900">{pension.details.varsta}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-700">Stagiu:</span>
                        <span className="text-sm font-bold text-gray-900">{pension.details.stagiu}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-700">Calcul:</span>
                        <span className="text-sm font-bold text-gray-900">{pension.details.calcul}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Beneficii principale:</h4>
                      <ul className="space-y-1">
                        {pension.details.beneficii.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Comparison Table */}
          <Card className="border-0 shadow-xl bg-white mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                Comparație Rapidă
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Tip Pensie</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Vârsta Minimă</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Stagiu Minim</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Penalizări</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Limită de vârstă", "65/63 ani", "15 ani", "Nu"],
                      ["Anticipată", "60/58 ani", "30-35 ani", "Da (0.75%/lună)"],
                      ["Urmaș", "Fără limită", "15 ani (defunct)", "Nu"],
                      ["Invaliditate", "Fără limită", "Variabil", "Nu"]
                    ].map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="py-3 px-4 font-medium text-gray-900">{row[0]}</td>
                        <td className="py-3 px-4 text-center text-gray-700">{row[1]}</td>
                        <td className="py-3 px-4 text-center text-gray-700">{row[2]}</td>
                        <td className="py-3 px-4 text-center text-gray-700">{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-xl">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                <Calculator className="h-8 w-8" />
                Calculează-ți Pensia
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Afla exact ce pensie vei primi în funcție de tipul de pensionare ales
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/" 
                  className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-blue-50 transition-colors"
                >
                  Calculator Standard
                </a>
                <a 
                  href="/calculator-anticipata" 
                  className="inline-block bg-orange-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-orange-600 transition-colors"
                >
                  Calculator Anticipată
                </a>
              </div>
            </CardContent>
          </Card>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Calculator, CheckCircle, BookOpen, Target } from "lucide-react";

export default function GhidCalculMediae() {
  return (
    <>
      <SEOHead 
        title="Ghid Calcul Medie Facultate - Cum să Calculezi Media la Universitate"
        description="Ghid complet pentru calculul mediei la facultate în România. Învață să calculezi media generală, media ponderată cu credite ECTS și clasificările academice."
        keywords="ghid calcul medie facultate, medie generala, medie ponderata, credite ECTS, clasificare academica"
        canonicalUrl="https://calculatormediefacultate.com/ghid-calcul-medie"
        schemaType="article"
        articleData={{
          datePublished: "2025-01-20",
          dateModified: "2025-01-23",
          author: "Calculator Medie Facultate",
          category: "Ghiduri Educaționale"
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Cum să calculezi media la facultate",
            "description": "Ghid pas cu pas pentru calculul mediei generale și mediei ponderate cu credite ECTS în universitățile din România",
            "image": "https://calculatormediefacultate.com/images/guide-grade-calculation.svg",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Calculează media aritmetică simplă",
                "text": "Adună toate notele și împarte la numărul de discipline",
                "image": "https://calculatormediefacultate.com/images/guide-grade-calculation.svg"
              },
              {
                "@type": "HowToStep", 
                "name": "Calculează media ponderată cu credite ECTS",
                "text": "Folosește formula: Σ(Nota × Credite) / Σ(Credite)",
                "image": "https://calculatormediefacultate.com/images/guide-grade-calculation.svg"
              },
              {
                "@type": "HowToStep",
                "name": "Determină clasificarea academică",
                "text": "Verifică în ce categorie se încadrează media ta: Summa Cum Laude (10.00), Magna Cum Laude (9.50-9.99), etc.",
                "image": "https://calculatormediefacultate.com/images/academic-classification.svg"
              }
            ]
          })
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <Header />
        
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
              <Calculator className="h-8 w-8 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Ghid Complet: Calculul Mediei la Facultate
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Totul despre calculul mediei în universitățile din România - de la media simplă la media ponderată cu credite ECTS
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Target className="mr-3 h-6 w-6 text-orange-600" />
              Tipuri de Medii în Sistemul Universitar Românesc
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-orange-600">Media Aritmetică Simplă</h3>
                <p className="mb-4">Calculul cel mai simplu - toate notele au aceeași importanță:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <code className="text-sm">Media = (Nota1 + Nota2 + ... + NotaN) / N</code>
                </div>
                <div className="mt-4">
                  <p className="font-semibold">Exemplu:</p>
                  <p>Note: 8, 9, 7, 10</p>
                  <p>Media = (8 + 9 + 7 + 10) / 4 = 8.50</p>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-orange-600">Media Ponderată cu Credite ECTS</h3>
                <p className="mb-4">Fiecare materie are importanța corespunzătoare creditelor:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <code className="text-sm">Media = Σ(Nota × Credite) / Σ(Credite)</code>
                </div>
                <div className="mt-4">
                  <p className="font-semibold">Exemplu:</p>
                  <p>Matematică: 9 (6 credite)</p>
                  <p>Fizică: 8 (4 credite)</p>
                  <p>Media = (9×6 + 8×4) / (6+4) = 8.6</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <BookOpen className="mr-3 h-6 w-6 text-orange-600" />
              Clasificările Academice în România
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-orange-50">
                    <th className="border p-3 text-left">Clasificarea</th>
                    <th className="border p-3 text-left">Media Necesară</th>
                    <th className="border p-3 text-left">Descriere</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3 font-semibold">Summa Cum Laude</td>
                    <td className="border p-3">10.00</td>
                    <td className="border p-3">Cea mai înaltă distincție academică</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-semibold">Magna Cum Laude</td>
                    <td className="border p-3">9.50 - 9.99</td>
                    <td className="border p-3">Distincție academică foarte mare</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-semibold">Cum Laude</td>
                    <td className="border p-3">9.00 - 9.49</td>
                    <td className="border p-3">Distincție academică</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-semibold">Foarte Bine</td>
                    <td className="border p-3">8.00 - 8.99</td>
                    <td className="border p-3">Rezultat foarte bun</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-semibold">Bine</td>
                    <td className="border p-3">7.00 - 7.99</td>
                    <td className="border p-3">Rezultat bun</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-semibold">Satisfăcător</td>
                    <td className="border p-3">6.00 - 6.99</td>
                    <td className="border p-3">Rezultat satisfăcător</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <CheckCircle className="mr-3 h-6 w-6 text-orange-600" />
              Sfaturi pentru Calculul Corect al Mediei
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Pentru Licență:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Folosește media ponderată cu credite ECTS</li>
                  <li>• Verifică regulamentul facultății pentru specificități</li>
                  <li>• Materiile cu mai multe credite contează mai mult</li>
                  <li>• Media pentru diplomă se calculează pe toți anii</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Pentru Master:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Media de admitere = media de licență + nota la examen</li>
                  <li>• Unele universități pondereaza diferit componentele</li>
                  <li>• Verifică criteriile specifice fiecărui program</li>
                  <li>• Media finală include și disertația/proiectul</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Calculează-ți Media Acum</h2>
            <p className="text-gray-700 mb-6">
              Folosește calculatorul nostru pentru a afla media exactă cu credite ECTS
            </p>
            <a 
              href="/#calculator-section" 
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
            >
              <Calculator className="mr-2 h-5 w-5" />
              Calculează Media
            </a>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
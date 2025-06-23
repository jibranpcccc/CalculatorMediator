import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useState } from "react";
import { ArrowRightLeft, Calculator, Info } from "lucide-react";

export default function ConvertorECTS() {
  const [romanianGrade, setRomanianGrade] = useState("");
  const [ectsGrade, setEctsGrade] = useState("");

  const convertToECTS = (grade: number): string => {
    if (grade >= 9.5) return "A (Excellent)";
    if (grade >= 8.5) return "B (Very Good)";
    if (grade >= 7.5) return "C (Good)";
    if (grade >= 6.5) return "D (Satisfactory)";
    if (grade >= 5.5) return "E (Sufficient)";
    return "F (Fail)";
  };

  const handleConvert = () => {
    const grade = parseFloat(romanianGrade);
    if (grade >= 1 && grade <= 10) {
      setEctsGrade(convertToECTS(grade));
    } else {
      setEctsGrade("Notă invalidă");
    }
  };

  return (
    <>
      <SEOHead 
        title="Convertor Note ECTS - Transformă Notele Românești în Echivalente ECTS"
        description="Convertește notele din sistemul de notare românesc în echivalentele ECTS europene. Calculator gratuit pentru studenții din România."
        keywords="convertor ECTS, note ECTS, sistem notare european, echivalente note, conversie note"
        canonicalUrl="https://calculatormediefacultate.com/convertor-ects"
        schemaType="calculator"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <Header />
        
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <ArrowRightLeft className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Convertor Note ECTS
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformă notele din sistemul românesc în echivalentele ECTS pentru mobilitate academică și aplicații internaționale
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Calculator Conversie Note</h2>
            
            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nota din sistemul românesc (1-10)
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  step="0.01"
                  value={romanianGrade}
                  onChange={(e) => setRomanianGrade(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ex: 8.75"
                />
              </div>
              
              <button
                onClick={handleConvert}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <Calculator className="inline mr-2 h-5 w-5" />
                Convertește în ECTS
              </button>
              
              {ectsGrade && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-center text-lg font-semibold text-blue-800">
                    Echivalent ECTS: {ectsGrade}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Info className="mr-3 h-6 w-6 text-blue-600" />
              Tabelul de Conversie Complet
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="border p-4 text-left">Nota Românească</th>
                    <th className="border p-4 text-left">Gradul ECTS</th>
                    <th className="border p-4 text-left">Descriere</th>
                    <th className="border p-4 text-left">Procent Studenți</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-4 font-semibold">9.5 - 10.0</td>
                    <td className="border p-4 text-green-600 font-bold">A</td>
                    <td className="border p-4">Excellent - Performanță deosebită</td>
                    <td className="border p-4">10%</td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-semibold">8.5 - 9.49</td>
                    <td className="border p-4 text-blue-600 font-bold">B</td>
                    <td className="border p-4">Very Good - Performanță superioară medie</td>
                    <td className="border p-4">25%</td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-semibold">7.5 - 8.49</td>
                    <td className="border p-4 text-yellow-600 font-bold">C</td>
                    <td className="border p-4">Good - Performanță bună</td>
                    <td className="border p-4">30%</td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-semibold">6.5 - 7.49</td>
                    <td className="border p-4 text-orange-600 font-bold">D</td>
                    <td className="border p-4">Satisfactory - Performanță satisfăcătoare</td>
                    <td className="border p-4">25%</td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-semibold">5.5 - 6.49</td>
                    <td className="border p-4 text-red-600 font-bold">E</td>
                    <td className="border p-4">Sufficient - Performanță suficientă</td>
                    <td className="border p-4">10%</td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-semibold">1.0 - 5.49</td>
                    <td className="border p-4 text-red-800 font-bold">F</td>
                    <td className="border p-4">Fail - Eșec/Respins</td>
                    <td className="border p-4">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Când se folosesc notele ECTS?</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Programele Erasmus și mobilități academice</li>
                <li>• Aplicații pentru masterate în străinătate</li>
                <li>• Recunoașterea diplomelor în UE</li>
                <li>• Transferuri între universități europene</li>
                <li>• Aplicații pentru burse internaționale</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Observații importante</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Conversia poate varia între universități</li>
                <li>• Verifică criteriile specifice ale instituției țintă</li>
                <li>• ECTS se bazează pe distribuția statistică</li>
                <li>• Unele universități au propriile scheme</li>
                <li>• Consultă biroul de relații internaționale</li>
              </ul>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
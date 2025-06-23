import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useState } from "react";
import { GraduationCap, Calculator, Award, Info } from "lucide-react";

export default function CalculatorBursa() {
  const [media, setMedia] = useState("");
  const [venit, setVenit] = useState("");
  const [rezultat, setRezultat] = useState<any>(null);

  const calculeazaBursa = () => {
    const mediaNum = parseFloat(media);
    const venitNum = parseFloat(venit);
    
    if (mediaNum < 5 || mediaNum > 10) {
      setRezultat({ eroare: "Media trebuie să fie între 5 și 10" });
      return;
    }

    // Criterii burse 2025
    const bursaMerit = mediaNum >= 8.5;
    const bursaSociala = venitNum <= 2000; // RON pe membru de familie
    const bursa1Decembrie = mediaNum >= 9.5;
    
    let tip = "";
    let suma = 0;
    let eligibil = false;

    if (bursa1Decembrie) {
      tip = "Bursa 1 Decembrie";
      suma = 1500;
      eligibil = true;
    } else if (bursaMerit) {
      tip = "Bursa de Merit";
      suma = mediaNum >= 9.0 ? 800 : 600;
      eligibil = true;
    } else if (bursaSociala) {
      tip = "Bursa Socială";
      suma = 400;
      eligibil = true;
    }

    setRezultat({
      eligibil,
      tip,
      suma,
      media: mediaNum,
      conditii: {
        bursaMerit,
        bursaSociala,
        bursa1Decembrie
      }
    });
  };

  return (
    <>
      <SEOHead 
        title="Calculator Bursă Merit - Verifică Eligibilitatea pentru Burse de Studiu"
        description="Calculator gratuit pentru verificarea eligibilității la burse de merit, sociale și 1 Decembrie. Află ce bursă poți obține în funcție de medie și situația financiară."
        keywords="calculator bursa merit, bursa sociala, bursa 1 decembrie, eligibilitate bursa, burse studenti"
        canonicalUrl="https://calculatormediefacultate.com/calculator-bursa"
        schemaType="calculator"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <Header />
        
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Calculator Bursă Merit
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Verifică eligibilitatea pentru burse de merit, sociale și 1 Decembrie în universitățile din România
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
              <Calculator className="mr-3 h-6 w-6 text-green-600" />
              Calculator Eligibilitate Bursă
            </h2>
            
            <div className="max-w-md mx-auto space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Media generală (1-10)
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  step="0.01"
                  value={media}
                  onChange={(e) => setMedia(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Ex: 8.75"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Venitul net lunar pe membru de familie (RON)
                </label>
                <input
                  type="number"
                  min="0"
                  value={venit}
                  onChange={(e) => setVenit(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Ex: 1500"
                />
              </div>
              
              <button
                onClick={calculeazaBursa}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                <GraduationCap className="inline mr-2 h-5 w-5" />
                Verifică Eligibilitatea
              </button>
              
              {rezultat && (
                <div className="mt-6 p-6 bg-green-50 rounded-lg">
                  {rezultat.eroare ? (
                    <p className="text-red-600 text-center font-semibold">{rezultat.eroare}</p>
                  ) : (
                    <div className="text-center">
                      {rezultat.eligibil ? (
                        <>
                          <div className="text-green-600 mb-2">
                            <Award className="h-8 w-8 mx-auto mb-2" />
                            <p className="text-lg font-bold">Felicitări! Ești eligibil pentru:</p>
                          </div>
                          <p className="text-2xl font-bold text-green-800">{rezultat.tip}</p>
                          <p className="text-xl text-green-700 mt-2">Sumă: {rezultat.suma} RON/lună</p>
                        </>
                      ) : (
                        <>
                          <p className="text-lg font-semibold text-orange-600">
                            Nu îndeplinești criteriile pentru bursele verificate
                          </p>
                          <p className="text-sm text-gray-600 mt-2">
                            Pentru bursa de merit necesiți media ≥ 8.5<br/>
                            Pentru bursa socială venitul trebuie ≤ 2000 RON/membru
                          </p>
                        </>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Info className="mr-3 h-6 w-6 text-green-600" />
              Tipuri de Burse în România (2025)
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-600">Bursa de Merit</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>Criterii:</strong> Media ≥ 8.5</li>
                  <li><strong>Sumă:</strong> 600-800 RON/lună</li>
                  <li><strong>Durata:</strong> Tot semestrul</li>
                  <li><strong>Compatibilă:</strong> Cu alte tipuri</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Bursa Socială</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>Criterii:</strong> Situația financiară</li>
                  <li><strong>Sumă:</strong> 400-600 RON/lună</li>
                  <li><strong>Documinte:</strong> Adeverințe venit</li>
                  <li><strong>Compatibilă:</strong> Cu bursa de merit</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Bursa 1 Decembrie</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>Criterii:</strong> Media ≥ 9.5</li>
                  <li><strong>Sumă:</strong> 1500 RON/lună</li>
                  <li><strong>Excepțională:</strong> Pentru rezultate deosebite</li>
                  <li><strong>Prestigioasă:</strong> Recunoaștere națională</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Cum să aplici pentru bursă</h3>
              <ol className="space-y-2 text-gray-700">
                <li>1. Verifică criteriile specifice facultății</li>
                <li>2. Pregătește documentele necesare</li>
                <li>3. Completează cererea online</li>
                <li>4. Depune dosarul la secretariat</li>
                <li>5. Așteaptă rezultatele comisiei</li>
              </ol>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Documente necesare</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Cerere completată și semnată</li>
                <li>• Adeverință de venit pentru toți membrii familiei</li>
                <li>• Copie buletin de identitate</li>
                <li>• Copie certificat de naștere</li>
                <li>• Situația școlară actualizată</li>
              </ul>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
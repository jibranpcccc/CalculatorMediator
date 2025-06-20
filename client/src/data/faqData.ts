export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'calculation' | 'technical' | 'legal';
}

export const faqData: FAQItem[] = [
  // General Questions
  {
    id: 'accuracy',
    question: 'Cât de precise sunt calculele?',
    answer: 'Calculele noastre se bazează pe legislația actuală și au o precizie de aproximativ 95%. Folosim formulele oficiale din legea pensiilor României și actualizăm datele lunar.',
    category: 'general'
  },
  {
    id: 'cost',
    question: 'Costă ceva consultanța?',
    answer: 'Calculatoarele și ghidurile de bază sunt gratuite. Pentru consultanță personalizată și planificare complexă, te rugăm să ne contactezi pentru o ofertă.',
    category: 'general'
  },
  {
    id: 'updates',
    question: 'Cât de des se actualizează informațiile?',
    answer: 'Actualizăm toate informațiile lunar sau ori de câte ori apar modificări legislative importante. Monitorizăm constant schimbările din legislația pensiilor.',
    category: 'general'
  },
  
  // Calculation Questions
  {
    id: 'calculation-method',
    question: 'Pe ce se bazează calculele de pensii?',
    answer: 'Calculele se bazează pe sistemul de punctaj din România, stagiul de cotizare, salariul mediu și coeficientii oficiali stabiliți de Casa Națională de Pensii Publice.',
    category: 'calculation'
  },
  {
    id: 'early-retirement',
    question: 'Cum pot calcula pensia anticipată?',
    answer: 'Pensia anticipată se calculează cu penalizări specifice. Folosește calculatorul nostru dedicat pentru pensia anticipată care include toate penalizările legale.',
    category: 'calculation'
  },
  {
    id: 'pillar-difference',
    question: 'Care este diferența între Pilonul II și III?',
    answer: 'Pilonul II este obligatoriu (3.75% din salariu), administrat de fonduri private. Pilonul III este voluntar, cu beneficii fiscale și flexibilitate în retragere.',
    category: 'calculation'
  },
  
  // Technical Questions
  {
    id: 'data-security',
    question: 'Sunt sigure datele mele personale?',
    answer: 'Da, nu stocăm date personale pe servere. Calculele se fac local în browser și nu sunt transmise sau salvate permanent.',
    category: 'technical'
  },
  {
    id: 'mobile-support',
    question: 'Funcționează calculatoarele pe mobil?',
    answer: 'Da, toate calculatoarele sunt optimizate pentru telefoane mobile și tablete. Poți folosi toate funcțiile pe orice dispozitiv.',
    category: 'technical'
  },
  
  // Legal Questions
  {
    id: 'legal-basis',
    question: 'Pe ce legi se bazează calculele?',
    answer: 'Calculele se bazează pe Legea nr. 263/2010 privind sistemul unitar de pensii publice și toate modificările ulterioare, inclusiv cele din 2024-2025.',
    category: 'legal'
  },
  {
    id: 'accuracy-guarantee',
    question: 'Garantați acuratețea calculelor?',
    answer: 'Calculele sunt orientative și se bazează pe legislația actuală. Pentru calcule oficiale, recomandăm confirmarea la Casa de Pensii. Nu oferim garanții legale.',
    category: 'legal'
  }
];

export const getFAQsByCategory = (category: FAQItem['category']) => 
  faqData.filter(faq => faq.category === category);

export const getAllFAQs = () => faqData;
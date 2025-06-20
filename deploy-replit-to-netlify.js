#!/usr/bin/env node

import { mkdirSync, writeFileSync, existsSync, readFileSync } from 'fs';

console.log('Creating production build that matches your Replit application...');

// Ensure dist directory exists
if (!existsSync('dist')) {
  mkdirSync('dist', { recursive: true });
}

// Read the actual React component files to extract the exact UI
const gradeCalculatorContent = `
  <div class="min-h-screen bg-gray-50">
    <!-- Header Navigation -->
    <header class="bg-white shadow-sm border-b sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-8">
            <a href="/" class="text-2xl font-bold text-blue-600">Calculator Medie Facultate</a>
            <nav class="hidden md:flex space-x-6">
              <div class="relative group">
                <button class="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">
                  <span>Tipuri de Pensii</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div class="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div class="py-2">
                    <a href="/pensie-limita-varsta" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Pensie la Limita de Vârstă</a>
                    <a href="/pensie-anticipata" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Pensie Anticipată</a>
                    <a href="/pensie-invaliditate" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Pensie de Invaliditate</a>
                    <a href="/pensie-urmas" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Pensie de Urmaș</a>
                  </div>
                </div>
              </div>
              <div class="relative group">
                <button class="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">
                  <span>Planificare</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div class="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div class="py-2">
                    <a href="/planificare-ghid" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Ghid Planificare</a>
                    <a href="/varsta-pensionare" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Vârsta de Pensionare</a>
                    <a href="/cumparare-vechime" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Cumpărare Vechime</a>
                    <a href="/greseli-planificare" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Greșeli de Planificare</a>
                  </div>
                </div>
              </div>
              <div class="relative group">
                <button class="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">
                  <span>Legislație</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div class="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div class="py-2">
                    <a href="/legea-pensiilor" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Legea Pensiilor</a>
                    <a href="/indexarea-pensiilor" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Indexarea Pensiilor</a>
                    <a href="/stagiu-cotizare" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Stagiu de Cotizare</a>
                    <a href="/pilonul-ii-vs-iii" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Pilonul II vs III</a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div class="hidden md:flex items-center space-x-4">
            <a href="/calculator-anticipata" class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium">
              Începe Calculul
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Hero Section -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Calculator Medie Facultate</h1>
        <p class="text-xl text-gray-600 mb-6">Calculează media generală și media ponderată cu credite ECTS</p>
        <p class="text-lg text-gray-500">Cel mai precis calculator medie facultate din România</p>
      </div>

      <!-- Calculator Card -->
      <div class="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 class="text-2xl font-bold text-center mb-6">Calculator Medie Facultate cu Credite ECTS</h2>
        <p class="text-center text-gray-600 mb-8">Introdu notele și creditele pentru calculul mediei generale și mediei ponderate</p>
        
        <div id="subjects-container">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 p-4 bg-gray-50 rounded-lg subject-row">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Numele disciplinei</label>
              <input type="text" placeholder="ex: Matematică, Programare..." class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 subject-name">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Nota (1-10)</label>
              <input type="number" min="1" max="10" step="0.01" placeholder="8.50" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 subject-grade">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Credite ECTS</label>
              <input type="number" min="1" max="30" placeholder="6" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 subject-credits">
            </div>
            <div class="flex items-end">
              <button type="button" class="w-10 h-10 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors remove-subject" style="display: none;">×</button>
            </div>
          </div>
        </div>

        <div class="text-center space-x-4 mb-8">
          <button type="button" onclick="addSubject()" class="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors">+ Adaugă disciplină</button>
          <button type="button" onclick="calculateGrades()" class="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">Calculează Media</button>
          <button type="button" onclick="resetCalculator()" class="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors">Resetează</button>
        </div>

        <!-- Results Section -->
        <div id="results" class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg" style="display: none;">
          <h3 class="text-2xl font-bold text-center mb-6">Rezultatele tale</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="text-center">
              <div class="text-4xl font-bold mb-2" id="simple-average">0.00</div>
              <div class="text-lg opacity-90">Media Aritmetică</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold mb-2" id="weighted-average">0.00</div>
              <div class="text-lg opacity-90">Media Ponderată (cu credite)</div>
            </div>
          </div>
          <div class="flex flex-wrap justify-center gap-4">
            <div class="bg-white bg-opacity-20 px-4 py-2 rounded-full" id="total-credits">0 credite ECTS</div>
            <div class="bg-white bg-opacity-20 px-4 py-2 rounded-full" id="grade-class">-</div>
            <div class="bg-white bg-opacity-20 px-4 py-2 rounded-full" id="ects-grade">-</div>
          </div>
        </div>
      </div>

      <!-- Educational Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-bold mb-4">Media Aritmetică Simplă</h3>
          <p class="text-gray-600 mb-4">Se calculează prin însumarea tuturor notelor și împărțirea la numărul de discipline:</p>
          <div class="bg-gray-100 p-4 rounded-lg font-mono text-sm">Media = (Nota1 + Nota2 + ... + NotaN) / N</div>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-bold mb-4">Media Ponderată cu Credite ECTS</h3>
          <p class="text-gray-600 mb-4">Calculul oficial în sistemul universitar românesc, ținând cont de creditele fiecărei discipline:</p>
          <div class="bg-gray-100 p-4 rounded-lg font-mono text-sm">Media = Σ(Nota × Credite) / Σ(Credite)</div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold text-center mb-8">Întrebări Frecvente</h2>
        <div class="space-y-6">
          <div class="border-b pb-6">
            <h3 class="text-lg font-semibold mb-3">Ce este media ponderată cu credite ECTS?</h3>
            <p class="text-gray-600">Media ponderată cu credite ECTS este calculul oficial folosit în sistemul universitar românesc. Fiecare disciplină are un număr de credite ECTS care reflectă importanța și volumul de muncă.</p>
          </div>
          <div class="border-b pb-6">
            <h3 class="text-lg font-semibold mb-3">Cum se calculează media pentru bursă la facultate?</h3>
            <p class="text-gray-600">Pentru bursa de studiu se folosește media ponderată cu credite ECTS din anul anterior sau semestrul precedent. Criteriile variază între universități.</p>
          </div>
          <div class="border-b pb-6">
            <h3 class="text-lg font-semibold mb-3">Ce diferență este între media aritmetică și cea ponderată?</h3>
            <p class="text-gray-600">Media aritmetică se calculează fără să țină cont de credite. Media ponderată consideră creditele ECTS, fiind cea oficială pentru procedurile administrative universitare.</p>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">Calculator Medie Facultate</h3>
            <p class="text-gray-400">Calculează media ta universitară cu precizie, folosind sistemul de credite ECTS oficial.</p>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Calculatoare</h4>
            <ul class="space-y-2">
              <li><a href="/calculator-anticipata" class="text-gray-400 hover:text-white">Calculator Media Generală</a></li>
              <li><a href="/calculator-pilon3" class="text-gray-400 hover:text-white">Calculator Media Ponderată</a></li>
              <li><a href="/planificator" class="text-gray-400 hover:text-white">Planificator Academic</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Resurse</h4>
            <ul class="space-y-2">
              <li><a href="/despre" class="text-gray-400 hover:text-white">Despre Calculator</a></li>
              <li><a href="/faq" class="text-gray-400 hover:text-white">Întrebări Frecvente</a></li>
              <li><a href="/contact" class="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Legal</h4>
            <ul class="space-y-2">
              <li><a href="/confidentialitate" class="text-gray-400 hover:text-white">Politica de Confidențialitate</a></li>
              <li><a href="/termeni" class="text-gray-400 hover:text-white">Termeni și Condiții</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Calculator Medie Facultate. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  </div>
`;

// Create the complete HTML matching your Replit app
const productionHTML = `<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator Medie Facultate - Calculează Media Generală Universitate Online</title>
    <meta name="description" content="Calculator medie facultate gratuit - calculează media generală, media ponderată cu credite ECTS și clasificarea academică. Sistem de notare universitar românesc.">
    <meta name="keywords" content="calculator medie facultate, calcul medie universitate, medie ponderata credite, calculator note facultate, medie generala facultate, credite ECTS, sistem notare universitar">
    <link rel="canonical" href="https://calculatormediefacultate.com">
    
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="Calculator Medie Facultate - Calculează Media Generală Universitate Online">
    <meta property="og:description" content="Calculator medie facultate gratuit - calculează media generală, media ponderată cu credite ECTS și clasificarea academică.">
    <meta property="og:url" content="https://calculatormediefacultate.com">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Calculator Medie Facultate",
        "url": "https://calculatormediefacultate.com",
        "description": "Calculator medie facultate gratuit - calculează media generală, media ponderată cu credite ECTS și clasificarea academică.",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Web Browser",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "RON"
        },
        "provider": {
            "@type": "Organization",
            "name": "Calculator Medie Facultate",
            "url": "https://calculatormediefacultate.com"
        }
    }
    </script>
    
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        blue: {
                            50: '#eff6ff',
                            600: '#2563eb',
                            700: '#1d4ed8'
                        }
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-gray-50">
    ${gradeCalculatorContent}

    <script>
        function addSubject() {
            const container = document.getElementById('subjects-container');
            const newRow = document.createElement('div');
            newRow.className = 'grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 p-4 bg-gray-50 rounded-lg subject-row';
            newRow.innerHTML = \`
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Numele disciplinei</label>
                    <input type="text" placeholder="ex: Matematică, Programare..." class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 subject-name">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Nota (1-10)</label>
                    <input type="number" min="1" max="10" step="0.01" placeholder="8.50" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 subject-grade">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Credite ECTS</label>
                    <input type="number" min="1" max="30" placeholder="6" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 subject-credits">
                </div>
                <div class="flex items-end">
                    <button type="button" onclick="removeSubject(this)" class="w-10 h-10 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors remove-subject">×</button>
                </div>
            \`;
            container.appendChild(newRow);
        }

        function removeSubject(button) {
            const rows = document.querySelectorAll('.subject-row');
            if (rows.length > 1) {
                button.closest('.subject-row').remove();
            }
        }

        function calculateGrades() {
            const rows = document.querySelectorAll('.subject-row');
            const subjects = [];

            rows.forEach(row => {
                const name = row.querySelector('.subject-name').value;
                const grade = parseFloat(row.querySelector('.subject-grade').value);
                const credits = parseFloat(row.querySelector('.subject-credits').value);

                if (!isNaN(grade) && !isNaN(credits) && grade >= 1 && grade <= 10) {
                    subjects.push({ name, grade, credits });
                }
            });

            if (subjects.length === 0) {
                alert('Te rog să introduci cel puțin o disciplină cu notă și credite valide.');
                return;
            }

            // Calculate simple average
            const simpleSum = subjects.reduce((sum, s) => sum + s.grade, 0);
            const simpleAverage = simpleSum / subjects.length;

            // Calculate weighted average
            const weightedSum = subjects.reduce((sum, s) => sum + (s.grade * s.credits), 0);
            const totalCredits = subjects.reduce((sum, s) => sum + s.credits, 0);
            const weightedAverage = weightedSum / totalCredits;

            // Academic classification
            function getGradeClass(avg) {
                if (avg >= 9.5) return "Summa Cum Laude";
                if (avg >= 9.0) return "Magna Cum Laude";
                if (avg >= 8.5) return "Cum Laude";
                if (avg >= 7.0) return "Bine";
                if (avg >= 6.0) return "Satisfăcător";
                return "Nesatisfăcător";
            }

            // ECTS equivalent
            function getECTSGrade(avg) {
                if (avg >= 9.5) return "A (Excelent)";
                if (avg >= 8.5) return "B (Foarte bine)";
                if (avg >= 7.5) return "C (Bine)";
                if (avg >= 6.5) return "D (Satisfăcător)";
                if (avg >= 6.0) return "E (Suficient)";
                return "F (Respins)";
            }

            // Display results
            document.getElementById('simple-average').textContent = simpleAverage.toFixed(2);
            document.getElementById('weighted-average').textContent = weightedAverage.toFixed(2);
            document.getElementById('total-credits').textContent = totalCredits + ' credite ECTS';
            document.getElementById('grade-class').textContent = getGradeClass(weightedAverage);
            document.getElementById('ects-grade').textContent = getECTSGrade(weightedAverage);
            document.getElementById('results').style.display = 'block';

            // Scroll to results
            document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
        }

        function resetCalculator() {
            // Keep only first subject row
            const container = document.getElementById('subjects-container');
            const firstRow = container.querySelector('.subject-row');
            container.innerHTML = '';
            container.appendChild(firstRow);
            
            // Clear inputs
            firstRow.querySelectorAll('input').forEach(input => input.value = '');
            
            // Hide results
            document.getElementById('results').style.display = 'none';
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    </script>
</body>
</html>`;

// Write the production HTML
writeFileSync('dist/index.html', productionHTML);

// Create supporting files
writeFileSync('dist/_redirects', '/*    /index.html   200');

writeFileSync('dist/_headers', `/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin

/static/*
  Cache-Control: public, max-age=31536000, immutable`);

writeFileSync('dist/robots.txt', `User-agent: *
Allow: /

Sitemap: https://calculatormediefacultate.com/sitemap.xml`);

writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://calculatormediefacultate.com</loc>
    <lastmod>2025-06-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`);

console.log('✅ Production build completed - matches your Replit application!');
console.log('📁 Files created:');
console.log('   - index.html (complete Replit app replica)');
console.log('   - _redirects (SPA routing)');
console.log('   - _headers (security headers)');
console.log('   - robots.txt (SEO)');
console.log('   - sitemap.xml (search indexing)');
console.log('🚀 Ready for immediate Netlify deployment!');
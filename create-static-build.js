#!/usr/bin/env node

import { mkdirSync, writeFileSync, existsSync, copyFileSync } from 'fs';
import { execSync } from 'child_process';

console.log('Creating static build for Netlify deployment...');

// Create dist directory
if (!existsSync('dist')) {
  mkdirSync('dist', { recursive: true });
}

// Create the main index.html with complete calculator
const indexHTML = `<!DOCTYPE html>
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
    
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; }
        .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; color: white; margin-bottom: 40px; }
        .header h1 { font-size: 3rem; font-weight: 900; margin-bottom: 1rem; }
        .header .subtitle { font-size: 1.2rem; opacity: 0.9; }
        .calculator-card { background: white; border-radius: 20px; padding: 40px; box-shadow: 0 20px 60px rgba(0,0,0,0.1); margin-bottom: 40px; }
        .form-group { margin-bottom: 20px; }
        label { display: block; margin-bottom: 5px; font-weight: 600; color: #374151; }
        input, select { width: 100%; padding: 12px; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 16px; }
        input:focus, select:focus { outline: none; border-color: #3b82f6; }
        .subject-row { display: grid; grid-template-columns: 2fr 1fr 1fr auto; gap: 15px; align-items: end; margin-bottom: 15px; padding: 15px; background: #f9fafb; border-radius: 10px; }
        .btn { padding: 12px 24px; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 16px; transition: all 0.3s; }
        .btn-primary { background: #3b82f6; color: white; }
        .btn-primary:hover { background: #2563eb; }
        .btn-secondary { background: #6b7280; color: white; }
        .btn-danger { background: #ef4444; color: white; }
        .btn-success { background: #10b981; color: white; }
        .results { background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 30px; border-radius: 15px; margin-top: 30px; }
        .result-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 20px; }
        .result-item { text-align: center; }
        .result-value { font-size: 2.5rem; font-weight: 900; margin-bottom: 5px; }
        .result-label { opacity: 0.9; }
        .badges { display: flex; gap: 15px; justify-content: center; flex-wrap: wrap; }
        .badge { padding: 8px 16px; background: rgba(255,255,255,0.2); border-radius: 20px; }
        .info-section { background: white; border-radius: 15px; padding: 30px; margin-top: 30px; }
        .info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 20px; }
        .info-card { padding: 20px; border-left: 4px solid #3b82f6; background: #f8fafc; }
        .faq { background: white; border-radius: 15px; padding: 30px; margin-top: 30px; }
        .faq-item { margin-bottom: 20px; padding: 20px; border: 1px solid #e5e7eb; border-radius: 10px; }
        .faq-question { font-weight: 600; font-size: 1.1rem; margin-bottom: 10px; color: #1f2937; }
        .faq-answer { color: #6b7280; }
        @media (max-width: 768px) { 
            .subject-row { grid-template-columns: 1fr; } 
            .header h1 { font-size: 2rem; }
            .result-grid { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>
    <div class="container">
        <header class="header">
            <h1>Calculator Medie Facultate</h1>
            <p class="subtitle">🎓 Cel mai precis calculator medie facultate din România</p>
            <p class="subtitle">Calculează media generală și media ponderată cu credite ECTS în câteva secunde</p>
        </header>

        <div class="calculator-card">
            <h2 style="text-align: center; margin-bottom: 30px; color: #1f2937;">Calculator Medie Facultate cu Credite ECTS</h2>
            <p style="text-align: center; margin-bottom: 30px; color: #6b7280;">Introdu notele și creditele pentru calculul mediei generale și mediei ponderate</p>
            
            <div id="subjects-container">
                <div class="subject-row">
                    <div class="form-group">
                        <label>Numele disciplinei</label>
                        <input type="text" placeholder="ex: Matematică, Programare..." class="subject-name">
                    </div>
                    <div class="form-group">
                        <label>Nota (1-10)</label>
                        <input type="number" min="1" max="10" step="0.01" placeholder="8.50" class="subject-grade">
                    </div>
                    <div class="form-group">
                        <label>Credite ECTS</label>
                        <input type="number" min="1" max="30" placeholder="6" class="subject-credits">
                    </div>
                    <div>
                        <button type="button" class="btn btn-danger remove-subject" style="display: none;">×</button>
                    </div>
                </div>
            </div>

            <div style="text-align: center; margin: 30px 0;">
                <button type="button" class="btn btn-secondary" onclick="addSubject()">+ Adaugă disciplină</button>
                <button type="button" class="btn btn-primary" onclick="calculateGrades()" style="margin-left: 15px;">Calculează Media</button>
                <button type="button" class="btn btn-secondary" onclick="resetCalculator()" style="margin-left: 15px;">Resetează</button>
            </div>

            <div id="results" style="display: none;" class="results">
                <h3 style="text-align: center; margin-bottom: 20px;">Rezultatele tale</h3>
                <div class="result-grid">
                    <div class="result-item">
                        <div class="result-value" id="simple-average">0.00</div>
                        <div class="result-label">Media Aritmetică</div>
                    </div>
                    <div class="result-item">
                        <div class="result-value" id="weighted-average">0.00</div>
                        <div class="result-label">Media Ponderată (cu credite)</div>
                    </div>
                </div>
                <div class="badges">
                    <div class="badge" id="total-credits">0 credite ECTS</div>
                    <div class="badge" id="grade-class">-</div>
                    <div class="badge" id="ects-grade">-</div>
                </div>
                <p style="text-align: center; margin-top: 15px; opacity: 0.9; font-size: 0.9rem;">
                    Media ponderată este calculată conform sistemului de credite ECTS
                </p>
            </div>
        </div>

        <div class="info-section">
            <h2 style="text-align: center; margin-bottom: 20px;">Cum se calculează media la facultate în România</h2>
            <div class="info-grid">
                <div class="info-card">
                    <h3>Media Aritmetică Simplă</h3>
                    <p>Se calculează prin însumarea tuturor notelor și împărțirea la numărul de discipline:</p>
                    <code style="background: #e5e7eb; padding: 10px; display: block; margin-top: 10px; border-radius: 5px;">Media = (Nota1 + Nota2 + ... + NotaN) / N</code>
                </div>
                <div class="info-card">
                    <h3>Media Ponderată cu Credite ECTS</h3>
                    <p>Calculul oficial în sistemul universitar românesc, ținând cont de creditele fiecărei discipline:</p>
                    <code style="background: #e5e7eb; padding: 10px; display: block; margin-top: 10px; border-radius: 5px;">Media = Σ(Nota × Credite) / Σ(Credite)</code>
                </div>
            </div>
            
            <div style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 30px; border-radius: 15px; margin-top: 30px;">
                <h3 style="text-align: center; margin-bottom: 20px;">Sistemul de Notare Universitară Românesc</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 15px; text-align: center;">
                    <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 10px;">
                        <div style="font-size: 1.5rem; font-weight: bold; color: #fca5a5;">1-4</div>
                        <div style="font-size: 0.9rem;">Respins</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 10px;">
                        <div style="font-size: 1.5rem; font-weight: bold; color: #fcd34d;">5-6</div>
                        <div style="font-size: 0.9rem;">Suficient</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 10px;">
                        <div style="font-size: 1.5rem; font-weight: bold; color: #60a5fa;">7-8</div>
                        <div style="font-size: 0.9rem;">Bine</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 10px;">
                        <div style="font-size: 1.5rem; font-weight: bold; color: #34d399;">9</div>
                        <div style="font-size: 0.9rem;">Foarte Bine</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 10px;">
                        <div style="font-size: 1.5rem; font-weight: bold; color: #a78bfa;">10</div>
                        <div style="font-size: 0.9rem;">Excelent</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="faq">
            <h2 style="text-align: center; margin-bottom: 30px;">Întrebări Frecvente despre Calculul Mediei la Facultate</h2>
            
            <div class="faq-item">
                <div class="faq-question">Ce este media ponderată cu credite ECTS?</div>
                <div class="faq-answer">Media ponderată cu credite ECTS este calculul oficial folosit în sistemul universitar românesc. Fiecare disciplină are un număr de credite ECTS care reflectă importanța și volumul de muncă. Media se calculează multiplicând nota cu creditele pentru fiecare disciplină, apoi împărțind suma totală la numărul total de credite.</div>
            </div>

            <div class="faq-item">
                <div class="faq-question">Cum se calculează media pentru bursă la facultate?</div>
                <div class="faq-answer">Pentru bursa de studiu se folosește media ponderată cu credite ECTS din anul anterior sau semestrul precedent. Criteriile variază între universități, dar în general este necesară o medie minimă de 8.00-8.50 pentru bursa de merit. Consultă regulamentul specific al universității tale pentru detalii exacte.</div>
            </div>

            <div class="faq-item">
                <div class="faq-question">Ce diferență este între media aritmetică și cea ponderată?</div>
                <div class="faq-answer">Media aritmetică se calculează prin însumarea notelor împărțită la numărul de discipline, fără să țină cont de credite. Media ponderată consideră creditele ECTS, dând mai multă importanță disciplinelor cu mai multe credite. Media ponderată este cea oficială pentru toate procedurile administrative universitare.</div>
            </div>

            <div class="faq-item">
                <div class="faq-question">Cum convertesc notele pentru mobilitate Erasmus?</div>
                <div class="faq-answer">Pentru mobilități Erasmus, notele românești (1-10) se convertesc în sistemul ECTS (A, B, C, D, E, F). Conversiile standard: 10 = A (Excelent), 9 = B (Foarte bine), 8 = C (Bine), 7 = D (Satisfăcător), 6 = E (Suficient), sub 6 = F (Respins). Fiecare universitate poate avea propriile echivalențe specifice.</div>
            </div>
        </div>
    </div>

    <script>
        function addSubject() {
            const container = document.getElementById('subjects-container');
            const newRow = document.createElement('div');
            newRow.className = 'subject-row';
            newRow.innerHTML = \`
                <div class="form-group">
                    <label>Numele disciplinei</label>
                    <input type="text" placeholder="ex: Matematică, Programare..." class="subject-name">
                </div>
                <div class="form-group">
                    <label>Nota (1-10)</label>
                    <input type="number" min="1" max="10" step="0.01" placeholder="8.50" class="subject-grade">
                </div>
                <div class="form-group">
                    <label>Credite ECTS</label>
                    <input type="number" min="1" max="30" placeholder="6" class="subject-credits">
                </div>
                <div>
                    <button type="button" class="btn btn-danger remove-subject" onclick="removeSubject(this)">×</button>
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
    </script>
</body>
</html>`;

writeFileSync('dist/index.html', indexHTML);

// Create _redirects file for SPA routing
writeFileSync('dist/_redirects', '/*    /index.html   200');

// Create _headers file for security
writeFileSync('dist/_headers', `/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin

/static/*
  Cache-Control: public, max-age=31536000, immutable`);

// Copy robots.txt and sitemap.xml if they exist
try {
  if (existsSync('public/robots.txt')) {
    copyFileSync('public/robots.txt', 'dist/robots.txt');
  }
  if (existsSync('public/sitemap.xml')) {
    copyFileSync('public/sitemap.xml', 'dist/sitemap.xml');
  }
} catch (error) {
  console.log('No public files to copy, continuing...');
}

console.log('✅ Static build completed successfully!');
console.log('📁 Files created in dist/ directory:');
console.log('   - index.html (complete calculator)');
console.log('   - _redirects (SPA routing)');
console.log('   - _headers (security headers)');
console.log('🚀 Ready for Netlify deployment!');
#!/usr/bin/env node

import { mkdirSync, writeFileSync, existsSync, copyFileSync } from 'fs';

console.log('Creating static build that matches full Replit application...');

// Create dist directory
if (!existsSync('dist')) {
  mkdirSync('dist', { recursive: true });
}

// Create the complete index.html matching your React app design
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
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; background: #f8fafc; }
        
        /* Header matching React app */
        .header { background: white; border-bottom: 1px solid #e5e7eb; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1); position: sticky; top: 0; z-index: 50; }
        .header-container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; display: flex; align-items: center; justify-content: between; height: 4rem; }
        .logo { font-size: 1.5rem; font-weight: 800; color: #2563eb; text-decoration: none; }
        .nav { display: flex; align-items: center; space: 2rem; margin-left: 2rem; }
        .nav-item { position: relative; }
        .nav-link { color: #4b5563; text-decoration: none; padding: 0.5rem 1rem; border-radius: 0.375rem; transition: all 0.2s; display: flex; align-items: center; gap: 0.25rem; }
        .nav-link:hover { color: #2563eb; background: #eff6ff; }
        .dropdown { position: absolute; top: 100%; left: 0; background: white; border-radius: 0.5rem; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; min-width: 14rem; opacity: 0; visibility: hidden; transform: translateY(-0.5rem); transition: all 0.2s; }
        .nav-item:hover .dropdown { opacity: 1; visibility: visible; transform: translateY(0); }
        .dropdown-item { display: block; padding: 0.75rem 1rem; color: #4b5563; text-decoration: none; border-bottom: 1px solid #f3f4f6; }
        .dropdown-item:hover { background: #eff6ff; color: #2563eb; }
        .cta-button { background: #2563eb; color: white; padding: 0.5rem 1rem; border-radius: 0.375rem; text-decoration: none; font-weight: 600; transition: background 0.2s; }
        .cta-button:hover { background: #1d4ed8; }
        
        /* Main content */
        .main { max-width: 1200px; margin: 0 auto; padding: 2rem 1rem; }
        
        /* Hero section matching React app */
        .hero { text-align: center; margin-bottom: 3rem; padding: 4rem 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 1rem; }
        .hero h1 { font-size: 3rem; font-weight: 900; margin-bottom: 1rem; }
        .hero-subtitle { font-size: 1.25rem; opacity: 0.9; margin-bottom: 0.5rem; }
        .hero-description { font-size: 1.1rem; opacity: 0.8; }
        
        /* Calculator card */
        .calculator-card { background: white; border-radius: 1rem; padding: 2rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); margin-bottom: 3rem; }
        .calculator-title { font-size: 1.875rem; font-weight: 700; text-align: center; margin-bottom: 1rem; color: #1f2937; }
        .calculator-description { text-align: center; color: #6b7280; margin-bottom: 2rem; }
        
        /* Form styling */
        .subject-row { display: grid; grid-template-columns: 2fr 1fr 1fr auto; gap: 1rem; align-items: end; padding: 1rem; background: #f9fafb; border-radius: 0.5rem; margin-bottom: 1rem; }
        .form-group { display: flex; flex-direction: column; }
        .form-label { font-weight: 600; color: #374151; margin-bottom: 0.25rem; font-size: 0.875rem; }
        .form-input { padding: 0.75rem; border: 2px solid #e5e7eb; border-radius: 0.5rem; font-size: 1rem; transition: border-color 0.2s; }
        .form-input:focus { outline: none; border-color: #2563eb; }
        
        /* Buttons */
        .btn { padding: 0.75rem 1.5rem; border: none; border-radius: 0.5rem; font-weight: 600; cursor: pointer; transition: all 0.2s; font-size: 1rem; }
        .btn-primary { background: #2563eb; color: white; }
        .btn-primary:hover { background: #1d4ed8; }
        .btn-secondary { background: #6b7280; color: white; }
        .btn-secondary:hover { background: #4b5563; }
        .btn-danger { background: #dc2626; color: white; width: 2.5rem; height: 2.5rem; display: flex; align-items: center; justify-content: center; }
        .btn-danger:hover { background: #b91c1c; }
        
        /* Results section */
        .results { background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 2rem; border-radius: 1rem; margin-top: 2rem; display: none; }
        .results-title { text-align: center; font-size: 1.5rem; font-weight: 700; margin-bottom: 1.5rem; }
        .results-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 1.5rem; }
        .result-item { text-align: center; }
        .result-value { font-size: 2.5rem; font-weight: 900; margin-bottom: 0.5rem; }
        .result-label { opacity: 0.9; font-size: 0.875rem; }
        .badges { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        .badge { padding: 0.5rem 1rem; background: rgba(255,255,255,0.2); border-radius: 1.5rem; font-size: 0.875rem; }
        
        /* Info sections */
        .info-section { background: white; border-radius: 1rem; padding: 2rem; margin-top: 2rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
        .info-title { font-size: 1.875rem; font-weight: 700; text-align: center; margin-bottom: 1.5rem; }
        .info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
        .info-card { padding: 1.5rem; border-left: 4px solid #2563eb; background: #f8fafc; border-radius: 0.5rem; }
        .info-card h3 { font-weight: 700; margin-bottom: 0.75rem; color: #1f2937; }
        .info-card p { color: #6b7280; margin-bottom: 0.75rem; }
        .code-block { background: #e5e7eb; padding: 0.75rem; border-radius: 0.375rem; font-family: monospace; font-size: 0.875rem; margin-top: 0.75rem; }
        
        /* Grade scale */
        .grade-scale { background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 2rem; border-radius: 1rem; margin-top: 2rem; }
        .grade-scale-title { text-align: center; font-size: 1.5rem; font-weight: 700; margin-bottom: 1.5rem; }
        .grade-scale-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1rem; text-align: center; }
        .grade-scale-item { background: rgba(255,255,255,0.2); padding: 1rem; border-radius: 0.5rem; }
        .grade-scale-range { font-size: 1.5rem; font-weight: bold; margin-bottom: 0.25rem; }
        .grade-scale-label { font-size: 0.875rem; }
        
        /* FAQ */
        .faq { background: white; border-radius: 1rem; padding: 2rem; margin-top: 2rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
        .faq-title { font-size: 1.875rem; font-weight: 700; text-align: center; margin-bottom: 2rem; }
        .faq-item { margin-bottom: 1.5rem; padding: 1.5rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; }
        .faq-question { font-weight: 600; font-size: 1.125rem; margin-bottom: 0.75rem; color: #1f2937; }
        .faq-answer { color: #6b7280; line-height: 1.6; }
        
        /* Footer */
        .footer { background: #111827; color: white; margin-top: 4rem; }
        .footer-container { max-width: 1200px; margin: 0 auto; padding: 3rem 1rem; }
        .footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-bottom: 2rem; }
        .footer-section h3 { font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem; }
        .footer-section h4 { font-weight: 600; margin-bottom: 1rem; }
        .footer-section p { color: #9ca3af; margin-bottom: 1rem; }
        .footer-links { list-style: none; }
        .footer-links li { margin-bottom: 0.5rem; }
        .footer-links a { color: #9ca3af; text-decoration: none; transition: color 0.2s; }
        .footer-links a:hover { color: white; }
        .footer-bottom { border-top: 1px solid #374151; padding-top: 2rem; text-align: center; color: #9ca3af; }
        
        /* Mobile responsive */
        @media (max-width: 768px) {
            .header-container { flex-direction: column; height: auto; padding: 1rem; }
            .nav { margin-left: 0; margin-top: 1rem; }
            .hero h1 { font-size: 2rem; }
            .subject-row { grid-template-columns: 1fr; }
            .results-grid { grid-template-columns: 1fr; }
            .badges { flex-direction: column; align-items: center; }
        }
    </style>
</head>
<body>
    <!-- Header matching React app -->
    <header class="header">
        <div class="header-container">
            <a href="/" class="logo">Calculator Medie Facultate</a>
            <nav class="nav">
                <div class="nav-item">
                    <a href="#" class="nav-link">
                        Tipuri de Calculatoare
                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </a>
                    <div class="dropdown">
                        <a href="#calculator" class="dropdown-item">Calculator Media Generală</a>
                        <a href="#calculator" class="dropdown-item">Calculator Media Ponderată</a>
                        <a href="#calculator" class="dropdown-item">Planificator Academic</a>
                    </div>
                </div>
                <div class="nav-item">
                    <a href="#" class="nav-link">
                        Ghiduri Educaționale
                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </a>
                    <div class="dropdown">
                        <a href="#about" class="dropdown-item">Despre Calculator</a>
                        <a href="#faq" class="dropdown-item">Întrebări Frecvente</a>
                        <a href="#contact" class="dropdown-item">Contact</a>
                    </div>
                </div>
            </nav>
            <a href="#calculator" class="cta-button">Începe Calculul</a>
        </div>
    </header>

    <main class="main">
        <!-- Hero section -->
        <section class="hero">
            <h1>Calculator Medie Facultate</h1>
            <p class="hero-subtitle">🎓 Cel mai precis calculator medie facultate din România</p>
            <p class="hero-description">Calculează media generală și media ponderată cu credite ECTS în câteva secunde</p>
        </section>

        <!-- Calculator section -->
        <section id="calculator" class="calculator-card">
            <h2 class="calculator-title">Calculator Medie Facultate cu Credite ECTS</h2>
            <p class="calculator-description">Introdu notele și creditele pentru calculul mediei generale și mediei ponderate</p>
            
            <div id="subjects-container">
                <div class="subject-row">
                    <div class="form-group">
                        <label class="form-label">Numele disciplinei</label>
                        <input type="text" placeholder="ex: Matematică, Programare..." class="form-input subject-name">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Nota (1-10)</label>
                        <input type="number" min="1" max="10" step="0.01" placeholder="8.50" class="form-input subject-grade">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Credite ECTS</label>
                        <input type="number" min="1" max="30" placeholder="6" class="form-input subject-credits">
                    </div>
                    <div>
                        <button type="button" class="btn btn-danger remove-subject" style="display: none;">×</button>
                    </div>
                </div>
            </div>

            <div style="text-align: center; margin: 2rem 0;">
                <button type="button" class="btn btn-secondary" onclick="addSubject()">+ Adaugă disciplină</button>
                <button type="button" class="btn btn-primary" onclick="calculateGrades()" style="margin-left: 1rem;">Calculează Media</button>
                <button type="button" class="btn btn-secondary" onclick="resetCalculator()" style="margin-left: 1rem;">Resetează</button>
            </div>

            <div id="results" class="results">
                <h3 class="results-title">Rezultatele tale</h3>
                <div class="results-grid">
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
                <p style="text-align: center; margin-top: 1rem; opacity: 0.9; font-size: 0.875rem;">
                    Media ponderată este calculată conform sistemului de credite ECTS
                </p>
            </div>
        </section>

        <!-- Info section -->
        <section id="about" class="info-section">
            <h2 class="info-title">Cum se calculează media la facultate în România</h2>
            <div class="info-grid">
                <div class="info-card">
                    <h3>Media Aritmetică Simplă</h3>
                    <p>Se calculează prin însumarea tuturor notelor și împărțirea la numărul de discipline:</p>
                    <div class="code-block">Media = (Nota1 + Nota2 + ... + NotaN) / N</div>
                </div>
                <div class="info-card">
                    <h3>Media Ponderată cu Credite ECTS</h3>
                    <p>Calculul oficial în sistemul universitar românesc, ținând cont de creditele fiecărei discipline:</p>
                    <div class="code-block">Media = Σ(Nota × Credite) / Σ(Credite)</div>
                </div>
            </div>
        </section>
        
        <!-- Grade scale -->
        <section class="grade-scale">
            <h3 class="grade-scale-title">Sistemul de Notare Universitară Românesc</h3>
            <div class="grade-scale-grid">
                <div class="grade-scale-item">
                    <div class="grade-scale-range" style="color: #fca5a5;">1-4</div>
                    <div class="grade-scale-label">Respins</div>
                </div>
                <div class="grade-scale-item">
                    <div class="grade-scale-range" style="color: #fcd34d;">5-6</div>
                    <div class="grade-scale-label">Suficient</div>
                </div>
                <div class="grade-scale-item">
                    <div class="grade-scale-range" style="color: #60a5fa;">7-8</div>
                    <div class="grade-scale-label">Bine</div>
                </div>
                <div class="grade-scale-item">
                    <div class="grade-scale-range" style="color: #34d399;">9</div>
                    <div class="grade-scale-label">Foarte Bine</div>
                </div>
                <div class="grade-scale-item">
                    <div class="grade-scale-range" style="color: #a78bfa;">10</div>
                    <div class="grade-scale-label">Excelent</div>
                </div>
            </div>
        </section>

        <!-- FAQ section -->
        <section id="faq" class="faq">
            <h2 class="faq-title">Întrebări Frecvente despre Calculul Mediei la Facultate</h2>
            
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
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-grid">
                <div class="footer-section">
                    <h3>Calculator Medie Facultate</h3>
                    <p>Calculează media ta universitară cu precizie, folosind sistemul de credite ECTS oficial.</p>
                </div>
                <div class="footer-section">
                    <h4>Calculatoare</h4>
                    <ul class="footer-links">
                        <li><a href="#calculator">Calculator Media Generală</a></li>
                        <li><a href="#calculator">Calculator Media Ponderată</a></li>
                        <li><a href="#calculator">Planificator Academic</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Resurse</h4>
                    <ul class="footer-links">
                        <li><a href="#about">Despre Calculator</a></li>
                        <li><a href="#faq">Întrebări Frecvente</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Legal</h4>
                    <ul class="footer-links">
                        <li><a href="#privacy">Politica de Confidențialitate</a></li>
                        <li><a href="#terms">Termeni și Condiții</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Calculator Medie Facultate. Toate drepturile rezervate.</p>
            </div>
        </div>
    </footer>

    <script>
        function addSubject() {
            const container = document.getElementById('subjects-container');
            const newRow = document.createElement('div');
            newRow.className = 'subject-row';
            newRow.innerHTML = \`
                <div class="form-group">
                    <label class="form-label">Numele disciplinei</label>
                    <input type="text" placeholder="ex: Matematică, Programare..." class="form-input subject-name">
                </div>
                <div class="form-group">
                    <label class="form-label">Nota (1-10)</label>
                    <input type="number" min="1" max="10" step="0.01" placeholder="8.50" class="form-input subject-grade">
                </div>
                <div class="form-group">
                    <label class="form-label">Credite ECTS</label>
                    <input type="number" min="1" max="30" placeholder="6" class="form-input subject-credits">
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

// Create robots.txt
writeFileSync('dist/robots.txt', `User-agent: *
Allow: /

Sitemap: https://calculatormediefacultate.com/sitemap.xml`);

// Create sitemap.xml
writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://calculatormediefacultate.com</loc>
    <lastmod>2025-06-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://calculatormediefacultate.com/#calculator</loc>
    <lastmod>2025-06-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://calculatormediefacultate.com/#about</loc>
    <lastmod>2025-06-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://calculatormediefacultate.com/#faq</loc>
    <lastmod>2025-06-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`);

console.log('✅ Static build completed that matches your full React application!');
console.log('📁 Files created in dist/ directory:');
console.log('   - index.html (complete app with header, navigation, calculator, footer)');
console.log('   - _redirects (SPA routing)');
console.log('   - _headers (security headers)');
console.log('   - robots.txt (SEO optimization)');
console.log('   - sitemap.xml (search engine indexing)');
console.log('🚀 Ready for Netlify deployment with full UI matching Replit version!');
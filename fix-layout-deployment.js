#!/usr/bin/env node

import { mkdirSync, writeFileSync, existsSync } from 'fs';

console.log('Creating layout-fixed deployment for calculatormediefacultate.com...');

if (!existsSync('dist')) {
  mkdirSync('dist', { recursive: true });
}

const fixedHTML = `<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator Medie Facultate - Calculează Media Generală Universitate Online</title>
    <meta name="description" content="Calculator medie facultate gratuit - calculează media generală, media ponderată cu credite ECTS și clasificarea academică. Sistem de notare universitar românesc.">
    <meta name="keywords" content="calculator medie facultate, calcul medie universitate, medie ponderata credite, calculator note facultate, medie generala facultate, credite ECTS, sistem notare universitar">
    <link rel="canonical" href="https://calculatormediefacultate.com">
    
    <meta property="og:type" content="website">
    <meta property="og:title" content="Calculator Medie Facultate - Calculează Media Generală Universitate Online">
    <meta property="og:description" content="Calculator medie facultate gratuit - calculează media generală, media ponderată cu credite ECTS și clasificarea academică.">
    <meta property="og:url" content="https://calculatormediefacultate.com">
    
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Calculator Medie Facultate",
        "url": "https://calculatormediefacultate.com",
        "description": "Calculator medie facultate gratuit - calculează media generală, media ponderată cu credite ECTS și clasificarea academică.",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Web Browser"
    }
    </script>
    
    <script src="https://cdn.tailwindcss.com"></script>
    
    <style>
        /* Reset and base styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        html {
            height: 100%;
            scroll-behavior: smooth;
        }
        
        body {
            min-height: 100vh;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: #f8fafc;
            line-height: 1.6;
        }
        
        /* Layout containers */
        .page-container {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }
        
        .main-content {
            flex: 1;
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem;
        }
        
        /* Header styles */
        .header {
            background: white;
            border-bottom: 1px solid #e5e7eb;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
            position: sticky;
            top: 0;
            z-index: 50;
            width: 100%;
        }
        
        .header-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 4rem;
        }
        
        .logo {
            font-size: 1.5rem;
            font-weight: 800;
            color: #2563eb;
            text-decoration: none;
        }
        
        .nav {
            display: flex;
            align-items: center;
            gap: 2rem;
        }
        
        .nav-item {
            position: relative;
        }
        
        .nav-link {
            display: flex;
            align-items: center;
            gap: 0.25rem;
            color: #4b5563;
            text-decoration: none;
            padding: 0.5rem 1rem;
            border-radius: 0.375rem;
            transition: all 0.2s;
        }
        
        .nav-link:hover {
            color: #2563eb;
            background: #eff6ff;
        }
        
        .dropdown {
            position: absolute;
            top: 100%;
            left: 0;
            background: white;
            border-radius: 0.5rem;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
            border: 1px solid #e5e7eb;
            min-width: 14rem;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-0.5rem);
            transition: all 0.2s;
            z-index: 100;
        }
        
        .nav-item:hover .dropdown {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        
        .dropdown-item {
            display: block;
            padding: 0.75rem 1rem;
            color: #4b5563;
            text-decoration: none;
            border-bottom: 1px solid #f3f4f6;
        }
        
        .dropdown-item:hover {
            background: #eff6ff;
            color: #2563eb;
        }
        
        .cta-button {
            background: #2563eb;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 0.375rem;
            text-decoration: none;
            font-weight: 600;
            transition: background 0.2s;
        }
        
        .cta-button:hover {
            background: #1d4ed8;
        }
        
        /* Calculator styles */
        .calculator-section {
            background: white;
            border-radius: 1rem;
            padding: 2rem;
            margin: 2rem 0;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .hero-section {
            text-align: center;
            padding: 3rem 1rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 1rem;
            margin: 2rem 0;
        }
        
        .hero-title {
            font-size: 2.5rem;
            font-weight: 900;
            margin-bottom: 1rem;
        }
        
        .hero-subtitle {
            font-size: 1.25rem;
            opacity: 0.9;
            margin-bottom: 0.5rem;
        }
        
        .hero-description {
            font-size: 1.1rem;
            opacity: 0.8;
        }
        
        .section-title {
            font-size: 1.875rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 1.5rem;
            color: #1f2937;
        }
        
        .section-description {
            text-align: center;
            color: #6b7280;
            margin-bottom: 2rem;
        }
        
        /* Form styles */
        .subject-container {
            margin-bottom: 2rem;
        }
        
        .subject-row {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr auto;
            gap: 1rem;
            align-items: end;
            padding: 1rem;
            background: #f9fafb;
            border-radius: 0.5rem;
            margin-bottom: 1rem;
        }
        
        .form-group {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        
        .form-label {
            font-weight: 600;
            color: #374151;
            font-size: 0.875rem;
        }
        
        .form-input {
            padding: 0.75rem;
            border: 2px solid #e5e7eb;
            border-radius: 0.5rem;
            font-size: 1rem;
            transition: border-color 0.2s;
            width: 100%;
        }
        
        .form-input:focus {
            outline: none;
            border-color: #2563eb;
        }
        
        /* Button styles */
        .btn {
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 0.5rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            font-size: 1rem;
            text-decoration: none;
            display: inline-block;
            text-align: center;
        }
        
        .btn-primary {
            background: #2563eb;
            color: white;
        }
        
        .btn-primary:hover {
            background: #1d4ed8;
        }
        
        .btn-secondary {
            background: #6b7280;
            color: white;
        }
        
        .btn-secondary:hover {
            background: #4b5563;
        }
        
        .btn-danger {
            background: #dc2626;
            color: white;
            width: 2.5rem;
            height: 2.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
        }
        
        .btn-danger:hover {
            background: #b91c1c;
        }
        
        .button-group {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
            margin: 2rem 0;
        }
        
        /* Results styles */
        .results {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 2rem;
            border-radius: 1rem;
            margin-top: 2rem;
            display: none;
        }
        
        .results-title {
            text-align: center;
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
        }
        
        .results-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
            margin-bottom: 1.5rem;
        }
        
        .result-item {
            text-align: center;
        }
        
        .result-value {
            font-size: 2.5rem;
            font-weight: 900;
            margin-bottom: 0.5rem;
        }
        
        .result-label {
            opacity: 0.9;
            font-size: 0.875rem;
        }
        
        .badges {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .badge {
            padding: 0.5rem 1rem;
            background: rgba(255,255,255,0.2);
            border-radius: 1.5rem;
            font-size: 0.875rem;
        }
        
        /* Footer styles */
        .footer {
            background: #111827;
            color: white;
            margin-top: 4rem;
        }
        
        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 3rem 1rem;
        }
        
        .footer-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }
        
        .footer-section h3 {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 1rem;
        }
        
        .footer-section h4 {
            font-weight: 600;
            margin-bottom: 1rem;
        }
        
        .footer-section p {
            color: #9ca3af;
            margin-bottom: 1rem;
        }
        
        .footer-links {
            list-style: none;
        }
        
        .footer-links li {
            margin-bottom: 0.5rem;
        }
        
        .footer-links a {
            color: #9ca3af;
            text-decoration: none;
            transition: color 0.2s;
        }
        
        .footer-links a:hover {
            color: white;
        }
        
        .footer-bottom {
            border-top: 1px solid #374151;
            padding-top: 2rem;
            text-align: center;
            color: #9ca3af;
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
            .nav {
                display: none;
            }
            
            .hero-title {
                font-size: 2rem;
            }
            
            .subject-row {
                grid-template-columns: 1fr;
                gap: 1rem;
            }
            
            .results-grid {
                grid-template-columns: 1fr;
            }
            
            .button-group {
                flex-direction: column;
                align-items: center;
            }
        }
        
        /* Ensure content is visible */
        .content-section {
            margin: 2rem 0;
            padding: 0 1rem;
        }
        
        .hidden {
            display: none;
        }
    </style>
</head>
<body>
    <div class="page-container">
        <!-- Header -->
        <header class="header">
            <div class="header-content">
                <a href="/" class="logo">Calculator Medie Facultate</a>
                <nav class="nav">
                    <div class="nav-item">
                        <a href="#" class="nav-link">
                            Tipuri de Pensii
                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </a>
                        <div class="dropdown">
                            <a href="#calculator" class="dropdown-item">Pensie la Limita de Vârstă</a>
                            <a href="#calculator" class="dropdown-item">Pensie Anticipată</a>
                            <a href="#calculator" class="dropdown-item">Pensie de Invaliditate</a>
                            <a href="#calculator" class="dropdown-item">Pensie de Urmaș</a>
                        </div>
                    </div>
                    <div class="nav-item">
                        <a href="#" class="nav-link">
                            Planificare
                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </a>
                        <div class="dropdown">
                            <a href="#about" class="dropdown-item">Ghid Planificare</a>
                            <a href="#about" class="dropdown-item">Vârsta de Pensionare</a>
                            <a href="#about" class="dropdown-item">Cumpărare Vechime</a>
                            <a href="#about" class="dropdown-item">Greșeli de Planificare</a>
                        </div>
                    </div>
                    <div class="nav-item">
                        <a href="#" class="nav-link">
                            Legislație
                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </a>
                        <div class="dropdown">
                            <a href="#faq" class="dropdown-item">Legea Pensiilor</a>
                            <a href="#faq" class="dropdown-item">Indexarea Pensiilor</a>
                            <a href="#faq" class="dropdown-item">Stagiu de Cotizare</a>
                            <a href="#faq" class="dropdown-item">Pilonul II vs III</a>
                        </div>
                    </div>
                </nav>
                <a href="#calculator" class="cta-button">Începe Calculul</a>
            </div>
        </header>

        <!-- Main Content -->
        <main class="main-content">
            <!-- Hero Section -->
            <section class="hero-section">
                <h1 class="hero-title">Calculator Medie Facultate</h1>
                <p class="hero-subtitle">🎓 Cel mai precis calculator medie facultate din România</p>
                <p class="hero-description">Calculează media generală și media ponderată cu credite ECTS în câteva secunde</p>
            </section>

            <!-- Calculator Section -->
            <section id="calculator" class="calculator-section">
                <h2 class="section-title">Calculator Medie Facultate cu Credite ECTS</h2>
                <p class="section-description">Introdu notele și creditele pentru calculul mediei generale și mediei ponderate</p>
                
                <div class="subject-container">
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
                            <div class="form-group">
                                <button type="button" class="btn btn-danger remove-subject hidden">×</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="button-group">
                    <button type="button" onclick="addSubject()" class="btn btn-secondary">+ Adaugă disciplină</button>
                    <button type="button" onclick="calculateGrades()" class="btn btn-primary">Calculează Media</button>
                    <button type="button" onclick="resetCalculator()" class="btn btn-secondary">Resetează</button>
                </div>

                <!-- Results Section -->
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

            <!-- Educational Content -->
            <section id="about" class="content-section">
                <div class="calculator-section">
                    <h2 class="section-title">Cum se calculează media la facultate în România</h2>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                        <div style="padding: 1.5rem; border-left: 4px solid #2563eb; background: #f8fafc; border-radius: 0.5rem;">
                            <h3 style="font-weight: 700; margin-bottom: 1rem; color: #1f2937;">Media Aritmetică Simplă</h3>
                            <p style="color: #6b7280; margin-bottom: 1rem;">Se calculează prin însumarea tuturor notelor și împărțirea la numărul de discipline:</p>
                            <div style="background: #e5e7eb; padding: 0.75rem; border-radius: 0.375rem; font-family: monospace; font-size: 0.875rem;">Media = (Nota1 + Nota2 + ... + NotaN) / N</div>
                        </div>
                        <div style="padding: 1.5rem; border-left: 4px solid #2563eb; background: #f8fafc; border-radius: 0.5rem;">
                            <h3 style="font-weight: 700; margin-bottom: 1rem; color: #1f2937;">Media Ponderată cu Credite ECTS</h3>
                            <p style="color: #6b7280; margin-bottom: 1rem;">Calculul oficial în sistemul universitar românesc, ținând cont de creditele fiecărei discipline:</p>
                            <div style="background: #e5e7eb; padding: 0.75rem; border-radius: 0.375rem; font-family: monospace; font-size: 0.875rem;">Media = Σ(Nota × Credite) / Σ(Credite)</div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- FAQ Section -->
            <section id="faq" class="content-section">
                <div class="calculator-section">
                    <h2 class="section-title">Întrebări Frecvente despre Calculul Mediei la Facultate</h2>
                    
                    <div style="margin-bottom: 1.5rem; padding: 1.5rem; border: 1px solid #e5e7eb; border-radius: 0.5rem;">
                        <div style="font-weight: 600; font-size: 1.125rem; margin-bottom: 0.75rem; color: #1f2937;">Ce este media ponderată cu credite ECTS?</div>
                        <div style="color: #6b7280; line-height: 1.6;">Media ponderată cu credite ECTS este calculul oficial folosit în sistemul universitar românesc. Fiecare disciplină are un număr de credite ECTS care reflectă importanța și volumul de muncă. Media se calculează multiplicând nota cu creditele pentru fiecare disciplină, apoi împărțind suma totală la numărul total de credite.</div>
                    </div>

                    <div style="margin-bottom: 1.5rem; padding: 1.5rem; border: 1px solid #e5e7eb; border-radius: 0.5rem;">
                        <div style="font-weight: 600; font-size: 1.125rem; margin-bottom: 0.75rem; color: #1f2937;">Cum se calculează media pentru bursă la facultate?</div>
                        <div style="color: #6b7280; line-height: 1.6;">Pentru bursa de studiu se folosește media ponderată cu credite ECTS din anul anterior sau semestrul precedent. Criteriile variază între universități, dar în general este necesară o medie minimă de 8.00-8.50 pentru bursa de merit. Consultă regulamentul specific al universității tale pentru detalii exacte.</div>
                    </div>

                    <div style="margin-bottom: 1.5rem; padding: 1.5rem; border: 1px solid #e5e7eb; border-radius: 0.5rem;">
                        <div style="font-weight: 600; font-size: 1.125rem; margin-bottom: 0.75rem; color: #1f2937;">Ce diferență este între media aritmetică și cea ponderată?</div>
                        <div style="color: #6b7280; line-height: 1.6;">Media aritmetică se calculează prin însumarea notelor împărțită la numărul de discipline, fără să țină cont de credite. Media ponderată consideră creditele ECTS, dând mai multă importanță disciplinelor cu mai multe credite. Media ponderată este cea oficială pentru toate procedurile administrative universitare.</div>
                    </div>

                    <div style="margin-bottom: 1.5rem; padding: 1.5rem; border: 1px solid #e5e7eb; border-radius: 0.5rem;">
                        <div style="font-weight: 600; font-size: 1.125rem; margin-bottom: 0.75rem; color: #1f2937;">Cum convertesc notele pentru mobilitate Erasmus?</div>
                        <div style="color: #6b7280; line-height: 1.6;">Pentru mobilități Erasmus, notele românești (1-10) se convertesc în sistemul ECTS (A, B, C, D, E, F). Conversiile standard: 10 = A (Excelent), 9 = B (Foarte bine), 8 = C (Bine), 7 = D (Satisfăcător), 6 = E (Suficient), sub 6 = F (Respins). Fiecare universitate poate avea propriile echivalențe specifice.</div>
                    </div>
                </div>
            </section>
        </main>

        <!-- Footer -->
        <footer class="footer">
            <div class="footer-content">
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
    </div>

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
                <div class="form-group">
                    <button type="button" onclick="removeSubject(this)" class="btn btn-danger remove-subject">×</button>
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

writeFileSync('dist/index.html', fixedHTML);

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

console.log('✅ Layout-fixed deployment completed!');
console.log('📁 Files created with robust layout structure');
console.log('🚀 Ready for deployment - should display complete calculator content');
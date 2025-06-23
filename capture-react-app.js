#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

console.log('Creating React app replica for Netlify...');

// Create dist directory structure
if (!fs.existsSync('dist/public')) {
  fs.mkdirSync('dist/public', { recursive: true });
}

// Create HTML file that replicates your React app design
const htmlContent = `<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator Medie Facultate - Calculator Note Universitate România</title>
    <meta name="description" content="Calculator medie facultate cu credite ECTS pentru studenții români. Calculează media ponderată, clasificarea academică și echivalența notelor ECTS.">
    <meta name="keywords" content="calculator medie facultate, credite ECTS, media ponderată, universitate România, note facultate">
    <link rel="canonical" href="https://calculatormediefacultate.com/">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; background: #fef7ed; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        
        /* Header - Orange/Yellow theme like Replit */
        header { background: linear-gradient(135deg, #ea580c 0%, #f97316 100%); color: white; padding: 1rem 0; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .header-content { display: flex; justify-content: space-between; align-items: center; }
        .logo { font-size: 1.8rem; font-weight: bold; display: flex; align-items: center; gap: 0.5rem; }
        .logo::before { content: "🎓"; }
        nav ul { display: flex; list-style: none; gap: 2rem; }
        nav a { color: white; text-decoration: none; padding: 0.5rem 1rem; border-radius: 6px; transition: background 0.3s; }
        nav a:hover { background: rgba(255,255,255,0.1); }
        
        /* Hero Section - Warm background */
        .hero { background: linear-gradient(135deg, #fef7ed 0%, #fed7aa 100%); padding: 4rem 0; text-align: center; }
        .hero h1 { font-size: 3rem; margin-bottom: 1rem; color: #9a3412; font-weight: 800; }
        .hero .subtitle { font-size: 1.3rem; color: #c2410c; margin-bottom: 2rem; max-width: 800px; margin-left: auto; margin-right: auto; }
        .hero-banner { background: #dbeafe; color: #1e40af; padding: 1rem 2rem; border-radius: 50px; display: inline-block; margin-bottom: 2rem; font-weight: 600; }
        
        /* Trust indicators */
        .trust-indicators { display: flex; justify-content: center; gap: 3rem; margin-top: 2rem; flex-wrap: wrap; }
        .indicator { display: flex; align-items: center; gap: 0.5rem; background: white; padding: 1rem 1.5rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        .indicator-icon { width: 24px; height: 24px; }
        .indicator-text { font-weight: 600; color: #9a3412; }
        
        /* Main content */
        .main-content { background: white; margin: 3rem 0; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.1); }
        
        /* Calculator section */
        .calculator-header { background: linear-gradient(135deg, #ea580c 0%, #f97316 100%); color: white; padding: 2rem; text-align: center; }
        .calculator-header h2 { font-size: 2rem; margin-bottom: 0.5rem; }
        .calculator-header p { opacity: 0.9; }
        
        .calculator-content { padding: 3rem; }
        .form-section { margin-bottom: 2rem; }
        .form-section h3 { color: #9a3412; margin-bottom: 1.5rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem; }
        .form-section h3::before { content: "📚"; }
        
        /* Subject rows */
        .subject-row { display: grid; grid-template-columns: 2fr 1fr 1fr auto; gap: 1rem; align-items: end; margin-bottom: 1rem; padding: 1.5rem; background: #fef7ed; border-radius: 12px; border: 2px solid #fed7aa; }
        .form-group { display: flex; flex-direction: column; }
        label { font-weight: 600; margin-bottom: 0.5rem; color: #9a3412; font-size: 0.95rem; }
        input, select { padding: 0.875rem; border: 2px solid #fed7aa; border-radius: 8px; font-size: 1rem; transition: border-color 0.3s, box-shadow 0.3s; background: white; }
        input:focus, select:focus { outline: none; border-color: #ea580c; box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.1); }
        
        /* Buttons */
        button { background: #ea580c; color: white; padding: 0.875rem 1.5rem; border: none; border-radius: 8px; font-size: 1rem; cursor: pointer; font-weight: 600; transition: all 0.3s; }
        button:hover { background: #c2410c; transform: translateY(-1px); }
        .btn-secondary { background: #6b7280; }
        .btn-secondary:hover { background: #4b5563; }
        .btn-add { background: #059669; margin-top: 1rem; }
        .btn-add:hover { background: #047857; }
        .btn-calculate { width: 100%; margin-top: 2rem; padding: 1rem; font-size: 1.1rem; background: linear-gradient(135deg, #ea580c 0%, #f97316 100%); }
        
        /* Results */
        .results { background: linear-gradient(135deg, #fef7ed 0%, #fed7aa 100%); border: 3px solid #ea580c; border-radius: 16px; padding: 2.5rem; margin: 2rem 0; }
        .results h3 { text-align: center; margin-bottom: 2rem; color: #9a3412; font-size: 1.5rem; }
        .result-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; }
        .result-card { background: white; padding: 2rem; border-radius: 12px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border: 2px solid #fed7aa; }
        .result-value { font-size: 2.5rem; font-weight: bold; color: #ea580c; margin-bottom: 0.5rem; }
        .result-label { color: #9a3412; font-weight: 600; }
        .result-description { font-size: 0.9rem; color: #c2410c; margin-top: 0.5rem; }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .hero h1 { font-size: 2.2rem; }
            .subject-row { grid-template-columns: 1fr; gap: 0.5rem; }
            nav ul { flex-direction: column; gap: 0.5rem; }
            .calculator-content { padding: 2rem 1rem; }
            .trust-indicators { flex-direction: column; align-items: center; gap: 1rem; }
        }
        
        /* Animations */
        .fade-in { opacity: 0; animation: fadeIn 0.6s ease-in-out forwards; }
        @keyframes fadeIn { to { opacity: 1; } }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <div class="header-content">
                <div class="logo">Calculator Medie Facultate</div>
                <nav>
                    <ul>
                        <li><a href="#calculator">Calculator</a></li>
                        <li><a href="#despre">Despre</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#blog">Blog</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <section class="hero">
        <div class="container">
            <div class="hero-banner">🎯 Cel mai precis calculator medie facultate din România</div>
            
            <h1>calculator <span style="color: #ea580c;">Medie</span> Facultate</h1>
            <p class="subtitle">Calculează media generală și media ponderată cu credite ECTS în câteva secunde. 
            Sistem universitar românesc - precis și rapid.</p>
            
            <div class="trust-indicators">
                <div class="indicator">
                    <span class="indicator-icon">🔒</span>
                    <span class="indicator-text">100% Sigur</span>
                </div>
                <div class="indicator">
                    <span class="indicator-icon">⭐</span>
                    <span class="indicator-text">Validat Expert</span>
                </div>
                <div class="indicator">
                    <span class="indicator-icon">🕒</span>
                    <span class="indicator-text">Actualizat 2025</span>
                </div>
                <div class="indicator">
                    <span class="indicator-icon">👥</span>
                    <span class="indicator-text">50k+ Utilizatori</span>
                </div>
            </div>
        </div>
    </section>

    <main class="container">
        <div class="main-content" id="calculator">
            <div class="calculator-header">
                <h2>🧮 Calculator Medie Facultate cu Credite ECTS</h2>
                <p>Introdu notele și creditele pentru calculul mediei generale și mediei ponderate</p>
            </div>
            
            <div class="calculator-content">
                <div class="form-section">
                    <h3>Materii și Note</h3>
                    <div id="subjects-list">
                        <div class="subject-row">
                            <div class="form-group">
                                <label>Numele Materiei</label>
                                <input type="text" placeholder="Ex: Matematică, Informatică, Fizică" class="subject-name">
                            </div>
                            <div class="form-group">
                                <label>Nota (1-10)</label>
                                <input type="number" min="1" max="10" step="0.01" placeholder="8.50" class="subject-grade">
                            </div>
                            <div class="form-group">
                                <label>Credite ECTS</label>
                                <input type="number" min="1" max="30" placeholder="6" class="subject-credits">
                            </div>
                            <button type="button" class="btn-secondary" onclick="removeSubject(this)" title="Șterge materia">✗</button>
                        </div>
                    </div>
                    <button type="button" class="btn-add" onclick="addSubject()">➕ Adaugă Materie Nouă</button>
                </div>

                <button type="button" class="btn-calculate" onclick="calculateGrades()">🎯 Calculează Media și Clasificarea</button>

                <div class="results" id="results" style="display: none;">
                    <h3>📊 Rezultate Calcul Media</h3>
                    <div class="result-grid">
                        <div class="result-card">
                            <div class="result-value" id="weighted-average">-</div>
                            <div class="result-label">Media Ponderată</div>
                            <div class="result-description">Calculată cu credite ECTS</div>
                        </div>
                        <div class="result-card">
                            <div class="result-value" id="ects-grade">-</div>
                            <div class="result-label">Nota ECTS</div>
                            <div class="result-description">Standardul European</div>
                        </div>
                        <div class="result-card">
                            <div class="result-value" id="classification">-</div>
                            <div class="result-label">Clasificare Academică</div>
                            <div class="result-description">Performanța academică</div>
                        </div>
                    </div>
                    <div style="text-align: center; margin-top: 2rem;">
                        <p style="color: #9a3412;"><strong>Total credite ECTS:</strong> <span id="total-credits">0</span></p>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <script>
        let subjectCount = 1;

        function addSubject() {
            const subjectsList = document.getElementById('subjects-list');
            const newSubject = document.createElement('div');
            newSubject.className = 'subject-row fade-in';
            newSubject.innerHTML = \`
                <div class="form-group">
                    <label>Numele Materiei</label>
                    <input type="text" placeholder="Ex: Programare, Statistică" class="subject-name">
                </div>
                <div class="form-group">
                    <label>Nota (1-10)</label>
                    <input type="number" min="1" max="10" step="0.01" placeholder="8.50" class="subject-grade">
                </div>
                <div class="form-group">
                    <label>Credite ECTS</label>
                    <input type="number" min="1" max="30" placeholder="6" class="subject-credits">
                </div>
                <button type="button" class="btn-secondary" onclick="removeSubject(this)" title="Șterge materia">✗</button>
            \`;
            subjectsList.appendChild(newSubject);
            subjectCount++;
            newSubject.querySelector('.subject-name').focus();
        }

        function removeSubject(button) {
            if (subjectCount > 1) {
                button.parentElement.remove();
                subjectCount--;
            } else {
                alert('Trebuie să ai cel puțin o materie pentru calculul mediei.');
            }
        }

        function calculateGrades() {
            const subjects = document.querySelectorAll('.subject-row');
            let totalPoints = 0;
            let totalCredits = 0;
            let validSubjects = 0;

            subjects.forEach(subject => {
                const name = subject.querySelector('.subject-name').value.trim();
                const grade = parseFloat(subject.querySelector('.subject-grade').value);
                const credits = parseInt(subject.querySelector('.subject-credits').value);

                if (name && !isNaN(grade) && !isNaN(credits) && grade >= 1 && grade <= 10 && credits > 0) {
                    totalPoints += grade * credits;
                    totalCredits += credits;
                    validSubjects++;
                }
            });

            if (validSubjects === 0) {
                alert('Vă rugăm să introduceți cel puțin o materie validă cu nume, notă (1-10) și credite ECTS.');
                return;
            }

            const weightedAverage = totalPoints / totalCredits;
            const ectsGrade = getECTSGrade(weightedAverage);
            const classification = getClassification(weightedAverage);

            const resultsDiv = document.getElementById('results');
            resultsDiv.style.display = 'block';
            resultsDiv.classList.add('fade-in');

            document.getElementById('weighted-average').textContent = weightedAverage.toFixed(2);
            document.getElementById('ects-grade').textContent = ectsGrade;
            document.getElementById('classification').textContent = classification;
            document.getElementById('total-credits').textContent = totalCredits;

            resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        function getECTSGrade(average) {
            if (average >= 9.0) return 'A (Excelent)';
            if (average >= 8.0) return 'B (Foarte Bine)';
            if (average >= 7.0) return 'C (Bine)';
            if (average >= 6.0) return 'D (Satisfăcător)';
            if (average >= 5.0) return 'E (Suficient)';
            return 'F (Respins)';
        }

        function getClassification(average) {
            if (average >= 9.50) return 'Summa Cum Laude';
            if (average >= 9.00) return 'Magna Cum Laude';
            if (average >= 8.50) return 'Cum Laude';
            if (average >= 8.00) return 'Bine';
            if (average >= 7.00) return 'Satisfăcător';
            if (average >= 6.00) return 'Suficient';
            return 'Insuficient';
        }

        document.addEventListener('DOMContentLoaded', function() {
            console.log('Calculator Medie Facultate loaded successfully');
        });
    </script>
</body>
</html>`;

// Write the HTML file
fs.writeFileSync('dist/public/index.html', htmlContent);

// Create Netlify configuration files
fs.writeFileSync('dist/public/_redirects', '/*    /index.html   200');
fs.writeFileSync('dist/public/robots.txt', `User-agent: *
Allow: /

Sitemap: https://calculatormediefacultate.com/sitemap.xml`);
fs.writeFileSync('dist/public/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://calculatormediefacultate.com/</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`);

console.log('React app replica created successfully!');
console.log('Files created in dist/public:');
const files = fs.readdirSync('dist/public');
files.forEach(file => {
  const stats = fs.statSync(`dist/public/${file}`);
  const sizeKB = Math.round(stats.size / 1024);
  console.log(`  ${file} (${sizeKB}KB)`);
});
console.log('Ready for Netlify deployment to calculatormediefacultate.com');
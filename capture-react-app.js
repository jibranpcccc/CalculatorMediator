#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

console.log('Creating complete website for Netlify...');

// Create dist directory structure
if (!fs.existsSync('dist/public')) {
  fs.mkdirSync('dist/public', { recursive: true });
}

// Common header and footer for all pages
const headerHTML = `
<header class="header">
  <div class="container">
    <div class="header-content">
      <div class="logo">🎓 Calculator Medie Facultate</div>
      <nav class="nav">
        <ul>
          <li><a href="/">Acasă</a></li>
          <li class="dropdown">
            <a href="/planificarea-pensiei">Planificarea Pensiei <span class="arrow">▼</span></a>
            <ul class="dropdown-menu">
              <li><a href="/planificare-ghid">Ghid Complet Planificare</a></li>
              <li><a href="/greseli-planificare">Top 5 Greșeli de Evitat</a></li>
              <li><a href="/pilonul-2-vs-3">Pilonul II vs III</a></li>
              <li><a href="/strategii-investitii">Strategii de Investiții</a></li>
              <li><a href="/calculator-pilon3">Calculator Pilon III</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="/tipuri-de-pensii">Tipuri de Pensii <span class="arrow">▼</span></a>
            <ul class="dropdown-menu">
              <li><a href="/tipuri-pensii-ghid">Ghid Tipuri de Pensii</a></li>
              <li><a href="/pensie-limita-varsta">Pensia pentru Limită de Vârstă</a></li>
              <li><a href="/pensie-anticipata">Pensia Anticipată Parțială</a></li>
              <li><a href="/pensie-urmas">Pensia de Urmaș</a></li>
              <li><a href="/pensie-invaliditate">Pensia de Invaliditate</a></li>
              <li><a href="/calculator-anticipata">Calculator Pensie Anticipată</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="/legislatie-si-resurse">Legislație & Resurse <span class="arrow">▼</span></a>
            <ul class="dropdown-menu">
              <li><a href="/legea-pensiilor">Legea Pensiilor 2025</a></li>
              <li><a href="/varsta-pensionare">Vârsta Standard de Pensionare</a></li>
              <li><a href="/stagiu-cotizare">Stagiul de Cotizare</a></li>
              <li><a href="/indexarea-pensiilor">Indexarea Pensiilor</a></li>
              <li><a href="/cumparare-vechime">Cumpărarea Vechimii</a></li>
            </ul>
          </li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div class="mobile-menu">
        <button class="mobile-toggle">☰</button>
      </div>
    </div>
  </div>
</header>`;

const footerHTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-section">
        <h3>Calculator Medie Facultate</h3>
        <p>Instrumentul tău pentru calcularea mediei universitare cu credite ECTS în România. Simplu, precis și gratuit.</p>
      </div>
      <div class="footer-section">
        <h3>Calculatoare</h3>
        <ul>
          <li><a href="/">Calculator Principal</a></li>
          <li><a href="/calculator-anticipata">Pensie Anticipată</a></li>
          <li><a href="/calculator-pilon3">Pilon III</a></li>
          <li><a href="/planificator">Planificator Financiar</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Ghiduri</h3>
        <ul>
          <li><a href="/planificare-ghid">Ghid Planificare</a></li>
          <li><a href="/tipuri-pensii-ghid">Tipuri de Pensii</a></li>
          <li><a href="/legea-pensiilor">Legea Pensiilor</a></li>
          <li><a href="/faq">Întrebări Frecvente</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Contact</h3>
        <ul>
          <li><a href="mailto:contact@calculatormediefacultate.com">Email: contact@calculatormediefacultate.com</a></li>
          <li><a href="/confidentialitate">Politica de Confidențialitate</a></li>
          <li><a href="/termeni">Termeni și Condiții</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 Calculator Medie Facultate. Toate drepturile rezervate.</p>
    </div>
  </div>
</footer>`;

const commonCSS = `
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; background: #fef7ed; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }

/* Header Styles */
.header { background: linear-gradient(135deg, #ea580c 0%, #f97316 100%); color: white; padding: 1rem 0; box-shadow: 0 2px 10px rgba(0,0,0,0.1); position: sticky; top: 0; z-index: 100; }
.header-content { display: flex; justify-content: space-between; align-items: center; }
.logo { font-size: 1.8rem; font-weight: bold; }
.nav ul { display: flex; list-style: none; gap: 2rem; }
.nav a { color: white; text-decoration: none; padding: 0.5rem 1rem; border-radius: 6px; transition: background 0.3s; }
.nav a:hover { background: rgba(255,255,255,0.1); }

/* Dropdown Menus */
.dropdown { position: relative; }
.dropdown-menu { display: none; position: absolute; top: 100%; left: 0; background: white; color: #333; min-width: 250px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); border-radius: 8px; padding: 0.5rem 0; z-index: 200; }
.dropdown:hover .dropdown-menu { display: block; }
.dropdown-menu li { list-style: none; }
.dropdown-menu a { color: #333; padding: 0.75rem 1.5rem; display: block; transition: background 0.3s; }
.dropdown-menu a:hover { background: #fef7ed; color: #ea580c; }
.arrow { font-size: 0.8rem; margin-left: 0.5rem; }

/* Mobile Menu */
.mobile-menu { display: none; }
.mobile-toggle { background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer; }

/* Main Content */
.main-content { min-height: 80vh; padding: 2rem 0; }
.hero { background: linear-gradient(135deg, #fef7ed 0%, #fed7aa 100%); padding: 4rem 0; text-align: center; }
.hero h1 { font-size: 3rem; margin-bottom: 1rem; color: #9a3412; font-weight: 800; }
.hero .subtitle { font-size: 1.3rem; color: #c2410c; margin-bottom: 2rem; max-width: 800px; margin-left: auto; margin-right: auto; }

/* Cards */
.card { background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border: 2px solid #fed7aa; margin-bottom: 2rem; }
.card h2 { color: #9a3412; margin-bottom: 1rem; }
.card p { color: #6b7280; line-height: 1.7; }

/* Buttons */
.btn { background: #ea580c; color: white; padding: 0.875rem 1.5rem; border: none; border-radius: 8px; font-size: 1rem; cursor: pointer; font-weight: 600; transition: all 0.3s; text-decoration: none; display: inline-block; }
.btn:hover { background: #c2410c; transform: translateY(-1px); }
.btn-secondary { background: #6b7280; }
.btn-secondary:hover { background: #4b5563; }

/* Footer */
.footer { background: #1f2937; color: white; padding: 3rem 0; margin-top: 4rem; }
.footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 3rem; }
.footer-section h3 { margin-bottom: 1rem; color: #f9fafb; }
.footer-section ul { list-style: none; }
.footer-section li { margin-bottom: 0.5rem; }
.footer-section a { color: #d1d5db; text-decoration: none; transition: color 0.3s; }
.footer-section a:hover { color: #f9fafb; }
.footer-bottom { border-top: 1px solid #374151; margin-top: 2rem; padding-top: 2rem; text-align: center; color: #9ca3af; }

/* Responsive */
@media (max-width: 768px) {
  .nav { display: none; }
  .mobile-menu { display: block; }
  .hero h1 { font-size: 2.2rem; }
  .card { padding: 1.5rem; }
  .footer-grid { grid-template-columns: 1fr; gap: 2rem; }
}

/* Calculator Specific */
.calculator-form { background: #fef7ed; border-radius: 12px; padding: 2rem; border: 2px solid #fed7aa; }
.form-group { margin-bottom: 1rem; }
.form-group label { display: block; font-weight: 600; margin-bottom: 0.5rem; color: #9a3412; }
.form-group input, .form-group select { width: 100%; padding: 0.875rem; border: 2px solid #fed7aa; border-radius: 8px; font-size: 1rem; }
.form-group input:focus, .form-group select:focus { outline: none; border-color: #ea580c; }

.subject-row { display: grid; grid-template-columns: 2fr 1fr 1fr auto; gap: 1rem; align-items: end; margin-bottom: 1rem; padding: 1rem; background: white; border-radius: 8px; border: 1px solid #fed7aa; }

.results { background: linear-gradient(135deg, #fef7ed 0%, #fed7aa 100%); border: 3px solid #ea580c; border-radius: 16px; padding: 2rem; margin: 2rem 0; }
.result-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; }
.result-card { background: white; padding: 1.5rem; border-radius: 8px; text-align: center; border: 2px solid #fed7aa; }
.result-value { font-size: 2rem; font-weight: bold; color: #ea580c; }
.result-label { color: #9a3412; font-weight: 600; }

/* FAQ Styles */
.faq-item { background: white; border-radius: 8px; margin-bottom: 1rem; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05); border: 1px solid #fed7aa; }
.faq-question { background: #fef7ed; padding: 1.5rem; font-weight: 600; cursor: pointer; display: flex; justify-content: space-between; align-items: center; }
.faq-question:hover { background: #fed7aa; }
.faq-answer { padding: 1.5rem; display: none; border-top: 1px solid #fed7aa; }
.faq-toggle { color: #ea580c; font-weight: bold; }
`;

// Generate page template
function generatePage(title, content, description = '') {
  return `<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - Calculator Medie Facultate</title>
    <meta name="description" content="${description || 'Calculator medie facultate cu credite ECTS pentru studenții români. Calculează media ponderată, clasificarea academică și echivalența notelor ECTS.'}">
    <meta name="keywords" content="calculator medie facultate, credite ECTS, media ponderată, universitate România">
    <link rel="canonical" href="https://calculatormediefacultate.com/">
    <style>${commonCSS}</style>
</head>
<body>
    ${headerHTML}
    <main class="main-content">
        <div class="container">
            ${content}
        </div>
    </main>
    ${footerHTML}
    <script>
        // Mobile menu toggle
        document.querySelector('.mobile-toggle')?.addEventListener('click', function() {
            const nav = document.querySelector('.nav');
            nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
        });
        
        // FAQ toggle
        function toggleFAQ(element) {
            const answer = element.nextElementSibling;
            const toggle = element.querySelector('.faq-toggle');
            const isOpen = answer.style.display === 'block';
            
            document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
            document.querySelectorAll('.faq-toggle').forEach(tog => tog.textContent = '+');
            
            if (!isOpen) {
                answer.style.display = 'block';
                toggle.textContent = '−';
            }
        }
    </script>
</body>
</html>`;
}
// Create homepage content
const homeContent = `
<section class="hero">
    <div class="hero-banner" style="background: #dbeafe; color: #1e40af; padding: 1rem 2rem; border-radius: 50px; display: inline-block; margin-bottom: 2rem; font-weight: 600;">
        🎯 Cel mai precis calculator medie facultate din România
    </div>
    
    <h1>calculator <span style="color: #ea580c;">Medie</span> Facultate</h1>
    <p class="subtitle">Calculează media generală și media ponderată cu credite ECTS în câteva secunde. 
    Sistem universitar românesc - precis și rapid.</p>
    
    <div style="display: flex; justify-content: center; gap: 3rem; margin-top: 2rem; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 0.5rem; background: white; padding: 1rem 1.5rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <span>🔒</span>
            <span style="font-weight: 600; color: #9a3412;">100% Sigur</span>
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem; background: white; padding: 1rem 1.5rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <span>⭐</span>
            <span style="font-weight: 600; color: #9a3412;">Validat Expert</span>
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem; background: white; padding: 1rem 1.5rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <span>🕒</span>
            <span style="font-weight: 600; color: #9a3412;">Actualizat 2025</span>
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem; background: white; padding: 1rem 1.5rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <span>👥</span>
            <span style="font-weight: 600; color: #9a3412;">50k+ Utilizatori</span>
        </div>
    </div>
</section>

<div class="card">
    <div style="background: linear-gradient(135deg, #ea580c 0%, #f97316 100%); color: white; padding: 2rem; text-align: center; border-radius: 12px; margin-bottom: 2rem;">
        <h2 style="color: white; margin-bottom: 0.5rem;">🧮 Calculator Medie Facultate cu Credite ECTS</h2>
        <p style="opacity: 0.9; color: white;">Introdu notele și creditele pentru calculul mediei generale și mediei ponderate</p>
    </div>
    
    <div class="calculator-form">
        <h3 style="color: #9a3412; margin-bottom: 1.5rem;">📚 Materii și Note</h3>
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
        <button type="button" class="btn" onclick="addSubject()" style="background: #059669; margin-top: 1rem;">➕ Adaugă Materie Nouă</button>
        
        <button type="button" class="btn" onclick="calculateGrades()" style="width: 100%; margin-top: 2rem; padding: 1rem; font-size: 1.1rem;">🎯 Calculează Media și Clasificarea</button>

        <div class="results" id="results" style="display: none;">
            <h3 style="text-align: center; margin-bottom: 2rem; color: #9a3412;">📊 Rezultate Calcul Media</h3>
            <div class="result-grid">
                <div class="result-card">
                    <div class="result-value" id="weighted-average">-</div>
                    <div class="result-label">Media Ponderată</div>
                    <div style="font-size: 0.9rem; color: #c2410c; margin-top: 0.5rem;">Calculată cu credite ECTS</div>
                </div>
                <div class="result-card">
                    <div class="result-value" id="ects-grade">-</div>
                    <div class="result-label">Nota ECTS</div>
                    <div style="font-size: 0.9rem; color: #c2410c; margin-top: 0.5rem;">Standardul European</div>
                </div>
                <div class="result-card">
                    <div class="result-value" id="classification">-</div>
                    <div class="result-label">Clasificare Academică</div>
                    <div style="font-size: 0.9rem; color: #c2410c; margin-top: 0.5rem;">Performanța academică</div>
                </div>
            </div>
            <div style="text-align: center; margin-top: 2rem;">
                <p style="color: #9a3412;"><strong>Total credite ECTS:</strong> <span id="total-credits">0</span></p>
            </div>
        </div>
    </div>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin: 3rem 0;">
    <div class="card">
        <h3 style="color: #9a3412; margin-bottom: 1rem;">🎯 Planificarea Pensiei</h3>
        <p>Ghiduri complete pentru planificarea strategică a pensiei și evitarea greșelilor costisitoare.</p>
        <a href="/planificarea-pensiei" class="btn" style="margin-top: 1rem;">Explorează</a>
    </div>
    <div class="card">
        <h3 style="color: #9a3412; margin-bottom: 1rem;">📋 Tipuri de Pensii</h3>
        <p>Înțelege toate tipurile de pensii disponibile și alege strategia potrivită pentru tine.</p>
        <a href="/tipuri-de-pensii" class="btn" style="margin-top: 1rem;">Explorează</a>
    </div>
    <div class="card">
        <h3 style="color: #9a3412; margin-bottom: 1rem;">⚖️ Legislație & Resurse</h3>
        <p>Rămâi la curent cu legislația actuală și înțelege pe deplin drepturile și obligațiile tale.</p>
        <a href="/legislatie-si-resurse" class="btn" style="margin-top: 1rem;">Explorează</a>
    </div>
</div>

<script>
    let subjectCount = 1;

    function addSubject() {
        const subjectsList = document.getElementById('subjects-list');
        const newSubject = document.createElement('div');
        newSubject.className = 'subject-row';
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
</script>
`;

// Create all page contents
const pages = {
  'index.html': generatePage('Calculator Medie Facultate cu Credite ECTS', homeContent, 'Calculator medie facultate gratuit cu credite ECTS pentru studenții români. Calculează media ponderată, clasificarea academică și echivalența notelor.'),
  
  'blog.html': generatePage('Blog - Ghiduri și Articole Educaționale', `
    <h1>Blog - Ghiduri și Articole</h1>
    <div class="card">
      <h2>Articole Recente</h2>
      <div style="display: grid; gap: 2rem; margin-top: 2rem;">
        <div style="border-left: 4px solid #ea580c; padding-left: 1rem;">
          <h3><a href="/articol/ghid-calcul-medie" style="color: #9a3412;">Ghidul complet pentru calculul mediei la facultate</a></h3>
          <p>Învață cum să calculezi corect media cu credite ECTS și să înțelegi sistemul de notare universitar românesc.</p>
          <small style="color: #6b7280;">20 Ianuarie 2025</small>
        </div>
        <div style="border-left: 4px solid #ea580c; padding-left: 1rem;">
          <h3><a href="/articol/sistem-ects" style="color: #9a3412;">Sistemul de credite ECTS în universitățile românești</a></h3>
          <p>Totul despre sistemul European Credit Transfer System și cum funcționează în România.</p>
          <small style="color: #6b7280;">18 Ianuarie 2025</small>
        </div>
      </div>
    </div>
  `),
  
  'contact.html': generatePage('Contact - Calculator Medie Facultate', `
    <h1>Contact</h1>
    <div class="card">
      <h2>Contactează-ne</h2>
      <p>Pentru întrebări despre calculatoarele noastre sau suport tehnic, nu ezita să ne contactezi.</p>
      <div style="margin: 2rem 0;">
        <p><strong>Email:</strong> <a href="mailto:contact@calculatormediefacultate.com">contact@calculatormediefacultate.com</a></p>
        <p><strong>Program:</strong> Luni - Vineri, 9:00 - 17:00</p>
      </div>
      <div class="calculator-form">
        <h3>Trimite un mesaj</h3>
        <div class="form-group">
          <label>Nume</label>
          <input type="text" placeholder="Numele tău">
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" placeholder="email@exemplu.com">
        </div>
        <div class="form-group">
          <label>Mesaj</label>
          <textarea rows="5" placeholder="Scrie mesajul tău aici..." style="width: 100%; padding: 0.875rem; border: 2px solid #fed7aa; border-radius: 8px; font-size: 1rem; resize: vertical;"></textarea>
        </div>
        <button class="btn">Trimite Mesajul</button>
      </div>
    </div>
  `),
  
  'faq.html': generatePage('Întrebări Frecvente - FAQ', `
    <h1>Întrebări Frecvente</h1>
    <div class="card">
      <h2>Răspunsuri la cele mai comune întrebări</h2>
      <div style="margin-top: 2rem;">
        <div class="faq-item">
          <div class="faq-question" onclick="toggleFAQ(this)">
            Cum se calculează media ponderată cu credite ECTS?
            <span class="faq-toggle">+</span>
          </div>
          <div class="faq-answer">
            Media ponderată se calculează înmulțind fiecare notă cu numărul de credite ECTS corespunzător, adunând toate produsele, apoi împărțind la totalul creditelor ECTS. Formula: Σ(nota × credite) / Σ(credite).
          </div>
        </div>
        <div class="faq-item">
          <div class="faq-question" onclick="toggleFAQ(this)">
            Ce înseamnă clasificarea academică în România?
            <span class="faq-toggle">+</span>
          </div>
          <div class="faq-answer">
            Clasificarea academică este o evaluare calitativă: Summa Cum Laude (9.50-10.00), Magna Cum Laude (9.00-9.49), Cum Laude (8.50-8.99), Bine (8.00-8.49), Satisfăcător (7.00-7.99), Suficient (6.00-6.99).
          </div>
        </div>
        <div class="faq-item">
          <div class="faq-question" onclick="toggleFAQ(this)">
            Cum funcționează sistemul de note ECTS?
            <span class="faq-toggle">+</span>
          </div>
          <div class="faq-answer">
            Sistemul ECTS folosește scale de la A la F: A (Excelent, 9.0-10.0), B (Foarte bine, 8.0-8.9), C (Bine, 7.0-7.9), D (Satisfăcător, 6.0-6.9), E (Suficient, 5.0-5.9), F (Respins, sub 5.0).
          </div>
        </div>
      </div>
    </div>
  `),

  'despre.html': generatePage('Despre Noi - Calculator Medie Facultate', `
    <h1>Despre Calculator Medie Facultate</h1>
    <div class="card">
      <h2>Misiunea Noastră</h2>
      <p>Calculator Medie Facultate este instrumentul de încredere pentru studenții români care doresc să calculeze corect media generală și media ponderată cu credite ECTS.</p>
      <p>Platforma noastră oferă:</p>
      <ul style="margin: 1rem 0; padding-left: 2rem;">
        <li>Calculatoare precise bazate pe legislația românească</li>
        <li>Sistem de clasificare academică conform standardelor naționale</li>
        <li>Conversie ECTS pentru programele internaționale</li>
        <li>Ghiduri educaționale pentru studenți</li>
      </ul>
    </div>
  `),

  'confidentialitate.html': generatePage('Politica de Confidențialitate', `
    <h1>Politica de Confidențialitate</h1>
    <div class="card">
      <h2>Protecția Datelor Tale</h2>
      <p>Calculator Medie Facultate respectă confidențialitatea utilizatorilor și nu stochează date personale sensibile.</p>
      <h3>Informații Colectate</h3>
      <p>Calculele se efectuează local în browser și nu sunt transmise serverelor noastre.</p>
      <h3>Cookies</h3>
      <p>Utilizăm cookies pentru îmbunătățirea experienței utilizatorului și analiza traficului.</p>
    </div>
  `),

  'termeni.html': generatePage('Termeni și Condiții', `
    <h1>Termeni și Condiții</h1>
    <div class="card">
      <h2>Condiții de Utilizare</h2>
      <p>Prin utilizarea Calculator Medie Facultate, accepți următorii termeni:</p>
      <ul style="margin: 1rem 0; padding-left: 2rem;">
        <li>Calculatoarele sunt oferite cu scop informativ</li>
        <li>Rezultatele sunt orientative și pot varia</li>
        <li>Nu garantăm acuratețea 100% a calculelor</li>
        <li>Utilizarea este gratuită pentru scopuri educaționale</li>
      </ul>
    </div>
  `)
};

// Add more detailed pages for each navigation section
const additionalPages = {
  'planificarea-pensiei.html': generatePage('Planificarea Pensiei - Ghid Complet', `
    <h1>Planificarea Pensiei</h1>
    <div class="card">
      <h2>Ghid Complet pentru Planificarea Pensiei în România</h2>
      <p>Planificarea pensiei este unul dintre cele mai importante aspecte ale vieții financiare. În România, sistemul de pensii se bazează pe trei piloni fundamentali.</p>
      <h3>Pilonii Sistemului de Pensii</h3>
      <ul style="margin: 1rem 0; padding-left: 2rem;">
        <li><strong>Pilonul I:</strong> Sistemul public de pensii (CAS)</li>
        <li><strong>Pilonul II:</strong> Pensiile private obligatorii</li>
        <li><strong>Pilonul III:</strong> Pensiile private facultative</li>
      </ul>
    </div>
  `),

  'tipuri-de-pensii.html': generatePage('Tipuri de Pensii în România', `
    <h1>Tipuri de Pensii în România</h1>
    <div class="card">
      <h2>Toate Tipurile de Pensii Disponibile</h2>
      <p>Sistemul românesc de pensii oferă mai multe tipuri de pensii, fiecare cu condiții specifice de acordare.</p>
      <h3>Principalele Tipuri de Pensii</h3>
      <ul style="margin: 1rem 0; padding-left: 2rem;">
        <li><strong>Pensia pentru limită de vârstă:</strong> Pensia standard la vârsta de pensionare</li>
        <li><strong>Pensia anticipată:</strong> Pentru persoanele cu stagiu complet de cotizare</li>
        <li><strong>Pensia de invaliditate:</strong> Pentru persoanele cu capacitate de muncă redusă</li>
        <li><strong>Pensia de urmaș:</strong> Pentru familiile celor decedați</li>
      </ul>
    </div>
  `),

  'legislatie-si-resurse.html': generatePage('Legislație și Resurse Pensii', `
    <h1>Legislație și Resurse</h1>
    <div class="card">
      <h2>Cadrul Legal al Sistemului de Pensii</h2>
      <p>Legislația românească privind pensiile este în continuă actualizare pentru a se adapta la schimbările demografice și economice.</p>
      <h3>Acte Normative Principale</h3>
      <ul style="margin: 1rem 0; padding-left: 2rem;">
        <li><strong>Legea 263/2010:</strong> Legea pensiilor</li>
        <li><strong>Legea 411/2004:</strong> Pensiile private obligatorii</li>
        <li><strong>Legea 204/2006:</strong> Pensiile private facultative</li>
      </ul>
    </div>
  `)
};

// Merge all pages
Object.assign(pages, additionalPages);

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

// Write all pages
Object.entries(pages).forEach(([filename, content]) => {
  fs.writeFileSync(`dist/public/${filename}`, content);
});

// Create Netlify configuration files
fs.writeFileSync('dist/public/_redirects', `/*    /index.html   200

# Page redirects
/planificarea-pensiei    /planificarea-pensiei.html    200
/tipuri-de-pensii        /tipuri-de-pensii.html        200
/legislatie-si-resurse   /legislatie-si-resurse.html   200
/blog                    /blog.html                    200
/contact                 /contact.html                 200
/faq                     /faq.html                     200
/despre                  /despre.html                  200
/confidentialitate       /confidentialitate.html       200
/termeni                 /termeni.html                 200`);

fs.writeFileSync('dist/public/robots.txt', `User-agent: *
Allow: /

Sitemap: https://calculatormediefacultate.com/sitemap.xml`);

// Create comprehensive sitemap
const sitemapUrls = Object.keys(pages).map(filename => {
  const path = filename === 'index.html' ? '' : filename.replace('.html', '');
  return `  <url>
    <loc>https://calculatormediefacultate.com/${path}</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${filename === 'index.html' ? '1.0' : '0.8'}</priority>
  </url>`;
}).join('\n');

fs.writeFileSync('dist/public/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>`);

console.log('Complete website created successfully!');
console.log('Files created in dist/public:');
const files = fs.readdirSync('dist/public');
files.forEach(file => {
  const stats = fs.statSync(`dist/public/${file}`);
  const sizeKB = Math.round(stats.size / 1024);
  console.log(`  ${file} (${sizeKB}KB)`);
});
console.log(`Total pages: ${Object.keys(pages).length}`);
console.log('Ready for Netlify deployment to calculatormediefacultate.com');
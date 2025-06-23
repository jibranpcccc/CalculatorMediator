#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

console.log('Creating simplified build for Netlify...');

// Create dist/public directory
if (!fs.existsSync('dist/public')) {
  fs.mkdirSync('dist/public', { recursive: true });
}

// Copy essential static files
if (fs.existsSync('public')) {
  const copyRecursiveSync = (src, dest) => {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
      if (!fs.existsSync(dest)) fs.mkdirSync(dest);
      fs.readdirSync(src).forEach(childItemName => {
        copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
      });
    } else {
      fs.copyFileSync(src, dest);
    }
  };
  
  try {
    copyRecursiveSync('public', 'dist/public');
    console.log('Copied public assets');
  } catch (err) {
    console.log('No public directory to copy');
  }
}

// Create optimized index.html that includes bundled CSS and the React app
const indexHTML = `<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator Medie Facultate - Calculator Note Universitate România</title>
    <meta name="description" content="Calculator medie facultate cu credite ECTS pentru studenții români. Calculează media ponderată, clasificarea academică și echivalența notelor ECTS.">
    <meta name="keywords" content="calculator medie facultate, credite ECTS, media ponderată, universitate România, note facultate">
    <link rel="canonical" href="https://calculatormediefacultate.com/">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        :root {
          --background: hsl(20, 14%, 97%);
          --foreground: hsl(20, 14%, 4%);
          --primary: hsl(25, 95%, 53%);
          --primary-foreground: hsl(0, 0%, 98%);
          --secondary: hsl(20, 5%, 90%);
          --card: hsl(0, 0%, 100%);
          --border: hsl(20, 5%, 85%);
          --radius: 1rem;
        }
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: hsl(20, 14%, 4%);
          background: linear-gradient(135deg, #fef7ed 0%, #fed7aa 100%);
          min-height: 100vh;
        }
        
        .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
        
        /* Header */
        .header {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(254, 243, 199, 0.95) 100%);
          backdrop-filter: blur(25px) saturate(1.2);
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          position: sticky;
          top: 0;
          z-index: 50;
        }
        
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 4rem;
        }
        
        .logo {
          display: flex;
          items: center;
          font-size: 1.25rem;
          font-weight: 800;
          color: hsl(20, 14%, 4%);
          text-decoration: none;
        }
        
        .logo-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          border-radius: 0.75rem;
          background: linear-gradient(135deg, hsl(25, 95%, 53%) 0%, hsl(15, 90%, 58%) 100%);
          color: white;
          margin-right: 0.5rem;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, hsl(25, 95%, 53%) 0%, hsl(15, 90%, 58%) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .nav {
          display: none;
          gap: 0.25rem;
        }
        
        @media (min-width: 768px) {
          .nav { display: flex; }
        }
        
        .nav-item {
          display: inline-flex;
          height: 2.25rem;
          align-items: center;
          justify-content: center;
          border-radius: 0.5rem;
          background: rgba(255, 255, 255, 0.9);
          padding: 0 0.75rem;
          font-size: 0.875rem;
          font-weight: 600;
          transition: all 0.3s;
          text-decoration: none;
          color: hsl(20, 14%, 4%);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        
        .nav-item:hover {
          background: rgba(255, 237, 213, 0.9);
          color: hsl(25, 95%, 53%);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        /* Main Content */
        .main { padding: 2rem 0; }
        
        .hero {
          text-align: center;
          margin-bottom: 3rem;
          padding-top: 1.5rem;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 700;
          background: linear-gradient(to right, #dbeafe, #e0e7ff, #e0e7ff);
          color: #1e40af;
          margin-bottom: 2rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          border: 1px solid #bfdbfe;
        }
        
        .hero h1 {
          font-size: 2.5rem;
          font-weight: 900;
          color: hsl(20, 14%, 4%);
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }
        
        @media (min-width: 640px) {
          .hero h1 { font-size: 3.5rem; }
        }
        
        .hero-subtitle {
          font-size: 1.125rem;
          color: #6b7280;
          max-width: 56rem;
          margin: 0 auto 2rem;
          line-height: 1.6;
          font-weight: 500;
        }
        
        .trust-indicators {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }
        
        .indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: white;
          padding: 1rem 1.5rem;
          border-radius: 0.75rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          border: 1px solid #fed7aa;
        }
        
        .indicator-text {
          font-weight: 600;
          color: #9a3412;
        }
        
        /* Calculator Section */
        .calculator-section {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(254, 243, 199, 0.95) 100%);
          backdrop-filter: blur(25px) saturate(1.2);
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 1rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          padding: 2rem;
          margin-bottom: 3rem;
        }
        
        .calculator-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .calculator-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 3rem;
          height: 3rem;
          border-radius: 0.75rem;
          background: linear-gradient(135deg, hsl(25, 95%, 53%) 0%, hsl(15, 90%, 58%) 100%);
          color: white;
          margin: 0 auto 1rem;
        }
        
        .calculator-title {
          font-size: 1.875rem;
          font-weight: 900;
          color: hsl(20, 14%, 4%);
          margin-bottom: 0.75rem;
        }
        
        .calculator-subtitle {
          color: #6b7280;
          font-weight: 500;
        }
        
        /* Form Styles */
        .form-section {
          margin-bottom: 2rem;
        }
        
        .form-section h3 {
          color: #9a3412;
          margin-bottom: 1.5rem;
          font-size: 1.25rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .subject-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr auto;
          gap: 1rem;
          align-items: end;
          margin-bottom: 1rem;
          padding: 1.5rem;
          background: #fef7ed;
          border-radius: 0.75rem;
          border: 2px solid #fed7aa;
        }
        
        @media (max-width: 768px) {
          .subject-row {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
        }
        
        .form-group label {
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #9a3412;
          font-size: 0.875rem;
        }
        
        .form-group input {
          padding: 0.875rem;
          border: 2px solid #fed7aa;
          border-radius: 0.5rem;
          font-size: 1rem;
          transition: border-color 0.3s, box-shadow 0.3s;
          background: white;
        }
        
        .form-group input:focus {
          outline: none;
          border-color: hsl(25, 95%, 53%);
          box-shadow: 0 0 0 3px rgba(251, 146, 60, 0.1);
        }
        
        /* Buttons */
        .btn {
          background: hsl(25, 95%, 53%);
          color: white;
          padding: 0.875rem 1.5rem;
          border: none;
          border-radius: 0.5rem;
          font-size: 1rem;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s;
          text-decoration: none;
          display: inline-block;
        }
        
        .btn:hover {
          background: #c2410c;
          transform: translateY(-1px);
        }
        
        .btn-secondary {
          background: #6b7280;
        }
        
        .btn-secondary:hover {
          background: #4b5563;
        }
        
        .btn-add {
          background: #059669;
          margin-top: 1rem;
        }
        
        .btn-add:hover {
          background: #047857;
        }
        
        .btn-calculate {
          width: 100%;
          margin-top: 2rem;
          padding: 1rem;
          font-size: 1.1rem;
          background: linear-gradient(135deg, hsl(25, 95%, 53%) 0%, hsl(15, 90%, 58%) 100%);
        }
        
        /* Results */
        .results {
          background: linear-gradient(135deg, #fef7ed 0%, #fed7aa 100%);
          border: 3px solid hsl(25, 95%, 53%);
          border-radius: 1rem;
          padding: 2.5rem;
          margin: 2rem 0;
          display: none;
        }
        
        .results h3 {
          text-align: center;
          margin-bottom: 2rem;
          color: #9a3412;
          font-size: 1.5rem;
        }
        
        .result-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .result-card {
          background: white;
          padding: 2rem;
          border-radius: 0.75rem;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border: 2px solid #fed7aa;
        }
        
        .result-value {
          font-size: 2.5rem;
          font-weight: 700;
          color: hsl(25, 95%, 53%);
          margin-bottom: 0.5rem;
        }
        
        .result-label {
          color: #9a3412;
          font-weight: 600;
        }
        
        .result-description {
          font-size: 0.875rem;
          color: #c2410c;
          margin-top: 0.5rem;
        }
    </style>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="header-content">
                <a href="/" class="logo">
                    <div class="logo-icon">🎓</div>
                    <span>Calculator</span>
                    <span class="gradient-text">Medie</span>
                    <span>Facultate</span>
                </a>
                
                <nav class="nav">
                    <a href="/" class="nav-item">🏠 Acasă</a>
                    <a href="/blog" class="nav-item">📝 Blog</a>
                    <a href="/contact" class="nav-item">📞 Contact</a>
                </nav>
            </div>
        </div>
    </header>

    <main class="main">
        <div class="container">
            <!-- Hero Section -->
            <section class="hero">
                <div class="hero-badge">
                    🎯 Cel mai precis calculator medie facultate din România
                </div>
                
                <h1>
                    Calculator <span class="gradient-text">Medie</span><br>
                    <span class="gradient-text">Facultate</span>
                </h1>
                
                <p class="hero-subtitle">
                    Calculează media generală și media ponderată cu credite ECTS în câteva secunde. 
                    <strong>Sistem universitar românesc - precis și rapid.</strong>
                </p>
                
                <div class="trust-indicators">
                    <div class="indicator">
                        <span>🔒</span>
                        <span class="indicator-text">100% Sigur</span>
                    </div>
                    <div class="indicator">
                        <span>⭐</span>
                        <span class="indicator-text">Validat Expert</span>
                    </div>
                    <div class="indicator">
                        <span>🕒</span>
                        <span class="indicator-text">Actualizat 2025</span>
                    </div>
                    <div class="indicator">
                        <span>👥</span>
                        <span class="indicator-text">50k+ Utilizatori</span>
                    </div>
                </div>
            </section>

            <!-- Calculator Section -->
            <section class="calculator-section">
                <div class="calculator-header">
                    <div class="calculator-icon">🧮</div>
                    <h2 class="calculator-title">Calculator Medie Facultate cu Credite ECTS</h2>
                    <p class="calculator-subtitle">Introdu notele și creditele pentru calculul mediei generale și mediei ponderate</p>
                </div>
                
                <div class="form-section">
                    <h3>📚 Materii și Note</h3>
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
                            <button type="button" class="btn btn-secondary" onclick="removeSubject(this)" title="Șterge materia">✗</button>
                        </div>
                    </div>
                    <button type="button" class="btn btn-add" onclick="addSubject()">➕ Adaugă Materie Nouă</button>
                </div>

                <button type="button" class="btn btn-calculate" onclick="calculateGrades()">🎯 Calculează Media și Clasificarea</button>

                <div class="results" id="results">
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
            </section>
        </div>
    </main>

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
                <button type="button" class="btn btn-secondary" onclick="removeSubject(this)" title="Șterge materia">✗</button>
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

        // Initialize on load
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Calculator Medie Facultate loaded successfully');
        });
    </script>
</body>
</html>`;

// Footer HTML component
const footerHTML = `
<footer style="background: #1f2937; color: white; padding: 3rem 0; margin-top: 4rem;">
  <div class="container">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 3rem;">
      <div>
        <h3 style="margin-bottom: 1rem; color: #f9fafb;">Calculator Medie Facultate</h3>
        <p style="color: #d1d5db; line-height: 1.6;">Instrumentul tău pentru calcularea mediei universitare cu credite ECTS în România. Simplu, precis și gratuit.</p>
      </div>
      <div>
        <h3 style="margin-bottom: 1rem; color: #f9fafb;">Calculatoare</h3>
        <ul style="list-style: none;">
          <li style="margin-bottom: 0.5rem;"><a href="/" style="color: #d1d5db; text-decoration: none;">Calculator Principal</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="/calculator-anticipata" style="color: #d1d5db; text-decoration: none;">Pensie Anticipată</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="/calculator-pilon3" style="color: #d1d5db; text-decoration: none;">Pilon III</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="/planificator" style="color: #d1d5db; text-decoration: none;">Planificator Financiar</a></li>
        </ul>
      </div>
      <div>
        <h3 style="margin-bottom: 1rem; color: #f9fafb;">Ghiduri</h3>
        <ul style="list-style: none;">
          <li style="margin-bottom: 0.5rem;"><a href="/planificare-ghid" style="color: #d1d5db; text-decoration: none;">Ghid Planificare</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="/tipuri-pensii-ghid" style="color: #d1d5db; text-decoration: none;">Tipuri de Pensii</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="/legea-pensiilor" style="color: #d1d5db; text-decoration: none;">Legea Pensiilor</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="/faq" style="color: #d1d5db; text-decoration: none;">Întrebări Frecvente</a></li>
        </ul>
      </div>
      <div>
        <h3 style="margin-bottom: 1rem; color: #f9fafb;">Contact</h3>
        <ul style="list-style: none;">
          <li style="margin-bottom: 0.5rem;"><a href="mailto:contact@calculatormediefacultate.com" style="color: #d1d5db; text-decoration: none;">contact@calculatormediefacultate.com</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="/confidentialitate" style="color: #d1d5db; text-decoration: none;">Politica de Confidențialitate</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="/termeni" style="color: #d1d5db; text-decoration: none;">Termeni și Condiții</a></li>
        </ul>
      </div>
    </div>
    <div style="border-top: 1px solid #374151; margin-top: 2rem; padding-top: 2rem; text-align: center; color: #9ca3af;">
      <p>&copy; 2025 Calculator Medie Facultate. Toate drepturile rezervate.</p>
    </div>
  </div>
</footer>`;

// Generate page template function
function generatePage(title, content, description = '') {
  return `<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - Calculator Medie Facultate</title>
    <meta name="description" content="${description || 'Calculator medie facultate cu credite ECTS pentru studenții români. Calculează media ponderată, clasificarea academică și echivalența notelor ECTS.'}">
    <meta name="keywords" content="calculator medie facultate, credite ECTS, media ponderată, universitate România">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; background: linear-gradient(135deg, #fef7ed 0%, #fed7aa 100%); min-height: 100vh; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
        
        /* Header */
        .header { background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(254, 243, 199, 0.95) 100%); backdrop-filter: blur(25px); border-bottom: 1px solid rgba(255, 255, 255, 0.3); position: sticky; top: 0; z-index: 50; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
        .header-content { display: flex; justify-content: space-between; align-items: center; height: 4rem; }
        .logo { display: flex; align-items: center; font-size: 1.25rem; font-weight: 800; color: #333; text-decoration: none; }
        .logo-icon { display: inline-flex; align-items: center; justify-content: center; width: 2rem; height: 2rem; border-radius: 0.75rem; background: linear-gradient(135deg, hsl(25, 95%, 53%) 0%, hsl(15, 90%, 58%) 100%); color: white; margin-right: 0.5rem; }
        .gradient-text { background: linear-gradient(135deg, hsl(25, 95%, 53%) 0%, hsl(15, 90%, 58%) 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
        .nav { display: flex; gap: 0.5rem; }
        .nav-item { padding: 0.5rem 1rem; background: rgba(255, 255, 255, 0.9); border-radius: 0.5rem; font-size: 0.875rem; font-weight: 600; text-decoration: none; color: #333; transition: all 0.3s; }
        .nav-item:hover { background: rgba(255, 237, 213, 0.9); color: hsl(25, 95%, 53%); }
        
        /* Main content */
        .main { padding: 2rem 0; }
        .page-header { text-align: center; margin-bottom: 3rem; }
        .page-header h1 { font-size: 2.5rem; font-weight: 900; color: #333; margin-bottom: 1rem; }
        .page-header p { font-size: 1.125rem; color: #6b7280; max-width: 600px; margin: 0 auto; }
        .card { background: rgba(255, 255, 255, 0.98); border-radius: 1rem; padding: 2rem; margin-bottom: 2rem; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); border: 1px solid rgba(255, 255, 255, 0.9); }
        .card h2 { color: #9a3412; margin-bottom: 1rem; font-size: 1.5rem; }
        .card h3 { color: #9a3412; margin-bottom: 0.75rem; font-size: 1.25rem; }
        .card p { color: #6b7280; line-height: 1.7; margin-bottom: 1rem; }
        .card ul { padding-left: 2rem; color: #6b7280; }
        .card li { margin-bottom: 0.5rem; }
        
        /* FAQ Styles */
        .faq-item { background: white; border-radius: 0.5rem; margin-bottom: 1rem; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05); border: 1px solid #fed7aa; }
        .faq-question { background: #fef7ed; padding: 1.5rem; font-weight: 600; cursor: pointer; display: flex; justify-content: space-between; align-items: center; }
        .faq-question:hover { background: #fed7aa; }
        .faq-answer { padding: 1.5rem; display: none; border-top: 1px solid #fed7aa; }
        .faq-toggle { color: hsl(25, 95%, 53%); font-weight: bold; }
        
        /* Form styles */
        .form-group { margin-bottom: 1rem; }
        .form-group label { display: block; font-weight: 600; margin-bottom: 0.5rem; color: #9a3412; }
        .form-group input, .form-group textarea { width: 100%; padding: 0.875rem; border: 2px solid #fed7aa; border-radius: 0.5rem; font-size: 1rem; }
        .form-group input:focus, .form-group textarea:focus { outline: none; border-color: hsl(25, 95%, 53%); }
        .btn { background: hsl(25, 95%, 53%); color: white; padding: 0.875rem 1.5rem; border: none; border-radius: 0.5rem; font-size: 1rem; cursor: pointer; font-weight: 600; transition: all 0.3s; text-decoration: none; display: inline-block; }
        .btn:hover { background: #c2410c; }
        
        @media (max-width: 768px) {
          .nav { display: none; }
          .page-header h1 { font-size: 2rem; }
          .card { padding: 1.5rem; }
        }
    </style>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="header-content">
                <a href="/" class="logo">
                    <div class="logo-icon">🎓</div>
                    <span>Calculator</span>
                    <span class="gradient-text">Medie</span>
                    <span>Facultate</span>
                </a>
                
                <nav class="nav">
                    <a href="/" class="nav-item">🏠 Acasă</a>
                    <a href="/blog" class="nav-item">📝 Blog</a>
                    <a href="/faq" class="nav-item">❓ FAQ</a>
                    <a href="/contact" class="nav-item">📞 Contact</a>
                </nav>
            </div>
        </div>
    </header>

    <main class="main">
        <div class="container">
            ${content}
        </div>
    </main>

    ${footerHTML}
    
    <script>
        // FAQ toggle functionality
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

// Create all pages
const pages = {
  'index.html': indexHTML,
  
  'blog.html': generatePage('Blog - Ghiduri și Articole', `
    <div class="page-header">
      <h1>Blog - Ghiduri și Articole</h1>
      <p>Resurse educaționale pentru calculul mediei și sistemul universitar românesc</p>
    </div>
    
    <div class="card">
      <h2>Articole Recente</h2>
      <div style="display: grid; gap: 2rem; margin-top: 2rem;">
        <div style="border-left: 4px solid hsl(25, 95%, 53%); padding-left: 1rem;">
          <h3><a href="#" style="color: #9a3412; text-decoration: none;">Ghidul complet pentru calculul mediei la facultate</a></h3>
          <p>Învață cum să calculezi corect media cu credite ECTS și să înțelegi sistemul de notare universitar românesc.</p>
          <small style="color: #6b7280;">20 Ianuarie 2025</small>
        </div>
        <div style="border-left: 4px solid hsl(25, 95%, 53%); padding-left: 1rem;">
          <h3><a href="#" style="color: #9a3412; text-decoration: none;">Sistemul de credite ECTS în universitățile românești</a></h3>
          <p>Totul despre sistemul European Credit Transfer System și cum funcționează în România.</p>
          <small style="color: #6b7280;">18 Ianuarie 2025</small>
        </div>
        <div style="border-left: 4px solid hsl(25, 95%, 53%); padding-left: 1rem;">
          <h3><a href="#" style="color: #9a3412; text-decoration: none;">Cum să obții bursa de studiu: calculul mediei</a></h3>
          <p>Criterii și calcule pentru obținerea bursei de merit în universitățile românești.</p>
          <small style="color: #6b7280;">15 Ianuarie 2025</small>
        </div>
      </div>
    </div>
  `, 'Ghiduri și articole despre calculul mediei la facultate, sistemul ECTS și burse de studiu în România.'),
  
  'faq.html': generatePage('Întrebări Frecvente - FAQ', `
    <div class="page-header">
      <h1>Întrebări Frecvente</h1>
      <p>Răspunsuri la cele mai comune întrebări despre calculul mediei</p>
    </div>
    
    <div class="card">
      <h2>Cele mai frecvente întrebări</h2>
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
        
        <div class="faq-item">
          <div class="faq-question" onclick="toggleFAQ(this)">
            Este calculatorul gratuit?
            <span class="faq-toggle">+</span>
          </div>
          <div class="faq-answer">
            Da, calculatorul este complet gratuit. Nu solicităm înregistrare și nu stocăm datele personale. Toate calculele se fac local în browser.
          </div>
        </div>
        
        <div class="faq-item">
          <div class="faq-question" onclick="toggleFAQ(this)">
            Pot folosi calculatorul pentru toate universitățile din România?
            <span class="faq-toggle">+</span>
          </div>
          <div class="faq-answer">
            Da, calculatorul funcționează pentru toate universitățile din România care folosesc sistemul de credite ECTS și scala de note 1-10.
          </div>
        </div>
      </div>
    </div>
  `, 'Răspunsuri la întrebările frecvente despre calculul mediei la facultate cu credite ECTS în România.'),
  
  'contact.html': generatePage('Contact - Calculator Medie Facultate', `
    <div class="page-header">
      <h1>Contact</h1>
      <p>Pentru întrebări sau suport tehnic</p>
    </div>
    
    <div class="card">
      <h2>Contactează-ne</h2>
      <p>Pentru întrebări despre calculatoarele noastre sau suport tehnic, nu ezita să ne contactezi.</p>
      
      <div style="margin: 2rem 0;">
        <p><strong>Email:</strong> <a href="mailto:contact@calculatormediefacultate.com" style="color: hsl(25, 95%, 53%);">contact@calculatormediefacultate.com</a></p>
        <p><strong>Program:</strong> Luni - Vineri, 9:00 - 17:00</p>
      </div>
      
      <h3>Trimite un mesaj</h3>
      <form style="margin-top: 1rem;">
        <div class="form-group">
          <label>Nume</label>
          <input type="text" placeholder="Numele tău" required>
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" placeholder="email@exemplu.com" required>
        </div>
        <div class="form-group">
          <label>Mesaj</label>
          <textarea rows="5" placeholder="Scrie mesajul tău aici..." required style="resize: vertical;"></textarea>
        </div>
        <button type="submit" class="btn">Trimite Mesajul</button>
      </form>
    </div>
  `, 'Contactează echipa Calculator Medie Facultate pentru suport tehnic și întrebări despre calculatoarele noastre.'),
  
  'despre.html': generatePage('Despre Noi - Calculator Medie Facultate', `
    <div class="page-header">
      <h1>Despre Calculator Medie Facultate</h1>
      <p>Instrumentul de încredere pentru studenții români</p>
    </div>
    
    <div class="card">
      <h2>Misiunea Noastră</h2>
      <p>Calculator Medie Facultate este instrumentul de încredere pentru studenții români care doresc să calculeze corect media generală și media ponderată cu credite ECTS.</p>
      
      <h3>Ce Oferim</h3>
      <ul>
        <li>Calculatoare precise bazate pe legislația românească</li>
        <li>Sistem de clasificare academică conform standardelor naționale</li>
        <li>Conversie ECTS pentru programele internaționale</li>
        <li>Ghiduri educaționale pentru studenți</li>
        <li>Interfață simplă și intuitivă</li>
      </ul>
      
      <h3>De Ce Să Ne Alegi</h3>
      <p>Calculatoarele noastre sunt dezvoltate în conformitate cu standardele academice românești și sunt validate de experți în educație. Oferim:</p>
      <ul>
        <li>Calcule precise și rapide</li>
        <li>Confidențialitate completă - datele nu sunt stocate</li>
        <li>Acces gratuit și fără înregistrare</li>
        <li>Suport pentru toate universitățile din România</li>
      </ul>
    </div>
  `, 'Află mai multe despre Calculator Medie Facultate - instrumentul de încredere pentru calculul mediei universitare în România.'),
  
  'confidentialitate.html': generatePage('Politica de Confidențialitate', `
    <div class="page-header">
      <h1>Politica de Confidențialitate</h1>
      <p>Cum protejăm datele tale personale</p>
    </div>
    
    <div class="card">
      <h2>Protecția Datelor Tale</h2>
      <p>Calculator Medie Facultate respectă confidențialitatea utilizatorilor și nu stochează date personale sensibile.</p>
      
      <h3>Informații Colectate</h3>
      <p>Calculele se efectuează local în browser și nu sunt transmise serverelor noastre. Nu colectăm informații personale precum nume, email sau note, cu excepția cazurilor în care ne contactezi voluntar.</p>
      
      <h3>Cookies și Tehnologii Similare</h3>
      <p>Utilizăm cookies pentru îmbunătățirea experienței utilizatorului și analiza traficului. Aceste cookies nu conțin informații personale identificabile.</p>
      
      <h3>Partajarea Datelor</h3>
      <p>Nu partajăm, vindem sau închiriem informațiile personale către terți. Datele colectate prin formularul de contact sunt folosite exclusiv pentru răspunsul la întrebările tale.</p>
      
      <h3>Securitatea Datelor</h3>
      <p>Implementăm măsuri de securitate adecvate pentru protejarea informațiilor împotriva accesului neautorizat, alterării sau distrugerii.</p>
      
      <h3>Drepturile Tale</h3>
      <p>Ai dreptul să soliciți informații despre datele personale pe care le procesăm, să soliciti corectarea sau ștergerea acestora.</p>
    </div>
  `, 'Politica de confidențialitate Calculator Medie Facultate - cum protejăm datele tale personale și respectăm intimitatea.'),
  
  'termeni.html': generatePage('Termeni și Condiții', `
    <div class="page-header">
      <h1>Termeni și Condiții</h1>
      <p>Condițiile de utilizare ale serviciului nostru</p>
    </div>
    
    <div class="card">
      <h2>Condiții de Utilizare</h2>
      <p>Prin utilizarea Calculator Medie Facultate, accepți următorii termeni și condiții:</p>
      
      <h3>Utilizarea Serviciului</h3>
      <ul>
        <li>Calculatoarele sunt oferite cu scop informativ și educațional</li>
        <li>Rezultatele sunt orientative și pot varia în funcție de regulamentele specifice ale fiecărei instituții</li>
        <li>Nu garantăm acuratețea 100% a calculelor</li>
        <li>Utilizarea este gratuită pentru scopuri educaționale și personale</li>
      </ul>
      
      <h3>Limitarea Răspunderii</h3>
      <p>Calculator Medie Facultate nu își asumă responsabilitatea pentru deciziile luate pe baza rezultatelor calculatoarelor. Recomandăm verificarea cu secretariatele universitare pentru informații oficiale.</p>
      
      <h3>Proprietatea Intelectuală</h3>
      <p>Conținutul site-ului, inclusiv calculatoarele, textele și designul, sunt protejate de drepturile de autor. Utilizarea comercială fără acordul nostru este interzisă.</p>
      
      <h3>Modificări ale Termenilor</h3>
      <p>Ne rezervăm dreptul de a modifica acești termeni în orice moment. Modificările vor fi publicate pe această pagină.</p>
    </div>
  `, 'Termenii și condițiile de utilizare pentru Calculator Medie Facultate - regulile și limitările serviciului nostru.')
};

// Write all pages
Object.entries(pages).forEach(([filename, content]) => {
  fs.writeFileSync(`dist/public/${filename}`, content);
});

// Create Netlify configuration files
fs.writeFileSync('dist/public/_redirects', `/*    /index.html   200

# Page redirects for SPA-like behavior
/blog                    /blog.html                    200
/faq                     /faq.html                     200
/contact                 /contact.html                 200
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

console.log('Simplified build created successfully!');
console.log('Files:');
const files = fs.readdirSync('dist/public');
files.forEach(file => {
  const stats = fs.statSync(`dist/public/${file}`);
  console.log(`  ${file} (${Math.round(stats.size / 1024)}KB)`);
});
console.log('Ready for Netlify deployment!');
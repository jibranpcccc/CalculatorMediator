#!/bin/bash
echo "Creating immediate Netlify deployment..."

# Clean and create dist directory
rm -rf dist
mkdir -p dist

# Create working HTML file directly
cat > dist/index.html << 'EOF'
<!DOCTYPE html>
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
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; background: #f8fafc; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        
        /* Header */
        header { background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color: white; padding: 1rem 0; position: sticky; top: 0; z-index: 100; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .header-content { display: flex; justify-content: space-between; align-items: center; }
        .logo { font-size: 1.8rem; font-weight: bold; }
        nav ul { display: flex; list-style: none; gap: 2rem; }
        nav a { color: white; text-decoration: none; padding: 0.5rem 1rem; border-radius: 6px; transition: background 0.3s; }
        nav a:hover { background: rgba(255,255,255,0.1); }
        
        /* Hero Section */
        .hero { background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 4rem 0; text-align: center; }
        .hero h1 { font-size: 3rem; margin-bottom: 1rem; color: #1e293b; font-weight: 800; }
        .hero p { font-size: 1.3rem; color: #64748b; margin-bottom: 2rem; max-width: 800px; margin-left: auto; margin-right: auto; }
        .hero-stats { display: flex; justify-content: center; gap: 3rem; margin-top: 2rem; flex-wrap: wrap; }
        .stat { text-align: center; }
        .stat-number { font-size: 2rem; font-weight: bold; color: #2563eb; }
        .stat-label { color: #64748b; font-size: 0.9rem; }
        
        /* Calculator Section */
        .calculator { background: white; border-radius: 16px; padding: 3rem; box-shadow: 0 10px 25px rgba(0,0,0,0.1); margin: 3rem 0; border: 1px solid #e2e8f0; }
        .calculator h2 { font-size: 2rem; margin-bottom: 2rem; color: #1e293b; text-align: center; }
        
        /* Form Styling */
        .form-group { display: flex; flex-direction: column; margin-bottom: 1rem; }
        label { font-weight: 600; margin-bottom: 0.5rem; color: #374151; font-size: 0.95rem; }
        input, select { padding: 0.875rem; border: 2px solid #d1d5db; border-radius: 8px; font-size: 1rem; transition: border-color 0.3s, box-shadow 0.3s; }
        input:focus, select:focus { outline: none; border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1); }
        
        /* Subject Management */
        .subjects { margin: 2rem 0; }
        .subjects h3 { margin-bottom: 1.5rem; color: #1f2937; font-size: 1.3rem; }
        .subject-row { display: grid; grid-template-columns: 2fr 1fr 1fr auto; gap: 1rem; align-items: end; margin-bottom: 1rem; padding: 1rem; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; }
        
        /* Buttons */
        button { background: #2563eb; color: white; padding: 0.875rem 1.5rem; border: none; border-radius: 8px; font-size: 1rem; cursor: pointer; font-weight: 600; transition: all 0.3s; }
        button:hover { background: #1d4ed8; transform: translateY(-1px); }
        .btn-secondary { background: #6b7280; }
        .btn-secondary:hover { background: #4b5563; }
        .btn-add { background: #059669; margin-top: 1rem; }
        .btn-add:hover { background: #047857; }
        .btn-calculate { width: 100%; margin-top: 2rem; padding: 1rem; font-size: 1.1rem; background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); }
        
        /* Results */
        .results { background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); border: 2px solid #3b82f6; border-radius: 16px; padding: 2.5rem; margin: 2rem 0; }
        .results h3 { text-align: center; margin-bottom: 2rem; color: #1e40af; font-size: 1.5rem; }
        .result-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; }
        .result-card { background: white; padding: 2rem; border-radius: 12px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border: 1px solid #e5e7eb; }
        .result-value { font-size: 2.5rem; font-weight: bold; color: #2563eb; margin-bottom: 0.5rem; }
        .result-label { color: #64748b; font-weight: 500; }
        .result-description { font-size: 0.9rem; color: #9ca3af; margin-top: 0.5rem; }
        
        /* Features Section */
        .features { margin: 4rem 0; }
        .features h2 { text-align: center; margin-bottom: 3rem; font-size: 2.2rem; color: #1e293b; }
        .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
        .feature-card { background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; }
        .feature-icon { width: 48px; height: 48px; background: #dbeafe; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem; }
        .feature-title { font-size: 1.2rem; font-weight: 600; margin-bottom: 1rem; color: #1f2937; }
        .feature-description { color: #6b7280; line-height: 1.6; }
        
        /* FAQ Section */
        .faq { margin: 4rem 0; }
        .faq h2 { text-align: center; margin-bottom: 3rem; font-size: 2.2rem; color: #1e293b; }
        .faq-item { background: white; border-radius: 12px; margin-bottom: 1rem; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; }
        .faq-question { background: #f8fafc; padding: 1.5rem; font-weight: 600; cursor: pointer; display: flex; justify-content: space-between; align-items: center; transition: background 0.3s; }
        .faq-question:hover { background: #f1f5f9; }
        .faq-answer { padding: 1.5rem; display: none; border-top: 1px solid #e2e8f0; line-height: 1.7; color: #4b5563; }
        .faq-toggle { font-size: 1.2rem; color: #6b7280; }
        
        /* Footer */
        footer { background: #1f2937; color: white; padding: 3rem 0; margin-top: 4rem; }
        .footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 3rem; }
        .footer-section h3 { margin-bottom: 1rem; color: #f9fafb; }
        .footer-section ul { list-style: none; }
        .footer-section li { margin-bottom: 0.5rem; }
        .footer-section a { color: #d1d5db; text-decoration: none; transition: color 0.3s; }
        .footer-section a:hover { color: #f9fafb; }
        .footer-bottom { border-top: 1px solid #374151; margin-top: 2rem; padding-top: 2rem; text-align: center; color: #9ca3af; }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .hero h1 { font-size: 2.2rem; }
            .hero p { font-size: 1.1rem; }
            .hero-stats { gap: 2rem; }
            .subject-row { grid-template-columns: 1fr; gap: 0.5rem; }
            nav ul { flex-direction: column; gap: 0.5rem; }
            .calculator { padding: 2rem 1rem; }
            .result-grid { grid-template-columns: 1fr; }
            .features-grid { grid-template-columns: 1fr; }
        }
        
        /* Animations */
        .fade-in { opacity: 0; animation: fadeIn 0.6s ease-in-out forwards; }
        @keyframes fadeIn { to { opacity: 1; } }
        
        /* Loading States */
        .loading { opacity: 0.7; pointer-events: none; }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <div class="header-content">
                <div class="logo">🎓 Calculator Medie Facultate</div>
                <nav>
                    <ul>
                        <li><a href="#calculator">Calculator</a></li>
                        <li><a href="#despre">Despre</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <section class="hero">
        <div class="container">
            <h1>Calculator Medie Facultate cu Credite ECTS</h1>
            <p>Calculează media ponderată pentru universitățile din România cu sistem de credite ECTS. Obține clasificarea academică și echivalența notelor conform standardelor europene.</p>
            <div class="hero-stats">
                <div class="stat">
                    <div class="stat-number">50,000+</div>
                    <div class="stat-label">Studenți folosesc calculatorul</div>
                </div>
                <div class="stat">
                    <div class="stat-number">100%</div>
                    <div class="stat-label">Conformitate ECTS</div>
                </div>
                <div class="stat">
                    <div class="stat-number">Gratuit</div>
                    <div class="stat-label">Pentru toți studenții</div>
                </div>
            </div>
        </div>
    </section>

    <main class="container">
        <div class="calculator fade-in" id="calculator">
            <h2>🧮 Calculator Note Universitate România</h2>
            
            <div class="subjects">
                <h3>📚 Materii și Note</h3>
                <div id="subjects-list">
                    <div class="subject-row">
                        <div class="form-group">
                            <label>Numele Materiei</label>
                            <input type="text" placeholder="Ex: Matematică, Fizică, Chimie" class="subject-name">
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
                    <p style="color: #6b7280;"><strong>Total credite ECTS:</strong> <span id="total-credits">0</span></p>
                </div>
            </div>
        </div>

        <section class="features">
            <h2>✨ Caracteristici Principale</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">🎯</div>
                    <div class="feature-title">Calcul Precis cu ECTS</div>
                    <div class="feature-description">Calculează media ponderată conform sistemului European Credit Transfer System folosit în universitățile românești.</div>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🏆</div>
                    <div class="feature-title">Clasificare Academică</div>
                    <div class="feature-description">Obține automat clasificarea academică: Summa Cum Laude, Magna Cum Laude, Cum Laude sau alte categorii.</div>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📈</div>
                    <div class="feature-title">Compatibilitate Europeană</div>
                    <div class="feature-description">Convertește notele în sistemul ECTS (A-F) pentru aplicații internaționale și programe de mobilitate.</div>
                </div>
            </div>
        </section>

        <section class="faq" id="faq">
            <h2>❓ Întrebări Frecvente</h2>
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
                    Pot folosi calculatorul pentru toate universitățile din România?
                    <span class="faq-toggle">+</span>
                </div>
                <div class="faq-answer">
                    Da, calculatorul este compatibil cu toate universitățile românești care folosesc sistemul de credite ECTS și scala de notare de la 1 la 10, conform standardelor naționale de educație.
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-question" onclick="toggleFAQ(this)">
                    Este calculatorul gratuit și sigur de folosit?
                    <span class="faq-toggle">+</span>
                </div>
                <div class="faq-answer">
                    Da, calculatorul este complet gratuit și nu stochează niciun fel de date personale. Toate calculele se fac local în browser, asigurând confidențialitatea informațiilor tale academice.
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-section">
                    <h3>Calculator Medie Facultate</h3>
                    <p>Instrumentul tău pentru calcularea mediei universitare cu credite ECTS în România. Simplu, precis și gratuit.</p>
                </div>
                <div class="footer-section">
                    <h3>Linkuri Utile</h3>
                    <ul>
                        <li><a href="#calculator">Calculator Note</a></li>
                        <li><a href="#despre">Despre Proiect</a></li>
                        <li><a href="#faq">Întrebări Frecvente</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Resurse Educaționale</h3>
                    <ul>
                        <li><a href="#">Sistemul ECTS în România</a></li>
                        <li><a href="#">Ghid Calcul Media</a></li>
                        <li><a href="#">Clasificări Academice</a></li>
                        <li><a href="#">Burse de Studiu</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Contact</h3>
                    <ul>
                        <li><a href="mailto:contact@calculatormediefacultate.com">Email: contact@calculatormediefacultate.com</a></li>
                        <li><a href="#privacy">Politica de Confidențialitate</a></li>
                        <li><a href="#terms">Termeni și Condiții</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Calculator Medie Facultate. Toate drepturile rezervate. | Creat pentru studenții din România</p>
            </div>
        </div>
    </footer>

    <script>
        let subjectCount = 1;

        function addSubject() {
            const subjectsList = document.getElementById('subjects-list');
            const newSubject = document.createElement('div');
            newSubject.className = 'subject-row fade-in';
            newSubject.innerHTML = `
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
            `;
            subjectsList.appendChild(newSubject);
            subjectCount++;
            
            // Focus on the new subject name field
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
            const grades = [];
            let validSubjects = 0;

            subjects.forEach(subject => {
                const name = subject.querySelector('.subject-name').value.trim();
                const grade = parseFloat(subject.querySelector('.subject-grade').value);
                const credits = parseInt(subject.querySelector('.subject-credits').value);

                if (name && !isNaN(grade) && !isNaN(credits) && grade >= 1 && grade <= 10 && credits > 0) {
                    totalPoints += grade * credits;
                    totalCredits += credits;
                    grades.push(grade);
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

            // Add animation class
            const resultsDiv = document.getElementById('results');
            resultsDiv.style.display = 'block';
            resultsDiv.classList.add('fade-in');

            document.getElementById('weighted-average').textContent = weightedAverage.toFixed(2);
            document.getElementById('ects-grade').textContent = ectsGrade;
            document.getElementById('classification').textContent = classification;
            document.getElementById('total-credits').textContent = totalCredits;

            // Scroll to results
            resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Track calculation event (if analytics is available)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'calculator_usage', {
                    'event_category': 'engagement',
                    'event_label': 'grade_calculation',
                    'value': Math.round(weightedAverage * 100)
                });
            }
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

        function toggleFAQ(element) {
            const answer = element.nextElementSibling;
            const toggle = element.querySelector('.faq-toggle');
            const isOpen = answer.style.display === 'block';
            
            // Close all FAQ answers
            document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
            document.querySelectorAll('.faq-toggle').forEach(tog => tog.textContent = '+');
            
            // Toggle current answer
            if (!isOpen) {
                answer.style.display = 'block';
                toggle.textContent = '−';
            }
        }

        // Add keyboard support for accessibility
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && e.target.matches('.subject-grade, .subject-credits')) {
                calculateGrades();
            }
        });

        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Calculator Medie Facultate loaded successfully');
            
            // Add some demo data for first-time users
            const firstSubjectName = document.querySelector('.subject-name');
            if (firstSubjectName && !firstSubjectName.value) {
                firstSubjectName.placeholder = "Ex: Matematică, Informatică, Fizică";
            }
        });
    </script>
</body>
</html>
EOF

# Create Netlify configuration files
cat > dist/_redirects << 'EOF'
/*    /index.html   200
EOF

cat > dist/_headers << 'EOF'
/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin

/index.html
  Cache-Control: public, max-age=0, must-revalidate

*.css
  Cache-Control: public, max-age=31536000, immutable

*.js
  Cache-Control: public, max-age=31536000, immutable

*.png
  Cache-Control: public, max-age=31536000, immutable

*.jpg
  Cache-Control: public, max-age=31536000, immutable
EOF

cat > dist/robots.txt << 'EOF'
User-agent: *
Allow: /

Sitemap: https://calculatormediefacultate.com/sitemap.xml
EOF

cat > dist/sitemap.xml << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://calculatormediefacultate.com/</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
EOF

echo "✅ Netlify deployment files created successfully!"
echo "📁 Files in dist directory:"
ls -la dist/
echo ""
echo "🚀 Ready for deployment to calculatormediefacultate.com"
echo "📊 Total files: $(ls dist/ | wc -l)"
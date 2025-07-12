#!/bin/bash

echo "🚀 Deploying Calculator with Ads.txt Redirect"
echo "============================================="

# Clean and prepare build directory
rm -rf dist
mkdir -p dist

# Create the complete index.html with working calculator
cat > dist/index.html << 'HTML_EOF'
<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator Medie Facultate - Calculează media universității</title>
    <meta name="description" content="Calculator gratuit pentru calcularea mediei la facultate cu credite ECTS. Clasificări academice, conversii note și ghiduri complete pentru studenți.">
    <meta name="keywords" content="calculator medie facultate, credite ECTS, nota medie, clasificare academica, universitate">
    <meta property="og:title" content="Calculator Medie Facultate - Calculează media universității">
    <meta property="og:description" content="Calculator gratuit pentru calcularea mediei la facultate cu credite ECTS">
    <meta property="og:url" content="https://calculatormediefacultate.com">
    <meta property="og:type" content="website">
    <link rel="canonical" href="https://calculatormediefacultate.com">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; background: #f8fafc; line-height: 1.6; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .header { background: linear-gradient(135deg, #f97316 0%, #fb923c 100%); color: white; padding: 1rem 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .nav { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; }
        .logo { font-size: 1.5rem; font-weight: bold; }
        .tagline { font-size: 0.9rem; opacity: 0.9; }
        .main { padding: 2rem 0; }
        .calculator { background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 2rem; }
        .calc-header { text-align: center; margin-bottom: 2rem; }
        .calc-header h1 { color: #1f2937; font-size: 2rem; margin-bottom: 0.5rem; }
        .calc-header p { color: #6b7280; font-size: 1.1rem; }
        .form-grid { display: grid; gap: 1.5rem; }
        .subject-group { background: #f9fafb; border-radius: 8px; padding: 1.5rem; border: 1px solid #e5e7eb; }
        .subject-group h3 { color: #374151; margin-bottom: 1rem; font-size: 1.1rem; }
        .input-row { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 0.5rem; margin-bottom: 0.5rem; }
        .input-row input { padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 1rem; }
        .input-row input:focus { outline: none; border-color: #f97316; box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1); }
        .btn { background: #f97316; color: white; padding: 1rem 2rem; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 1.1rem; width: 100%; margin-top: 1rem; transition: background 0.2s; }
        .btn:hover { background: #ea580c; }
        .result { margin-top: 2rem; padding: 1.5rem; background: linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%); border-radius: 8px; border: 1px solid #d1fae5; }
        .result h3 { color: #065f46; margin-bottom: 1rem; }
        .result-item { margin-bottom: 0.5rem; font-size: 1.1rem; }
        .result-value { font-weight: bold; color: #059669; }
        .footer { background: #1f2937; color: white; padding: 2rem 0; margin-top: 3rem; }
        .footer-content { text-align: center; }
        .add-subject { background: #6b7280; color: white; padding: 0.5rem 1rem; border: none; border-radius: 6px; cursor: pointer; margin-top: 1rem; }
        .add-subject:hover { background: #4b5563; }
        @media (max-width: 768px) {
            .input-row { grid-template-columns: 1fr; }
            .calc-header h1 { font-size: 1.5rem; }
            .calculator { padding: 1rem; }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="container">
            <div class="nav">
                <div class="logo">Calculator Medie Facultate</div>
                <div class="tagline">Calculează media universității</div>
            </div>
        </div>
    </div>
    
    <div class="container">
        <div class="main">
            <div class="calculator">
                <div class="calc-header">
                    <h1>Calculator Medie Facultate cu Credite ECTS</h1>
                    <p>Calculează media ponderată a anului universitar folosind creditele ECTS pentru fiecare materie.</p>
                </div>
                
                <div id="subjects-container">
                    <div class="subject-group">
                        <h3>Materia 1</h3>
                        <div class="input-row">
                            <input type="text" placeholder="Numele materiei" class="subject-name">
                            <input type="number" placeholder="Nota (1-10)" min="1" max="10" step="0.1" class="subject-grade">
                            <input type="number" placeholder="Credite ECTS" min="1" max="30" class="subject-credits">
                        </div>
                    </div>
                    
                    <div class="subject-group">
                        <h3>Materia 2</h3>
                        <div class="input-row">
                            <input type="text" placeholder="Numele materiei" class="subject-name">
                            <input type="number" placeholder="Nota (1-10)" min="1" max="10" step="0.1" class="subject-grade">
                            <input type="number" placeholder="Credite ECTS" min="1" max="30" class="subject-credits">
                        </div>
                    </div>
                    
                    <div class="subject-group">
                        <h3>Materia 3</h3>
                        <div class="input-row">
                            <input type="text" placeholder="Numele materiei" class="subject-name">
                            <input type="number" placeholder="Nota (1-10)" min="1" max="10" step="0.1" class="subject-grade">
                            <input type="number" placeholder="Credite ECTS" min="1" max="30" class="subject-credits">
                        </div>
                    </div>
                </div>
                
                <button class="add-subject" onclick="addSubject()">+ Adaugă materie</button>
                <button class="btn" onclick="calculateGrade()">Calculează Media</button>
                
                <div id="result" class="result" style="display: none;">
                    <h3>Rezultate Calculator Medie</h3>
                    <div id="grade-result" class="result-item"></div>
                    <div id="classification" class="result-item"></div>
                    <div id="ects-grade" class="result-item"></div>
                    <div id="total-credits" class="result-item"></div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="footer">
        <div class="container">
            <div class="footer-content">
                <p>Calculator Medie Facultate © 2025 - Toate drepturile rezervate</p>
                <p style="margin-top: 0.5rem; font-size: 0.9rem; opacity: 0.8;">Calculator gratuit pentru media cu credite ECTS</p>
            </div>
        </div>
    </div>
    
    <script>
        let subjectCount = 3;
        
        function addSubject() {
            subjectCount++;
            const container = document.getElementById('subjects-container');
            const subjectDiv = document.createElement('div');
            subjectDiv.className = 'subject-group';
            subjectDiv.innerHTML = `
                <h3>Materia ${subjectCount}</h3>
                <div class="input-row">
                    <input type="text" placeholder="Numele materiei" class="subject-name">
                    <input type="number" placeholder="Nota (1-10)" min="1" max="10" step="0.1" class="subject-grade">
                    <input type="number" placeholder="Credite ECTS" min="1" max="30" class="subject-credits">
                </div>
            `;
            container.appendChild(subjectDiv);
        }
        
        function calculateGrade() {
            const subjectGroups = document.querySelectorAll('.subject-group');
            const subjects = [];
            
            subjectGroups.forEach(group => {
                const name = group.querySelector('.subject-name').value;
                const grade = parseFloat(group.querySelector('.subject-grade').value);
                const credits = parseFloat(group.querySelector('.subject-credits').value);
                
                if (grade > 0 && credits > 0) {
                    subjects.push({ name, grade, credits });
                }
            });
            
            if (subjects.length === 0) {
                alert('Vă rugăm să completați cel puțin o materie cu nota și creditele ECTS.');
                return;
            }
            
            const totalWeightedGrades = subjects.reduce((sum, s) => sum + (s.grade * s.credits), 0);
            const totalCredits = subjects.reduce((sum, s) => sum + s.credits, 0);
            const average = totalWeightedGrades / totalCredits;
            
            let classification, ectsGrade;
            
            if (average >= 9.5) {
                classification = 'Summa Cum Laude';
                ectsGrade = 'A (Excellent)';
            } else if (average >= 8.5) {
                classification = 'Magna Cum Laude';
                ectsGrade = 'B (Foarte Bine)';
            } else if (average >= 7.5) {
                classification = 'Cum Laude';
                ectsGrade = 'C (Bine)';
            } else if (average >= 6.5) {
                classification = 'Bine';
                ectsGrade = 'D (Satisfăcător)';
            } else if (average >= 5.5) {
                classification = 'Satisfăcător';
                ectsGrade = 'E (Suficient)';
            } else {
                classification = 'Respins';
                ectsGrade = 'F (Respins)';
            }
            
            document.getElementById('result').style.display = 'block';
            document.getElementById('grade-result').innerHTML = `Media ta ponderată: <span class="result-value">${average.toFixed(2)}</span>`;
            document.getElementById('classification').innerHTML = `Clasificare academică: <span class="result-value">${classification}</span>`;
            document.getElementById('ects-grade').innerHTML = `Nota ECTS: <span class="result-value">${ectsGrade}</span>`;
            document.getElementById('total-credits').innerHTML = `Total credite ECTS: <span class="result-value">${totalCredits}</span>`;
        }
    </script>
</body>
</html>
HTML_EOF

# Create the CRITICAL _redirects file with the correct URL
cat > dist/_redirects << 'REDIRECTS_EOF'
/ads.txt  https://srv.adstxtmanager.com/19390/calculatormediefacultate.com  301
/*    /index.html   200
REDIRECTS_EOF

# Create _headers file for better caching and security
cat > dist/_headers << 'HEADERS_EOF'
/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin

/index.html
  Cache-Control: public, max-age=0, must-revalidate

/ads.txt
  Cache-Control: no-cache, no-store, must-revalidate
  Pragma: no-cache
  Expires: 0
HEADERS_EOF

# Create robots.txt
cat > dist/robots.txt << 'ROBOTS_EOF'
User-agent: *
Allow: /
Disallow: /ads.txt

Sitemap: https://calculatormediefacultate.com/sitemap.xml
ROBOTS_EOF

# Create sitemap.xml
cat > dist/sitemap.xml << 'SITEMAP_EOF'
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://calculatormediefacultate.com/</loc>
    <lastmod>2025-07-12</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
SITEMAP_EOF

echo "✅ Build completed successfully!"
echo "📋 Files created:"
ls -la dist/
echo ""
echo "🎯 REDIRECT CONFIGURATION:"
echo "========================="
cat dist/_redirects
echo ""
echo "🔍 Verifying redirect setup..."
echo "The _redirects file will redirect:"
echo "  /ads.txt → https://srv.adstxtmanager.com/19390/calculatormediefacultate.com"
echo ""
echo "📊 Build stats:"
echo "- HTML: $(wc -c < dist/index.html) bytes"
echo "- _redirects: $(wc -c < dist/_redirects) bytes"
echo "- Total files: $(ls dist/ | wc -l)"
echo ""
echo "🚀 Ready for deployment!"
echo "The redirect will work once these files are deployed to Netlify."

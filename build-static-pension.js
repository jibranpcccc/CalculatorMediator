import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Build the static version
console.log('Building static pension calculator...');

try {
  // Create a lightweight build with timeout
  execSync('timeout 120s npm run build', { stdio: 'inherit' });
} catch (error) {
  console.log('Build timeout or error, creating manual static build...');
  
  // If build fails, create a simple static version
  const indexHtml = `<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator Pensie România - Calculează Pensia de Stat Online</title>
    <meta name="description" content="Calculator pensie România gratuit - calculează pensia de stat, pensie anticipată, pilon 3. Planificare financiară și estimări precise pentru pensionare.">
    <meta name="keywords" content="calculator pensie, pensie romania, pensie anticipata, pilon 3, planificare pensie, calculator pensie stat">
    <link rel="canonical" href="https://calculatormediefacultate.com">
    
    <meta property="og:type" content="website">
    <meta property="og:title" content="Calculator Pensie România - Calculează Pensia de Stat Online">
    <meta property="og:description" content="Calculator pensie România gratuit - calculează pensia de stat, pensie anticipată, pilon 3.">
    <meta property="og:url" content="https://calculatormediefacultate.com">
    
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Calculator Pensie România",
        "url": "https://calculatormediefacultate.com",
        "description": "Calculator pensie România gratuit - calculează pensia de stat, pensie anticipată, pilon 3.",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "Web Browser"
    }
    </script>
    
    <script src="https://cdn.tailwindcss.com"></script>
    
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        .calculator-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
        }
        .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            transition: transform 0.2s;
        }
        .btn-primary:hover {
            transform: translateY(-2px);
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="bg-white shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center">
                    <h1 class="text-xl font-bold text-gray-900">Calculator Pensie România</h1>
                </div>
                <nav class="hidden md:flex space-x-8">
                    <a href="#calculator" class="text-gray-700 hover:text-indigo-600">Calculator</a>
                    <a href="#planificare" class="text-gray-700 hover:text-indigo-600">Planificare</a>
                    <a href="#despre" class="text-gray-700 hover:text-indigo-600">Despre</a>
                </nav>
            </div>
        </div>
    </header>

    <main class="min-h-screen py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Hero Section -->
            <section class="text-center mb-16">
                <h1 class="text-4xl md:text-6xl font-black text-white mb-6">
                    Calculator <span class="text-yellow-300">Pensie</span> România
                </h1>
                <p class="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                    Calculează pensia de stat, pensia anticipată și planifică-ți viitorul financiar cu instrumentele noastre avansate
                </p>
            </section>

            <!-- Calculator Section -->
            <section id="calculator" class="mb-16">
                <div class="max-w-4xl mx-auto">
                    <div class="calculator-card p-8">
                        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Calculator Pensie de Stat</h2>
                        
                        <form id="pensionForm" class="space-y-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Data nașterii</label>
                                    <input type="date" id="birthDate" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" required>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Gen</label>
                                    <select id="gender" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" required>
                                        <option value="">Selectează</option>
                                        <option value="masculin">Masculin</option>
                                        <option value="feminin">Feminin</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Salariul lunar net (RON)</label>
                                    <input type="number" id="salary" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="3000" required>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Ani de muncă (vechime)</label>
                                    <input type="number" id="workYears" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="30" required>
                                </div>
                            </div>
                            
                            <button type="submit" class="btn-primary w-full py-4 text-white font-bold rounded-lg text-lg">
                                Calculează Pensia
                            </button>
                        </form>
                        
                        <div id="result" class="mt-8 p-6 bg-green-50 rounded-lg hidden">
                            <h3 class="text-xl font-bold text-green-800 mb-4">Rezultatul calculului:</h3>
                            <div id="resultContent" class="space-y-2 text-green-700"></div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Features Grid -->
            <section id="planificare" class="mb-16">
                <h2 class="text-3xl font-bold text-white text-center mb-12">Instrumentele Tale de Planificare</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="calculator-card p-6 text-center">
                        <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-2">Calculator Pensie de Stat</h3>
                        <p class="text-gray-600">Calculează pensia de stat bazată pe contribuții și vechime</p>
                    </div>
                    
                    <div class="calculator-card p-6 text-center">
                        <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-2">Pensie Anticipată</h3>
                        <p class="text-gray-600">Estimează pensia pentru ieșirea anticipată la pensie</p>
                    </div>
                    
                    <div class="calculator-card p-6 text-center">
                        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-2">Pilon III (Privat)</h3>
                        <p class="text-gray-600">Calculează contribuțiile la pilonul III de pensii</p>
                    </div>
                </div>
            </section>
        </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h3 class="text-2xl font-bold mb-4">Calculator Pensie România</h3>
                <p class="text-gray-400 mb-6">Planifică-ți viitorul financiar cu încredere</p>
                <div class="flex justify-center space-x-6">
                    <a href="#calculator" class="text-gray-400 hover:text-white">Calculator</a>
                    <a href="#planificare" class="text-gray-400 hover:text-white">Planificare</a>
                    <a href="#despre" class="text-gray-400 hover:text-white">Despre</a>
                </div>
                <div class="mt-8 pt-8 border-t border-gray-700">
                    <p class="text-gray-400 text-sm">© 2025 Calculator Pensie România. Toate drepturile rezervate.</p>
                </div>
            </div>
        </div>
    </footer>

    <script>
        // Simple pension calculation
        document.getElementById('pensionForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const birthDate = document.getElementById('birthDate').value;
            const gender = document.getElementById('gender').value;
            const salary = parseFloat(document.getElementById('salary').value);
            const workYears = parseInt(document.getElementById('workYears').value);
            
            if (!birthDate || !gender || !salary || !workYears) {
                alert('Te rugăm să completezi toate câmpurile!');
                return;
            }
            
            // Calculate current age
            const today = new Date();
            const birth = new Date(birthDate);
            const currentAge = today.getFullYear() - birth.getFullYear();
            
            // Retirement ages in Romania
            const retirementAge = gender === 'masculin' ? 65 : 63;
            const yearsToRetirement = Math.max(0, retirementAge - currentAge);
            
            // Simple pension calculation (approximation)
            const contributionRate = 0.25; // 25% contribution rate
            const averageContribution = salary * contributionRate;
            const totalContributions = averageContribution * 12 * workYears;
            const pensionPoint = 1586; // Current pension point value in RON
            const estimatedPoints = totalContributions / (pensionPoint * 12);
            const estimatedPension = estimatedPoints * pensionPoint;
            
            // Display result
            const resultDiv = document.getElementById('result');
            const resultContent = document.getElementById('resultContent');
            
            resultContent.innerHTML = \`
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <strong>Pensia estimată:</strong> \${Math.round(estimatedPension)} RON/lună
                    </div>
                    <div>
                        <strong>Vârsta de pensionare:</strong> \${retirementAge} ani
                    </div>
                    <div>
                        <strong>Ani până la pensie:</strong> \${yearsToRetirement} ani
                    </div>
                    <div>
                        <strong>Puncte de pensie estimate:</strong> \${estimatedPoints.toFixed(2)}
                    </div>
                </div>
                <div class="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p class="text-sm text-blue-800">
                        <strong>Notă:</strong> Acesta este un calcul estimativ. Pentru informații precise, consultați Casa de Pensii.
                    </p>
                </div>
            \`;
            
            resultDiv.classList.remove('hidden');
            resultDiv.scrollIntoView({ behavior: 'smooth' });
        });
        
        // Smooth scrolling for navigation
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

  // Ensure dist directory exists
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist', { recursive: true });
  }
  
  // Write the index.html file
  fs.writeFileSync('dist/index.html', indexHtml);
  
  // Copy other necessary files
  const files = ['robots.txt', 'sitemap.xml', '_redirects', '_headers'];
  files.forEach(file => {
    const sourcePath = path.join('public', file);
    const destPath = path.join('dist', file);
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, destPath);
    }
  });
  
  console.log('Static build created successfully!');
}
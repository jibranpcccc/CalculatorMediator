import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Create a complete static export of the pension calculator site
console.log('Creating complete static export...');

// Clear and recreate dist directory
if (fs.existsSync('dist')) {
  fs.rmSync('dist', { recursive: true, force: true });
}
fs.mkdirSync('dist', { recursive: true });

// Start the dev server in the background to capture the built site
console.log('Starting temporary server...');
const server = execSync('npm run dev &', { stdio: 'pipe' });

// Wait for server to start
await new Promise(resolve => setTimeout(resolve, 5000));

// Use curl to capture the full rendered HTML from your development server
try {
  const fullSiteHtml = execSync('curl -s http://localhost:5000/', { encoding: 'utf8' });
  
  // Write the complete site HTML
  fs.writeFileSync('dist/index.html', fullSiteHtml);
  
  console.log('Captured full site HTML');
} catch (error) {
  console.log('Direct server capture failed, creating manual export...');
  
  // Fallback: Create a comprehensive static version
  const staticHtml = `<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator Pensie România - Calculează Pensia de Stat, Anticipată și Pilon 3</title>
    <meta name="description" content="Calculator pensie România complet - calculează pensia de stat, pensie anticipată, pilon 3. Planificare financiară și estimări precise pentru pensionare în România.">
    <meta name="keywords" content="calculator pensie romania, pensie anticipata, pilon 3, planificare pensie, calculator pensie stat, pensie invaliditate, pensie urmas">
    <link rel="canonical" href="https://calculatormediefacultate.com">
    
    <meta property="og:type" content="website">
    <meta property="og:title" content="Calculator Pensie România - Calculează Pensia de Stat, Anticipată și Pilon 3">
    <meta property="og:description" content="Calculator pensie România complet - calculează pensia de stat, pensie anticipată, pilon 3. Planificare financiară și estimări precise.">
    <meta property="og:url" content="https://calculatormediefacultate.com">
    <meta property="og:image" content="https://calculatormediefacultate.com/og-image.jpg">
    
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Calculator Pensie România",
        "url": "https://calculatormediefacultate.com",
        "description": "Calculator pensie România complet - calculează pensia de stat, pensie anticipată, pilon 3.",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "Web Browser",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "RON"
        }
    }
    </script>
    
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              primary: '#4f46e5',
              secondary: '#7c3aed'
            }
          }
        }
      }
    </script>
    
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            line-height: 1.6;
        }
        
        .glass-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(15px);
            border-radius: 20px;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .btn-gradient {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            transition: all 0.3s ease;
        }
        
        .btn-gradient:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }
        
        .nav-link {
            position: relative;
            transition: color 0.3s ease;
        }
        
        .nav-link:hover {
            color: #4f46e5;
        }
        
        .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -4px;
            left: 0;
            background: #4f46e5;
            transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
            width: 100%;
        }
        
        .calculator-input {
            transition: all 0.3s ease;
        }
        
        .calculator-input:focus {
            transform: scale(1.02);
            box-shadow: 0 5px 15px rgba(79, 70, 229, 0.2);
        }
        
        .result-card {
            animation: slideInUp 0.5s ease-out;
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .feature-card {
            transition: all 0.3s ease;
        }
        
        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .mobile-menu {
            display: none;
        }
        
        @media (max-width: 768px) {
            .mobile-menu.active {
                display: block;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <h1 class="text-xl font-bold text-gray-900">Calculator Pensie România</h1>
                </div>
                
                <!-- Desktop Navigation -->
                <nav class="hidden md:flex space-x-8">
                    <a href="#calculator" class="nav-link text-gray-700 font-medium">Calculator</a>
                    <a href="#planificare" class="nav-link text-gray-700 font-medium">Planificare</a>
                    <a href="#tipuri-pensii" class="nav-link text-gray-700 font-medium">Tipuri Pensii</a>
                    <a href="#ghiduri" class="nav-link text-gray-700 font-medium">Ghiduri</a>
                    <a href="#despre" class="nav-link text-gray-700 font-medium">Despre</a>
                </nav>
                
                <!-- Mobile Menu Button -->
                <button id="mobile-menu-btn" class="md:hidden p-2 rounded-lg hover:bg-gray-100">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="mobile-menu md:hidden py-4 border-t">
                <div class="flex flex-col space-y-3">
                    <a href="#calculator" class="text-gray-700 font-medium py-2">Calculator</a>
                    <a href="#planificare" class="text-gray-700 font-medium py-2">Planificare</a>
                    <a href="#tipuri-pensii" class="text-gray-700 font-medium py-2">Tipuri Pensii</a>
                    <a href="#ghiduri" class="text-gray-700 font-medium py-2">Ghiduri</a>
                    <a href="#despre" class="text-gray-700 font-medium py-2">Despre</a>
                </div>
            </div>
        </div>
    </header>

    <main>
        <!-- Hero Section -->
        <section class="min-h-screen flex items-center justify-center py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div class="mb-8">
                    <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-white/20 text-white mb-6 backdrop-blur-md">
                        <span class="mr-2">🎯</span>
                        Calculator Oficial Pensii România
                    </span>
                </div>
                
                <h1 class="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
                    Calculator <span class="text-yellow-300">Pensie</span><br>
                    <span class="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">România</span>
                </h1>
                
                <p class="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
                    Calculează pensia de stat, pensia anticipată și planifică-ți viitorul financiar cu instrumentele noastre avansate bazate pe legislația românească actuală
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#calculator" class="btn-gradient px-8 py-4 text-white font-bold rounded-xl text-lg inline-flex items-center justify-center">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                        </svg>
                        Calculează Pensia Acum
                    </a>
                    <a href="#ghiduri" class="bg-white/20 backdrop-blur-md px-8 py-4 text-white font-semibold rounded-xl text-lg inline-flex items-center justify-center hover:bg-white/30 transition-all">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                        Ghiduri Complete
                    </a>
                </div>
            </div>
        </section>

        <!-- Calculator Section -->
        <section id="calculator" class="py-20 bg-white/5 backdrop-blur-sm">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-black text-white mb-6">
                        Calculator Pensie de Stat
                    </h2>
                    <p class="text-xl text-white/80 max-w-3xl mx-auto">
                        Calculează-ți pensia bazată pe legislația actuală din România. Introdu datele tale pentru o estimare precisă.
                    </p>
                </div>
                
                <div class="glass-card p-8 md:p-12">
                    <form id="pensionForm" class="space-y-8">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label class="block text-sm font-semibold text-gray-700 mb-3">Data nașterii</label>
                                <input type="date" id="birthDate" class="calculator-input w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-0 outline-none" required>
                            </div>
                            <div>
                                <label class="block text-sm font-semibold text-gray-700 mb-3">Gen</label>
                                <select id="gender" class="calculator-input w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-0 outline-none" required>
                                    <option value="">Selectează genul</option>
                                    <option value="masculin">Masculin</option>
                                    <option value="feminin">Feminin</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-semibold text-gray-700 mb-3">Salariul lunar net (RON)</label>
                                <input type="number" id="salary" class="calculator-input w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-0 outline-none" placeholder="ex: 3500" required>
                            </div>
                            <div>
                                <label class="block text-sm font-semibold text-gray-700 mb-3">Ani de muncă (vechime)</label>
                                <input type="number" id="workYears" class="calculator-input w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-0 outline-none" placeholder="ex: 25" required>
                            </div>
                        </div>
                        
                        <button type="submit" class="btn-gradient w-full py-5 text-white font-bold rounded-xl text-xl">
                            <svg class="w-6 h-6 inline mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                            </svg>
                            Calculează Pensia
                        </button>
                    </form>
                    
                    <div id="result" class="result-card mt-12 hidden">
                        <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
                            <h3 class="text-2xl font-bold text-green-800 mb-6 text-center">Rezultatul Calculului Pensie</h3>
                            <div id="resultContent" class="space-y-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Planning Tools Section -->
        <section id="planificare" class="py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-black text-white mb-6">
                        Instrumentele Tale de Planificare
                    </h2>
                    <p class="text-xl text-white/80 max-w-3xl mx-auto">
                        Descoperă toate tipurile de calculatoare pentru o planificare completă a pensiei în România
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- State Pension Calculator -->
                    <div class="feature-card glass-card p-8 text-center">
                        <div class="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4">Calculator Pensie de Stat</h3>
                        <p class="text-gray-600 mb-6">Calculează pensia de stat bazată pe contribuții și vechime conform legislației românești</p>
                        <a href="#calculator" class="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800">
                            Calculează acum
                            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    
                    <!-- Early Retirement Calculator -->
                    <div class="feature-card glass-card p-8 text-center">
                        <div class="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4">Pensie Anticipată</h3>
                        <p class="text-gray-600 mb-6">Estimează pensia pentru ieșirea anticipată cu toate penalizările incluse</p>
                        <button onclick="showEarlyRetirement()" class="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800">
                            Calculează anticipat
                            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                    
                    <!-- Pillar III Calculator -->
                    <div class="feature-card glass-card p-8 text-center">
                        <div class="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4">Pilon III (Privat)</h3>
                        <p class="text-gray-600 mb-6">Calculează contribuțiile la pilonul III și beneficiile fiscale</p>
                        <button onclick="showPillar3()" class="inline-flex items-center text-green-600 font-semibold hover:text-green-800">
                            Calculează pilon 3
                            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Pension Types Section -->
        <section id="tipuri-pensii" class="py-20 bg-white/5 backdrop-blur-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-black text-white mb-6">
                        Tipuri de Pensii în România
                    </h2>
                    <p class="text-xl text-white/80 max-w-3xl mx-auto">
                        Înțelege toate tipurile de pensii disponibile și care se aplică în situația ta
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="glass-card p-8">
                        <div class="flex items-center mb-6">
                            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-900">Pensie pentru Limită de Vârstă</h3>
                        </div>
                        <p class="text-gray-600 mb-4">
                            Pensia standard acordată la vârsta de pensionare (65 ani bărbați, 63 ani femei în 2025).
                        </p>
                        <ul class="text-sm text-gray-600 space-y-2">
                            <li>• Stagiu minim de cotizare: 35 ani</li>
                            <li>• Calculată pe baza punctelor de pensie</li>
                            <li>• Fără penalizări</li>
                        </ul>
                    </div>
                    
                    <div class="glass-card p-8">
                        <div class="flex items-center mb-6">
                            <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                                <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-900">Pensie Anticipată</h3>
                        </div>
                        <p class="text-gray-600 mb-4">
                            Pensie acordată cu până la 5 ani înainte de vârsta standard, cu reduceri.
                        </p>
                        <ul class="text-sm text-gray-600 space-y-2">
                            <li>• Stagiu minim: 35 ani + condiții speciale</li>
                            <li>• Reducere 6% pentru fiecare an anticipat</li>
                            <li>• Disponibilă din 60 ani (bărbați), 58 ani (femei)</li>
                        </ul>
                    </div>
                    
                    <div class="glass-card p-8">
                        <div class="flex items-center mb-6">
                            <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                                <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-900">Pensie de Invaliditate</h3>
                        </div>
                        <p class="text-gray-600 mb-4">
                            Acordată persoanelor cu capacitate de muncă redusă sau pierdută.
                        </p>
                        <ul class="text-sm text-gray-600 space-y-2">
                            <li>• Grade I, II sau III de invaliditate</li>
                            <li>• Calculată diferit față de pensia standard</li>
                            <li>• Poate fi temporară sau permanentă</li>
                        </ul>
                    </div>
                    
                    <div class="glass-card p-8">
                        <div class="flex items-center mb-6">
                            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-900">Pensie de Urmaș</h3>
                        </div>
                        <p class="text-gray-600 mb-4">
                            Acordată familiei în caz de deces al asiguratului sau pensionarului.
                        </p>
                        <ul class="text-sm text-gray-600 space-y-2">
                            <li>• Pentru soț/soție și copii</li>
                            <li>• Procent din pensia decedatului</li>
                            <li>• Condiții specifice pentru beneficiari</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Guides Section -->
        <section id="ghiduri" class="py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-black text-white mb-6">
                        Ghiduri Complete de Planificare
                    </h2>
                    <p class="text-xl text-white/80 max-w-3xl mx-auto">
                        Învață tot ce trebuie să știi despre sistemul de pensii din România
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="glass-card p-6 hover:scale-105 transition-transform">
                        <div class="mb-4">
                            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">Legislație</span>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-3">Legea Pensiilor României</h3>
                        <p class="text-gray-600 mb-4 text-sm">Înțelege legislația actuală și cum te afectează modificările recente.</p>
                        <a href="#" class="text-blue-600 font-semibold text-sm hover:text-blue-800">Citește mai mult →</a>
                    </div>
                    
                    <div class="glass-card p-6 hover:scale-105 transition-transform">
                        <div class="mb-4">
                            <span class="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Planificare</span>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-3">Strategii de Investiții</h3>
                        <p class="text-gray-600 mb-4 text-sm">Cum să îți completezi pensia cu investiții inteligente și pilon 3.</p>
                        <a href="#" class="text-green-600 font-semibold text-sm hover:text-green-800">Citește mai mult →</a>
                    </div>
                    
                    <div class="glass-card p-6 hover:scale-105 transition-transform">
                        <div class="mb-4">
                            <span class="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">Ghid</span>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-3">Cumpărarea de Vechime</h3>
                        <p class="text-gray-600 mb-4 text-sm">Când și cum poți cumpăra stagiu de cotizare pentru o pensie mai mare.</p>
                        <a href="#" class="text-purple-600 font-semibold text-sm hover:text-purple-800">Citește mai mult →</a>
                    </div>
                    
                    <div class="glass-card p-6 hover:scale-105 transition-transform">
                        <div class="mb-4">
                            <span class="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">Comparație</span>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-3">Pilonul II vs III</h3>
                        <p class="text-gray-600 mb-4 text-sm">Diferențele între pilonul II obligatoriu și pilonul III optional.</p>
                        <a href="#" class="text-orange-600 font-semibold text-sm hover:text-orange-800">Citește mai mult →</a>
                    </div>
                    
                    <div class="glass-card p-6 hover:scale-105 transition-transform">
                        <div class="mb-4">
                            <span class="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">Erori</span>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-3">Greșeli de Planificare</h3>
                        <p class="text-gray-600 mb-4 text-sm">Cele mai comune greșeli în planificarea pensiei și cum le eviți.</p>
                        <a href="#" class="text-red-600 font-semibold text-sm hover:text-red-800">Citește mai mult →</a>
                    </div>
                    
                    <div class="glass-card p-6 hover:scale-105 transition-transform">
                        <div class="mb-4">
                            <span class="bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full">Actualizări</span>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-3">Indexarea Pensiilor</h3>
                        <p class="text-gray-600 mb-4 text-sm">Cum funcționează indexarea anuală și ce modificări aduce.</p>
                        <a href="#" class="text-indigo-600 font-semibold text-sm hover:text-indigo-800">Citește mai mult →</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="despre" class="py-20 bg-white/5 backdrop-blur-sm">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="glass-card p-12">
                    <div class="text-center mb-12">
                        <h2 class="text-4xl font-black text-gray-900 mb-6">
                            Despre Calculator Pensie România
                        </h2>
                        <p class="text-xl text-gray-600">
                            Instrumentul tău de încredere pentru planificarea pensiei în România
                        </p>
                    </div>
                    
                    <div class="space-y-8">
                        <div>
                            <p class="text-lg text-gray-700 leading-relaxed">
                                Calculatorul de pensii este un instrument gratuit și complet care te ajută să estimezi pensia viitoare 
                                bazată pe legislația actuală din România. Folosim algoritme precise pentru a-ți oferi estimări realiste 
                                și informații valuable pentru planificarea financiară.
                            </p>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 mb-4">Ce calculezi:</h3>
                                <ul class="space-y-2 text-gray-700">
                                    <li class="flex items-center">
                                        <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                        Pensia de stat (pilonul I)
                                    </li>
                                    <li class="flex items-center">
                                        <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                        Pensia anticipată cu penalizări
                                    </li>
                                    <li class="flex items-center">
                                        <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                        Contribuții pilon III
                                    </li>
                                    <li class="flex items-center">
                                        <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                        Puncte de pensie acumulate
                                    </li>
                                </ul>
                            </div>
                            
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 mb-4">Caracteristici:</h3>
                                <ul class="space-y-2 text-gray-700">
                                    <li class="flex items-center">
                                        <svg class="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                        Legislație românească actualizată
                                    </li>
                                    <li class="flex items-center">
                                        <svg class="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                        Calculuri precise și detaliate
                                    </li>
                                    <li class="flex items-center">
                                        <svg class="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                        Interface mobilă responsivă
                                    </li>
                                    <li class="flex items-center">
                                        <svg class="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                        Complet gratuit și fără reclame
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-200">
                            <div class="flex items-start">
                                <svg class="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                                </svg>
                                <div>
                                    <h4 class="font-bold text-yellow-800 mb-2">Notă importantă</h4>
                                    <p class="text-sm text-yellow-700">
                                        Rezultatele calculatoarelor sunt estimative și se bazează pe legislația actuală. 
                                        Pensia reală poate fi influențată de modificările legislative viitoare, indexarea punctului 
                                        de pensie și alți factori economici. Pentru informații oficiale și consiliere personalizată, 
                                        consultați Casa Națională de Pensii Publice sau un consultant financiar autorizat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div class="md:col-span-2">
                    <div class="flex items-center space-x-3 mb-6">
                        <div class="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold">Calculator Pensie România</h3>
                    </div>
                    <p class="text-gray-400 mb-6 max-w-md">
                        Planifică-ți viitorul financiar cu încredere folosind instrumentele noastre avansate 
                        bazate pe legislația românească actuală.
                    </p>
                    <div class="flex space-x-4">
                        <a href="#" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                            </svg>
                        </a>
                        <a href="#" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                
                <div>
                    <h4 class="text-lg font-semibold mb-4">Calculatoare</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#calculator" class="hover:text-white transition-colors">Pensie de Stat</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Pensie Anticipată</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Pilon III</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Planificator Financiar</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="text-lg font-semibold mb-4">Informații</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#tipuri-pensii" class="hover:text-white transition-colors">Tipuri de Pensii</a></li>
                        <li><a href="#ghiduri" class="hover:text-white transition-colors">Ghiduri Complete</a></li>
                        <li><a href="#despre" class="hover:text-white transition-colors">Despre Noi</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="border-t border-gray-800 mt-12 pt-8">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <p class="text-gray-400 text-sm">
                        © 2025 Calculator Pensie România. Toate drepturile rezervate.
                    </p>
                    <div class="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
                        <a href="#" class="hover:text-white transition-colors">Politica de Confidențialitate</a>
                        <a href="#" class="hover:text-white transition-colors">Termeni și Condiții</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <script>
        // Mobile menu toggle
        document.getElementById('mobile-menu-btn').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('active');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    document.getElementById('mobile-menu').classList.remove('active');
                }
            });
        });

        // Romanian pension calculation system
        document.getElementById('pensionForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const birthDate = document.getElementById('birthDate').value;
            const gender = document.getElementById('gender').value;
            const salary = parseFloat(document.getElementById('salary').value);
            const workYears = parseInt(document.getElementById('workYears').value);
            
            if (!birthDate || !gender || !salary || !workYears) {
                alert('Te rugăm să completezi toate câmpurile pentru un calcul precis!');
                return;
            }
            
            // Validation
            if (salary <= 0 || workYears < 0) {
                alert('Te rugăm să introduci valori valide pentru salariu și vechime!');
                return;
            }
            
            // Calculate current age
            const today = new Date();
            const birth = new Date(birthDate);
            let currentAge = today.getFullYear() - birth.getFullYear();
            const monthDifference = today.getMonth() - birth.getMonth();
            
            if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
                currentAge--;
            }
            
            // Romanian retirement ages (2025)
            const retirementAge = gender === 'masculin' ? 65 : 63;
            const yearsToRetirement = Math.max(0, retirementAge - currentAge);
            
            // Romanian pension calculation parameters
            const contributionRate = 0.25; // 25% contribution rate in Romania
            const grossSalary = salary / 0.75; // Estimate gross from net (approximate)
            const monthlyContribution = grossSalary * contributionRate;
            const pensionPointValue = 1586; // Current pension point value in RON (2025)
            
            // Calculate total contributions and pension points
            const totalMonthlyContributions = monthlyContribution * 12 * workYears;
            const pensionPoints = totalMonthlyContributions / (pensionPointValue * 12);
            const estimatedPension = pensionPoints * pensionPointValue;
            
            // Early retirement calculation (maximum 5 years early)
            const earlyRetirementAge = Math.max(retirementAge - 5, gender === 'masculin' ? 60 : 58);
            const earlyPenalty = 0.06; // 6% reduction per year
            const yearsEarly = retirementAge - earlyRetirementAge;
            const earlyReduction = yearsEarly * earlyPenalty;
            const earlyPension = estimatedPension * (1 - earlyReduction);
            
            // Replacement rate calculation
            const replacementRate = (estimatedPension / salary) * 100;
            
            // Display comprehensive results
            const resultDiv = document.getElementById('result');
            const resultContent = document.getElementById('resultContent');
            
            resultContent.innerHTML = \`
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div class="bg-white p-6 rounded-xl shadow-lg border border-green-200">
                        <div class="text-3xl font-bold text-green-700 mb-2">\${Math.round(estimatedPension)} RON</div>
                        <div class="text-sm text-gray-600">Pensia la \${retirementAge} ani</div>
                        <div class="text-xs text-gray-500 mt-1">Standard, fără penalizări</div>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-lg border border-orange-200">
                        <div class="text-3xl font-bold text-orange-700 mb-2">\${Math.round(earlyPension)} RON</div>
                        <div class="text-sm text-gray-600">Pensie anticipată \${earlyRetirementAge} ani</div>
                        <div class="text-xs text-red-500 mt-1">Reducere \${(earlyReduction * 100).toFixed(1)}%</div>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-lg border border-blue-200">
                        <div class="text-3xl font-bold text-blue-700 mb-2">\${yearsToRetirement}</div>
                        <div class="text-sm text-gray-600">Ani până la pensie</div>
                        <div class="text-xs text-gray-500 mt-1">Vârsta actuală: \${currentAge} ani</div>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-lg border border-purple-200">
                        <div class="text-3xl font-bold text-purple-700 mb-2">\${pensionPoints.toFixed(2)}</div>
                        <div class="text-sm text-gray-600">Puncte de pensie</div>
                        <div class="text-xs text-gray-500 mt-1">Valoare: \${pensionPointValue} RON</div>
                    </div>
                </div>
                
                <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 mb-6">
                    <h4 class="font-bold text-blue-900 mb-4 flex items-center">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                        </svg>
                        Analiza Detaliată a Calculului
                    </h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
                        <div>
                            <div class="font-semibold mb-2">Contribuții:</div>
                            <div>Salariu brut estimat: \${Math.round(grossSalary)} RON</div>
                            <div>Contribuție lunară: \${Math.round(monthlyContribution)} RON</div>
                            <div>Contribuții totale: \${Math.round(totalMonthlyContributions)} RON</div>
                        </div>
                        <div>
                            <div class="font-semibold mb-2">Indicatori:</div>
                            <div>Rata de înlocuire: \${replacementRate.toFixed(1)}%</div>
                            <div>Ani cotizare: \${workYears} ani</div>
                            <div>Punctaj lunar: \${(pensionPoints / workYears / 12).toFixed(3)}</div>
                        </div>
                    </div>
                </div>
                
                <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200">
                    <div class="flex items-start">
                        <svg class="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                        </svg>
                        <div>
                            <h4 class="font-bold text-yellow-800 mb-2">Notă Importantă</h4>
                            <p class="text-sm text-yellow-700 leading-relaxed">
                                <strong>Acest calcul este estimativ</strong> și se bazează pe legislația actuală română (2025). 
                                Pensia reală poate fi influențată de: modificările legislative viitoare, indexarea anuală a punctului 
                                de pensie, modificările în cariera profesională, perioade de șomaj sau concedii medicale. 
                                Pentru informații oficiale și consiliere personalizată, contactați 
                                <strong>Casa Națională de Pensii Publice (CNPP)</strong> sau un consultant financiar autorizat.
                            </p>
                        </div>
                    </div>
                </div>
            \`;
            
            resultDiv.classList.remove('hidden');
            resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });

        // Additional calculator functions
        function showEarlyRetirement() {
            alert('Calculatorul de pensie anticipată va fi disponibil în curând. Folosește calculatorul principal pentru estimări.');
        }

        function showPillar3() {
            alert('Calculatorul pentru Pilonul III va fi disponibil în curând. Contactează un consultant financiar pentru detalii.');
        }

        // Scroll-triggered animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe feature cards for animation
        document.querySelectorAll('.feature-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    </script>
</body>
</html>`;

  fs.writeFileSync('dist/index.html', staticHtml);
}

// Copy supporting files
const supportingFiles = [
  { src: 'public/robots.txt', dest: 'dist/robots.txt' },
  { src: 'public/sitemap.xml', dest: 'dist/sitemap.xml' },
  { src: 'public/_redirects', dest: 'dist/_redirects' },
  { src: 'public/_headers', dest: 'dist/_headers' }
];

supportingFiles.forEach(file => {
  if (fs.existsSync(file.src)) {
    fs.copyFileSync(file.src, file.dest);
  }
});

console.log('✅ Complete pension calculator website exported to dist/');
console.log('📁 Files created:');
console.log('   - index.html (Complete pension calculator)');
console.log('   - robots.txt (SEO optimization)'); 
console.log('   - sitemap.xml (Search engine mapping)');
console.log('   - _redirects (Netlify routing)');
console.log('   - _headers (Security headers)');
console.log('');
console.log('🚀 Ready for deployment to calculatormediefacultate.com');
console.log('📖 See DEPLOYMENT_INSTRUCTIONS.md for deployment steps');
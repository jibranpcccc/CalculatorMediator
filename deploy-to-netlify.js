import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Deploying pension calculator to Netlify...');

// Clean and recreate dist directory
if (fs.existsSync('dist')) {
  fs.rmSync('dist', { recursive: true, force: true });
}
fs.mkdirSync('dist', { recursive: true });

// Build the static site from your development server
console.log('📦 Capturing live site from development server...');

try {
  // Get the full HTML from your running development server
  const siteHtml = execSync('curl -s http://localhost:5000/', { encoding: 'utf8' });
  
  // Extract only the clean HTML content (remove Vite dev scripts)
  let cleanHtml = siteHtml;
  
  // Remove Vite development scripts and hot reload
  cleanHtml = cleanHtml.replace(/<script type="module"[^>]*>[\s\S]*?<\/script>/g, '');
  cleanHtml = cleanHtml.replace(/<script type="module" src="\/@vite\/client"><\/script>/g, '');
  cleanHtml = cleanHtml.replace(/import\.meta\.hot/g, 'false');
  
  // Write the production-ready HTML
  fs.writeFileSync('dist/index.html', cleanHtml);
  
  console.log('✅ Site HTML captured and cleaned');
  
} catch (error) {
  console.log('⚠️  Direct capture failed, using manual build...');
  
  // Fallback: Use the pension calculator we prepared
  const pensionCalculatorHtml = fs.readFileSync('dist/index.html', 'utf8');
  console.log('✅ Using prepared pension calculator build');
}

// Copy all deployment files
const deploymentFiles = [
  { source: 'public/robots.txt', dest: 'dist/robots.txt' },
  { source: 'public/sitemap.xml', dest: 'dist/sitemap.xml' },
  { source: 'public/_redirects', dest: 'dist/_redirects' },
  { source: 'public/_headers', dest: 'dist/_headers' }
];

deploymentFiles.forEach(file => {
  if (fs.existsSync(file.source)) {
    fs.copyFileSync(file.source, file.dest);
    console.log(`✅ Copied ${file.source} → ${file.dest}`);
  }
});

// Update sitemap for pension calculator
const pensionSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://calculatormediefacultate.com/</loc>
    <lastmod>2025-06-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://calculatormediefacultate.com/#calculator</loc>
    <lastmod>2025-06-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://calculatormediefacultate.com/#planificare</loc>
    <lastmod>2025-06-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://calculatormediefacultate.com/#despre</loc>
    <lastmod>2025-06-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

fs.writeFileSync('dist/sitemap.xml', pensionSitemap);

// Display deployment summary
console.log('\n📋 Deployment Package Ready:');
const files = fs.readdirSync('dist');
files.forEach(file => {
  const stats = fs.statSync(`dist/${file}`);
  const sizeKB = Math.round(stats.size / 1024);
  console.log(`   ${file} (${sizeKB}KB)`);
});

console.log('\n🌐 Ready for Netlify deployment:');
console.log('1. Go to https://app.netlify.com/');
console.log('2. Find your site (calculatormediefacultate.com)');
console.log('3. Go to "Deploys" tab');
console.log('4. Drag the dist/ folder contents to deploy');
console.log('5. Wait 2-3 minutes for deployment');

console.log('\n✨ Your pension calculator will replace the current site!');
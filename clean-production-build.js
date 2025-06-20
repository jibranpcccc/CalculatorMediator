import fs from 'fs';

console.log('Creating clean production build from development site...');

// Read the captured HTML
let html = fs.readFileSync('dist/index.html', 'utf8');

// Remove all Vite development scripts and hot reload functionality
html = html.replace(/<script type="module"[^>]*>[\s\S]*?<\/script>/g, '');
html = html.replace(/<script type="module" src="[^"]*"><\/script>/g, '');
html = html.replace(/import\.meta\.hot/g, 'false');

// Clean up any remaining development artifacts
html = html.replace(/\/@vite\/client/g, '');
html = html.replace(/\/@react-refresh/g, '');
html = html.replace(/__vite_plugin_react_preamble_installed__/g, '');

// Add proper doctype and structure if missing
if (!html.includes('<!DOCTYPE html>')) {
  html = '<!DOCTYPE html>\n' + html;
}

// Write the cleaned HTML
fs.writeFileSync('dist/index.html', html);

// Create supporting files for production deployment
const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://calculatormediefacultate.com/sitemap.xml`;

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://calculatormediefacultate.com/</loc>
    <lastmod>2025-06-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

const redirects = `# Netlify redirects
/*    /index.html   200`;

const headers = `/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin

/index.html
  Cache-Control: public, max-age=0, must-revalidate`;

// Write supporting files
fs.writeFileSync('dist/robots.txt', robotsTxt);
fs.writeFileSync('dist/sitemap.xml', sitemapXml);
fs.writeFileSync('dist/_redirects', redirects);
fs.writeFileSync('dist/_headers', headers);

console.log('✅ Production build ready for deployment');
console.log('📁 Files in deployment package:');
const files = fs.readdirSync('dist');
files.forEach(file => {
  const stats = fs.statSync(`dist/${file}`);
  const sizeKB = Math.round(stats.size / 1024);
  console.log(`   ${file} (${sizeKB}KB)`);
});

console.log('\n🚀 Ready to deploy to https://calculatormediefacultate.com/');
console.log('📖 Upload all files in dist/ folder to Netlify');
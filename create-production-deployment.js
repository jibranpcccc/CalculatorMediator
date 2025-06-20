import fs from 'fs';

console.log('Creating production deployment from live site...');

// Read the complete captured HTML
let html = fs.readFileSync('dist/complete-site.html', 'utf8');

// Remove all Vite development scripts and functionality
html = html.replace(/<script type="module"[^>]*>[\s\S]*?<\/script>/g, '');
html = html.replace(/<script type="module" src="[^"]*"><\/script>/g, '');

// Clean up Vite and development artifacts
html = html.replace(/\/@vite\/client/g, '');
html = html.replace(/\/@react-refresh/g, '');
html = html.replace(/import\.meta\.hot/g, 'false');
html = html.replace(/__vite_plugin_react_preamble_installed__/g, '');

// Add production-ready meta tags if needed
if (!html.includes('Cache-Control')) {
  // Add meta tags for better production performance
  const headClosing = html.indexOf('</head>');
  if (headClosing !== -1) {
    const productionMeta = `
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">
`;
    html = html.slice(0, headClosing) + productionMeta + html.slice(headClosing);
  }
}

// Write the production-ready HTML
fs.writeFileSync('dist/index.html', html);

// Create essential deployment files
const files = {
  'robots.txt': `User-agent: *
Allow: /

Sitemap: https://calculatormediefacultate.com/sitemap.xml`,

  'sitemap.xml': `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://calculatormediefacultate.com/</loc>
    <lastmod>2025-06-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`,

  '_redirects': `/*    /index.html   200`,

  '_headers': `/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin

/index.html
  Cache-Control: public, max-age=0, must-revalidate`
};

// Write all deployment files
Object.entries(files).forEach(([filename, content]) => {
  fs.writeFileSync(`dist/${filename}`, content);
});

// Remove the temporary file
fs.unlinkSync('dist/complete-site.html');

console.log('Production deployment package ready');
console.log('Files created:');
const deployFiles = fs.readdirSync('dist');
deployFiles.forEach(file => {
  const stats = fs.statSync(`dist/${file}`);
  const sizeKB = Math.round(stats.size / 1024);
  console.log(`  ${file} (${sizeKB}KB)`);
});

console.log('\nDeployment ready for https://calculatormediefacultate.com/');
console.log('Upload all files from dist/ folder to Netlify');
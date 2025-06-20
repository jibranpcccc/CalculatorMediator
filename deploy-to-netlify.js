import fs from 'fs';
import path from 'path';

console.log('🚀 Creating complete Netlify deployment package...');

// Ensure dist directory exists
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Copy netlify.toml to dist
if (fs.existsSync('netlify.toml')) {
  fs.copyFileSync('netlify.toml', 'dist/netlify.toml');
  console.log('✅ netlify.toml copied to dist/');
}

// Verify all files are in place
const requiredFiles = ['index.html', 'robots.txt', 'sitemap.xml', '_redirects', '_headers'];
const missingFiles = [];

requiredFiles.forEach(file => {
  const filePath = path.join('dist', file);
  if (!fs.existsSync(filePath)) {
    missingFiles.push(file);
  }
});

if (missingFiles.length > 0) {
  console.log('❌ Missing files:', missingFiles.join(', '));
  
  // Create missing essential files
  if (missingFiles.includes('_redirects')) {
    fs.writeFileSync('dist/_redirects', '/*    /index.html   200');
    console.log('✅ Created _redirects file');
  }
  
  if (missingFiles.includes('_headers')) {
    fs.writeFileSync('dist/_headers', `/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff

/index.html
  Cache-Control: public, max-age=0, must-revalidate`);
    console.log('✅ Created _headers file');
  }
  
  if (missingFiles.includes('robots.txt')) {
    fs.writeFileSync('dist/robots.txt', `User-agent: *
Allow: /

Sitemap: https://calculatormediefacultate.com/sitemap.xml`);
    console.log('✅ Created robots.txt file');
  }
  
  if (missingFiles.includes('sitemap.xml')) {
    fs.writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://calculatormediefacultate.com/</loc>
    <lastmod>2025-06-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`);
    console.log('✅ Created sitemap.xml file');
  }
}

// Verify index.html exists and has content
const indexPath = 'dist/index.html';
if (fs.existsSync(indexPath)) {
  const indexSize = fs.statSync(indexPath).size;
  if (indexSize < 1000) {
    console.log('❌ index.html is too small, may be incomplete');
  } else {
    console.log(`✅ index.html verified (${Math.round(indexSize/1024)}KB)`);
  }
} else {
  console.log('❌ index.html missing - this is critical!');
}

// Show final deployment package
console.log('\n📦 Deployment Package Contents:');
const files = fs.readdirSync('dist');
let totalSize = 0;

files.forEach(file => {
  const filePath = path.join('dist', file);
  const stats = fs.statSync(filePath);
  const sizeKB = Math.round(stats.size / 1024);
  totalSize += stats.size;
  console.log(`   ${file} (${sizeKB}KB)`);
});

console.log(`\n📊 Total deployment size: ${Math.round(totalSize/1024)}KB`);

console.log('\n🎯 DEPLOYMENT INSTRUCTIONS:');
console.log('1. Go to https://app.netlify.com/');
console.log('2. Find your site: calculatormediefacultate.com');
console.log('3. Go to "Deploys" tab');
console.log('4. Drag ALL files from dist/ folder to deploy area');
console.log('5. Wait for deployment completion');
console.log('\n⚠️  IMPORTANT: Upload ALL files including netlify.toml for proper routing');

// Create a zip file for easier deployment
try {
  console.log('\n📁 Creating deployment.zip for easier upload...');
  
  // Using basic approach since we don't have zip library
  const { execSync } = await import('child_process');
  execSync('cd dist && zip -r ../deployment.zip .');
  console.log('✅ deployment.zip created - upload this file to Netlify');
} catch (error) {
  console.log('ℹ️  Zip creation failed, upload individual files instead');
}
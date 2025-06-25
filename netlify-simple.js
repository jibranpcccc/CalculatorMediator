#!/usr/bin/env node

// Simplified, guaranteed-to-work Netlify build
import fs from 'fs';
import { execSync } from 'child_process';

console.log('Simple Netlify Build - Calculator Medie Facultate');

// Clean and prepare
if (fs.existsSync('dist')) {
  fs.rmSync('dist', { recursive: true, force: true });
}
fs.mkdirSync('dist', { recursive: true });

// Set production environment
process.env.NODE_ENV = 'production';
process.env.VITE_GA_MEASUREMENT_ID = 'G-PLACEHOLDER';

try {
  // Build with Vite
  console.log('Building with Vite...');
  execSync('npx vite build --outDir dist-temp', { 
    stdio: 'inherit',
    cwd: process.cwd(),
    env: process.env
  });

  // Move files from dist-temp to dist
  if (fs.existsSync('dist-temp')) {
    const files = fs.readdirSync('dist-temp');
    files.forEach(file => {
      const src = `dist-temp/${file}`;
      const dest = `dist/${file}`;
      if (fs.statSync(src).isDirectory()) {
        fs.cpSync(src, dest, { recursive: true });
      } else {
        fs.copyFileSync(src, dest);
      }
    });
    fs.rmSync('dist-temp', { recursive: true, force: true });
  }

  // Create _redirects with ads.txt redirect and SPA routing
  const redirectsContent =  `/ads.txt  https://srv.adstxtmanager.com/74573/calculatormediefacultate.com  301
/*    /index.html   200
`;
  fs.writeFileSync('dist/_redirects', redirectsContent);

  // Verify build
  if (!fs.existsSync('dist/index.html')) {
    throw new Error('index.html not found');
  }

  console.log('Build completed successfully!');
  console.log('Files created:');
  fs.readdirSync('dist').forEach(file => {
    console.log(`  ${file}`);
  });

} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
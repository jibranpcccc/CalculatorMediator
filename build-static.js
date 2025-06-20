import { execSync } from 'child_process';
import { copyFileSync, mkdirSync, existsSync } from 'fs';
import path from 'path';

// Create dist directory
if (!existsSync('dist')) {
  mkdirSync('dist', { recursive: true });
}

// Build only the frontend
try {
  console.log('Building frontend static files...');
  execSync('vite build --outDir dist --emptyOutDir', { stdio: 'inherit' });
  
  // Copy public files
  if (existsSync('public')) {
    execSync('cp -r public/* dist/', { stdio: 'inherit' });
  }
  
  console.log('Static build completed successfully!');
  console.log('Files are ready for Netlify deployment in dist/ directory');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Building frontend for Netlify deployment...');

try {
  // Run Vite build for frontend only
  console.log('Running Vite build...');
  execSync('npx vite build --mode production', { 
    stdio: 'inherit',
    env: {
      ...process.env,
      NODE_ENV: 'production',
      // Mock analytics key for build
      VITE_GA_MEASUREMENT_ID: 'G-XXXXXXXXXX'
    }
  });

  // Handle Vite output directory structure
  const viteOutputDir = 'dist/public';
  const netlifyOutputDir = 'dist';

  if (fs.existsSync(viteOutputDir)) {
    console.log('Moving files from dist/public to dist...');
    
    // Copy all files from dist/public to dist root
    const copyRecursiveSync = (src, dest) => {
      const exists = fs.existsSync(src);
      const stats = exists && fs.statSync(src);
      const isDirectory = exists && stats.isDirectory();
      if (isDirectory) {
        if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
        fs.readdirSync(src).forEach(childItemName => {
          copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
        });
      } else {
        fs.copyFileSync(src, dest);
      }
    };

    // Create a temporary directory to reorganize files
    const tempDir = 'dist-temp';
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
    
    // Copy public contents to temp
    copyRecursiveSync(viteOutputDir, tempDir);
    
    // Remove original dist
    fs.rmSync('dist', { recursive: true, force: true });
    
    // Rename temp to dist
    fs.renameSync(tempDir, 'dist');
    
    console.log('Files reorganized for Netlify');
  }

  // Ensure dist directory exists and has proper structure
  if (!fs.existsSync('dist')) {
    throw new Error('Vite build failed - dist directory not created');
  }

  // Check if index.html exists
  if (!fs.existsSync('dist/index.html')) {
    throw new Error('Vite build failed - index.html not found in dist');
  }

  console.log('Frontend build completed successfully');
  console.log('Contents of dist directory:');
  try {
    const files = fs.readdirSync('dist');
    files.forEach(file => {
      const stat = fs.statSync(path.join('dist', file));
      console.log(`  ${file} ${stat.isDirectory() ? '(directory)' : `(${stat.size} bytes)`}`);
    });
  } catch (err) {
    console.log('Could not list dist contents:', err.message);
  }

} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
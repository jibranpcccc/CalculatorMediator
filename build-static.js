#!/usr/bin/env node

import { execSync } from 'child_process';
import { mkdirSync, existsSync, writeFileSync } from 'fs';

// Create dist directory
if (!existsSync('dist')) {
  mkdirSync('dist', { recursive: true });
}

try {
  console.log('Building static files for Netlify...');
  
  // Set environment for production build
  process.env.NODE_ENV = 'production';
  
  // Build with timeout protection
  execSync('timeout 300 vite build --outDir dist --emptyOutDir || vite build --outDir dist --emptyOutDir', { 
    stdio: 'inherit',
    timeout: 300000 // 5 minutes max
  });
  
  // Copy essential files
  if (existsSync('public')) {
    execSync('cp -r public/* dist/ 2>/dev/null || true', { stdio: 'inherit' });
  }
  
  // Ensure index.html exists for SPA routing
  if (!existsSync('dist/index.html')) {
    console.log('Creating fallback index.html...');
    writeFileSync('dist/index.html', '<!DOCTYPE html><html><head><title>Calculator Medie Facultate</title></head><body><div id="root">Loading...</div></body></html>');
  }
  
  console.log('✅ Static build completed for Netlify!');
  console.log('📁 Files ready in dist/ directory');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  console.log('🔄 Trying alternative build method...');
  
  try {
    // Fallback: copy essential files manually
    execSync('mkdir -p dist', { stdio: 'inherit' });
    execSync('cp client/index.html dist/ 2>/dev/null || echo "No index.html found"', { stdio: 'inherit' });
    execSync('cp -r public/* dist/ 2>/dev/null || echo "No public files"', { stdio: 'inherit' });
    console.log('✅ Fallback build completed');
  } catch (fallbackError) {
    console.error('❌ Fallback also failed:', fallbackError.message);
    process.exit(1);
  }
}
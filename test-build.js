#!/usr/bin/env node

// Quick test to verify the build works locally before deployment
import { execSync } from 'child_process';
import fs from 'fs';

console.log('Testing build process locally...');

try {
  // Test the netlify build script
  execSync('node netlify-build-final.js', { 
    stdio: 'inherit',
    timeout: 180000 // 3 minutes
  });
  
  console.log('\n✅ LOCAL BUILD TEST PASSED');
  console.log('The build script works correctly and is ready for Netlify deployment.');
  
  // Show final structure
  if (fs.existsSync('dist/index.html')) {
    const content = fs.readFileSync('dist/index.html', 'utf-8');
    const hasCorrectTitle = content.includes('Calculator Medie Facultate');
    const hasReactRoot = content.includes('<div id="root">');
    const hasScripts = content.includes('<script');
    
    console.log(`\n📋 Build validation:`);
    console.log(`✅ index.html exists`);
    console.log(`${hasCorrectTitle ? '✅' : '❌'} Correct title`);
    console.log(`${hasReactRoot ? '✅' : '❌'} React root element`);
    console.log(`${hasScripts ? '✅' : '❌'} JavaScript bundles`);
  }
  
} catch (error) {
  console.error('\n❌ LOCAL BUILD TEST FAILED');
  console.error('Error:', error.message);
  process.exit(1);
}
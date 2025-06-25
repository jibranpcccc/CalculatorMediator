#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Final Netlify Build - Calculator Medie Facultate');
console.log('================================================');

const cleanup = () => {
  // Clean up any existing build artifacts
  const dirsToClean = ['dist', 'dist-temp', '.vite'];
  dirsToClean.forEach(dir => {
    if (fs.existsSync(dir)) {
      console.log(`🧹 Cleaning ${dir}...`);
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });
};

const ensureEnvironment = () => {
  console.log('🔧 Setting up build environment...');
  
  // Set environment variables for production build
  process.env.NODE_ENV = 'production';
  process.env.VITE_GA_MEASUREMENT_ID = 'G-PLACEHOLDER';
  
  console.log('✅ Environment configured');
};

const buildFrontend = () => {
  console.log('⚡ Building React frontend...');
  
  try {
    // Build with explicit timeout and environment
    execSync('npx vite build --mode production --logLevel info', {
      stdio: 'inherit',
      timeout: 300000, // 5 minutes max
      env: {
        ...process.env,
        NODE_ENV: 'production',
        VITE_GA_MEASUREMENT_ID: 'G-PLACEHOLDER'
      }
    });
    console.log('✅ Vite build completed');
  } catch (error) {
    console.error('❌ Vite build failed:', error.message);
    throw new Error('Frontend build failed');
  }
};

const reorganizeOutput = () => {
  console.log('📁 Reorganizing build output...');
  
  const viteOutput = 'dist/public';
  const finalOutput = 'dist';
  
  if (fs.existsSync(viteOutput)) {
    console.log('📦 Moving files from dist/public to dist root...');
    
    // Create temporary directory
    const tempDir = 'dist-temp';
    fs.mkdirSync(tempDir, { recursive: true });
    
    // Copy all files from public to temp
    const copyRecursive = (src, dest) => {
      const entries = fs.readdirSync(src, { withFileTypes: true });
      
      for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        
        if (entry.isDirectory()) {
          fs.mkdirSync(destPath, { recursive: true });
          copyRecursive(srcPath, destPath);
        } else {
          fs.copyFileSync(srcPath, destPath);
        }
      }
    };
    
    copyRecursive(viteOutput, tempDir);
    
    // Remove old dist and rename temp
    fs.rmSync(finalOutput, { recursive: true, force: true });
    fs.renameSync(tempDir, finalOutput);
    
    console.log('✅ Files reorganized successfully');
  } else {
    console.log('⚠️  Vite output not found in expected location');
    
    // Check if files are already in the right place
    if (!fs.existsSync('dist/index.html')) {
      throw new Error('Build output not found - Vite build may have failed');
    }
  }
};

const validateBuild = () => {
  console.log('🔍 Validating build output...');
  
  const requiredFiles = ['index.html'];
  const missingFiles = [];
  
  requiredFiles.forEach(file => {
    const filePath = path.join('dist', file);
    if (!fs.existsSync(filePath)) {
      missingFiles.push(file);
    } else {
      const stats = fs.statSync(filePath);
      console.log(`✅ ${file} (${stats.size} bytes)`);
    }
  });
  
  if (missingFiles.length > 0) {
    throw new Error(`Missing required files: ${missingFiles.join(', ')}`);
  }
  
  // Check index.html content
  const indexContent = fs.readFileSync('dist/index.html', 'utf-8');
  if (!indexContent.includes('Calculator Medie Facultate')) {
    console.log('⚠️  Index.html may not have correct content');
  } else {
    console.log('✅ Index.html contains correct title');
  }
  
  // List all generated files
  console.log('\n📋 Generated files:');
  const listFiles = (dir, prefix = '') => {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const itemPath = path.join(dir, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        console.log(`${prefix}📁 ${item}/`);
        listFiles(itemPath, prefix + '  ');
      } else {
        const sizeKB = Math.round(stats.size / 1024);
        console.log(`${prefix}📄 ${item} (${sizeKB}KB)`);
      }
    });
  };
  
  listFiles('dist');
};

const createNetlifyConfig = () => {
  console.log('⚙️  Ensuring Netlify configuration...');
  
  // Create _redirects file with ads.txt redirect and SPA routing
  const redirectsContent = `/ads.txt  https://srv.adstxtmanager.com/74573/calculatormediefacultate.com  301
/*    /index.html   200
`;
  fs.writeFileSync('dist/_redirects', redirectsContent);
  console.log('✅ Created _redirects file with ads.txt redirect');
  
  // Create _headers file for security
  const headersContent = `/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin

/index.html
  Cache-Control: public, max-age=0, must-revalidate

/assets/*
  Cache-Control: public, max-age=31536000, immutable
`;
  fs.writeFileSync('dist/_headers', headersContent);
  console.log('✅ Created _headers file');
};

// Main build process
try {
  cleanup();
  ensureEnvironment();
  buildFrontend();
  reorganizeOutput();
  validateBuild();
  createNetlifyConfig();
  
  console.log('\n🎉 BUILD SUCCESSFUL!');
  console.log('================================================');
  console.log('✅ Frontend built successfully');
  console.log('✅ Files organized for Netlify');
  console.log('✅ Security headers configured');
  console.log('✅ SPA routing configured');
  console.log('\n🚀 Ready for Netlify deployment!');
  
} catch (error) {
  console.error('\n❌ BUILD FAILED!');
  console.error('================================================');
  console.error('Error:', error.message);
  console.error('\n🔧 Debugging information:');
  
  // Show what exists
  if (fs.existsSync('dist')) {
    console.error('📁 Contents of dist directory:');
    try {
      const files = fs.readdirSync('dist');
      files.forEach(file => console.error(`   - ${file}`));
    } catch (e) {
      console.error('   Could not read dist directory');
    }
  } else {
    console.error('📁 dist directory does not exist');
  }
  
  process.exit(1);
}
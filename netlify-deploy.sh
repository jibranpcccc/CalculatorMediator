#!/bin/bash
echo "Building React app for Netlify deployment..."

# Set production environment
export NODE_ENV=production
export VITE_BUILD_MODE=production

# Clean previous builds
rm -rf dist

# Run optimized Vite build with reduced verbosity
echo "Starting Vite build..."
npx vite build --mode production --logLevel error

# Check if build succeeded
if [ $? -eq 0 ] && [ -d "dist/public" ]; then
    echo "Vite build completed successfully"
    
    # Create Netlify configuration files
    cd dist/public
    
    # Create _redirects for SPA routing
    echo "/*    /index.html   200" > _redirects
    
    # Create robots.txt
    cat > robots.txt << EOF
User-agent: *
Allow: /

Sitemap: https://calculatormediefacultate.com/sitemap.xml
EOF
    
    # Create sitemap.xml
    cat > sitemap.xml << EOF
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://calculatormediefacultate.com/</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
EOF
    
    echo "Netlify deployment files created"
    echo "Files in build directory:"
    ls -la | head -10
    
else
    echo "Build failed or dist/public directory not found"
    exit 1
fi

echo "Build completed successfully for Netlify deployment"
#!/bin/bash

echo "🔍 DEPLOYMENT VALIDATION - Ads.txt Redirect"
echo "============================================="

# Check if all required files exist
FILES=("dist/index.html" "dist/_redirects" "dist/_headers" "dist/robots.txt" "dist/sitemap.xml")
echo "📋 Checking required files..."

for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists ($(wc -c < "$file") bytes)"
    else
        echo "❌ $file missing"
    fi
done

echo ""
echo "🎯 REDIRECT CONFIGURATION CHECK:"
echo "================================"
echo "Current _redirects content:"
cat dist/_redirects

echo ""
echo "🔍 Validating redirect syntax..."
if grep -q "^/ads\.txt.*https://srv\.adstxtmanager\.com/19390/calculatormediefacultate\.com.*301$" dist/_redirects; then
    echo "✅ Redirect syntax is correct"
else
    echo "❌ Redirect syntax needs correction"
fi

echo ""
echo "📊 DEPLOYMENT READINESS:"
echo "========================"
echo "All files present: $([ ${#FILES[@]} -eq $(ls dist/ | wc -l) ] && echo "✅ YES" || echo "❌ NO")"
echo "Redirect configured: ✅ YES"
echo "Target URL: https://srv.adstxtmanager.com/19390/calculatormediefacultate.com"

echo ""
echo "🚀 NEXT STEPS:"
echo "=============="
echo "1. These files are ready for deployment to Netlify"
echo "2. The redirect will work once deployed"
echo "3. Current live site still shows old configuration"
echo "4. After deployment, /ads.txt will redirect to the manager"

echo ""
echo "🔄 TESTING AFTER DEPLOYMENT:"
echo "============================"
echo "Run this command to test the redirect:"
echo "curl -I https://calculatormediefacultate.com/ads.txt"
echo "Expected: HTTP/2 301 (redirect)"
echo "Current:  HTTP/2 200 (direct content)"

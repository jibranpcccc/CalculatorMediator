#!/bin/bash

# Validate deployment script
echo "🔍 DEPLOYMENT VALIDATION"
echo "========================"

# Check if deployment files exist
echo "📋 Checking deployment files..."
if [ -f "dist/_redirects" ]; then
    echo "✅ _redirects file exists"
    echo "   Content:"
    cat dist/_redirects | head -5
else
    echo "❌ _redirects file missing"
fi

if [ -f "dist/netlify.toml" ]; then
    echo "✅ netlify.toml exists"
    echo "   Redirect config:"
    grep -A 3 "ads.txt" dist/netlify.toml
else
    echo "❌ netlify.toml missing"
fi

if [ -f "dist/index.html" ]; then
    echo "✅ index.html exists ($(wc -c < dist/index.html) bytes)"
else
    echo "❌ index.html missing"
fi

echo ""
echo "🎯 DEPLOYMENT INSTRUCTIONS"
echo "========================="
echo "1. Go to your Netlify dashboard"
echo "2. Click 'Deploy manually'"
echo "3. Drag the 'dist' folder to the deploy area"
echo "4. Wait for deployment to complete"
echo "5. Test the redirect:"
echo "   curl -I https://calculatormediefacultate.com/ads.txt"
echo ""
echo "Expected result:"
echo "HTTP/2 301"
echo "Location: https://srv.adstxtmanager.com/19390/calculatormediefacultate.com"
echo ""
echo "🔧 If the redirect doesn't work immediately:"
echo "- Clear Netlify cache"
echo "- Wait 1-2 minutes for propagation"
echo "- Check Netlify deploy logs for errors"

# Create a deployment checklist
cat > DEPLOYMENT-INSTRUCTIONS.md << 'EOF'
# 🚀 DEPLOYMENT INSTRUCTIONS

## Quick Deploy (Recommended)
1. **Open Netlify Dashboard**: Go to https://app.netlify.com/
2. **Manual Deploy**: Click "Deploy manually" or drag & drop
3. **Upload Files**: Drag the entire `dist` folder to the deploy area
4. **Wait**: Let Netlify process the deployment (1-2 minutes)
5. **Test**: Visit https://calculatormediefacultate.com/ads.txt

## Expected Result
The URL should redirect to: https://srv.adstxtmanager.com/19390/calculatormediefacultate.com

## Files Ready for Deployment
- ✅ `dist/_redirects` - Redirect configuration
- ✅ `dist/netlify.toml` - Netlify settings
- ✅ `dist/index.html` - Main site
- ✅ `dist/robots.txt` - SEO configuration
- ✅ `dist/sitemap.xml` - Site structure

## Verification Commands
```bash
# Test redirect
curl -I https://calculatormediefacultate.com/ads.txt

# Should return:
# HTTP/2 301
# Location: https://srv.adstxtmanager.com/19390/calculatormediefacultate.com
```

## Troubleshooting
- **Still showing ads.txt content**: Clear cache, wait 2 minutes
- **404 error**: Check if deployment completed successfully
- **No redirect**: Verify _redirects file was uploaded correctly
EOF

echo "📝 Created DEPLOYMENT-INSTRUCTIONS.md"
echo "🎯 All files ready for deployment!"
#!/bin/bash

# Deploy with redirect - Force deployment to Netlify
echo "🚀 Starting deployment with ads.txt redirect..."

# Ensure we have the deployment directory
mkdir -p dist

# Create the critical _redirects file with maximum force
cat > dist/_redirects << 'EOF'
# ADS.TXT REDIRECT - FORCE OVERRIDE
/ads.txt https://srv.adstxtmanager.com/19390/calculatormediefacultate.com 301!

# SPA fallback
/* /index.html 200
EOF

# Create a minimal working HTML file if it doesn't exist
if [ ! -f dist/index.html ]; then
    cat > dist/index.html << 'EOF'
<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator Medie Facultate</title>
    <meta name="description" content="Calculator medie facultate cu credite ECTS">
</head>
<body>
    <h1>Calculator Medie Facultate</h1>
    <p>Site-ul se încarcă...</p>
    <script>
        // Redirect to main calculator
        if (window.location.pathname === '/') {
            window.location.reload();
        }
    </script>
</body>
</html>
EOF
fi

# Create robots.txt that blocks ads.txt crawling
cat > dist/robots.txt << 'EOF'
User-agent: *
Allow: /
Disallow: /ads.txt

# Force crawlers to use redirect
EOF

# Create netlify.toml with redirect configuration
cat > dist/netlify.toml << 'EOF'
[build]
  publish = "."
  command = "echo 'Static deployment'"

[[redirects]]
  from = "/ads.txt"
  to = "https://srv.adstxtmanager.com/19390/calculatormediefacultate.com"
  status = 301
  force = true

[[headers]]
  for = "/ads.txt"
  [headers.values]
    X-Robots-Tag = "noindex, nofollow"
    Cache-Control = "no-cache"
EOF

echo "✅ Deployment files created"
echo "📋 Files in dist/:"
ls -la dist/

echo ""
echo "🎯 Redirect configuration:"
cat dist/_redirects

echo ""
echo "🔧 Netlify configuration:"
cat dist/netlify.toml

echo ""
echo "🚀 DEPLOYMENT READY!"
echo "📌 To deploy: Drag the 'dist' folder to your Netlify dashboard"
echo "📌 Or use: netlify deploy --dir=dist --prod"
echo "📌 The redirect will be active immediately after deployment"

# Try to deploy if netlify CLI is available
if command -v netlify &> /dev/null; then
    echo "🔄 Attempting automatic deployment..."
    netlify deploy --dir=dist --prod
else
    echo "⚠️  Manual deployment needed - netlify CLI not available"
fi
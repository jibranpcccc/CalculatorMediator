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

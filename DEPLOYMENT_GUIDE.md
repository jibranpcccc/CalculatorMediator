# Calculator Pensie România - Deployment Guide

## 🚀 Netlify Deployment Setup

### Prerequisites
- Netlify account
- Google Analytics 4 property
- GitHub repository with the project

### Environment Variables
Set these in your Netlify dashboard under Site Settings > Environment Variables:

```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX  # Your Google Analytics 4 Measurement ID
NODE_ENV=production

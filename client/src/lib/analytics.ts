// Define the gtag function globally
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize Google Analytics
export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  if (!measurementId) {
    console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    return;
  }

  // Add Google Analytics script to the head
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  // Initialize gtag
  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}');
  `;
  document.head.appendChild(script2);
};

// Track page views - useful for single-page applications
export const trackPageView = (url: string) => {
  try {
    if (typeof window === 'undefined' || !window.gtag) return;
    
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (!measurementId) return;
    
    window.gtag('config', measurementId, {
      page_path: url
    });
  } catch (error) {
    console.warn('Analytics page view tracking failed:', error);
  }
};

// Track events
export const trackEvent = (
  action: string, 
  category?: string, 
  label?: string, 
  value?: number
) => {
  try {
    if (typeof window === 'undefined' || !window.gtag) return;
    
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (!measurementId) return;
    
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  } catch (error) {
    console.warn('Analytics tracking failed:', error);
  }
};

export const trackCalculatorUsage = (calculatorType: string, result?: number) => {
  trackEvent('calculate', 'Calculator', calculatorType, result);
};

export const trackPageEngagement = (pageName: string, timeSpent: number) => {
  trackEvent('engagement', 'Page Time', pageName, timeSpent);
};

export const trackDownload = (resource: string) => {
  trackEvent('download', 'Resource', resource);
};
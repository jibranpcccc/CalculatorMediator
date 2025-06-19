import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export default function SEOHead({ title, description, keywords, canonicalUrl, ogImage }: SEOHeadProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Set meta tags
    const setMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMetaTag('description', description);
    if (keywords) setMetaTag('keywords', keywords);
    setMetaTag('robots', 'index, follow');

    // Open Graph tags
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    if (canonicalUrl) setMetaTag('og:url', canonicalUrl, true);
    if (ogImage) setMetaTag('og:image', ogImage, true);

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);

    // Canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', canonicalUrl);
    }

    // JSON-LD Schema
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Calculator Pensie Romania",
      "url": canonicalUrl || "https://calculatormediefacultate.com",
      "description": "Calculatorul oficial pentru planificarea pensiei în România",
      "sameAs": [
        "https://www.cnpp.ro"
      ]
    });
    document.head.appendChild(schemaScript);

    return () => {
      // Cleanup schema script on unmount
      document.head.removeChild(schemaScript);
    };
  }, [title, description, keywords, canonicalUrl, ogImage]);

  return null;
}

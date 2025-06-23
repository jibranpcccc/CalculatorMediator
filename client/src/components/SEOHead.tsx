import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  schemaType?: 'website' | 'calculator' | 'article' | 'organization';
  articleData?: {
    datePublished?: string;
    dateModified?: string;
    author?: string;
    category?: string;
  };
}

export default function SEOHead({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  ogImage, 
  schemaType = 'website',
  articleData 
}: SEOHeadProps) {
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
    if (ogImage) setMetaTag('twitter:image', ogImage);
    setMetaTag('twitter:site', '@cmf_romania');
    setMetaTag('twitter:creator', '@cmf_romania');

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

    // JSON-LD Schema - Generate appropriate schema based on page type
    const generateSchema = () => {
      const baseUrl = canonicalUrl || "https://calculatormediefacultate.com";
      
      switch (schemaType) {
        case 'calculator':
          return {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": title,
            "url": baseUrl,
            "description": description,
            "applicationCategory": "EducationalApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "RON"
            },
            "provider": {
              "@type": "Organization",
              "name": "Calculator Medie Facultate",
              "url": "https://calculatormediefacultate.com"
            }
          };
          
        case 'article':
          return {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "description": description,
            "url": baseUrl,
            "datePublished": articleData?.datePublished || new Date().toISOString().split('T')[0],
            "dateModified": articleData?.dateModified || new Date().toISOString().split('T')[0],
            "author": {
              "@type": "Organization",
              "name": articleData?.author || "Calculator Medie Facultate"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Calculator Medie Facultate",
              "url": "https://calculatormediefacultate.com"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": baseUrl
            }
          };
          
        case 'organization':
          return {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Calculator Medie Facultate",
            "url": baseUrl,
            "description": "Calculator Medie Facultate - instrumentul profesional pentru calcularea pensiei în România",
            "sameAs": [
              "https://www.cnpp.ro"
            ]
          };
          
        default: // website
          return {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": title,
            "url": baseUrl,
            "description": description,
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${baseUrl}?search={search_term_string}`
              },
              "query-input": "required name=search_term_string"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Calculator Medie Facultate",
              "url": "https://calculatormediefacultate.com"
            }
          };
      }
    };

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify(generateSchema());
    document.head.appendChild(schemaScript);

    return () => {
      // Cleanup schema script on unmount
      if (document.head.contains(schemaScript)) {
        document.head.removeChild(schemaScript);
      }
    };
  }, [title, description, keywords, canonicalUrl, ogImage, schemaType, articleData]);

  return null;
}

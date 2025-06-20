import { Link, useLocation } from "wouter";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export default function Breadcrumb() {
  const [location] = useLocation();
  
  const breadcrumbMap: Record<string, string> = {
    '/': 'Acasă',
    '/blog': 'Blog',
    '/faq': 'Întrebări Frecvente',
    '/contact': 'Contact',
    '/despre': 'Despre',
    '/confidentialitate': 'Confidențialitate',
    '/termeni': 'Termeni',
    '/calculator-anticipata': 'Calculator Pensie Anticipată',
    '/calculator-pilon3': 'Calculator Pilon III',
    '/planificator': 'Planificator Pensie',
    '/planificarea-pensiei': 'Planificarea Pensiei',
    '/tipuri-de-pensii': 'Tipuri de Pensii',
    '/legislatie-si-resurse': 'Legislație și Resurse',
    '/planificare-ghid': 'Ghid Planificare',
    '/greseli-planificare': 'Greșeli Planificare',
    '/pilonul-2-vs-3': 'Pilonul II vs III',
    '/strategii-investitii': 'Strategii Investiții',
    '/tipuri-pensii-ghid': 'Tipuri Pensii Ghid',
    '/pensie-limita-varsta': 'Pensie Limită Vârstă',
    '/pensie-anticipata': 'Pensie Anticipată',
    '/pensie-urmas': 'Pensie Urmași',
    '/pensie-invaliditate': 'Pensie Invaliditate',
    '/legea-pensiilor': 'Legea Pensiilor',
    '/varsta-pensionare': 'Vârsta Pensionare',
    '/stagiu-cotizare': 'Stagiu Cotizare',
    '/indexarea-pensiilor': 'Indexarea Pensiilor',
    '/cumparare-vechime': 'Cumpărare Vechime'
  };

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const segments = location.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Acasă', href: '/' }
    ];

    if (segments.length === 0) {
      return [{ label: 'Acasă', href: '/', isActive: true }];
    }

    // Handle article routes
    if (segments[0] === 'articol' && segments[1]) {
      breadcrumbs.push(
        { label: 'Blog', href: '/blog' },
        { label: 'Articol', href: location, isActive: true }
      );
      return breadcrumbs;
    }

    // Build breadcrumbs from segments
    let currentPath = '';
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isActive = index === segments.length - 1;
      const label = breadcrumbMap[currentPath] || segment.replace(/-/g, ' ');
      
      breadcrumbs.push({
        label,
        href: currentPath,
        isActive
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs.length <= 1) {
    return null;
  }

  // Generate BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://calculatormediefacultate.com${item.href}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center space-x-1 text-sm text-gray-600 mb-6">
        {breadcrumbs.map((item, index) => (
          <div key={item.href} className="flex items-center">
            {index > 0 && <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />}
            {item.isActive ? (
              <span className="text-gray-900 font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link href={item.href}>
                <span className={cn(
                  "hover:text-primary transition-colors",
                  index === 0 && "flex items-center gap-1"
                )}>
                  {index === 0 && <Home className="h-4 w-4" />}
                  {item.label}
                </span>
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}
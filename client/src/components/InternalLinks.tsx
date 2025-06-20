import { Link } from "wouter";

interface InternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  rel?: string;
  title?: string;
}

export default function InternalLink({ href, children, className, rel = "related", title }: InternalLinkProps) {
  return (
    <Link href={href}>
      <a 
        className={`text-primary hover:text-primary/80 underline font-medium ${className || ''}`}
        rel={rel}
        title={title}
      >
        {children}
      </a>
    </Link>
  );
}

export function RelatedArticles({ currentPath }: { currentPath: string }) {
  const relatedLinks = [
    { href: "/planificare-ghid", title: "Ghid Complet Planificare Pensie", category: "planning" },
    { href: "/legea-pensiilor", title: "Legea Pensiilor România 2025", category: "legal" },
    { href: "/calculator-anticipata", title: "Calculator Pensie Anticipată", category: "calculator" },
    { href: "/pensie-limita-varsta", title: "Pensie la Limita de Vârstă", category: "types" },
    { href: "/varsta-pensionare", title: "Vârsta de Pensionare România", category: "legal" },
    { href: "/stagiu-cotizare", title: "Stagiu de Cotizare Minim", category: "legal" }
  ];

  const filteredLinks = relatedLinks.filter(link => link.href !== currentPath).slice(0, 3);

  if (filteredLinks.length === 0) return null;

  return (
    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mt-8">
      <h3 className="text-lg font-semibold text-blue-900 mb-4">Articole Conexe</h3>
      <ul className="space-y-2">
        {filteredLinks.map((link) => (
          <li key={link.href}>
            <InternalLink href={link.href} title={link.title} rel="related">
              {link.title}
            </InternalLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
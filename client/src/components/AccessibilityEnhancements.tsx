// Accessibility improvements for better screen reader support and ARIA compliance

export function SkipToContent() {
  return (
    <a 
      href="#main-content" 
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white p-2 rounded z-50"
      aria-label="Sari la conținutul principal"
    >
      Sari la conținut
    </a>
  );
}

export function VisuallyHidden({ children }: { children: React.ReactNode }) {
  return (
    <span className="sr-only">
      {children}
    </span>
  );
}

export function FocusManager({ children }: { children: React.ReactNode }) {
  return (
    <div className="focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 rounded">
      {children}
    </div>
  );
}
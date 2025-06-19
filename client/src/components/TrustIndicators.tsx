import { Shield, Calculator, Clock, Star, CheckCircle } from "lucide-react";

export default function TrustIndicators() {
  const indicators = [
    { icon: Shield, text: "100% Sigur", color: "green" },
    { icon: CheckCircle, text: "Verificat 2025", color: "blue" },
    { icon: Clock, text: "Rezultat în 30s", color: "purple" },
    { icon: Star, text: "10.000+ utilizatori", color: "yellow" }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {indicators.map((indicator, index) => (
        <div key={index} className="trust-indicator shadow-sm hover:shadow-md transition-all duration-300">
          <div className={`w-8 h-8 rounded-lg bg-${indicator.color}-100 flex items-center justify-center`}>
            <indicator.icon className={`h-4 w-4 text-${indicator.color}-600`} />
          </div>
          <span className="font-semibold">{indicator.text}</span>
        </div>
      ))}
    </div>
  );
}

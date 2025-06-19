import { Shield, Calculator, Clock } from "lucide-react";

export default function TrustIndicators() {
  return (
    <div className="flex justify-center items-center space-x-8 mb-12 text-sm text-neutral-500">
      <div className="flex items-center">
        <Shield className="text-green-500 mr-2 h-5 w-5" />
        Date securizate
      </div>
      <div className="flex items-center">
        <Calculator className="text-primary mr-2 h-5 w-5" />
        Calcule precise
      </div>
      <div className="flex items-center">
        <Clock className="text-primary mr-2 h-5 w-5" />
        Actualizat 2025
      </div>
    </div>
  );
}

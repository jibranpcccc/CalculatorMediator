import { Shield, Clock, Star, Users } from "lucide-react";

export default function TrustIndicators() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 mt-12">
      <div className="trust-indicator">
        <Shield className="h-6 w-6 text-primary" />
        <span className="font-bold">100% Sigur</span>
      </div>
      <div className="trust-indicator">
        <Star className="h-6 w-6 text-primary" />
        <span className="font-bold">Validat Expert</span>
      </div>
      <div className="trust-indicator">
        <Clock className="h-6 w-6 text-primary" />
        <span className="font-bold">Actualizat 2025</span>
      </div>
      <div className="trust-indicator">
        <Users className="h-6 w-6 text-primary" />
        <span className="font-bold">50k+ Utilizatori</span>
      </div>
    </div>
  );
}

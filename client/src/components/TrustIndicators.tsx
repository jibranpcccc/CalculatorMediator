import { Shield, Clock, Star, Users } from "lucide-react";

export default function TrustIndicators() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-6 mt-8 sm:mt-10 lg:mt-12 px-4">
      <div className="trust-indicator text-xs sm:text-sm">
        <Shield className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary" />
        <span className="font-bold">100% Sigur</span>
      </div>
      <div className="trust-indicator text-xs sm:text-sm">
        <Star className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary" />
        <span className="font-bold hidden sm:inline">Validat Expert</span>
        <span className="font-bold sm:hidden">Expert</span>
      </div>
      <div className="trust-indicator text-xs sm:text-sm">
        <Clock className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary" />
        <span className="font-bold hidden sm:inline">Actualizat 2025</span>
        <span className="font-bold sm:hidden">2025</span>
      </div>
      <div className="trust-indicator text-xs sm:text-sm">
        <Users className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary" />
        <span className="font-bold hidden sm:inline">50k+ Utilizatori</span>
        <span className="font-bold sm:hidden">50k+</span>
      </div>
    </div>
  );
}

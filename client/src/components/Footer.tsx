import { Link } from "wouter";
import { Calculator, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-stone-900 to-neutral-900 text-white mt-8 sm:mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-base sm:text-lg font-bold mb-3 flex items-center">
              <Calculator className="text-primary mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">Calculator</span>
              <span className="text-primary">
                <span className="sm:hidden">CMF</span>
                <span className="hidden sm:inline">MedieFacultate</span>
              </span>
              <span className="hidden sm:inline">.com</span>
            </h3>
            <p className="text-neutral-300 mb-4 text-sm leading-relaxed">
              Calculator medie facultate - resursa ta de încredere pentru calculul mediei de admitere și planificarea academică.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors duration-300">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors duration-300">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors duration-300">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-sm sm:text-base font-semibold mb-3">Calculatoare</h4>
            <ul className="space-y-2 text-neutral-300 text-sm">
              <li><Link href="/" className="hover:text-orange-400 transition-colors duration-300">Calculator Principal</Link></li>
              <li><Link href="/calculator-anticipata" className="hover:text-orange-400 transition-colors duration-300">Pensie Anticipată</Link></li>
              <li><Link href="/calculator-pilon3" className="hover:text-orange-400 transition-colors duration-300">Pilon III</Link></li>
              <li><Link href="/planificator" className="hover:text-orange-400 transition-colors duration-300">Planificator Financiar</Link></li>
            </ul>
          </div>
          
          {/* Ghiduri */}
          <div>
            <h4 className="text-sm sm:text-base font-semibold mb-3">Ghiduri</h4>
            <ul className="space-y-2 text-neutral-300 text-sm">
              <li><Link href="/planificarea-pensiei" className="hover:text-orange-400 transition-colors duration-300">Planificarea Pensiei</Link></li>
              <li><Link href="/tipuri-de-pensii" className="hover:text-orange-400 transition-colors duration-300">Tipuri de Pensii</Link></li>
              <li><Link href="/legislatie-si-resurse" className="hover:text-orange-400 transition-colors duration-300">Legislația 2025</Link></li>
              <li><Link href="/blog" className="hover:text-orange-400 transition-colors duration-300">Blog</Link></li>
            </ul>
          </div>
          
          {/* Contact & Legal */}
          <div>
            <h4 className="text-sm sm:text-base font-semibold mb-3">Informații</h4>
            <ul className="space-y-2 text-neutral-300 text-sm">
              <li><Link href="/contact" className="hover:text-orange-400 transition-colors duration-300">Contact</Link></li>
              <li><Link href="/despre" className="hover:text-orange-400 transition-colors duration-300">Despre noi</Link></li>
              <li><Link href="/confidentialitate" className="hover:text-orange-400 transition-colors duration-300">Confidențialitate</Link></li>
              <li><Link href="/termeni" className="hover:text-orange-400 transition-colors duration-300">Termeni și condiții</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center">
          <p className="text-neutral-400 text-xs">
            &copy; 2025 CalculatorMedieFacultate.com. Toate drepturile rezervate.
          </p>
          <p className="text-neutral-500 text-xs mt-1">
            Actualizat conform legislației din 2025
          </p>
        </div>
      </div>
    </footer>
  );
}

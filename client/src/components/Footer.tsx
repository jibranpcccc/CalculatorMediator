import { Link } from "wouter";
import { Calculator, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-stone-900 to-neutral-900 text-white mt-12 sm:mt-16 lg:mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 flex items-center">
              <Calculator className="text-primary mr-2 h-5 w-5 sm:h-6 sm:w-6" />
              <span className="hidden sm:inline">Calculator</span>
              <span className="text-primary">
                <span className="sm:hidden">CMF</span>
                <span className="hidden sm:inline">MedieFacultate</span>
              </span>
              <span className="hidden sm:inline">.com</span>
            </h3>
            <p className="text-neutral-300 mb-4 text-sm sm:text-base leading-relaxed">
              Calculator medie facultate - resursa ta de încredere pentru calculul mediei de admitere și planificarea academică. 
              Calculatoare precise, ghiduri complete, informații actualizate.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors duration-300 hover:scale-110">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors duration-300 hover:scale-110">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors duration-300 hover:scale-110">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Calculatoare</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-neutral-300 text-sm sm:text-base">
              <li><Link href="/" className="hover:text-orange-400 transition-colors duration-300">Calculator Principal</Link></li>
              <li><Link href="/calculator-anticipata" className="hover:text-orange-400 transition-colors duration-300">Pensie Anticipată</Link></li>
              <li><Link href="/calculator-pilon3" className="hover:text-orange-400 transition-colors duration-300">Pilon III</Link></li>
              <li><Link href="/planificator" className="hover:text-orange-400 transition-colors duration-300">Planificator Financiar</Link></li>
            </ul>
          </div>
          
          {/* Ghiduri */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Ghiduri</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-neutral-300 text-sm sm:text-base">
              <li><Link href="/planificarea-pensiei" className="hover:text-orange-400 transition-colors duration-300">Planificarea Pensiei</Link></li>
              <li><Link href="/tipuri-de-pensii" className="hover:text-orange-400 transition-colors duration-300">Tipuri de Pensii</Link></li>
              <li><Link href="/legislatie-si-resurse" className="hover:text-orange-400 transition-colors duration-300">Legislația 2025</Link></li>
              <li><Link href="/blog" className="hover:text-orange-400 transition-colors duration-300">Blog</Link></li>
            </ul>
          </div>
          
          {/* Contact & Legal */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Informații</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-neutral-300 text-sm sm:text-base">
              <li><Link href="/contact" className="hover:text-orange-400 transition-colors duration-300">Contact</Link></li>
              <li><Link href="/despre" className="hover:text-orange-400 transition-colors duration-300">Despre noi</Link></li>
              <li><Link href="/confidentialitate" className="hover:text-orange-400 transition-colors duration-300">Confidențialitate</Link></li>
              <li><Link href="/termeni" className="hover:text-orange-400 transition-colors duration-300">Termeni și condiții</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-neutral-400 text-xs sm:text-sm">
            &copy; 2025 CalculatorMedieFacultate.com. Toate drepturile rezervate. 
            <span className="text-neutral-500 block sm:inline sm:ml-2 mt-1 sm:mt-0">Actualizat conform legislației din 2025</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

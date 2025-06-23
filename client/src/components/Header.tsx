import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Calculator, Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    {
      title: "Calculatoare",
      href: "/calculatoare",
      items: [
        { title: "Calculator Medie Generală", href: "/" },
        { title: "Calculator Medie Ponderată", href: "/#calculator-section" },
        { title: "Convertor Note ECTS", href: "/convertor-ects" },
        { title: "Calculator Bursă Merit", href: "/calculator-bursa" },
      ],
    },
    {
      title: "Ghiduri Educaționale",
      href: "/ghiduri",
      items: [
        { title: "Ghid Calcul Medie", href: "/ghid-calcul-medie" },
        { title: "Sistemul de Credite ECTS", href: "/ghid-ects" },
        { title: "Clasificări Academice", href: "/clasificari-academice" },
        { title: "Burse de Studiu", href: "/ghid-burse" },
      ],
    },
    {
      title: "Universități",
      href: "/universitati",
      items: [
        { title: "Universități de Stat", href: "/universitati-stat" },
        { title: "Universități Private", href: "/universitati-private" },
        { title: "Programe de Studiu", href: "/programe-studiu" },
        { title: "Admitere 2025", href: "/admitere-2025" },
      ],
    },
  ];

  return (
    <header className="glass-effect shadow-2xl border-b border-white/30 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="flex-shrink-0">
              <h1 className="text-base sm:text-lg lg:text-xl font-black text-gray-900 flex items-center group-hover:scale-105 transition-all duration-300">
                <div className="icon-wrapper mr-2 w-6 h-6 sm:w-8 sm:h-8">
                  <Calculator className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <span className="hidden sm:inline">Calculator</span>
                <span className="gradient-primary bg-clip-text text-transparent sm:ml-1">
                  <span className="sm:hidden">CMF</span>
                  <span className="hidden sm:inline">Medie</span>
                </span>
                <span className="hidden sm:inline sm:ml-1">Facultate</span>
              </h1>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-8 sm:h-9 w-max items-center justify-center rounded-lg bg-white/90 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all duration-300 hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700 focus:outline-none shadow-md hover:shadow-lg"
                  )} asChild>
                    <Link href="/">
                      <span className="mr-1">🏠</span>
                      <span className="hidden sm:inline">Acasă</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger className="h-8 sm:h-9 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-white/90 font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:bg-orange-50 text-xs sm:text-sm">
                      <span className="hidden lg:inline">{item.title}</span>
                      <span className="lg:hidden">
                        {item.title === "Planificarea Pensiei" ? "Planificare" : 
                         item.title === "Tipuri de Pensii" ? "Tipuri" : 
                         item.title === "Legislație & Resurse" ? "Legislație" : item.title}
                      </span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-80 p-6 bg-white rounded-3xl shadow-2xl border-2 border-gray-100">
                        {item.items.map((subItem) => (
                          <NavigationMenuLink key={subItem.title} className="block select-none rounded-2xl p-5 leading-none no-underline outline-none transition-all duration-300 hover:bg-blue-50 hover:shadow-lg hover:scale-105" asChild>
                            <Link href={subItem.href}>
                              <div className="text-base font-bold text-gray-900 mb-2">{subItem.title}</div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}

                <NavigationMenuItem>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-8 sm:h-9 w-max items-center justify-center rounded-lg bg-white/90 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all duration-300 hover:bg-orange-50 hover:text-orange-700 focus:bg-orange-50 focus:text-orange-700 focus:outline-none shadow-md hover:shadow-lg"
                  )} asChild>
                    <Link href="/blog">
                      <span className="mr-1">📚</span>
                      <span className="hidden sm:inline">Blog</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className={cn(
                    "btn-modern inline-flex h-8 sm:h-9 w-max items-center justify-center rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  )} asChild>
                    <Link href="/contact">
                      <span className="mr-1">📞</span>
                      <span className="hidden sm:inline">Contact</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/" onClick={() => setIsOpen(false)}>
                      Acasă
                    </Link>
                  </Button>
                  
                  {navigationItems.map((item) => (
                    <div key={item.title} className="space-y-2">
                      <Button variant="ghost" className="w-full justify-start font-medium" asChild>
                        <Link href={item.href} onClick={() => setIsOpen(false)}>
                          {item.title}
                        </Link>
                      </Button>
                      <div className="pl-4 space-y-1">
                        {item.items.map((subItem) => (
                          <Button key={subItem.title} variant="ghost" size="sm" className="w-full justify-start text-muted-foreground" asChild>
                            <Link href={subItem.href} onClick={() => setIsOpen(false)}>
                              {subItem.title}
                            </Link>
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/blog" onClick={() => setIsOpen(false)}>
                      Blog
                    </Link>
                  </Button>
                  
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/faq" onClick={() => setIsOpen(false)}>
                      Întrebări Frecvente
                    </Link>
                  </Button>
                  
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Contact
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}

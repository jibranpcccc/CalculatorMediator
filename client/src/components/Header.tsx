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
      title: "Planificarea Pensiei",
      href: "/planificarea-pensiei",
      items: [
        { title: "Ghid Complet Planificare", href: "/planificare-ghid" },
        { title: "Top 5 Greșeli de Evitat", href: "/greseli-planificare" },
        { title: "Pilonul II vs III", href: "/pilonul-2-vs-3" },
        { title: "Strategii de Investiții", href: "/strategii-investitii" },
        { title: "Calculator Pilon III", href: "/calculator-pilon3" },
      ],
    },
    {
      title: "Tipuri de Pensii",
      href: "/tipuri-de-pensii",
      items: [
        { title: "Ghid Tipuri de Pensii", href: "/tipuri-pensii-ghid" },
        { title: "Pensia pentru Limită de Vârstă", href: "/pensie-limita-varsta" },
        { title: "Pensia Anticipată Parțială", href: "/pensie-anticipata" },
        { title: "Pensia de Urmaș", href: "/pensie-urmas" },
        { title: "Pensia de Invaliditate", href: "/pensie-invaliditate" },
        { title: "Calculator Pensie Anticipată", href: "/calculator-anticipata" },
      ],
    },
    {
      title: "Legislație & Resurse",
      href: "/legislatie-si-resurse",
      items: [
        { title: "Legea Pensiilor 2025", href: "/legea-pensiilor" },
        { title: "Vârsta Standard de Pensionare", href: "/varsta-pensionare" },
        { title: "Stagiul de Cotizare", href: "/stagiu-cotizare" },
        { title: "Indexarea Pensiilor", href: "/indexarea-pensiilor" },
        { title: "Cumpărarea Vechimii", href: "/cumparare-vechime" },
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
                  <Link href="/">
                    <NavigationMenuLink className={cn(
                      "group inline-flex h-8 sm:h-9 w-max items-center justify-center rounded-lg bg-white/90 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all duration-300 hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700 focus:outline-none shadow-md hover:shadow-lg"
                    )}>
                      <span className="mr-1">🏠</span>
                      <span className="hidden sm:inline">Acasă</span>
                    </NavigationMenuLink>
                  </Link>
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
                          <Link key={subItem.title} href={subItem.href}>
                            <NavigationMenuLink className="block select-none rounded-2xl p-5 leading-none no-underline outline-none transition-all duration-300 hover:bg-blue-50 hover:shadow-lg hover:scale-105">
                              <div className="text-base font-bold text-gray-900 mb-2">{subItem.title}</div>
                            </NavigationMenuLink>
                          </Link>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}

                <NavigationMenuItem>
                  <Link href="/blog">
                    <NavigationMenuLink className={cn(
                      "group inline-flex h-8 sm:h-9 w-max items-center justify-center rounded-lg bg-white/90 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all duration-300 hover:bg-orange-50 hover:text-orange-700 focus:bg-orange-50 focus:text-orange-700 focus:outline-none shadow-md hover:shadow-lg"
                    )}>
                      <span className="mr-1">📚</span>
                      <span className="hidden sm:inline">Blog</span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact">
                    <NavigationMenuLink className={cn(
                      "btn-modern inline-flex h-8 sm:h-9 w-max items-center justify-center rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    )}>
                      <span className="mr-1">📞</span>
                      <span className="hidden sm:inline">Contact</span>
                    </NavigationMenuLink>
                  </Link>
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
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start">
                      Acasă
                    </Button>
                  </Link>
                  
                  {navigationItems.map((item) => (
                    <div key={item.title} className="space-y-2">
                      <Link href={item.href} onClick={() => setIsOpen(false)}>
                        <Button variant="ghost" className="w-full justify-start font-medium">
                          {item.title}
                        </Button>
                      </Link>
                      <div className="pl-4 space-y-1">
                        {item.items.map((subItem) => (
                          <Link key={subItem.title} href={subItem.href} onClick={() => setIsOpen(false)}>
                            <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground">
                              {subItem.title}
                            </Button>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <Link href="/blog" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start">
                      Blog
                    </Button>
                  </Link>
                  
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start">
                      Contact
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}

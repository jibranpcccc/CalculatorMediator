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
    <header className="bg-white shadow-sm border-b border-neutral-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-neutral-900 flex items-center">
                <Calculator className="text-primary mr-2" />
                Calculator<span className="text-primary">Pensie</span>.ro
              </h1>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/">
                    <NavigationMenuLink className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    )}>
                      Acasă
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-64 p-2">
                        {item.items.map((subItem) => (
                          <Link key={subItem.title} href={subItem.href}>
                            <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="text-sm font-medium leading-none">{subItem.title}</div>
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
                      "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    )}>
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact">
                    <NavigationMenuLink className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    )}>
                      Contact
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

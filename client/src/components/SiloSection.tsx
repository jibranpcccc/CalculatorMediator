import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface SiloSectionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
  href: string;
  color: string;
}

export default function SiloSection({ title, description, icon, items, href, color }: SiloSectionProps) {
  const gradientClass = `bg-gradient-to-br ${color}`;
  const buttonClass = color.includes('primary') ? 'bg-primary hover:bg-primary/90' : 
                     color.includes('green') ? 'bg-green-600 hover:bg-green-700' : 
                     'bg-amber-600 hover:bg-amber-700';

  return (
    <Card className={`${gradientClass} hover:shadow-lg transition-shadow`}>
      <CardHeader className="text-center">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${buttonClass}`}>
          <div className="text-white text-2xl">{icon}</div>
        </div>
        <CardTitle className="text-2xl font-bold text-neutral-900">{title}</CardTitle>
        <CardDescription className="text-neutral-700">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="text-left space-y-3 mb-8">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className={`mt-1 mr-3 h-4 w-4 ${color.includes('primary') ? 'text-primary' : color.includes('green') ? 'text-green-600' : 'text-amber-600'}`} />
              <span className="text-neutral-700">{item}</span>
            </li>
          ))}
        </ul>
        
        <Link href={href}>
          <Button className={`w-full ${buttonClass} text-white inline-flex items-center`}>
            Explorează ghidurile <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

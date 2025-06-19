import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

interface ArticleCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  href: string;
  imageUrl: string;
}

export default function ArticleCard({ title, description, category, date, href, imageUrl }: ArticleCardProps) {
  const categoryColors = {
    "Planificare": "bg-primary text-primary-foreground",
    "Investiții": "bg-green-100 text-green-700",
    "Legislație": "bg-amber-100 text-amber-700",
  };

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow">
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-6">
        <Badge className={`mb-2 ${categoryColors[category as keyof typeof categoryColors] || 'bg-gray-100 text-gray-700'}`}>
          {category}
        </Badge>
        <h3 className="text-xl font-semibold text-neutral-900 mb-3">{title}</h3>
        <p className="text-neutral-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-neutral-500">{date}</span>
          <Link href={href} className="text-primary hover:text-primary/80 font-medium">
            Citește mai mult
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

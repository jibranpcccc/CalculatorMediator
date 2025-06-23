import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import LazyImage from "@/components/LazyImage";

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
    "Ghiduri": "bg-orange-100 text-orange-700",
    "Educație": "bg-blue-100 text-blue-700",
    "Burse": "bg-green-100 text-green-700",
    "Clasificări": "bg-purple-100 text-purple-700",
    "ECTS": "bg-indigo-100 text-indigo-700",
    "Master": "bg-cyan-100 text-cyan-700",
    "Planificare": "bg-primary text-primary-foreground",
    "Investiții": "bg-green-100 text-green-700",
    "Legislație": "bg-amber-100 text-amber-700",
  };

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow bg-white">
      <div className="relative">
        <LazyImage 
          src={imageUrl} 
          alt={`Imagine pentru articolul: ${title}`}
          className="w-full h-48 object-cover"
          width={400}
          height={192}
          placeholder="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgZmlsbD0iI2Y5ZmFmYiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2YjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnaW5lIGluZGlzcG9uaWJpbMSDPC90ZXh0Pjwvc3ZnPg=="
        />
      </div>
      <CardContent className="p-6">
        <Badge className={`mb-3 ${categoryColors[category as keyof typeof categoryColors] || 'bg-gray-100 text-gray-700'}`}>
          {category}
        </Badge>
        <h3 className="text-xl font-semibold text-neutral-900 mb-3 overflow-hidden" style={{display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}}>{title}</h3>
        <p className="text-neutral-600 mb-4 overflow-hidden" style={{display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical'}}>{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-neutral-500">{date}</span>
          <Link href={href}>
            <span className="text-orange-600 hover:text-orange-700 font-medium transition-colors">
              Citește mai mult →
            </span>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

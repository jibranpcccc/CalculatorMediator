import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { faqData, type FAQItem } from "@/data/faqData";

interface FAQSectionProps {
  title?: string;
  showCategories?: boolean;
  category?: FAQItem['category'];
  maxItems?: number;
  compact?: boolean;
}

export default function FAQSection({ 
  title = "Întrebări frecvente", 
  showCategories = false,
  category,
  maxItems,
  compact = false
}: FAQSectionProps) {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<FAQItem['category'] | 'all'>('all');

  const filteredFAQs = category 
    ? faqData.filter(faq => faq.category === category)
    : selectedCategory === 'all' 
      ? faqData 
      : faqData.filter(faq => faq.category === selectedCategory);

  const displayFAQs = maxItems ? filteredFAQs.slice(0, maxItems) : filteredFAQs;

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  const categoryLabels = {
    general: 'General',
    calculation: 'Calcule',
    technical: 'Tehnic',
    legal: 'Legal'
  };

  const categoryColors = {
    general: 'bg-blue-100 text-blue-700',
    calculation: 'bg-green-100 text-green-700',
    technical: 'bg-purple-100 text-purple-700',
    legal: 'bg-amber-100 text-amber-700'
  };

  return (
    <Card className={compact ? "border-0 shadow-none" : ""}>
      <CardHeader className={compact ? "px-0 pt-0" : ""}>
        <CardTitle className={compact ? "text-lg" : "text-xl"}>{title}</CardTitle>
        
        {showCategories && !category && (
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge 
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => setSelectedCategory('all')}
            >
              Toate
            </Badge>
            {Object.entries(categoryLabels).map(([key, label]) => (
              <Badge
                key={key}
                variant={selectedCategory === key ? 'default' : 'outline'}
                className={`cursor-pointer ${selectedCategory === key ? categoryColors[key as keyof typeof categoryColors] : ''}`}
                onClick={() => setSelectedCategory(key as FAQItem['category'])}
              >
                {label}
              </Badge>
            ))}
          </div>
        )}
      </CardHeader>
      
      <CardContent className={compact ? "px-0 pb-0" : ""}>
        <div className="space-y-3">
          {displayFAQs.map((faq) => (
            <div key={faq.id} className="border rounded-lg overflow-hidden">
              <button
                className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleItem(faq.id)}
              >
                <div className="flex items-center gap-2">
                  <span className={`font-medium ${compact ? 'text-sm' : 'text-base'}`}>
                    {faq.question}
                  </span>
                  {showCategories && !category && (
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${categoryColors[faq.category]}`}
                    >
                      {categoryLabels[faq.category]}
                    </Badge>
                  )}
                </div>
                {openItem === faq.id ? (
                  <ChevronUp className="h-4 w-4 text-gray-500" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                )}
              </button>
              
              {openItem === faq.id && (
                <div className="px-4 pb-3 text-gray-600 border-t bg-gray-50/50">
                  <p className={compact ? 'text-sm mt-2' : 'text-base mt-3'}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {maxItems && filteredFAQs.length > maxItems && (
          <div className="mt-4 text-center">
            <button className="text-primary hover:text-primary/80 font-medium text-sm">
              Vezi toate întrebările →
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
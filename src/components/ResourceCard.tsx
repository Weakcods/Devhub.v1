import { ExternalLink, LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface ResourceCardProps {
  title: string;
  description: string;
  link: string;
  category: string;
  icon?: LucideIcon;
}

export const ResourceCard = ({ title, description, link, category, icon: Icon }: ResourceCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-2">
          {Icon && <Icon className="w-5 h-5 text-primary" />}
          <CardTitle className="font-poppins group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-muted-foreground font-poppins">{description}</CardDescription>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-primary font-poppins">{category}</span>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
          >
            Visit
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
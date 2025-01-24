import { ExternalLink, LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

interface StackCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  link: string;
}

export const StackCard = ({ title, description, icon: Icon, color, link }: StackCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Icon size={24} color={color} />
          <CardTitle className="font-poppins">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="font-poppins">{description}</CardDescription>
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
        >
          Visit Resource
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};
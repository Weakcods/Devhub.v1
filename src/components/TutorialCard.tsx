import { ExternalLink, LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface TutorialCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

export const TutorialCard = ({ title, description, icon: Icon, link, difficulty }: TutorialCardProps) => {
  const difficultyColor = {
    Beginner: "bg-green-500",
    Intermediate: "bg-yellow-500",
    Advanced: "bg-red-500"
  };

  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon size={24} />
            <CardTitle className="font-poppins">{title}</CardTitle>
          </div>
          <Badge variant="secondary">{difficulty}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="font-poppins">{description}</CardDescription>
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
        >
          View Tutorial
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};
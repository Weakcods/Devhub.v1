import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const toolsResources = [
  {
    title: "VS Code",
    description: "Free source-code editor made by Microsoft for Windows, Linux and macOS.",
    link: "https://code.visualstudio.com",
    preview: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    title: "GitHub Copilot",
    description: "Your AI pair programmer that helps you write better code.",
    link: "https://github.com/features/copilot",
    preview: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    title: "Postman",
    description: "Platform for API development and testing.",
    link: "https://www.postman.com",
    preview: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  }
];

const Tools = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex items-center gap-2 mb-8">
        <Wrench className="w-8 h-8 text-[#00dbde]" />
        <h1 className="text-4xl font-bold">Development Tools</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {toolsResources.map((resource) => (
          <Card key={resource.title}>
            <CardHeader>
              <CardTitle>{resource.title}</CardTitle>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <img
                src={resource.preview}
                alt={resource.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <Button
                className="w-full bg-[#00dbde] hover:bg-[#00dbde]/90"
                onClick={() => window.open(resource.link, '_blank')}
              >
                Visit Website
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Tools;
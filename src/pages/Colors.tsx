import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette } from "lucide-react";

const colorResources = [
  {
    title: "Coolors",
    description: "The super fast color schemes generator.",
    link: "https://coolors.co",
    preview: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    title: "Color Hunt",
    description: "Collection of beautiful color palettes.",
    link: "https://colorhunt.co",
    preview: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    title: "Adobe Color",
    description: "Create color schemes with the color wheel or browse thousands of color combinations.",
    link: "https://color.adobe.com",
    preview: "https://images.unsplash.com/photo-1483058712412-4245e9b90334"
  }
];

const Colors = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex items-center gap-2 mb-8">
        <Palette className="w-8 h-8 text-[#00dbde]" />
        <h1 className="text-4xl font-bold">Color Resources</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {colorResources.map((resource) => (
          <a
            key={resource.title}
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-transform hover:scale-105"
          >
            <Card>
              <CardHeader>
                <CardTitle>{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src={resource.preview}
                  alt={resource.title}
                  className="w-full h-48 object-cover rounded-md"
                />
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Colors;
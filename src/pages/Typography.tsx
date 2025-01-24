import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Type } from "lucide-react";

const typographyResources = [
  {
    title: "Google Fonts",
    description: "A library of free and open source fonts, making the web more beautiful.",
    link: "https://fonts.google.com",
    preview: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    title: "Adobe Fonts",
    description: "Premium fonts for web and desktop use with Adobe Creative Cloud.",
    link: "https://fonts.adobe.com",
    preview: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    title: "Font Squirrel",
    description: "Free fonts for commercial use and font generator tools.",
    link: "https://www.fontsquirrel.com",
    preview: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  }
];

const Typography = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex items-center gap-2 mb-8">
        <Type className="w-8 h-8 text-[#00dbde]" />
        <h1 className="text-4xl font-bold">Typography Resources</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {typographyResources.map((resource) => (
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

export default Typography;
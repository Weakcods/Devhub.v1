import { useSearchParams } from "react-router-dom";
import { ResourceCard } from "./ResourceCard";

const frontendResources = [
  {
    title: "Typography",
    description: "Explore typography resources and font collections.",
    link: "/typography",
    category: "Frontend",
  },
  {
    title: "Colors",
    description: "Discover color palettes and tools.",
    link: "/colors",
    category: "Frontend",
  },
  {
    title: "Tools",
    description: "Essential development tools and utilities.",
    link: "/tools",
    category: "Frontend",
  },
  {
    title: "React Documentation",
    description: "Official React documentation with guides and API reference.",
    link: "https://react.dev",
    category: "Frontend",
  },
  {
    title: "MDN Web Docs",
    description: "Comprehensive resources for web developers.",
    link: "https://developer.mozilla.org",
    category: "Frontend",
  },
  {
    title: "CSS Tricks",
    description: "Tips, tricks, and techniques on using CSS.",
    link: "https://css-tricks.com",
    category: "Frontend",
  },
];

const backendResources = [
  {
    title: "Node.js Docs",
    description: "Official Node.js documentation and guides.",
    link: "https://nodejs.org/docs",
    category: "Backend",
  },
  {
    title: "Express.js",
    description: "Fast, unopinionated web framework for Node.js.",
    link: "https://expressjs.com",
    category: "Backend",
  },
  {
    title: "MongoDB University",
    description: "Free MongoDB courses and certification.",
    link: "https://university.mongodb.com",
    category: "Backend",
  },
];

export const ResourceGrid = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase();

  const filterResources = (resources: any[]) => {
    if (!searchQuery) return resources;
    return resources.filter(
      (resource) =>
        resource.title.toLowerCase().includes(searchQuery) ||
        resource.description.toLowerCase().includes(searchQuery) ||
        resource.category.toLowerCase().includes(searchQuery)
    );
  };

  const filteredFrontendResources = filterResources(frontendResources);
  const filteredBackendResources = filterResources(backendResources);

  return (
    <div className="container mx-auto px-4 py-16">
      {(filteredFrontendResources.length > 0 || filteredBackendResources.length > 0) ? (
        <>
          {filteredFrontendResources.length > 0 && (
            <section id="frontend" className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Frontend Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFrontendResources.map((resource) => (
                  <ResourceCard key={resource.title} {...resource} />
                ))}
              </div>
            </section>
          )}

          {filteredBackendResources.length > 0 && (
            <section id="backend">
              <h2 className="text-3xl font-bold mb-8">Backend Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBackendResources.map((resource) => (
                  <ResourceCard key={resource.title} {...resource} />
                ))}
              </div>
            </section>
          )}
        </>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-xl font-medium text-muted-foreground">
            No resources found for "{searchQuery}"
          </h3>
        </div>
      )}
    </div>
  );
};
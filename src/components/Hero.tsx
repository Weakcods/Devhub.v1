import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section className="relative overflow-hidden bg-background pt-16 md:pt-20 lg:pt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent mb-6 font-poppins">
              Dev Resources Hub
            </h1>
            <p className="text-xl text-muted-foreground max-w-[700px] mb-8 font-poppins">
              Curated collection of the best frontend and backend development resources to help you build amazing applications.
            </p>
            <form onSubmit={handleSearch} className="flex w-full max-w-md gap-2">
              <Input
                type="search"
                placeholder="Search resources..."
                className="w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit">
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-primary/20 via-background to-background" />
    </section>
  );
};
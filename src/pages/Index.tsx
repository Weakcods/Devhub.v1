import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { ResourceGrid } from "../components/ResourceGrid";
import { Footer } from "../components/Footer";
import { FloatingElements } from "../components/FloatingElements";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Header />
      <main>
        <Hero />
        <ResourceGrid />
      </main>
      <FloatingElements />
      <Footer />
    </div>
  );
};

export default Index;
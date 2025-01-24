import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ResourceCard } from "../components/ResourceCard";
import { Code2, FileJson } from "lucide-react";

const frontendResources = [
  {
    title: "React Documentation",
    description: "Official React documentation with guides and API reference.",
    link: "https://react.dev",
    category: "Frontend",
    icon: Code2,
  },
  {
    title: "MDN Web Docs",
    description: "Comprehensive resources for web developers.",
    link: "https://developer.mozilla.org",
    category: "Frontend",
    icon: FileJson,
  },
  {
    title: "CSS Tricks",
    description: "Tips, tricks, and techniques on using CSS.",
    link: "https://css-tricks.com",
    category: "Frontend",
    icon: Code2,
  },
];

const Frontend = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background font-poppins"
    >
      <Header />
      <main className="container mx-auto px-4 py-16">
        <motion.h1 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent"
        >
          Frontend Development Resources
        </motion.h1>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {frontendResources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ResourceCard {...resource} />
            </motion.div>
          ))}
        </motion.div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Frontend;
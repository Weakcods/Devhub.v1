import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { StackCard } from "../components/StackCard";
import { Code2, FileJson, Terminal, Database, Server } from "lucide-react";

const stacks = [
  {
    title: "HTML5",
    description: "The standard markup language for documents designed to be displayed in a web browser.",
    icon: Code2,
    color: "#E34F26",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    title: "JavaScript",
    description: "A programming language that enables interactive web pages and is an essential part of web applications.",
    icon: FileJson,
    color: "#F7DF1E",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    title: "Node.js",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
    icon: Terminal,
    color: "#339933",
    link: "https://nodejs.org/"
  },
  {
    title: "Database",
    description: "Learn about different database systems and their implementations.",
    icon: Database,
    color: "#4479A1",
    link: "https://www.mongodb.com/basics"
  },
  {
    title: "Backend",
    description: "Server-side development concepts and best practices.",
    icon: Server,
    color: "#3C873A",
    link: "https://roadmap.sh/backend"
  }
];

const Stacks = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Technology Stacks</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stacks.map((stack) => (
            <StackCard key={stack.title} {...stack} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Stacks;
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { TutorialCard } from "../components/TutorialCard";
import { Rocket, Cloud, GitBranch, Terminal } from "lucide-react";

const tutorials = [
  {
    title: "Deploy to Vercel",
    description: "Learn how to deploy your Next.js application to Vercel platform.",
    icon: Rocket,
    link: "https://vercel.com/docs/getting-started-with-vercel",
    difficulty: "Beginner" as const
  },
  {
    title: "AWS Deployment",
    description: "Step by step guide to deploy applications on AWS.",
    icon: Cloud,
    link: "https://aws.amazon.com/getting-started/",
    difficulty: "Intermediate" as const
  },
  {
    title: "Git Basics",
    description: "Master the fundamentals of version control with Git.",
    icon: GitBranch,
    link: "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control",
    difficulty: "Beginner" as const
  },
  {
    title: "Command Line Essentials",
    description: "Essential terminal commands for developers.",
    icon: Terminal,
    link: "https://www.codecademy.com/learn/learn-the-command-line",
    difficulty: "Beginner" as const
  }
];

const Tutorials = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Development Tutorials</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial) => (
            <TutorialCard key={tutorial.title} {...tutorial} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tutorials;
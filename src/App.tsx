import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Typography from "./pages/Typography";
import Colors from "./pages/Colors";
import Tools from "./pages/Tools";
import Stacks from "./pages/Stacks";
import Tutorials from "./pages/Tutorials";
import Frontend from "./pages/Frontend";
import Backend from "./pages/Backend";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/typography" element={<Typography />} />
        <Route path="/colors" element={<Colors />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/stacks" element={<Stacks />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/backend" element={<Backend />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
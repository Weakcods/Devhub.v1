import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";


export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [primaryColor, setPrimaryColor] = useState("#00dbde");

 

  const navLinks = [
    { href: "/frontend", label: "Frontend" },
    { href: "/backend", label: "Backend" },
    { href: "/stacks", label: "Stacks" },
    { href: "/tutorials", label: "Tutorials" },
  ];


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
            DevHub
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-2"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-4 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-lg transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <h4 className="mb-2 text-sm font-medium">Theme Color</h4>
              </div>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  toggleTheme();
                  setIsOpen(false);
                }}
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="h-5 w-5 mr-2" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="h-5 w-5 mr-2" />
                    Dark Mode
                  </>
                )}
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
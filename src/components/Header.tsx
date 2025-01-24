import { useState } from "react";
import { Moon, Sun, Settings, Menu, X } from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { toast } from "sonner";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [primaryColor, setPrimaryColor] = useState("#00dbde");

  const handleColorChange = (color: string) => {
    setPrimaryColor(color);
    document.documentElement.style.setProperty('--primary', color);
    toast.success("Theme color updated successfully!");
  };

  const navLinks = [
    { href: "/frontend", label: "Frontend" },
    { href: "/backend", label: "Backend" },
    { href: "/stacks", label: "Stacks" },
    { href: "/tutorials", label: "Tutorials" },
  ];

  const themeColors = [
    { color: "#00dbde", name: "Default" },
    { color: "#9b87f5", name: "Purple" },
    { color: "#7E69AB", name: "Deep Purple" },
    { color: "#F97316", name: "Orange" },
    { color: "#0EA5E9", name: "Blue" },
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
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="p-4">
                <h4 className="mb-2 text-sm font-medium">Theme Color</h4>
                <div className="grid grid-cols-5 gap-2">
                  {themeColors.map((theme) => (
                    <button
                      key={theme.color}
                      className="w-8 h-8 rounded-full border transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2"
                      style={{ backgroundColor: theme.color }}
                      onClick={() => handleColorChange(theme.color)}
                      title={theme.name}
                    />
                  ))}
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

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
                <div className="grid grid-cols-5 gap-2">
                  {themeColors.map((theme) => (
                    <button
                      key={theme.color}
                      className="w-8 h-8 rounded-full border transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2"
                      style={{ backgroundColor: theme.color }}
                      onClick={() => {
                        handleColorChange(theme.color);
                        setIsOpen(false);
                      }}
                      title={theme.name}
                    />
                  ))}
                </div>
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
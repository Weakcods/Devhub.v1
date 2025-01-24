import { useState, useEffect } from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import { Button } from './ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

export const FloatingElements = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning!');
    else if (hour < 18) setGreeting('Good afternoon!');
    else setGreeting('Good evening!');
  }, []);

  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
            >
              <Code2 className="h-5 w-5 text-primary" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Developer Resources</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
            >
              <span className="text-sm font-medium">{greeting}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Welcome to DevHub!</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
              >
                <ExternalLink className="h-5 w-5 text-primary" />
              </Button>
            </a>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Visit Portfolio</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
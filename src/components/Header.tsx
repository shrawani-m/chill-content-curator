
import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full py-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-chill-300 to-chill-500 p-2 rounded-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
              <circle cx="17" cy="7" r="5" />
            </svg>
          </div>
          <span className="text-xl font-bold text-foreground">Chill Content</span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-muted-foreground">About</Button>
          <Button className="bg-gradient-to-r from-chill-400 to-chill-600 hover:from-chill-500 hover:to-chill-700 text-white border-none">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

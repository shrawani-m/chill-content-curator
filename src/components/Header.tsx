
import React from 'react';
import { Button } from "@/components/ui/button";
import { Clock } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-chill-300 to-chill-500 p-2 rounded-lg">
            <Clock size={24} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-foreground">Watch on Break</span>
            <span className="text-xs text-muted-foreground">Need a break? Watch while you break</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-muted-foreground">About</Button>
          <Button className="bg-gradient-to-r from-chill-400 to-chill-600 hover:from-chill-500 hover:to-chill-700 text-white border-none">Sign In</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

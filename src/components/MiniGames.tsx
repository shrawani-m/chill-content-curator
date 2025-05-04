
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad } from 'lucide-react';

// Mock games data
const mockGames = [
  { 
    id: 1, 
    title: "Quick Puzzle", 
    description: "Solve a quick puzzle during your break",
    imageUrl: "https://via.placeholder.com/400x300?text=Puzzle+Game",
    timeToPlay: "5 min" 
  },
  { 
    id: 2, 
    title: "Memory Match", 
    description: "Test your memory with this matching game",
    imageUrl: "https://via.placeholder.com/400x300?text=Memory+Game",
    timeToPlay: "3 min" 
  },
  { 
    id: 3, 
    title: "Word Scramble", 
    description: "Unscramble words against the clock",
    imageUrl: "https://via.placeholder.com/400x300?text=Word+Game",
    timeToPlay: "7 min" 
  },
  { 
    id: 4, 
    title: "Quick Reflex", 
    description: "Test your reflexes with this simple game",
    imageUrl: "https://via.placeholder.com/400x300?text=Reflex+Game",
    timeToPlay: "2 min" 
  },
];

const MiniGames = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Mini Games</h2>
      <p className="text-muted-foreground mb-8">Quick games to play during your break time</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockGames.map((game) => (
          <Card key={game.id} className="overflow-hidden hover-scale">
            <CardContent className="p-0">
              <img 
                src={game.imageUrl} 
                alt={game.title}
                className="w-full aspect-video object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{game.title}</h3>
                  <span className="text-xs bg-chill-100 text-chill-800 px-2 py-1 rounded-full">{game.timeToPlay}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{game.description}</p>
                <Button className="w-full bg-gradient-to-r from-chill-400 to-chill-600">
                  <Gamepad size={16} className="mr-2" />
                  Play Now
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MiniGames;

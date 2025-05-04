
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

// Mock meme data
const mockMemes = [
  { id: 1, title: "When you're supposed to work but keep checking Watch on Break", imageUrl: "https://via.placeholder.com/400x300?text=Funny+Meme+1" },
  { id: 2, title: "Me waiting for my 45-minute timer to finish", imageUrl: "https://via.placeholder.com/400x300?text=Funny+Meme+2" },
  { id: 3, title: "That moment when your break time is over", imageUrl: "https://via.placeholder.com/400x300?text=Funny+Meme+3" },
  { id: 4, title: "Productivity experts hate this app", imageUrl: "https://via.placeholder.com/400x300?text=Funny+Meme+4" },
  { id: 5, title: "30 minutes of break time isn't enough", imageUrl: "https://via.placeholder.com/400x300?text=Funny+Meme+5" },
  { id: 6, title: "When the mini-games are more fun than work", imageUrl: "https://via.placeholder.com/400x300?text=Funny+Meme+6" },
];

const TrendingMemes = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Trending Memes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockMemes.map((meme) => (
          <Card key={meme.id} className="overflow-hidden hover-scale">
            <CardContent className="p-0">
              <img 
                src={meme.imageUrl} 
                alt={meme.title}
                className="w-full aspect-video object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium">{meme.title}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground mt-6">New memes updated daily</p>
    </div>
  );
};

export default TrendingMemes;

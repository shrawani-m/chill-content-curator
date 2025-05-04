
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Video } from '@/types';
import { Play } from 'lucide-react';

type VideoCardProps = {
  video: Video;
};

const VideoCard = ({ video }: VideoCardProps) => {
  return (
    <Card className="overflow-hidden hover-scale">
      <div className="relative">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full aspect-video object-cover"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity">
          <div className="w-14 h-14 bg-chill-500 rounded-full flex items-center justify-center text-white">
            <Play size={24} className="ml-1" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium line-clamp-2 mb-1">{video.title}</h3>
        <p className="text-sm text-muted-foreground">{video.channelTitle}</p>
        {video.viewCount && (
          <p className="text-xs text-muted-foreground mt-1">{video.viewCount} views</p>
        )}
      </CardContent>
    </Card>
  );
};

export default VideoCard;

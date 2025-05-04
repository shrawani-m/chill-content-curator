
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mood, Interest, Video, UserPreferences } from '@/types';
import VideoGrid from './VideoGrid';
import MoodSelector from './MoodSelector';
import InterestSelector from './InterestSelector';
import DurationSelector from './DurationSelector';
import { getMockVideos } from '@/lib/api';
import BreakTimer from './BreakTimer';
import TrendingMemes from './TrendingMemes';
import MiniGames from './MiniGames';

const RecommendationSection = () => {
  const [mood, setMood] = useState<Mood | null>(null);
  const [interests, setInterests] = useState<Interest[]>([]);
  const [duration, setDuration] = useState<number>(30);
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("videos");
  const [breakTime, setBreakTime] = useState<{
    canTakeBreak: boolean;
    timeRemaining: number;
  }>({
    canTakeBreak: false,
    timeRemaining: 45 * 60, // 45 minutes in seconds
  });

  useEffect(() => {
    // Check if user can take a break
    const timer = setInterval(() => {
      setBreakTime(prev => {
        if (prev.timeRemaining <= 0) {
          return { canTakeBreak: true, timeRemaining: 0 };
        }
        return { ...prev, timeRemaining: prev.timeRemaining - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleInterest = (interest: Interest) => {
    setInterests((prevInterests) => {
      if (prevInterests.includes(interest)) {
        return prevInterests.filter((i) => i !== interest);
      } else {
        return [...prevInterests, interest];
      }
    });
  };

  const handleGetRecommendations = async () => {
    if (!mood) {
      return;
    }

    setLoading(true);
    
    try {
      // In a real app, we would call an API endpoint here
      // For now, we'll use mock data
      const prefs: UserPreferences = {
        mood,
        interests,
        duration: Math.min(duration, 30), // Ensure duration is max 30 minutes
      };
      
      const recommendedVideos = await getMockVideos(prefs);
      setVideos(recommendedVideos);
    } catch (error) {
      console.error('Error getting recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  const isSubmitDisabled = !mood || interests.length === 0 || !breakTime.canTakeBreak;
  
  const formatTimeRemaining = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <section className="w-full">
      <div className="bg-gradient-to-r from-chill-100 to-secondary p-6 md:p-10 rounded-2xl mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-chill-900">Find the perfect content for your break</h1>
        
        {breakTime.canTakeBreak ? (
          <div className="space-y-8">
            <div className="bg-green-100 text-green-800 p-4 rounded-lg flex items-center justify-between">
              <span>Break time available! You can watch up to 30 minutes of content.</span>
              <BreakTimer initialMinutes={30} />
            </div>
            
            <MoodSelector selectedMood={mood} onSelectMood={setMood} />
            
            <InterestSelector selectedInterests={interests} onSelectInterest={toggleInterest} />
            
            <DurationSelector 
              duration={duration} 
              onChangeDuration={setDuration} 
              maxDuration={30} 
            />
            
            <Button
              onClick={handleGetRecommendations}
              disabled={isSubmitDisabled}
              className="w-full md:w-auto bg-gradient-to-r from-chill-400 to-chill-600 hover:from-chill-500 hover:to-chill-700 text-white border-none py-6 text-lg"
            >
              Find My Content
            </Button>
          </div>
        ) : (
          <div className="bg-yellow-100 text-yellow-800 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold mb-2">Your break starts in:</h2>
            <div className="text-3xl font-bold">{formatTimeRemaining(breakTime.timeRemaining)}</div>
            <p className="mt-2">Come back after 45 minutes to enjoy your break time!</p>
          </div>
        )}
      </div>
      
      {(videos.length > 0 || loading || activeTab !== "videos") && (
        <div className="my-8">
          <Tabs defaultValue="videos" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="videos">Recommended Videos</TabsTrigger>
              <TabsTrigger value="games">Mini Games</TabsTrigger>
              <TabsTrigger value="memes">Trending Memes</TabsTrigger>
            </TabsList>
            
            <TabsContent value="videos">
              <VideoGrid videos={videos} loading={loading} />
            </TabsContent>
            
            <TabsContent value="games">
              <MiniGames />
            </TabsContent>
            
            <TabsContent value="memes">
              <TrendingMemes />
            </TabsContent>
          </Tabs>
        </div>
      )}
    </section>
  );
};

export default RecommendationSection;

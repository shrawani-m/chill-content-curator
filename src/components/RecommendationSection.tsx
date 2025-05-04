
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mood, Interest, Video, UserPreferences } from '@/types';
import VideoGrid from './VideoGrid';
import MoodSelector from './MoodSelector';
import InterestSelector from './InterestSelector';
import DurationSelector from './DurationSelector';
import { getMockVideos } from '@/lib/api';

const RecommendationSection = () => {
  const [mood, setMood] = useState<Mood | null>(null);
  const [interests, setInterests] = useState<Interest[]>([]);
  const [duration, setDuration] = useState<number>(30);
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

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
        duration,
      };
      
      const recommendedVideos = await getMockVideos(prefs);
      setVideos(recommendedVideos);
    } catch (error) {
      console.error('Error getting recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  const isSubmitDisabled = !mood || interests.length === 0;

  return (
    <section className="w-full">
      <div className="bg-gradient-to-r from-chill-100 to-secondary p-6 md:p-10 rounded-2xl mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-chill-900">Find the perfect content for your mood</h1>
        
        <div className="space-y-8">
          <MoodSelector selectedMood={mood} onSelectMood={setMood} />
          
          <InterestSelector selectedInterests={interests} onSelectInterest={toggleInterest} />
          
          <DurationSelector duration={duration} onChangeDuration={setDuration} />
          
          <Button
            onClick={handleGetRecommendations}
            disabled={isSubmitDisabled}
            className="w-full md:w-auto bg-gradient-to-r from-chill-400 to-chill-600 hover:from-chill-500 hover:to-chill-700 text-white border-none py-6 text-lg"
          >
            Find My Content
          </Button>
        </div>
      </div>
      
      {(videos.length > 0 || loading) && (
        <div className="my-8">
          <h2 className="text-2xl font-bold mb-6">Recommended for you</h2>
          <VideoGrid videos={videos} loading={loading} />
        </div>
      )}
    </section>
  );
};

export default RecommendationSection;

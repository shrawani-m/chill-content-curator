
import { UserPreferences, Video } from '@/types';

// Mock data for local development
const mockVideos: Video[] = [
  {
    id: '1',
    title: 'Relaxing Lo-fi Hip Hop Mix for Studying and Working',
    thumbnail: 'https://i.ytimg.com/vi/5qap5aO4i9A/maxresdefault.jpg',
    channelTitle: 'Lofi Girl',
    duration: '25:17',
    viewCount: '12M'
  },
  {
    id: '2',
    title: 'Calm Piano Music for Stress Relief',
    thumbnail: 'https://i.ytimg.com/vi/lCOF9LN_Zxs/maxresdefault.jpg',
    channelTitle: 'Relaxing Music',
    duration: '18:42',
    viewCount: '8.2M'
  },
  {
    id: '3',
    title: 'Morning Yoga for Energy and Focus - 15 Min Practice',
    thumbnail: 'https://i.ytimg.com/vi/UEEsdXn8oG8/maxresdefault.jpg',
    channelTitle: 'Yoga With Adriene',
    duration: '15:34',
    viewCount: '5.6M'
  },
  {
    id: '4',
    title: 'How to Stay Productive While Working From Home',
    thumbnail: 'https://i.ytimg.com/vi/AgIggrkBFcU/maxresdefault.jpg',
    channelTitle: 'Thomas Frank',
    duration: '12:08',
    viewCount: '1.3M'
  },
  {
    id: '5',
    title: 'Beautiful Nature Sounds - Forest Birds Singing',
    thumbnail: 'https://i.ytimg.com/vi/xNN7iTA57jM/maxresdefault.jpg',
    channelTitle: 'Nature Sounds',
    duration: '45:30',
    viewCount: '3.1M'
  },
  {
    id: '6',
    title: '10-Minute Meditation for Beginners',
    thumbnail: 'https://i.ytimg.com/vi/U9YKY7fdwyg/maxresdefault.jpg',
    channelTitle: 'Headspace',
    duration: '10:00',
    viewCount: '7.5M'
  },
  {
    id: '7',
    title: 'Easy Pasta Recipes for Weeknight Dinners',
    thumbnail: 'https://i.ytimg.com/vi/bJUiWdM__Qw/maxresdefault.jpg',
    channelTitle: 'Tasty',
    duration: '8:27',
    viewCount: '4.2M'
  },
  {
    id: '8',
    title: 'Funny Cat Videos That Will Make You Laugh',
    thumbnail: 'https://i.ytimg.com/vi/hY7m5jjJ9mM/maxresdefault.jpg',
    channelTitle: 'Animal Planet',
    duration: '11:16',
    viewCount: '15.8M'
  }
];

// In a real app, this would fetch data from a real API
export const getMockVideos = async (preferences: UserPreferences): Promise<Video[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Filter by duration (within 5 minutes of target duration)
  let filteredVideos = mockVideos.filter(video => {
    const minutes = parseInt(video.duration.split(':')[0]);
    return Math.abs(minutes - preferences.duration) <= 10;
  });
  
  // If we still have too many videos, randomize and limit the results
  if (filteredVideos.length > 4) {
    filteredVideos = filteredVideos.sort(() => 0.5 - Math.random()).slice(0, 8);
  }
  
  return filteredVideos;
};

// In a real app, we would implement the YouTube API integration here
// Example:
export const fetchYouTubeVideos = async (preferences: UserPreferences): Promise<Video[]> => {
  // This would be a real API call in production
  // const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  // const response = await fetch(`https://www.googleapis.com/youtube/v3/search?...&key=${YOUTUBE_API_KEY}`);
  // const data = await response.json();
  // return mapYouTubeDataToVideos(data);
  
  // For now, use mock data
  return getMockVideos(preferences);
};

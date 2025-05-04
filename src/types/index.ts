
export type Mood = 'happy' | 'relaxed' | 'focused' | 'energetic' | 'chill';

export type Interest = 'music' | 'gaming' | 'cooking' | 'nature' | 'tech' | 'fitness' | 'art';

export type Video = {
  id: string;
  title: string;
  thumbnail: string;
  channelTitle: string;
  duration: string;
  viewCount?: string;
};

export type UserPreferences = {
  mood: Mood;
  interests: Interest[];
  duration: number;
};

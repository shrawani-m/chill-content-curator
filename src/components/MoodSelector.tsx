
import React from 'react';
import { cn } from '@/lib/utils';
import { Mood } from '@/types';

type MoodOption = {
  value: Mood;
  label: string;
  emoji: string;
  bgColor: string;
};

const moodOptions: MoodOption[] = [
  { value: 'happy', label: 'Happy', emoji: '😊', bgColor: 'bg-yellow-100 border-yellow-300' },
  { value: 'relaxed', label: 'Relaxed', emoji: '😌', bgColor: 'bg-blue-100 border-blue-300' },
  { value: 'focused', label: 'Focused', emoji: '🧠', bgColor: 'bg-green-100 border-green-300' },
  { value: 'energetic', label: 'Energetic', emoji: '⚡', bgColor: 'bg-orange-100 border-orange-300' },
  { value: 'chill', label: 'Chill', emoji: '❄️', bgColor: 'bg-purple-100 border-purple-300' },
];

type MoodSelectorProps = {
  selectedMood: Mood | null;
  onSelectMood: (mood: Mood) => void;
};

const MoodSelector = ({ selectedMood, onSelectMood }: MoodSelectorProps) => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-medium mb-4">How are you feeling today?</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {moodOptions.map((mood) => (
          <button
            key={mood.value}
            onClick={() => onSelectMood(mood.value)}
            className={cn(
              'flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-200 hover:scale-105',
              mood.bgColor,
              selectedMood === mood.value
                ? 'ring-2 ring-chill-500 ring-offset-2'
                : 'hover:border-chill-300'
            )}
          >
            <span className="text-3xl mb-2">{mood.emoji}</span>
            <span className="font-medium">{mood.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;

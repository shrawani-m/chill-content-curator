
import React from 'react';
import { Interest } from '@/types';
import { cn } from '@/lib/utils';

type InterestOption = {
  value: Interest;
  label: string;
  icon: string;
};

const interestOptions: InterestOption[] = [
  { value: 'music', label: 'Music', icon: '🎵' },
  { value: 'gaming', label: 'Gaming', icon: '🎮' },
  { value: 'cooking', label: 'Cooking', icon: '🍳' },
  { value: 'nature', label: 'Nature', icon: '🌿' },
  { value: 'tech', label: 'Tech', icon: '💻' },
  { value: 'fitness', label: 'Fitness', icon: '💪' },
  { value: 'art', label: 'Art', icon: '🎨' },
];

type InterestSelectorProps = {
  selectedInterests: Interest[];
  onSelectInterest: (interest: Interest) => void;
};

const InterestSelector = ({ selectedInterests, onSelectInterest }: InterestSelectorProps) => {
  const toggleInterest = (interest: Interest) => {
    onSelectInterest(interest);
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-medium mb-4">What are you interested in?</h2>
      <div className="flex flex-wrap gap-3">
        {interestOptions.map((interest) => {
          const isSelected = selectedInterests.includes(interest.value);
          return (
            <button
              key={interest.value}
              onClick={() => toggleInterest(interest.value)}
              className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200',
                isSelected
                  ? 'bg-chill-100 border-chill-300 text-chill-800'
                  : 'bg-white border-gray-200 hover:border-chill-200'
              )}
            >
              <span>{interest.icon}</span>
              <span>{interest.label}</span>
            </button>
          );
        })}
      </div>
      <p className="text-sm text-muted-foreground mt-2">Select multiple interests</p>
    </div>
  );
};

export default InterestSelector;


import React from 'react';
import { Slider } from "@/components/ui/slider";

type DurationSelectorProps = {
  duration: number;
  onChangeDuration: (value: number) => void;
};

const DurationSelector = ({ duration, onChangeDuration }: DurationSelectorProps) => {
  const handleChange = (value: number[]) => {
    onChangeDuration(value[0]);
  };

  // Format minutes nicely
  const formatDuration = (minutes: number) => {
    if (minutes < 60) {
      return `${minutes} minutes`;
    } else {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      return `${hours} hour${hours > 1 ? 's' : ''}${mins > 0 ? ` ${mins} min` : ''}`;
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-medium mb-4">How much time do you have?</h2>
      <div className="px-2">
        <Slider 
          defaultValue={[duration]} 
          max={120} 
          step={5} 
          onValueChange={handleChange}
          className="my-6"
        />
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">5 min</span>
          <span className="text-lg font-medium text-chill-600">{formatDuration(duration)}</span>
          <span className="text-sm text-muted-foreground">2 hours</span>
        </div>
      </div>
    </div>
  );
};

export default DurationSelector;

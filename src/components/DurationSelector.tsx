
import React from 'react';
import { Slider } from "@/components/ui/slider";

type DurationSelectorProps = {
  duration: number;
  onChangeDuration: (value: number) => void;
  maxDuration?: number;
};

const DurationSelector = ({ duration, onChangeDuration, maxDuration = 120 }: DurationSelectorProps) => {
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
          max={maxDuration} 
          step={5} 
          onValueChange={handleChange}
          className="my-6"
        />
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">5 min</span>
          <span className="text-lg font-medium text-chill-600">{formatDuration(duration)}</span>
          <span className="text-sm text-muted-foreground">{maxDuration === 30 ? "30 min" : "2 hours"}</span>
        </div>
        {maxDuration === 30 && (
          <p className="text-sm text-muted-foreground mt-2 text-center">Maximum break time: 30 minutes</p>
        )}
      </div>
    </div>
  );
};

export default DurationSelector;

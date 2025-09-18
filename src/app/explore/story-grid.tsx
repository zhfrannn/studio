'use client';

import { useState } from 'react';
import type { Story, StoryTheme } from '@/lib/types';
import InteractiveMap from '@/components/interactive-map';
import StoryCard from '@/components/story-card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { AnimatePresence, motion } from 'framer-motion';

interface StoryGridProps {
  allStories: Story[];
}

const allThemes: StoryTheme[] = [
  'Disaster Preparedness',
  'Local Wisdom',
  'Peacebuilding',
];

export default function StoryGrid({ allStories }: StoryGridProps) {
  const [selectedTheme, setSelectedTheme] = useState<string>('all');
  const [mediaFilters, setMediaFilters] = useState({
    video: false,
    comic: false,
    quiz: false,
  });

  const filteredStories = allStories.filter(story => {
    if (selectedTheme !== 'all' && !story.aiThemes.includes(selectedTheme as StoryTheme)) {
      return false;
    }
    return true;
  });

  return (
    <div className="space-y-8">
      <div className="grid items-start gap-8 lg:grid-cols-3">
        <div className="h-full overflow-hidden rounded-xl border shadow-lg lg:col-span-1">
          <InteractiveMap stories={allStories} />
        </div>
        <div className="rounded-xl border bg-card p-6 lg:col-span-2">
          <h3 className="mb-4 font-headline text-lg">Filter Cerita</h3>
          <div className="grid items-center gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="theme-filter">Filter berdasarkan Tema</Label>
              <Select value={selectedTheme} onValueChange={setSelectedTheme}>
                <SelectTrigger id="theme-filter" className="w-full">
                  <SelectValue placeholder="Semua Tema" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Tema</SelectItem>
                  {allThemes.map(theme => (
                    <SelectItem key={theme} value={theme}>
                      {theme}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Filter berdasarkan Media</Label>
              <div className="flex items-center gap-4">
                <div className="flex items-center space-x-2">
                  <Switch id="video-filter" disabled />
                  <Label htmlFor="video-filter" className="text-muted-foreground">Video</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="comic-filter" disabled />
                  <Label htmlFor="comic-filter" className="text-muted-foreground">Komik</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="quiz-filter" disabled />
                  <Label htmlFor="quiz-filter" className="text-muted-foreground">Kuis</Label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredStories.map(story => (
            <motion.div
              key={story.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <StoryCard story={story} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

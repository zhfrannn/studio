
'use client';

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import { getTranslatedStories } from '@/lib/data';
import type { Story } from '@/lib/types';
import { useLanguage } from './language-context';

interface StoryContextType {
  stories: Story[];
  addStory: (newStory: Story) => void;
}

const StoryContext = createContext<StoryContextType | undefined>(undefined);

export function StoryProvider({ children }: { children: ReactNode }) {
  const { language } = useLanguage();
  
  // Initialize state with stories for the current language
  const [stories, setStories] = useState<Story[]>(() => getTranslatedStories({ lang: language }));

  const addStory = useCallback((newStory: Story) => {
    // Prevent adding duplicates
    setStories(prevStories => {
      if (prevStories.some(story => story.id === newStory.id)) {
        return prevStories;
      }
      // Add the new story to the beginning of the array
      return [newStory, ...prevStories];
    });
  }, []);

  // Effect to re-fetch and set stories when the language changes
  useEffect(() => {
    setStories(getTranslatedStories({ lang: language }));
  }, [language]);

  const value = useMemo(
    () => ({ stories, addStory }),
    [stories, addStory]
  );

  return (
    <StoryContext.Provider value={value}>{children}</StoryContext.Provider>
  );
}

export function useStories() {
  const context = useContext(StoryContext);
  if (context === undefined) {
    throw new Error('useStories must be used within a StoryProvider');
  }
  return context;
}

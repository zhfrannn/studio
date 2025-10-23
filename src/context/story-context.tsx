
'use client';

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
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
  const initialStories = useMemo(
    () => getTranslatedStories({ lang: language }),
    [language]
  );
  const [stories, setStories] = useState<Story[]>(initialStories);

  const addStory = useCallback((newStory: Story) => {
    // Prevent adding duplicates
    setStories(prevStories => {
      if (prevStories.some(story => story.id === newStory.id)) {
        return prevStories;
      }
      return [newStory, ...prevStories];
    });
  }, []);

  // When language changes, we need to re-translate all stories
  useState(() => {
    setStories(getTranslatedStories({ lang: language }));
  });

  const value = useMemo(
    () => ({ stories, addStory }),
    [stories, addStory, language]
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

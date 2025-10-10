'use client';
import StoryGrid from './story-grid';
import { getTranslatedStories } from '@/lib/data';
import { BookDashed } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import type { Story } from '@/lib/types';

export default function ExplorePage() {
  const { dictionary, language } = useLanguage();
  const exploreDict = dictionary.explore;

  // Use the centralized function to get stories
  const allStories: Story[] = getTranslatedStories({ lang: language });

  return (
    <div className="container mx-auto px-4 py-12 rounded-2xl">
      <div className="mb-12 text-center">
        <h1 className="relative inline-block font-headline text-4xl md:text-5xl">
          {exploreDict.title}
          <span className="absolute -bottom-2 left-0 block h-1 w-full rounded-full bg-sky-500" />
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          {exploreDict.description}
        </p>
      </div>
      <StoryGrid allStories={allStories} />
    </div>
  );
}

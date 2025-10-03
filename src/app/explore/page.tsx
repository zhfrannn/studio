'use client';
import StoryGrid from './story-grid';
import { stories as staticStories } from '@/lib/data';
import { BookDashed } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import type { Story } from '@/lib/types';

export default function ExplorePage() {
  const { dictionary } = useLanguage();
  const exploreDict = dictionary.explore;

  // Combine static data with translated data
  const allStories: Story[] = staticStories.map(story => {
    const translatedContent = dictionary.stories[story.id as keyof typeof dictionary.stories];
    return {
      ...story,
      ...translatedContent,
    };
  });

  return (
    <div className="container mx-auto px-4 py-12 rounded-2xl">
      <div className="mb-12 text-center">
        <h1 className="relative inline-block font-headline text-4xl md:text-5xl">
          {exploreDict.title}
          <span className="absolute -bottom-2 left-0 block h-1 w-full rounded-full bg-primary" />
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          {exploreDict.description}
        </p>
      </div>
      <StoryGrid allStories={allStories} />
    </div>
  );
}

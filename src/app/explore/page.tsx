
'use client';
import StoryGrid from './story-grid';
import { getTranslatedStories } from '@/lib/data';
import { BookDashed } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import type { Story } from '@/lib/types';
import InteractiveMap from '@/components/interactive-map';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { MapPin } from 'lucide-react';

export default function ExplorePage() {
  const { dictionary, language } = useLanguage();
  const exploreDict = dictionary.explore;

  // Use the centralized function to get stories
  const allStories: Story[] = getTranslatedStories({ lang: language });
  const storiesForMap = allStories.filter(story => story.location);

  return (
    <div className="container mx-auto px-4 py-12 rounded-2xl">
      <div className="mb-12 text-center">
        <h1 className="relative inline-block font-headline text-4xl font-bold md:text-5xl">
          {exploreDict.title}
          <span className="absolute -bottom-2 left-0 block h-1 w-full rounded-full bg-sky-500" />
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          {exploreDict.description}
        </p>
      </div>

       {/* Story Map */}
       <Accordion type="single" collapsible className="w-full mb-8" defaultValue="item-1">
        <AccordionItem value="item-1" className="rounded-lg border">
          <AccordionTrigger className="rounded-lg bg-card px-6 py-4 font-headline text-lg hover:no-underline">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" /> {dictionary.storyGrid.storyMap}
            </div>
          </AccordionTrigger>
          <AccordionContent className="border-t">
            <div className="h-[500px] w-full">
              <InteractiveMap stories={storiesForMap} />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <StoryGrid allStories={allStories} />
    </div>
  );
}

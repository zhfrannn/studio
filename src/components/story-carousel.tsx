
'use client';

import { useCallback } from 'react';
import type { EmblaOptionsType } from 'embla-carousel-react';
import useEmblaCarousel from 'embla-carousel-react';
import type { Story } from '@/lib/types';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/context/language-context';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CAROUSEL_OPTIONS: EmblaOptionsType = { loop: true };

const HeroStoryCard = ({ story }: { story: Story }) => {
  const { dictionary } = useLanguage();
  const storyGridDict = dictionary.storyGrid;
  const themeLabels: Record<string, string> = {
    'Disaster Preparedness': storyGridDict.themes.disaster,
    'Local Wisdom': storyGridDict.themes.wisdom,
    Peacebuilding: storyGridDict.themes.peace,
  };

  return (
    <Link href={`/story/${story.id}`} className="group block h-full">
      <Card className="relative h-full overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl">
        <Image
          src={story.media.featuredImage}
          alt={story.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          data-ai-hint={story.media.featuredImageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <Badge className="mb-2 border-white/50 bg-white/20 backdrop-blur-sm">
            {themeLabels[story.aiThemes[0]] || story.aiThemes[0]}
          </Badge>
          <h3 className="font-headline text-2xl font-bold leading-tight">
            {story.title}
          </h3>
        </div>
      </Card>
    </Link>
  );
};

export default function StoryCarousel({ stories }: { stories: Story[] }) {
    const highlightedStories = stories.filter(s => [
        'smong-selamat-dari-lautan',
        'dapur-umum-perdamaian',
        'hutan-bakau-penjaga-pantai',
        'perempuan-penganyam-harapan',
        'kopi-gayo-aroma-perdamaian',
        'arsitektur-rumah-panggung',
      ].includes(s.id));

  const [emblaRef, emblaApi] = useEmblaCarousel(CAROUSEL_OPTIONS);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  
  if (highlightedStories.length === 0) {
    return null;
  }

  return (
    <div className="relative mx-auto w-full max-w-7xl">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {highlightedStories.map(story => (
            <div
              className="basis-full flex-grow-0 flex-shrink-0 pl-4 md:basis-1/2 lg:basis-1/3"
              key={story.id}
            >
              <div className="h-[450px]">
                <HeroStoryCard story={story} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button
        onClick={scrollPrev}
        variant="outline"
        size="icon"
        className="absolute top-1/2 -left-4 z-10 h-12 w-12 -translate-y-1/2 rounded-full flex sm:-left-6"
      >
        <ChevronLeft />
      </Button>
      <Button
        onClick={scrollNext}
        variant="outline"
        size="icon"
        className="absolute top-1/2 -right-4 z-10 h-12 w-12 -translate-y-1/2 rounded-full flex sm:-right-6"
      >
        <ChevronRight />
      </Button>
    </div>
  );
};

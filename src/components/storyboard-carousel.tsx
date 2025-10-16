'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel, {
  type EmblaCarouselType,
  type EmblaOptionsType,
} from 'embla-carousel-react';
import { storyboardTemplate } from '@/lib/eduboard-templates';
import StoryboardSlide from '@/components/storyboard-slide';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const OPTIONS: EmblaOptionsType = { loop: false };

export default function StoryboardCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [
    emblaApi,
  ]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [
    emblaApi,
  ]);
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="mb-8 text-center">
        <h1 className="font-headline text-3xl md:text-4xl">
          Storyboard Preview
        </h1>
        <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            A vertical format designed for dense visual narratives.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border shadow-lg" ref={emblaRef}>
        <div className="flex bg-zinc-900">
          {storyboardTemplate.map((slide, index) => (
            <div
              className="relative min-w-0 flex-shrink-0 flex-grow-0 basis-full"
              key={index}
            >
              <div className="aspect-[9/16] p-4">
                <StoryboardSlide slide={slide} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-[auto_1fr_auto] items-center gap-4">
        <Button
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
          variant="outline"
          size="icon"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only">Previous slide</span>
        </Button>

        <div className="flex justify-center gap-2">
          {storyboardTemplate.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? 'w-6 bg-primary'
                  : 'bg-muted-foreground/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          onClick={scrollNext}
          disabled={nextBtnDisabled}
          variant="outline"
          size="icon"
        >
          <ArrowRight className="h-4 w-4" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
    </div>
  );
}

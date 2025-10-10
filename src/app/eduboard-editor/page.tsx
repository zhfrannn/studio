'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel, {
  type EmblaCarouselType,
  type EmblaOptionsType,
} from 'embla-carousel-react';
import { eduboardSlidesTemplate } from '@/lib/eduboard-templates';
import EduBoardSlide from '@/components/eduboard-slide';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const OPTIONS: EmblaOptionsType = { loop: false };

export default function EduBoardEditorPage() {
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
    <div className="container mx-auto flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="font-headline text-4xl md:text-5xl">
          EduBoard AI Editor
        </h1>
        <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
          Pratinjau dan visualisasikan konten slide EduBoard yang dihasilkan AI.
        </p>
      </div>

      <div className="w-full max-w-4xl">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {eduboardSlidesTemplate.map((slide, index) => (
              <div
                className="relative min-w-0 flex-shrink-0 flex-grow-0 basis-full"
                key={index}
              >
                <div className="aspect-video p-1">
                  <EduBoardSlide slide={slide} />
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
            {eduboardSlidesTemplate.map((_, index) => (
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
    </div>
  );
}

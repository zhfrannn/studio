
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel, {
  type EmblaCarouselType,
  type EmblaOptionsType,
} from 'embla-carousel-react';
import { quizCardTemplate } from '@/lib/eduboard-templates';
import QuizCardSlide from '@/components/quiz-card-slide';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, RefreshCw } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/context/language-context';

const OPTIONS: EmblaOptionsType = { loop: false, draggable: false };

export default function QuizCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [key, setKey] = useState(0); // Key to force re-render
  const { dictionary } = useLanguage();
  const dict = dictionary.eduboard;

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [
    emblaApi,
  ]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [
    emblaApi,
  ]);
  
  const restartQuiz = useCallback(() => {
    emblaApi?.scrollTo(0);
    setKey(prevKey => prevKey + 1); // Increment key to re-render children
  },[emblaApi]);

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
  
  const progress = ((selectedIndex + 1) / quizCardTemplate.length) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto">
       <div className="mb-8 text-center">
        <h1 className="font-headline text-3xl md:text-4xl">
          {dict.quizPreviewTitle}
        </h1>
        <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            {dict.quizPreviewDescription}
        </p>
      </div>
      
      <div className="mb-4 space-y-2">
        <Progress value={progress} className="h-2"/>
        <p className="text-sm text-center text-muted-foreground">Card {selectedIndex + 1} of {quizCardTemplate.length}</p>
      </div>

      <div className="overflow-hidden" ref={emblaRef} key={key}>
        <div className="flex">
          {quizCardTemplate.map((slide, index) => (
            <div
              className="relative min-w-0 flex-shrink-0 flex-grow-0 basis-full"
              key={slide.id}
            >
              <div className="p-1">
                <QuizCardSlide 
                  slide={slide} 
                  onAnswered={scrollNext}
                  isLastCard={index === quizCardTemplate.length - 1}
                />
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

        <div className="flex justify-center">
           <Button
              onClick={restartQuiz}
              variant="secondary"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              {dict.restartQuiz}
            </Button>
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

    
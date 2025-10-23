
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel, {
  type EmblaCarouselType,
  type EmblaOptionsType,
} from 'embla-carousel-react';
import { QuizCardData } from '@/lib/eduboard-templates';
import QuizCardSlide from '@/components/quiz-card-slide';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, RefreshCw } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/context/language-context';

interface QuizCarouselProps {
    quiz: QuizCardData[];
}

const OPTIONS: EmblaOptionsType = { loop: false, draggable: false };

export default function QuizCarousel({ quiz }: QuizCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [key, setKey] = useState(Date.now()); // Key to force re-render
  const { dictionary } = useLanguage();
  const dict = dictionary.eduboard;
  const [totalScore, setTotalScore] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);


  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [
    emblaApi,
  ]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [
    emblaApi,
  ]);
  
  const restartQuiz = useCallback(() => {
    emblaApi?.scrollTo(0);
    setKey(Date.now()); 
    setTotalScore(0);
    setAnsweredCount(0);
  },[emblaApi]);

  const handleAnswered = (points: number) => {
    setTotalScore(prev => prev + points);
    setAnsweredCount(prev => prev + 1);
    if (selectedIndex < quiz.length - 1) {
        setTimeout(() => scrollNext(), 1500);
    }
  };

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
  
  const progress = ((selectedIndex + (answeredCount > selectedIndex ? 1 : 0)) / quiz.length) * 100;
  const quizFinished = answeredCount === quiz.length;


  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-4 space-y-2">
        <Progress value={progress} className="h-2"/>
        <div className="flex justify-between text-sm text-muted-foreground">
            <span>Card {selectedIndex + 1} of {quiz.length}</span>
            <span>Score: {totalScore}</span>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef} key={key}>
        <div className="flex">
          {quiz.map((slide, index) => (
            <div
              className="relative min-w-0 flex-shrink-0 flex-grow-0 basis-full"
              key={`${slide.id}-${key}`}
            >
              <div className="p-1">
                <QuizCardSlide 
                  slide={slide} 
                  onAnswered={handleAnswered}
                  isLastCard={index === quiz.length - 1}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-center items-center gap-4">
        {quizFinished ? (
            <Button onClick={restartQuiz} variant="secondary">
              <RefreshCw className="mr-2 h-4 w-4" />
              {dict.restartQuiz}
            </Button>
        ) : (
            <div className='text-sm text-muted-foreground'>Answer the question to proceed</div>
        )}
      </div>
    </div>
  );
}

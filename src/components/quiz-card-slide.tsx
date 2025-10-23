
'use client';

import { useState } from 'react';
import { QuizCardData } from '@/lib/eduboard-templates';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, Lightbulb, Waves, ShieldAlert, ListChecks, HeartHandshake } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface QuizCardSlideProps {
  slide: QuizCardData;
  onAnswered: (points: number) => void;
  isLastCard: boolean;
}

const iconMapping: { [key: string]: React.ElementType } = {
  Waves,
  ShieldAlert,
  ListChecks,
  Lightbulb,
  HeartHandshake,
};

export default function QuizCardSlide({ slide, onAnswered, isLastCard }: QuizCardSlideProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSelectAnswer = (option: string) => {
    if (selectedAnswer !== null) return; 

    const correct = option === slide.correctAnswer;
    setSelectedAnswer(option);
    setIsCorrect(correct);
    
    onAnswered(correct ? slide.points : 0);
  };
  
  const IconComponent = iconMapping[slide.icon] || Lightbulb;

  return (
    <Card className="w-full overflow-hidden border-2 shadow-lg" style={{
        borderColor: `oklch(from ${slide.themeColor} l c h / 50%)`,
    }}>
      <CardHeader className="p-6" style={{
          background: `linear-gradient(135deg, ${slide.themeColor} 0%, oklch(from ${slide.themeColor} l calc(l + 0.1) c h) 100%)`,
      }}>
        <div className="flex items-center gap-3 text-white">
          <IconComponent className="h-8 w-8 flex-shrink-0" />
          <div>
            <CardDescription className="font-semibold uppercase tracking-wider text-white/80">{slide.category}</CardDescription>
            <CardTitle className="text-xl leading-tight">{slide.question}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-3">
          {slide.options.map((option, index) => {
            const isSelected = selectedAnswer === option;
            const isTheCorrectAnswer = option === slide.correctAnswer;
            
            let stateStyle = '';
            if(selectedAnswer !== null) {
                if (isTheCorrectAnswer) {
                    stateStyle = 'border-green-500 bg-green-500/10 text-green-700 dark:text-green-300';
                } else if(isSelected && !isTheCorrectAnswer) {
                    stateStyle = 'border-red-500 bg-red-500/10 text-red-700 dark:text-red-400';
                }
            }

            return (
              <Button
                key={index}
                variant="outline"
                size="lg"
                className={cn(
                  'h-auto w-full justify-start whitespace-normal py-3 text-left leading-snug',
                  stateStyle,
                  selectedAnswer === null && 'hover:border-primary hover:bg-accent'
                )}
                onClick={() => handleSelectAnswer(option)}
                disabled={selectedAnswer !== null}
              >
                <span className="mr-4 font-bold">{String.fromCharCode(65 + index)}</span>
                {option}
                {selectedAnswer !== null && isTheCorrectAnswer && <CheckCircle className="ml-auto h-5 w-5 text-green-500" />}
                {selectedAnswer !== null && isSelected && !isTheCorrectAnswer && <XCircle className="ml-auto h-5 w-5 text-red-500" />}
              </Button>
            );
          })}
        </div>
      </CardContent>

        <AnimatePresence>
            {selectedAnswer !== null && (
                 <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                 >
                    <CardFooter className="flex-col items-start gap-3 border-t p-6">
                        <h4 className="font-semibold flex items-center gap-2">
                           <Lightbulb className="h-5 w-5 text-yellow-500"/> 
                           Explanation
                        </h4>
                        <p className="text-sm text-muted-foreground">
                            {isCorrect ? 'That\'s right! ' : `The correct answer is "${slide.correctAnswer}". `}
                            {slide.explanation}
                        </p>
                    </CardFooter>
                 </motion.div>
            )}
        </AnimatePresence>
    </Card>
  );
}

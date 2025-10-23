'use client';

import React, { useState } from 'react';
import {
  ArrowLeft,
  Presentation,
  Puzzle,
  Printer,
  Gamepad2,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '@/context/language-context';
import PresentationGenerator from '@/components/eduboard/presentation-generator';
import QuizGenerator from '@/components/eduboard/quiz-generator';
import PrintableContent from '@/components/printable-content';
import { Button } from '@/components/ui/button';

// 1. UPDATE EDITOR MODES
type EditorMode =
  | 'selection'
  | 'presentation'
  | 'quiz'
  | 'storyboard'
  | 'printable'
  | 'minigame';


// 4. ONBOARDING SCREEN
const OnboardingScreen = ({
  setMode,
}: {
  setMode: (mode: EditorMode) => void;
}) => {
  const { dictionary } = useLanguage();
  const dict = dictionary.eduboard;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="w-full max-w-5xl text-center"
    >
      <div className="mb-12">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          {dict.editorTitle}
        </h1>
        <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
          {dict.editorDescription}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          className="cursor-pointer rounded-xl border-2 bg-card p-8 text-center transition-all hover:border-primary hover:shadow-2xl"
          onClick={() => setMode('presentation')}
        >
          <Presentation className="mx-auto mb-4 h-16 w-16 text-primary" />
          <h2 className="font-headline text-2xl font-bold">
            {dict.presentationTitle}
          </h2>
          <p className="mt-2 text-muted-foreground">
            {dict.presentationDescription}
          </p>
        </div>

        <div
          className="cursor-pointer rounded-xl border-2 bg-card p-8 text-center transition-all hover:border-primary hover:shadow-2xl"
          onClick={() => setMode('quiz')}
        >
          <Puzzle className="mx-auto mb-4 h-16 w-16 text-primary" />
          <h2 className="font-headline text-2xl font-bold">
            {dict.quizTitle}
          </h2>
          <p className="mt-2 text-muted-foreground">{dict.quizDescription}</p>
        </div>

        <div
          className="cursor-pointer rounded-xl border-2 bg-card p-8 text-center transition-all hover:border-primary hover:shadow-2xl"
          onClick={() => setMode('printable')}
        >
          <Printer className="mx-auto mb-4 h-16 w-16 text-primary" />
          <h2 className="font-headline text-2xl font-bold">
            {dict.infographicTitle}
          </h2>
          <p className="mt-2 text-muted-foreground">
            {dict.infographicDescription}
          </p>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <div
            className="cursor-pointer rounded-xl border-2 bg-card p-8 text-center transition-all hover:border-primary hover:shadow-2xl"
            onClick={() => setMode('minigame')}
          >
            <Gamepad2 className="mx-auto mb-4 h-16 w-16 text-primary" />
            <h2 className="font-headline text-2xl font-bold">
              {dict.minigameTitle}
            </h2>
            <p className="mt-2 text-muted-foreground">
              {dict.minigameDescription}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// 5. MAIN EDUBOARD PAGE
export default function EduBoardPage() {
  const [mode, setMode] = useState<EditorMode>('selection');
  const { dictionary } = useLanguage();
  const dict = dictionary.eduboard;

  const renderContent = () => {
    switch (mode) {
      case 'presentation':
        return <PresentationGenerator />;
      case 'quiz':
        return <QuizGenerator />;
      case 'printable':
        return <PrintableContent />;
      case 'storyboard':
      case 'minigame':
      default:
        return (
          <div className="py-12 text-center text-muted-foreground">
            <p className="font-semibold">This feature is coming soon!</p>
          </div>
        );
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          {dict.title}
        </h1>
        <p className="mx-auto mt-2 max-w-3xl text-muted-foreground">
          {dict.description}
        </p>
      </div>

      <Separator className="my-16" />

      <div className="flex min-h-[calc(70vh)] flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {mode === 'selection' && (
            <OnboardingScreen key="selection" setMode={setMode} />
          )}

          {mode !== 'selection' && (
            <motion.div
              key="editor"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex w-full flex-col items-center"
            >
              <Button
                onClick={() => setMode('selection')}
                variant="outline"
                className="mb-8 self-start"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {dict.backToSelection}
              </Button>

              {renderContent()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

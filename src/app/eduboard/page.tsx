'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Download,
  Book,
  ArrowLeft,
  Presentation,
  Instagram,
  Puzzle,
  Printer,
  Sparkles,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { AnimatePresence, motion } from 'framer-motion';
import SlideCarousel from '@/components/slide-carousel';
import StoryboardCarousel from '@/components/storyboard-carousel';
import QuizCarousel from '@/components/quiz-carousel';
import PrintableContent from '@/components/printable-content';
import MiniGameEngine from '@/components/minigame/minigame-engine';
import { floodScenario } from '@/lib/minigame-scenarios';

type EditorMode =
  | 'selection'
  | 'slide'
  | 'storyboard'
  | 'quiz'
  | 'printable'
  | 'minigame';

const OnboardingScreen = ({
  setMode,
}: {
  setMode: (mode: EditorMode) => void;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    className="w-full max-w-5xl text-center"
  >
    <div className="mb-12">
      <h1 className="font-headline text-4xl font-bold md:text-5xl">
        EduBoard AI Editor
      </h1>
      <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
        Choose the type of content you want to create or preview. The AI will
        help fill the content based on the template you choose.
      </p>
    </div>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      <div
        className="cursor-pointer rounded-xl border-2 bg-card p-8 text-center transition-all hover:border-primary hover:shadow-2xl"
        onClick={() => setMode('slide')}
      >
        <Presentation className="mx-auto mb-4 h-16 w-16 text-primary" />
        <h2 className="font-headline text-2xl font-bold">Presentation Slides</h2>
        <p className="mt-2 text-muted-foreground">
          Create a structured 10-slide educational presentation on topics like
          disaster preparedness.
        </p>
      </div>
      <div
        className="cursor-pointer rounded-xl border-2 bg-card p-8 text-center transition-all hover:border-primary hover:shadow-2xl"
        onClick={() => setMode('storyboard')}
      >
        <Instagram className="mx-auto mb-4 h-16 w-16 text-primary" />
        <h2 className="font-headline text-2xl font-bold">Storyboard Content</h2>
        <p className="mt-2 text-muted-foreground">
          Design a 4-slide visual narrative in a vertical format like an
          Instagram Story, packed with images and text.
        </p>
      </div>
      <div
        className="cursor-pointer rounded-xl border-2 bg-card p-8 text-center transition-all hover:border-primary hover:shadow-2xl"
        onClick={() => setMode('quiz')}
      >
        <Puzzle className="mx-auto mb-4 h-16 w-16 text-primary" />
        <h2 className="font-headline text-2xl font-bold">Interactive Quiz Cards</h2>
        <p className="mt-2 text-muted-foreground">
          Create interactive quiz cards to test understanding with instant
          feedback.
        </p>
      </div>
      <div
        className="cursor-pointer rounded-xl border-2 bg-card p-8 text-center transition-all hover:border-primary hover:shadow-2xl"
        onClick={() => setMode('printable')}
      >
        <Printer className="mx-auto mb-4 h-16 w-16 text-primary" />
        <h2 className="font-headline text-2xl font-bold">A4 Infographic</h2>
        <p className="mt-2 text-muted-foreground">
          Generate a single-page, information-dense A4 infographic ready for
          printing.
        </p>
      </div>
    </div>
     <Card className="mt-12 cursor-pointer rounded-xl border-2 border-amber-500/50 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 p-8 text-center transition-all hover:border-amber-500 hover:shadow-2xl" onClick={() => setMode('minigame')}>
       <div className="flex items-center justify-center gap-4">
        <Sparkles className="h-16 w-16 text-amber-500" />
        <div>
            <h2 className="font-headline text-2xl font-bold text-amber-600 dark:text-amber-400">Premium Content: Mini Game</h2>
            <p className="mt-2 text-muted-foreground">
            Build interactive disaster response game scenarios with AI-driven content.
            </p>
        </div>
       </div>
    </Card>
  </motion.div>
);

export default function EduBoardPage() {
  const [mode, setMode] = useState<EditorMode>('selection');

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          Physical EduBoard
        </h1>
        <p className="mx-auto mt-2 max-w-3xl text-muted-foreground">
          Bridging the digital and physical worlds for inclusive and sustainable
          community learning.
        </p>
      </div>

      <div className="grid items-center gap-8 lg:gap-12 md:grid-cols-2 rounded-2xl">
        <div className="relative aspect-square overflow-hidden rounded-xl border shadow-2xl md:aspect-[3/4]">
          <Image
            src="https://cdn.dribbble.com/userupload/16865092/file/original-286765ae0de4074597bfb6584a571c60.jpeg"
            alt="EduBoard Design"
            fill
            className="object-cover"
            data-ai-hint="poster design"
          />
        </div>

        <div className="space-y-8">
          <Card>
            <CardContent className="space-y-4 p-6">
              <h2 className="font-headline text-2xl font-bold">
                What is an EduBoard?
              </h2>
              <p className="text-muted-foreground">
                EduBoard is a physical information board designed for public
                spaces like schools, village offices, or community centers. It
                displays story summaries, QR codes leading to interactive
                digital content (videos, comics, quizzes), and essential
                disaster preparedness information.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4 p-6">
              <h2 className="font-headline text-2xl font-bold">
                Use It in Your Community
              </h2>
              <p className="text-muted-foreground">
                We encourage schools, communities, and volunteers to use the
                EduBoard. Download our design assets for free and follow the
                guide to set it up in your environment.
              </p>
              <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                <Button size="lg" asChild>
                  <a href="#" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Poster Assets
                  </a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <a href="#">
                    <Book className="mr-2 h-4 w-4" />
                    View Guide
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Separator className="my-16 md:my-24" />

      {/* --- EduBoard Editor Section --- */}
      <div className="flex min-h-[calc(80vh)] flex-col items-center justify-center">
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
              className="w-full"
            >
              <Button
                onClick={() => setMode('selection')}
                variant="outline"
                className="mb-8"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Selection
              </Button>

              {mode === 'slide' && <SlideCarousel />}
              {mode === 'storyboard' && <StoryboardCarousel />}
              {mode === 'quiz' && <QuizCarousel />}
              {mode === 'printable' && <PrintableContent />}
              {mode === 'minigame' && <MiniGameEngine scenario={floodScenario} />}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}

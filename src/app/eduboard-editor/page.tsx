'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  Presentation,
  Instagram,
  Puzzle,
  Printer,
  Sparkles,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import SlideCarousel from '@/components/slide-carousel';
import StoryboardCarousel from '@/components/storyboard-carousel';
import QuizCarousel from '@/components/quiz-carousel';
import PrintableContent from '@/components/printable-content';
import MiniGameEngine from '@/components/minigame/minigame-engine';
import { floodScenario } from '@/lib/minigame-scenarios';
import { Card } from '@/components/ui/card';

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
      <h1 className="font-headline text-4xl md:text-5xl">
        EduBoard AI Editor
      </h1>
      <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
        Pilih jenis konten yang ingin Anda buat atau pratinjau. AI akan membantu
        mengisi konten berdasarkan template yang Anda pilih.
      </p>
    </div>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      <div
        className="cursor-pointer rounded-xl border-2 bg-card p-8 text-center transition-all hover:border-primary hover:shadow-2xl"
        onClick={() => setMode('slide')}
      >
        <Presentation className="mx-auto mb-4 h-16 w-16 text-primary" />
        <h2 className="font-headline text-2xl">Slide Presentasi</h2>
        <p className="mt-2 text-muted-foreground">
          Buat presentasi edukasi terstruktur dengan 10 slide tentang topik
          seperti kesiapsiagaan bencana.
        </p>
      </div>
      <div
        className="cursor-pointer rounded-xl border-2 bg-card p-8 text-center transition-all hover:border-primary hover:shadow-2xl"
        onClick={() => setMode('storyboard')}
      >
        <Instagram className="mx-auto mb-4 h-16 w-16 text-primary" />
        <h2 className="font-headline text-2xl">Konten Storyboard</h2>
        <p className="mt-2 text-muted-foreground">
          Rancang narasi visual 4-slide dalam format vertikal seperti Instagram
          Story, padat dengan gambar dan teks.
        </p>
      </div>
      <div
        className="cursor-pointer rounded-xl border-2 bg-card p-8 text-center transition-all hover:border-primary hover:shadow-2xl"
        onClick={() => setMode('quiz')}
      >
        <Puzzle className="mx-auto mb-4 h-16 w-16 text-primary" />
        <h2 className="font-headline text-2xl">Quiz Card Interaktif</h2>
        <p className="mt-2 text-muted-foreground">
          Buat kartu kuis interaktif untuk menguji pemahaman dengan umpan balik
          langsung.
        </p>
      </div>
      <div
        className="cursor-pointer rounded-xl border-2 bg-card p-8 text-center transition-all hover:border-primary hover:shadow-2xl"
        onClick={() => setMode('printable')}
      >
        <Printer className="mx-auto mb-4 h-16 w-16 text-primary" />
        <h2 className="font-headline text-2xl">Infografis A4</h2>
        <p className="mt-2 text-muted-foreground">
          Hasilkan infografis satu halaman format A4 yang padat informasi dan
          siap untuk dicetak.
        </p>
      </div>
    </div>
    <Card className="mt-12 cursor-pointer rounded-xl border-2 border-amber-500/50 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 p-8 text-center transition-all hover:border-amber-500 hover:shadow-2xl" onClick={() => setMode('minigame')}>
       <div className="flex items-center justify-center gap-4">
        <Sparkles className="h-16 w-16 text-amber-500" />
        <div>
            <h2 className="font-headline text-2xl text-amber-600 dark:text-amber-400">Premium Content: Mini Game</h2>
            <p className="mt-2 text-muted-foreground">
            Bangun skenario game tanggap bencana interaktif yang kontennya dapat digerakkan oleh AI.
            </p>
        </div>
       </div>
    </Card>
  </motion.div>
);

export default function EduBoardEditorPage() {
  const [mode, setMode] = useState<EditorMode>('selection');

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-4 py-12">
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
              Kembali ke Pilihan
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
  );
}

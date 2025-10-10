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
        <h2 className="font-headline text-2xl font-bold">Slide Presentasi</h2>
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
        <h2 className="font-headline text-2xl font-bold">Konten Storyboard</h2>
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
        <h2 className="font-headline text-2xl font-bold">Quiz Card Interaktif</h2>
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
        <h2 className="font-headline text-2xl font-bold">Infografis A4</h2>
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
            <h2 className="font-headline text-2xl font-bold text-amber-600 dark:text-amber-400">Premium Content: Mini Game</h2>
            <p className="mt-2 text-muted-foreground">
            Bangun skenario game tanggap bencana interaktif yang kontennya dapat digerakkan oleh AI.
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
          EduBoard Fisik
        </h1>
        <p className="mx-auto mt-2 max-w-3xl text-muted-foreground">
          Menjembatani dunia digital dan fisik untuk pembelajaran komunitas yang
          inklusif dan berkelanjutan.
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
                Apa itu EduBoard?
              </h2>
              <p className="text-muted-foreground">
                EduBoard adalah papan informasi fisik yang dirancang untuk
                ditempatkan di ruang publik seperti sekolah, kantor desa, atau
                pusat komunitas. Papan ini menampilkan ringkasan cerita, QR code
                yang mengarah ke konten digital interaktif (video, komik,
                kuis), dan informasi penting tentang kesiapsiagaan bencana.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4 p-6">
              <h2 className="font-headline text-2xl font-bold">
                Gunakan di Komunitas Anda
              </h2>
              <p className="text-muted-foreground">
                Kami mendorong sekolah, komunitas, dan relawan untuk menggunakan
                EduBoard. Unduh aset desain kami secara gratis dan ikuti panduan
                untuk memasangnya di lingkungan Anda.
              </p>
              <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                <Button size="lg" asChild>
                  <a href="#" download>
                    <Download className="mr-2 h-4 w-4" />
                    Unduh Aset Poster
                  </a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <a href="#">
                    <Book className="mr-2 h-4 w-4" />
                    Lihat Panduan
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

    </div>
  );
}

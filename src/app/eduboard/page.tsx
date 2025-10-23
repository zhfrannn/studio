
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowLeft,
  Presentation,
  Instagram,
  Puzzle,
  Printer,
  Sparkles,
  Loader2,
  Share2,
  FileText,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '@/context/language-context';
import { Textarea } from '@/components/ui/textarea';
import { generateSlides, type GenerateSlidesOutput } from '@/ai/flows/generate-slides';
import SlideCarousel from '@/components/slide-carousel';
import { type Slide } from '@/lib/eduboard-templates';


// 1. TAMBAHKAN MODE 'presentation'
type EditorMode =
  | 'selection'
  | 'presentation' // Mode baru kita
  | 'storyboard'
  | 'quiz'
  | 'printable'
  | 'minigame';


// 2. BUAT KOMPONEN BARU: PRESENTATION GENERATOR
const PresentationGenerator = () => {
  const [storyText, setStoryText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedSlides, setGeneratedSlides] = useState<Slide[]>([]);

  const handleGenerate = async () => {
    if (!storyText.trim()) return;
    setIsLoading(true);
    setGeneratedSlides([]);
    try {
      const result: GenerateSlidesOutput = await generateSlides({ storyText });
      
      // Transformasi hasil AI ke format yang diterima oleh SlideCarousel
      const formattedSlides: Slide[] = result.slides.map((slide, index) => ({
        id: `slide-${index + 1}`,
        layout: slide.layout,
        category: 'AI Generated',
        title: slide.title,
        description: slide.description,
        points: slide.points,
        // Kita gunakan placeholder untuk gambar, tapi simpan prompt gambarnya di metadata
        imageUrl: `https://picsum.photos/seed/${index}/1280/720`,
        themeColor: 'oklch(60% 0.15 240)', // Warna default
        metadata: {
            source: slide.imagePrompt // Simpan prompt gambar di sini!
        }
      }));

      setGeneratedSlides(formattedSlides);

    } catch (error) {
      console.error('Slide generation failed:', error);
      // Tampilkan notifikasi error di sini jika perlu
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-8">
        <div className="text-center">
            <h2 className="font-headline text-3xl font-bold">AI Presentation Generator</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl">
              Provide your story, and the AI will structure it into a 5-slide presentation, complete with titles, content, and image ideas.
            </p>
        </div>

        {/* Area Input */}
        <Card className="w-full max-w-2xl">
            <CardContent className="p-6 space-y-4">
                 <div className="flex items-center gap-3">
                    <FileText className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">Your Story Text</h3>
                </div>
                <Textarea
                    placeholder="Write or paste your full story here. The more detail, the better the presentation will be."
                    className="h-48 resize-y"
                    value={storyText}
                    onChange={(e) => setStoryText(e.target.value)}
                    disabled={isLoading}
                />
                <Button onClick={handleGenerate} disabled={isLoading || !storyText.trim()} className="w-full" size="lg">
                    {isLoading ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                        <Sparkles className="mr-2 h-4 w-4" />
                    )}
                    {isLoading ? 'Generating Slides...' : 'Generate Presentation'}
                </Button>
            </CardContent>
        </Card>

        {/* Area Output */}
        <div className="w-full">
            {isLoading && (
                <div className="text-center text-muted-foreground space-y-4 py-12">
                    <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
                    <p className="font-semibold">AI is crafting your presentation...</p>
                    <p className="text-sm">This might take a moment. The AI is analyzing the story, structuring the content, and creating image prompts.</p>
                </div>
            )}

            {!isLoading && generatedSlides.length > 0 && (
                 <div className="w-full">
                    <h3 className="text-center font-headline text-2xl font-bold mb-4">Your Presentation is Ready!</h3>
                    <SlideCarousel slides={generatedSlides} />
                </div>
            )}
            
            {!isLoading && generatedSlides.length === 0 && (
                <div className="text-center text-muted-foreground py-12 border-2 border-dashed rounded-xl">
                    <Presentation className="mx-auto h-12 w-12 mb-4" />
                    <p className="font-semibold">Your generated slides will appear here.</p>
                    <p className="text-sm">Once you provide a story and click generate, the result will be displayed as an interactive carousel.</p>
                </div>
            )}
        </div>
    </div>
  );
};


// 3. UPDATE ONBOARDING SCREEN
const OnboardingScreen = ({ setMode }: { setMode: (mode: EditorMode) => void; }) => {
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
        <h1 className="font-headline text-4xl font-bold md:text-5xl">{dict.editorTitle}</h1>
        <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">{dict.editorDescription}</p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Tombol Baru untuk Presentation */}
        <div className="cursor-pointer rounded-xl border-2 bg-card p-8 text-center transition-all hover:border-primary hover:shadow-2xl" onClick={() => setMode('presentation')}>
          <Presentation className="mx-auto mb-4 h-16 w-16 text-primary" />
          <h2 className="font-headline text-2xl font-bold">AI Presentation</h2>
          <p className="mt-2 text-muted-foreground">Turn your story into a 5-slide presentation automatically.</p>
        </div>

        <div className="cursor-pointer rounded-xl border-2 bg-card p-8 text-center transition-all hover:border-primary hover:shadow-2xl" onClick={() => alert('This is a placeholder for the AI Media Generator.')}>
          <Instagram className="mx-auto mb-4 h-16 w-16 text-primary" />
          <h2 className="font-headline text-2xl font-bold">AI Video/Comic</h2>
          <p className="mt-2 text-muted-foreground">Generate a video or comic from your story text.</p>
        </div>

        <div className="cursor-pointer rounded-xl border-2 bg-card p-8 text-center transition-all hover:border-primary hover:shadow-2xl" onClick={() => alert('This is a placeholder for the AI Quiz Generator.')}>
          <Puzzle className="mx-auto mb-4 h-16 w-16 text-primary" />
          <h2 className="font-headline text-2xl font-bold">AI Quiz</h2>
          <p className="mt-2 text-muted-foreground">Generate an interactive quiz from your story.</p>
        </div>

      </div>
    </motion.div>
  );
};


// 4. UPDATE HALAMAN UTAMA EDUBOARD
export default function EduBoardPage() {
  const [mode, setMode] = useState<EditorMode>('selection');
  const { dictionary } = useLanguage();
  const dict = dictionary.eduboard;

  return (
    <div className="container mx-auto px-4 py-12">
       <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">{dict.title}</h1>
        <p className="mx-auto mt-2 max-w-3xl text-muted-foreground">{dict.description}</p>
      </div>

      <Separator className="my-16" />

      <div className="flex min-h-[calc(70vh)] flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {mode === 'selection' && <OnboardingScreen key="selection" setMode={setMode} />}

          {mode !== 'selection' && (
            <motion.div
              key="editor"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full flex flex-col items-center"
            >
              <Button onClick={() => setMode('selection')} variant="outline" className="mb-8 self-start">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {dict.backToSelection}
              </Button>

              {/* Tampilkan Generator Presentasi di sini */}
              {mode === 'presentation' && <PresentationGenerator />}

              {/* Beri pesan untuk fitur lain yang belum aktif */}
              {(mode === 'storyboard' || mode === 'quiz') && (
                 <div className="text-center text-muted-foreground py-12">
                  <p className="font-semibold">This feature is coming soon!</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

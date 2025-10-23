
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
import { type Slide, type QuizCardData } from '@/lib/eduboard-templates';
import { generateQuiz, type GenerateQuizOutput } from '@/ai/flows/generate-quiz';
import QuizCarousel from '@/components/quiz-carousel';
import PrintableContent from '@/components/printable-content';


// 1. UPDATE EDITOR MODES
type EditorMode =
  | 'selection'
  | 'presentation'
  | 'quiz'
  | 'storyboard'
  | 'printable'
  | 'minigame';


// 2. PRESENTATION GENERATOR (Existing)
const PresentationGenerator = () => {
  const [storyText, setStoryText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedSlides, setGeneratedSlides] = useState<Slide[] | null>(null);

  const handleGenerate = async () => {
    if (!storyText.trim()) return;
    setIsLoading(true);
    setGeneratedSlides(null);
    try {
      const result: GenerateSlidesOutput = await generateSlides({ storyText });
      
      const formattedSlides: Slide[] = result.slides.map((slide, index) => ({
        id: `slide-${index + 1}`,
        layout: slide.layout,
        category: 'AI Generated',
        title: slide.title,
        description: slide.description,
        points: slide.points,
        imageUrl: `https://picsum.photos/seed/${index}/1280/720`,
        themeColor: 'oklch(60% 0.15 240)',
        metadata: {
            source: slide.imagePrompt
        }
      }));
      setGeneratedSlides(formattedSlides);

    } catch (error) {
      console.error('Slide generation failed:', error);
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
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                    {isLoading ? 'Generating Slides...' : 'Generate Presentation'}
                </Button>
            </CardContent>
        </Card>

        <div className="w-full">
            {isLoading && (
                <div className="text-center text-muted-foreground space-y-4 py-12">
                    <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
                    <p className="font-semibold">AI is crafting your presentation...</p>
                </div>
            )}

            {generatedSlides && (
                 <div className="w-full">
                    <h3 className="text-center font-headline text-2xl font-bold mb-4">Your Presentation is Ready!</h3>
                    <SlideCarousel slides={generatedSlides} />
                </div>
            )}
            
            {!isLoading && !generatedSlides && (
                <div className="text-center text-muted-foreground py-12 border-2 border-dashed rounded-xl">
                    <Presentation className="mx-auto h-12 w-12 mb-4" />
                    <p className="font-semibold">Your generated slides will appear here.</p>
                </div>
            )}
        </div>
    </div>
  );
};


// 3. QUIZ GENERATOR
const QuizGenerator = () => {
    const [storyText, setStoryText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [generatedQuiz, setGeneratedQuiz] = useState<QuizCardData[] | null>(null);
  
    const handleGenerate = async () => {
      if (!storyText.trim()) return;
      setIsLoading(true);
      setGeneratedQuiz(null);
      try {
        const result: GenerateQuizOutput = await generateQuiz({ storyText });
        
        // Transform the AI output to the format required by the QuizCarousel
        const formattedQuiz: QuizCardData[] = result.quiz.map((q, index) => ({
          id: `quiz-${index + 1}`,
          layout: 'quiz-card',
          category: q.category,
          question: q.question,
          options: q.options,
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          icon: q.icon,
          themeColor: 'oklch(60% 0.15 240)', // Default color
          points: q.points,
        }));
  
        setGeneratedQuiz(formattedQuiz);
  
      } catch (error) {
        console.error('Quiz generation failed:', error);
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <div className="w-full flex flex-col items-center gap-8">
          <div className="text-center">
              <h2 className="font-headline text-3xl font-bold">AI Quiz Generator</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Provide a topic or story, and our AI will create an engaging, gamified quiz to test knowledge.
              </p>
          </div>
  
          <Card className="w-full max-w-2xl">
              <CardContent className="p-6 space-y-4">
                   <div className="flex items-center gap-3">
                      <FileText className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-bold">Your Story or Topic</h3>
                  </div>
                  <Textarea
                      placeholder="Paste a story or simply write a topic, e.g., 'The science behind tsunamis and the Smong legend'."
                      className="h-48 resize-y"
                      value={storyText}
                      onChange={(e) => setStoryText(e.target.value)}
                      disabled={isLoading}
                  />
                  <Button onClick={handleGenerate} disabled={isLoading || !storyText.trim()} className="w-full" size="lg">
                      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                      {isLoading ? 'Generating Quiz...' : 'Generate Interactive Quiz'}
                  </Button>
              </CardContent>
          </Card>
  
          <div className="w-full">
              {isLoading && (
                  <div className="text-center text-muted-foreground space-y-4 py-12">
                      <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
                      <p className="font-semibold">AI is crafting your quiz...</p>
                  </div>
              )}
  
              {generatedQuiz && (
                   <div className="w-full">
                      <h3 className="text-center font-headline text-2xl font-bold mb-4">Your Interactive Quiz is Ready!</h3>
                      <QuizCarousel quiz={generatedQuiz} />
                  </div>
              )}
              
              {!isLoading && !generatedQuiz && (
                  <div className="text-center text-muted-foreground py-12 border-2 border-dashed rounded-xl">
                      <Puzzle className="mx-auto h-12 w-12 mb-4" />
                      <p className="font-semibold">Your generated quiz will appear here.</p>
                  </div>
              )}
          </div>
      </div>
    );
  };


// 4. ONBOARDING SCREEN
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
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        
        <div className="cursor-pointer rounded-xl border-2 bg-card p-8 text-center transition-all hover:border-primary hover:shadow-2xl" onClick={() => setMode('presentation')}>
          <Presentation className="mx-auto mb-4 h-16 w-16 text-primary" />
          <h2 className="font-headline text-2xl font-bold">AI Presentation</h2>
          <p className="mt-2 text-muted-foreground">Turn your story into a 5-slide presentation automatically.</p>
        </div>

        <div className="cursor-pointer rounded-xl border-2 bg-card p-8 text-center transition-all hover:border-primary hover:shadow-2xl" onClick={() => setMode('quiz')}>
            <Puzzle className="mx-auto mb-4 h-16 w-16 text-primary" />
            <h2 className="font-headline text-2xl font-bold">AI Quiz</h2>
            <p className="mt-2 text-muted-foreground">Generate an interactive quiz from your story.</p>
        </div>

        <div className="cursor-pointer rounded-xl border-2 bg-card p-8 text-center transition-all hover:border-primary hover:shadow-2xl" onClick={() => setMode('printable')}>
            <Printer className="mx-auto mb-4 h-16 w-16 text-primary" />
            <h2 className="font-headline text-2xl font-bold">AI Printable</h2>
            <p className="mt-2 text-muted-foreground">Generate a print-ready A4 infographic from a topic.</p>
        </div>
        
        <div className="cursor-pointer rounded-xl border-2 bg-card p-8 text-center transition-all hover:border-primary hover:shadow-2xl" onClick={() => alert('This is a placeholder for the AI Media Generator.')}>
          <Instagram className="mx-auto mb-4 h-16 w-16 text-primary" />
          <h2 className="font-headline text-2xl font-bold">AI Video/Comic</h2>
          <p className="mt-2 text-muted-foreground">Generate a video or comic from your story text.</p>
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
    switch(mode) {
        case 'presentation':
            return <PresentationGenerator />;
        case 'quiz':
            return <QuizGenerator />;
        case 'printable':
            return <PrintableContent />;
        case 'storyboard':
        default:
            return (
                <div className="text-center text-muted-foreground py-12">
                 <p className="font-semibold">This feature is coming soon!</p>
               </div>
             );
    }
  }

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
              
              {renderContent()}

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

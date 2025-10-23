
'use client';

import React, { useState } from 'react';
import {
  ArrowLeft,
  Presentation,
  Puzzle,
  Printer,
  Gamepad2,
  Film,
  Camera,
  Users,
  MicVocal,
  Lightbulb,
  Video,
  MessageSquare,
  Music,
  HeartHandshake,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '@/context/language-context';
import PresentationGenerator from '@/components/eduboard/presentation-generator';
import QuizGenerator from '@/components/eduboard/quiz-generator';
import PrintableContent from '@/components/printable-content';
import { Button } from '@/components/ui/button';
import MiniGameGenerator from '@/components/minigame/minigame-generator';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';

type EditorMode =
  | 'selection'
  | 'presentation'
  | 'quiz'
  | 'printable'
  | 'minigame';

const OnboardingScreen = ({
  setMode,
  setShowComingSoon,
}: {
  setMode: (mode: EditorMode) => void;
  setShowComingSoon: (show: boolean) => void;
}) => {
  const { dictionary } = useLanguage();
  const dict = dictionary.eduboard;

  const futureFeatures = [
    {
      icon: <Video className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />,
      title: 'AI Video Scene Generator',
      description: 'Turn a single sentence into a cinematic video clip.',
    },
     {
      icon: <MessageSquare className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />,
      title: 'Interactive Dialogue Simulator',
      description: 'Practice conversations with AI characters from a story.',
    },
     {
      icon: <Music className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />,
      title: 'AI Music & Soundscape Creator',
      description: 'Generate background music and sound effects for your story.',
    },
    {
      icon: <Film className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />,
      title: 'AI Storyboard Generator',
      description: 'Turn any story into a vertical video storyboard.',
    },
    {
      icon: <Camera className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />,
      title: 'AR Learning Modules',
      description: 'Bring learning to life with augmented reality.',
    },
    {
      icon: <Users className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />,
      title: 'Community Challenges',
      description: 'Create and participate in collaborative learning challenges.',
    },
    {
      icon: <MicVocal className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />,
      title: 'AI Voiceover Tool',
      description: 'Generate automatic voiceovers for your presentations.',
    },
    {
      icon: <Lightbulb className="mx-auto mb-4 h-16 w-16 text-muted_foreground" />,
      title: 'Live Workshop Hub',
      description: 'Host and join live, interactive educational workshops.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="w-full max-w-7xl text-center"
    >
      <div className="mb-12">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          {dict.editorTitle}
        </h1>
        <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
          {dict.editorDescription}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Existing Features */}
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

        {/* Dummy "Coming Soon" Features */}
        {futureFeatures.map((feature, index) => (
          <div
            key={index}
            className="group relative cursor-pointer rounded-xl border-2 border-dashed bg-card/50 p-8 text-center transition-all hover:border-dashed hover:border-primary/50 hover:bg-card/80"
            onClick={() => setShowComingSoon(true)}
          >
            <div className="opacity-50 transition-opacity group-hover:opacity-100">
              {feature.icon}
              <h2 className="font-headline text-2xl font-bold text-muted-foreground group-hover:text-primary">
                {feature.title}
              </h2>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </div>
            <Badge
              variant="secondary"
              className="absolute right-3 top-3 -rotate-12"
            >
              Coming Soon
            </Badge>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default function EduBoardPage() {
  const [mode, setMode] = useState<EditorMode>('selection');
  const [showComingSoon, setShowComingSoon] = useState(false);
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
      case 'minigame':
        return <MiniGameGenerator />;
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

       <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, amount: 0.1 }}
        className="mb-16"
      >
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white shadow-2xl">
           <div className="flex flex-col items-center justify-center gap-4 text-center">
             <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                <HeartHandshake className="h-8 w-8" />
            </div>
            <div>
              <h2 className="font-headline text-2xl font-bold md:text-3xl">
                Free Forever for Schools, NGOs, & Communities
              </h2>
              <p className="mt-2 max-w-2xl opacity-90">
                We are committed to empowering change. Our platform and its
                tools are freely accessible for all educational and
                non-profit organizations dedicated to building a better, more
                resilient future.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <Separator className="my-16" />

      <div className="flex min-h-[calc(70vh)] flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {mode === 'selection' && (
            <OnboardingScreen
              key="selection"
              setMode={setMode}
              setShowComingSoon={setShowComingSoon}
            />
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
      <AlertDialog open={showComingSoon} onOpenChange={setShowComingSoon}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Feature in Development</AlertDialogTitle>
            <AlertDialogDescription>
              This feature is currently under active development. We are
              working hard to bring it to you soon. Thank you for your support
              as we continue to improve Wave of Voice!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowComingSoon(false)}>
              Got it!
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

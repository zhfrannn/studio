
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  GameScenario,
  GameLevel,
  GameOption,
} from '@/lib/minigame-scenarios';
import { AnimatePresence, motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Sparkles,
  Play,
  CheckCircle,
  XCircle,
  Clock,
  Trophy,
  RefreshCw,
} from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/language-context';

interface MiniGameEngineProps {
  scenario: GameScenario;
}

type GameState = 'intro' | 'playing' | 'feedback' | 'end';

const MiniGameEngine: React.FC<MiniGameEngineProps> = ({ scenario }) => {
  const [gameState, setGameState] = useState<GameState>('intro');
  const [currentLevel, setCurrentLevel] = useState<GameLevel | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [feedback, setFeedback] = useState<{
    text: string;
    result: 'correct' | 'wrong' | 'neutral';
  } | null>(null);
  const { dictionary } = useLanguage();
  const dict = dictionary.eduboard;


  const startGame = useCallback(() => {
    const firstLevel = scenario.levels.find(
      l => l.level_id === scenario.starting_level_id
    );
    if (firstLevel) {
      setCurrentLevel(firstLevel);
      setTimeLeft(firstLevel.timer_seconds);
      setScore(0);
      setFeedback(null);
      setGameState('playing');
    }
  }, [scenario]);

  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
    if (gameState === 'playing' && timeLeft === 0) {
      // Handle timeout: assume worst choice if available, otherwise first
      const worstChoice = currentLevel!.options.find(o => o.result === 'wrong') || currentLevel!.options[0];
      handleAnswer(worstChoice);
    }
  }, [gameState, timeLeft, currentLevel]);

  const handleAnswer = (option: GameOption) => {
    if (gameState !== 'playing') return;

    setGameState('feedback');
    setScore(prev => prev + option.score);
    setFeedback({ text: option.feedback, result: option.result });

    const nextLevelId = currentLevel!.next_level_map[option.result];

    setTimeout(() => {
      if (nextLevelId === 'end') {
        setGameState('end');
      } else {
        const nextLevel = scenario.levels.find(l => l.level_id === nextLevelId);
        if (nextLevel) {
          setCurrentLevel(nextLevel);
          setTimeLeft(nextLevel.timer_seconds);
          setFeedback(null);
          setGameState('playing');
        } else {
          // Fallback if next level not found
          setGameState('end');
        }
      }
    }, 2500); // Wait for feedback to be read
  };

  const getEndingMessage = () => {
    if (score >= scenario.score_thresholds.high)
      return scenario.ending_messages.high;
    if (score >= scenario.score_thresholds.medium)
      return scenario.ending_messages.medium;
    return scenario.ending_messages.low;
  };

  const renderContent = () => {
    switch (gameState) {
      case 'intro':
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <Sparkles className="mx-auto h-16 w-16 text-amber-500" />
            <h1 className="mt-4 font-headline text-4xl">{dict.minigameIntroTitle}</h1>
            <p className="mx-auto mt-2 max-w-xl text-lg text-muted-foreground">
              {dict.minigameIntroDescription}
            </p>
            <Button onClick={startGame} size="lg" className="mt-8">
              <Play className="mr-2 h-5 w-5" />
              {dict.minigameStart}
            </Button>
          </motion.div>
        );

      case 'playing':
      case 'feedback':
        if (!currentLevel) return null;
        const progress = (timeLeft / currentLevel.timer_seconds) * 100;
        return (
          <motion.div
            key={currentLevel.level_id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative h-full w-full"
          >
             <Image
              src={`https://picsum.photos/seed/${currentLevel.background_image_hint.replace(
                /\s/g,
                '-'
              )}/800/1200`}
              alt={currentLevel.scene_text}
              fill
              className="object-cover"
              data-ai-hint={currentLevel.background_image_hint}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* HUD */}
            <div className="absolute top-4 left-4 z-10 w-[calc(100%-2rem)]">
              <div className="flex items-center justify-between gap-4">
                <div className="rounded-full bg-black/50 px-4 py-2 text-white">
                  {dict.minigameScore} <span className="font-bold">{score}</span>
                </div>
                <div className="flex flex-grow items-center gap-2">
                  <Clock className="h-5 w-5 text-white" />
                  <Progress value={progress} className="h-2 w-full" />
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="absolute bottom-0 left-0 z-10 w-full p-6 text-white">
                <p className="mb-6 text-center text-lg font-semibold drop-shadow-md">
                    {currentLevel.scene_text}
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {currentLevel.options.map(opt => (
                    <Button
                        key={opt.id}
                        onClick={() => handleAnswer(opt)}
                        variant="secondary"
                        className="h-auto whitespace-normal py-3 text-base text-center justify-center bg-white/20 border-white/30 backdrop-blur-sm hover:bg-white/30"
                        disabled={gameState === 'feedback'}
                    >
                        {opt.text}
                    </Button>
                    ))}
                </div>
            </div>

            <AnimatePresence>
              {gameState === 'feedback' && feedback && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20 flex items-center justify-center bg-black/70 backdrop-blur-md p-8"
                >
                  <div className="text-center text-white">
                    {feedback.result === 'correct' && (
                      <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
                    )}
                    {feedback.result === 'wrong' && (
                      <XCircle className="mx-auto h-16 w-16 text-red-500" />
                    )}
                    {feedback.result === 'neutral' && (
                      <Sparkles className="mx-auto h-16 w-16 text-yellow-500" />
                    )}
                    <p className="mt-4 max-w-md text-2xl font-semibold">
                      {feedback.text}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );

      case 'end':
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 text-center"
          >
            <Trophy className="mx-auto h-16 w-16 text-yellow-500" />
            <h1 className="mt-4 font-headline text-4xl">{dict.minigameComplete}</h1>
            <p className="mt-2 text-2xl font-semibold text-primary">
              {dict.minigameFinalScore} {score}
            </p>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              {getEndingMessage()}
            </p>
            <Button onClick={startGame} size="lg" className="mt-8">
              <RefreshCw className="mr-2 h-5 w-5" />
              {dict.minigamePlayAgain}
            </Button>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="mx-auto w-full max-w-md overflow-hidden shadow-2xl md:max-w-lg">
      <CardContent className="relative flex h-[80vh] w-full items-center justify-center p-0">
        {renderContent()}
      </CardContent>
    </Card>
  );
};

export default MiniGameEngine;

    
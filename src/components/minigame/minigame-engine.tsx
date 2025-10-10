'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  GameScenario,
  GameLevel,
  GameOption,
} from '@/lib/minigame-scenarios';
import { AnimatePresence, motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Sparkles,
  Play,
  CheckCircle,
  XCircle,
  Clock,
  Trophy,
  RefreshCw
} from 'lucide-react';
import Image from 'next/image';

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
      // Handle timeout: assume worst choice
      handleAnswer(currentLevel!.options[0]);
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
    if(score >= scenario.score_thresholds.high) return scenario.ending_messages.high;
    if(score >= scenario.score_thresholds.medium) return scenario.ending_messages.medium;
    return scenario.ending_messages.low;
  }

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
            <h1 className="mt-4 font-headline text-4xl">{scenario.title}</h1>
            <p className="mx-auto mt-2 max-w-xl text-lg text-muted-foreground">
              {scenario.description}
            </p>
            <Button onClick={startGame} size="lg" className="mt-8">
              <Play className="mr-2 h-5 w-5" />
              Mulai Skenario
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
            className="relative w-full"
          >
            <div className="absolute top-4 left-4 z-10 rounded-full bg-black/50 px-4 py-2 text-white">
                Skor: <span className="font-bold">{score}</span>
            </div>
            <div className="absolute top-4 right-4 z-10 w-1/3">
                <div className='flex items-center gap-2'>
                    <Clock className="text-white h-5 w-5" />
                    <Progress value={progress} className="h-2" />
                </div>
            </div>

            <p className="absolute bottom-24 left-1/2 z-10 w-11/12 -translate-x-1/2 rounded-lg bg-black/60 p-4 text-center text-lg text-white shadow-lg backdrop-blur-sm">
              {currentLevel.scene_text}
            </p>

            <AnimatePresence>
              {gameState === 'feedback' && feedback && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20 flex items-center justify-center bg-black/70 backdrop-blur-md"
                >
                  <div className="text-center text-white">
                    {feedback.result === 'correct' && <CheckCircle className="mx-auto h-16 w-16 text-green-500" />}
                    {feedback.result === 'wrong' && <XCircle className="mx-auto h-16 w-16 text-red-500" />}
                    {feedback.result === 'neutral' && <Sparkles className="mx-auto h-16 w-16 text-yellow-500" />}
                    <p className="mt-4 max-w-md text-2xl font-semibold">{feedback.text}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="absolute bottom-4 left-1/2 z-10 grid w-11/12 -translate-x-1/2 grid-cols-3 gap-2">
              {currentLevel.options.map(opt => (
                <Button
                  key={opt.id}
                  onClick={() => handleAnswer(opt)}
                  variant="secondary"
                  className="h-auto whitespace-normal py-3 text-base"
                  disabled={gameState === 'feedback'}
                >
                  {opt.text}
                </Button>
              ))}
            </div>

            <Image
              src={`https://picsum.photos/seed/${currentLevel.background_image_hint.replace(/\s/g, '-')}/800/1200`}
              alt={currentLevel.scene_text}
              fill
              className="object-cover"
              data-ai-hint={currentLevel.background_image_hint}
            />
          </motion.div>
        );

    case 'end':
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
            >
                <Trophy className="mx-auto h-16 w-16 text-yellow-500" />
                <h1 className="mt-4 font-headline text-4xl">Skenario Selesai!</h1>
                <p className="mt-2 text-2xl font-semibold text-primary">Skor Akhir: {score}</p>
                <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
                {getEndingMessage()}
                </p>
                <Button onClick={startGame} size="lg" className="mt-8">
                <RefreshCw className="mr-2 h-5 w-5" />
                Main Lagi
                </Button>
            </motion.div>
        )

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

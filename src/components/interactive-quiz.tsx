'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, HelpCircle, RefreshCw, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import MotionWrapper from './motion-wrapper';
import { Quiz } from '@/lib/interactive-content';

interface InteractiveQuizProps {
  quiz: Quiz;
}

export default function InteractiveQuiz({ quiz }: InteractiveQuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const { questions, title, description } = quiz;
  const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);

  const handleAnswerSelect = (option: string) => {
    if (selectedAnswer) return; // Prevent changing answer

    const currentQuestion = questions[currentQuestionIndex];
    const correct = option === currentQuestion.correctAnswer;

    setSelectedAnswer(option);
    setIsCorrect(correct);

    if (correct) {
      setScore(prevScore => prevScore + currentQuestion.points);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setScore(0);
    setQuizFinished(false);
  };

  const progress =
    ((currentQuestionIndex + (quizFinished || selectedAnswer ? 1 : 0)) /
      questions.length) *
    100;

  if (quizFinished) {
    return (
      <MotionWrapper>
        <Card className="mx-auto w-full max-w-2xl overflow-hidden">
          <CardHeader className="bg-muted/30 p-8 text-center">
            <Trophy className="mx-auto h-16 w-16 text-yellow-500" />
            <h2 className="mt-4 font-headline text-3xl">Kuis Selesai!</h2>
            <p className="text-muted-foreground">{title}</p>
          </CardHeader>
          <CardContent className="p-8 text-center">
            <p className="text-lg text-muted-foreground">Skor Akhir Anda:</p>
            <p className="my-2 font-bold text-6xl text-primary">
              {score}
              <span className="text-3xl text-muted-foreground">/{totalPoints}</span>
            </p>
            <p className="mt-4 mb-6">
              {score === totalPoints
                ? 'Luar biasa! Anda adalah seorang ahli.'
                : 'Kerja bagus! Selalu ada ruang untuk belajar.'}
            </p>
            <Button onClick={handleRestartQuiz} size="lg">
              <RefreshCw className="mr-2 h-4 w-4" />
              Ulangi Kuis
            </Button>
          </CardContent>
        </Card>
      </MotionWrapper>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <MotionWrapper>
      <Card className="mx-auto w-full max-w-2xl">
        <CardHeader className="p-6">
          <div className="mb-2 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
              <HelpCircle className="h-5 w-5" />
            </div>
            <h2 className="font-headline text-2xl text-foreground">{title}</h2>
          </div>
          <p className="text-muted-foreground">{description}</p>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div>
            <div className="mb-2 flex items-center justify-between">
              <p className="text-lg font-semibold">
                Pertanyaan {currentQuestionIndex + 1} dari {questions.length}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">
                  Progres: {Math.round(progress)}%
                </span>
                <Progress value={progress} className="h-2 w-24" />
              </div>
            </div>
            <p className="text-lg">{currentQuestion.question}</p>
          </div>

          <div className="space-y-4">
            {currentQuestion.options.map((option, index) => {
              const optionLetter = String.fromCharCode(65 + index);
              const isSelected = selectedAnswer === option;
              const isTheCorrectAnswer = option === currentQuestion.correctAnswer;

              return (
                <button
                  key={option}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={!!selectedAnswer}
                  className={cn(
                    'flex w-full items-center gap-4 rounded-lg border-2 p-4 text-left transition-all',
                    'hover:border-primary hover:bg-primary/5',
                    'disabled:cursor-not-allowed',
                    selectedAnswer &&
                      isTheCorrectAnswer &&
                      'border-green-500 bg-green-500/10 text-green-700',
                    isSelected &&
                      !isTheCorrectAnswer &&
                      'border-red-500 bg-red-500/10 text-red-700'
                  )}
                >
                  <span
                    className={cn(
                      'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border font-semibold',
                      selectedAnswer &&
                        isTheCorrectAnswer &&
                        'border-green-500 bg-green-500 text-white',
                      isSelected &&
                        !isTheCorrectAnswer &&
                        'border-red-500 bg-red-500 text-white'
                    )}
                  >
                    {optionLetter}
                  </span>
                  <span>{option}</span>
                </button>
              );
            })}
          </div>

          {selectedAnswer && (
            <MotionWrapper
              className="flex flex-col items-center gap-4 rounded-lg p-4 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {isCorrect ? (
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  <p className="font-semibold">
                    Benar! Anda mendapatkan {currentQuestion.points} poin.
                  </p>
                </div>
              ) : (
                <p className="font-semibold text-red-600">
                  Kurang tepat. Jawaban yang benar adalah: {currentQuestion.correctAnswer}
                </p>
              )}
              <Button onClick={handleNextQuestion} className="w-full sm:w-auto">
                {currentQuestionIndex < questions.length - 1
                  ? 'Pertanyaan Selanjutnya'
                  : 'Selesaikan Kuis'}
              </Button>
            </MotionWrapper>
          )}
        </CardContent>
      </Card>
    </MotionWrapper>
  );
}

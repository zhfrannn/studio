'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, HelpCircle, RefreshCw, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import MotionWrapper from './motion-wrapper';

const quizQuestions = [
  {
    question: "What does the word 'Smong' mean in the local language of Simeulue Island?",
    options: ['Earthquake', 'Tsunami', 'Warning', 'Ocean'],
    correctAnswer: 'Tsunami',
    points: 10,
  },
  {
    question: 'What are the two signs mentioned in the Smong poem that indicate an impending tsunami?',
    options: [
      'Strong wind and heavy rain',
      'A strong earthquake followed by the sea receding',
      'Dark clouds and lightning',
      'The sound of a loud siren',
    ],
    correctAnswer: 'A strong earthquake followed by the sea receding',
    points: 10,
  },
  {
    question: 'What action does the Smong wisdom advise people to take immediately after seeing the signs?',
    options: [
      'Go to the beach to watch',
      'Wait for official instructions',
      'Run to higher ground',
      'Hide inside their homes',
    ],
    correctAnswer: 'Run to higher ground',
    points: 10,
  },
  {
    question: 'How is the Smong wisdom traditionally passed down through generations?',
    options: ['Through written books', 'Through school lessons', 'Through oral poems and songs', 'Through government pamphlets'],
    correctAnswer: 'Through oral poems and songs',
    points: 10,
  },
  {
    question: 'The effectiveness of Smong during the 2004 tsunami is a powerful example of:',
    options: ['Modern technology', 'International aid', 'Local wisdom in disaster preparedness', 'A lucky coincidence'],
    correctAnswer: 'Local wisdom in disaster preparedness',
    points: 10,
  },
];

const totalPoints = quizQuestions.reduce((sum, q) => sum + q.points, 0);

export default function InteractiveQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswerSelect = (option: string) => {
    if (selectedAnswer) return; // Prevent changing answer

    const currentQuestion = quizQuestions[currentQuestionIndex];
    const correct = option === currentQuestion.correctAnswer;
    
    setSelectedAnswer(option);
    setIsCorrect(correct);

    if (correct) {
      setScore(prevScore => prevScore + currentQuestion.points);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
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

  const progress = ((currentQuestionIndex + (quizFinished || selectedAnswer ? 1 : 0)) / quizQuestions.length) * 100;
  
  if (quizFinished) {
    return (
      <MotionWrapper>
        <Card className="w-full max-w-2xl mx-auto overflow-hidden">
          <CardHeader className="text-center bg-muted/30 p-8">
            <Trophy className="mx-auto h-16 w-16 text-yellow-500" />
            <h2 className="mt-4 font-headline text-3xl">Quiz Complete!</h2>
            <p className="text-muted-foreground">You have tested your knowledge of Smong.</p>
          </CardHeader>
          <CardContent className="p-8 text-center">
            <p className="text-lg text-muted-foreground">Your Final Score:</p>
            <p className="my-2 font-bold text-6xl text-primary">
              {score}
              <span className="text-3xl text-muted-foreground">/{totalPoints}</span>
            </p>
            <p className="mt-4 mb-6">{score === totalPoints ? "Excellent! You are a true Smong expert." : "Good job! There's always more to learn."}</p>
            <Button onClick={handleRestartQuiz} size="lg">
              <RefreshCw className="mr-2 h-4 w-4" />
              Take Quiz Again
            </Button>
          </CardContent>
        </Card>
      </MotionWrapper>
    );
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
     <MotionWrapper>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="p-6">
           <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary">
                 <HelpCircle className="h-5 w-5" />
              </div>
              <h2 className="font-headline text-2xl text-primary-foreground">Interactive Quiz: Traditional Knowledge Systems</h2>
           </div>
          <p className="text-muted-foreground">Test your understanding of Smong and traditional disaster preparedness wisdom</p>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold text-lg">Question {currentQuestionIndex + 1} of {quizQuestions.length}</p>
              <div className="flex items-center gap-2">
                 <span className="text-xs text-muted-foreground">Progress: {Math.round(progress)}%</span>
                 <Progress value={progress} className="w-24 h-2"/>
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
                    "w-full text-left p-4 rounded-lg border-2 transition-all flex items-center gap-4",
                    "hover:border-primary hover:bg-primary/5",
                    "disabled:cursor-not-allowed",
                    selectedAnswer && isTheCorrectAnswer && "border-green-500 bg-green-500/10 text-green-700",
                    isSelected && !isTheCorrectAnswer && "border-red-500 bg-red-500/10 text-red-700"
                  )}
                >
                  <span className={cn(
                    "flex-shrink-0 h-8 w-8 rounded-full border flex items-center justify-center font-semibold",
                    selectedAnswer && isTheCorrectAnswer && "border-green-500 bg-green-500 text-white",
                    isSelected && !isTheCorrectAnswer && "border-red-500 bg-red-500 text-white"
                  )}>
                    {optionLetter}
                  </span>
                  <span>{option}</span>
                </button>
              );
            })}
          </div>

          {selectedAnswer && (
            <MotionWrapper className="flex flex-col items-center gap-4 rounded-lg p-4 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {isCorrect ? (
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  <p className="font-semibold">Correct! You earned {currentQuestion.points} points.</p>
                </div>
              ) : (
                <p className="font-semibold text-red-600">
                  Not quite. The correct answer is: {currentQuestion.correctAnswer}
                </p>
              )}
              <Button onClick={handleNextQuestion} className="w-full sm:w-auto">
                {currentQuestionIndex < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
              </Button>
            </MotionWrapper>
          )}
        </CardContent>
      </Card>
     </MotionWrapper>
  );
}

'use client';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { FileText, Loader2, Sparkles, Puzzle } from 'lucide-react';
import {
  generateQuiz,
  type GenerateQuizOutput,
} from '@/ai/flows/generate-quiz';
import QuizCarousel from '@/components/quiz-carousel';
import { type QuizCardData } from '@/lib/eduboard-templates';

const QuizGenerator = () => {
  const [storyText, setStoryText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedQuiz, setGeneratedQuiz] = useState<QuizCardData[] | null>(
    null
  );

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
    <div className="flex w-full flex-col items-center gap-8">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold">AI Quiz Generator</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Provide a topic or story, and our AI will create an engaging,
          gamified quiz to test knowledge.
        </p>
      </div>

      <Card className="w-full max-w-2xl">
        <CardContent className="space-y-4 p-6">
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
          <Button
            onClick={handleGenerate}
            disabled={isLoading || !storyText.trim()}
            className="w-full"
            size="lg"
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="mr-2 h-4 w-4" />
            )}
            {isLoading ? 'Generating Quiz...' : 'Generate Interactive Quiz'}
          </Button>
        </CardContent>
      </Card>

      <div className="w-full">
        {isLoading && (
          <div className="space-y-4 py-12 text-center text-muted-foreground">
            <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
            <p className="font-semibold">AI is crafting your quiz...</p>
          </div>
        )}

        {generatedQuiz && (
          <div className="w-full">
            <h3 className="mb-4 text-center font-headline text-2xl font-bold">
              Your Interactive Quiz is Ready!
            </h3>
            <QuizCarousel quiz={generatedQuiz} />
          </div>
        )}

        {!isLoading && !generatedQuiz && (
          <div className="rounded-xl border-2 border-dashed py-12 text-center text-muted-foreground">
            <Puzzle className="mx-auto mb-4 h-12 w-12" />
            <p className="font-semibold">Your generated quiz will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizGenerator;

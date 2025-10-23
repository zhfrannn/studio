'use client';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { FileText, Loader2, Sparkles, Gamepad2 } from 'lucide-react';
import { generateMiniGame } from '@/ai/flows/generate-minigame';
import MiniGameEngine from './minigame-engine';
import { type GameScenario } from '@/lib/minigame-scenarios';
import { useLanguage } from '@/context/language-context';

const MiniGameGenerator = () => {
  const [topic, setTopic] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedGame, setGeneratedGame] = useState<GameScenario | null>(null);
  const { dictionary } = useLanguage();
  const dict = dictionary.eduboard;

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setIsLoading(true);
    setGeneratedGame(null);
    try {
      const result = await generateMiniGame({ topic });
      setGeneratedGame(result);
    } catch (error) {
      console.error('Mini-game generation failed:', error);
      // Optionally, set an error state to show in the UI
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full flex-col items-center gap-8">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold">
          AI Mini-Game Generator
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          {dict.minigameDescription}
        </p>
      </div>

      <Card className="w-full max-w-2xl">
        <CardContent className="space-y-4 p-6">
          <div className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-bold">Your Game Topic</h3>
          </div>
          <Textarea
            placeholder="e.g., 'An earthquake strikes while you are in a mall' or 'What to do during a flash flood'."
            className="h-32 resize-y"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            disabled={isLoading}
          />
          <Button
            onClick={handleGenerate}
            disabled={isLoading || !topic.trim()}
            className="w-full"
            size="lg"
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="mr-2 h-4 w-4" />
            )}
            {isLoading ? 'Generating Game...' : 'Generate Mini-Game'}
          </Button>
        </CardContent>
      </Card>

      <div className="w-full">
        {isLoading && (
          <div className="space-y-4 py-12 text-center text-muted-foreground">
            <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
            <p className="font-semibold">
              AI is designing your interactive game scenario...
            </p>
          </div>
        )}

        {generatedGame && (
          <div className="w-full">
            <MiniGameEngine scenario={generatedGame} />
          </div>
        )}

        {!isLoading && !generatedGame && (
          <div className="rounded-xl border-2 border-dashed py-12 text-center text-muted-foreground">
            <Gamepad2 className="mx-auto mb-4 h-12 w-12" />
            <p className="font-semibold">
              Your generated game will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MiniGameGenerator;

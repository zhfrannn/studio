
'use client';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { FileText, Loader2, Sparkles, Presentation } from 'lucide-react';
import {
  generateSlides,
  type GenerateSlidesOutput,
} from '@/ai/flows/generate-slides';
import SlideCarousel from '@/components/slide-carousel';
import { type Slide } from '@/lib/eduboard-templates';
import { useLanguage } from '@/context/language-context';

const imagePlaceholders = [
    'https://cdn.dribbble.com/userupload/26382361/file/original-a94049296846fa5218859ac34ea57b23.png',
    'https://cdn.dribbble.com/userupload/27796411/file/original-992aa78e02707e86da76830a224a2f2d.png',
    'https://cdn.dribbble.com/userupload/32247153/file/original-1fe677ceff3cabb6bf2037dc808ace4d.jpg',
    'https://cdn.dribbble.com/userupload/16865134/file/original-ac6d283eaa706824abed43da7e901dd2.jpeg',
    'https://cdn.dribbble.com/userupload/16865092/file/original-286765ae0de4074597bfb6584a571c60.jpeg',
    'https://cdn.dribbble.com/userupload/32707329/file/original-01992760209b192c3d12d849dc7ee6d4.jpeg',
    'https://cdn.dribbble.com/userupload/13448080/file/original-e275af77b98be7d7d015e61704339958.png',
    'https://cdn.dribbble.com/userupload/29829998/file/original-94b1514fe3d528f62a84cf250c5efc1f.png',
];


const PresentationGenerator = () => {
  const [storyText, setStoryText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedSlides, setGeneratedSlides] = useState<Slide[] | null>(null);
  const { dictionary } = useLanguage();
  const dict = dictionary.eduboard;


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
        imageUrl: imagePlaceholders[index % imagePlaceholders.length],
        themeColor: `oklch(60% 0.15 ${200 + index * 20})`, // Varying color
        metadata: {
          source: slide.imagePrompt,
          author: slide.metadata?.author,
        },
      }));
      setGeneratedSlides(formattedSlides);
    } catch (error) {
      console.error('Slide generation failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full flex-col items-center gap-8">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold">
          AI Presentation Generator
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Provide your story, and the AI will structure it into an 8-slide
          presentation, complete with titles, content, and image ideas.
        </p>
      </div>

      <Card className="w-full max-w-2xl">
        <CardContent className="space-y-4 p-6">
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
            {isLoading ? 'Generating Slides...' : 'Generate Presentation'}
          </Button>
        </CardContent>
      </Card>

      <div className="w-full">
        {isLoading && (
          <div className="space-y-4 py-12 text-center text-muted-foreground">
            <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
            <p className="font-semibold">AI is crafting your presentation...</p>
          </div>
        )}

        {generatedSlides && (
          <div className="w-full">
            <h3 className="mb-4 text-center font-headline text-2xl font-bold">
              {dict.slidePreviewTitle}
            </h3>
            <SlideCarousel slides={generatedSlides} />
          </div>
        )}

        {!isLoading && !generatedSlides && (
          <div className="rounded-xl border-2 border-dashed py-12 text-center text-muted-foreground">
            <Presentation className="mx-auto mb-4 h-12 w-12" />
            <p className="font-semibold">Your generated slides will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default PresentationGenerator;

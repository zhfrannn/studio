
'use client';

import { useState } from 'react';
import {
  printableContentTemplate,
  type PrintableContentData,
} from '@/lib/eduboard-templates';
import { Card } from '@/components/ui/card';
import {
  AlertTriangle,
  BookCopy,
  CheckCircle,
  GanttChartSquare,
  Goal,
  HeartHandshake,
  Info,
  Lightbulb,
  ListChecks,
  Quote,
  ShieldAlert,
  Sparkles,
  Target,
  QrCode,
  FileText,
  Loader2,
  Waves,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import WaveMascot from './icons/wave-mascot';
import { useLanguage } from '@/context/language-context';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  generateInfographic,
  type GenerateInfographicOutput,
} from '@/ai/flows/generate-infographic';
import MotionWrapper from './motion-wrapper';

const iconMapping: { [key: string]: React.ElementType } = {
  Lightbulb,
  Sparkles,
  AlertTriangle,
  Goal,
  Target,
  ListChecks,
  CheckCircle,
  Quote,
  HeartHandshake,
  BookCopy,
  Info,
  GanttChartSquare,
  ShieldAlert,
  Waves,
};

const PrintableA4 = ({ data }: { data: PrintableContentData }) => {
  const MainIcon = iconMapping[data.mainIcon] || ShieldAlert;
  const { dictionary } = useLanguage();
  const dict = dictionary.eduboard;
  return (
    <Card className="aspect-[210/297] w-full overflow-hidden border-2 shadow-2xl">
      <div className="flex h-full flex-col bg-background p-8">
        <header
          className="border-b-4 pb-6 text-center"
          style={{ borderColor: data.themeColor }}
        >
          <MainIcon
            className="mx-auto mb-4 h-16 w-16"
            style={{ color: data.themeColor }}
          />
          <h1
            className="font-headline text-4xl"
            style={{ color: data.themeColor }}
          >
            {data.mainTitle}
          </h1>
        </header>

        <main className="grid flex-grow grid-cols-3 gap-6 py-6">
          <div className="col-span-2 space-y-6">
            <section>
              <h2 className="font-headline text-2xl mb-2">{data.intro.title}</h2>
              <p className="text-sm text-muted-foreground">{data.intro.text}</p>
            </section>
            <div className="grid grid-cols-2 gap-4">
              {data.sections.map((section, index) => {
                const SectionIcon = iconMapping[section.icon];
                return (
                  <section key={index}>
                    <h3
                      className="mb-2 flex items-center gap-2 font-semibold text-lg"
                      style={{ color: data.themeColor }}
                    >
                      <SectionIcon className="h-5 w-5" />
                      {section.title}
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {section.points.map((point, pIndex) => (
                        <li key={pIndex}>{point}</li>
                      ))}
                    </ul>
                  </section>
                );
              })}
            </div>
          </div>

          <aside className="col-span-1 flex flex-col justify-between rounded-lg bg-muted p-4">
            <section>
              <h3
                className="mb-2 flex items-center gap-2 font-semibold text-lg"
                style={{ color: data.themeColor }}
              >
                <BookCopy className="h-5 w-5" />
                Local Wisdom
              </h3>
              <blockquote
                className="border-l-4 pl-4 italic"
                style={{ borderColor: data.themeColor }}
              >
                <p className="text-sm">"{data.quote.text}"</p>
                <cite className="mt-2 block text-right text-xs not-italic text-muted-foreground">
                  - {data.quote.author}
                </cite>
              </blockquote>
            </section>
            <section className="text-center">
              <h3 className="font-semibold text-lg mb-2">{dict.learnMore}</h3>
              <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-lg bg-gray-200">
                <QrCode className="h-24 w-24 text-gray-400" />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                {dict.scanQr}
              </p>
            </section>
          </aside>
        </main>

        <footer
          className="flex items-center justify-between border-t pt-4"
          style={{ borderColor: data.themeColor }}
        >
          <div className="flex items-center gap-2">
            <WaveMascot className="h-8 w-8" style={{ color: data.themeColor }} />
            <span className="font-headline text-lg">Wave of Voice</span>
          </div>
          <p className="text-xs text-muted-foreground">waveofvoice.com</p>
        </footer>
      </div>
    </Card>
  );
};

export default function PrintableContent() {
  const [topic, setTopic] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedContent, setGeneratedContent] =
    useState<PrintableContentData | null>(null);

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setIsLoading(true);
    setGeneratedContent(null);
    try {
      const result: GenerateInfographicOutput = await generateInfographic({
        topic,
      });
      // Set default values here if they are missing from the AI response
      const finalContent: PrintableContentData = {
        ...result,
        id: result.id || 'ai-printable-01',
        layout: 'printable-a4',
        themeColor: result.themeColor || 'oklch(55% 0.15 240)',
        qrCodeUrl: result.qrCodeUrl || 'https://waveofvoice.com',
      };
      setGeneratedContent(finalContent);
    } catch (error) {
      console.error('Infographic generation failed:', error);
      // Optionally set an error state here to show in the UI
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold">
          AI Infographic Generator
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Enter a topic, and the AI will create a print-ready, A4 infographic
          packed with structured information.
        </p>
      </div>

      <Card className="w-full max-w-2xl">
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-bold">Your Topic</h3>
          </div>
          <Textarea
            placeholder="e.g., 'The science behind tsunamis and the Smong legend' or 'How community kitchens build peace'."
            className="h-24 resize-y"
            value={topic}
            onChange={e => setTopic(e.target.value)}
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
            {isLoading
              ? 'Generating Infographic...'
              : 'Generate A4 Infographic'}
          </Button>
        </div>
      </Card>

      <div className="w-full max-w-4xl">
        {isLoading && (
          <div className="space-y-4 py-12 text-center text-muted-foreground">
            <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
            <p className="font-semibold">AI is designing your infographic...</p>
          </div>
        )}

        <MotionWrapper>
          {generatedContent && <PrintableA4 data={generatedContent} />}
        </MotionWrapper>

        {!isLoading && !generatedContent && (
          <div className="py-12">
            <PrintableA4 data={printableContentTemplate} />
          </div>
        )}
      </div>
    </div>
  );
}

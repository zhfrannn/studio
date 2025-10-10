'use client';

import { printableContentTemplate } from '@/lib/eduboard-templates';
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
} from 'lucide-react';
import { cn } from '@/lib/utils';
import WaveMascot from './icons/wave-mascot';

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
};

export default function PrintableContent() {
  const data = printableContentTemplate;
  const MainIcon = iconMapping[data.mainIcon] || ShieldAlert;

  const headerStyle = {
    backgroundColor: data.themeColor,
    color: 'white',
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
        <div className="mb-8 text-center">
            <h1 className="font-headline text-3xl md:text-4xl">
            Pratinjau Konten Printable (A4)
            </h1>
            <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                Ini adalah pratinjau bagaimana infografis akan terlihat. Konten ini dirancang untuk dicetak dalam kertas ukuran A4.
            </p>
      </div>

    <Card className="w-full aspect-[210/297] mx-auto shadow-2xl border-2 overflow-hidden">
      <div className="flex flex-col h-full bg-background p-8">
        {/* Header */}
        <header className="text-center pb-6 border-b-4" style={{ borderColor: data.themeColor }}>
          <MainIcon className="mx-auto h-16 w-16 mb-4" style={{ color: data.themeColor }}/>
          <h1 className="font-headline text-4xl" style={{ color: data.themeColor }}>{data.mainTitle}</h1>
        </header>

        {/* Main Content */}
        <main className="flex-grow grid grid-cols-3 gap-6 py-6">
          {/* Left Column */}
          <div className="col-span-2 space-y-6">
            <section>
              <h2 className="font-headline text-2xl mb-2">{data.intro.title}</h2>
              <p className="text-muted-foreground text-sm">{data.intro.text}</p>
            </section>
            <div className="grid grid-cols-2 gap-4">
              {data.sections.map((section, index) => {
                const SectionIcon = iconMapping[section.icon];
                return (
                  <section key={index}>
                    <h3 className="font-semibold text-lg flex items-center gap-2 mb-2" style={{ color: data.themeColor }}>
                      <SectionIcon className="h-5 w-5"/>
                      {section.title}
                    </h3>
                    <ul className="space-y-1 list-disc list-inside text-sm text-muted-foreground">
                      {section.points.map((point, pIndex) => (
                        <li key={pIndex}>{point}</li>
                      ))}
                    </ul>
                  </section>
                )
              })}
            </div>
          </div>

          {/* Right Column (Sidebar) */}
          <aside className="col-span-1 bg-muted rounded-lg p-4 flex flex-col justify-between">
            <section>
                <h3 className="font-semibold text-lg flex items-center gap-2 mb-2" style={{ color: data.themeColor }}>
                    <BookCopy className="h-5 w-5"/>
                    Kearifan Lokal
                </h3>
                <blockquote className="border-l-4 pl-4 italic" style={{ borderColor: data.themeColor }}>
                    <p className="text-sm">"{data.quote.text}"</p>
                    <cite className="text-xs text-muted-foreground not-italic block mt-2 text-right">- {data.quote.author}</cite>
                </blockquote>
            </section>
            <section className="text-center">
                <h3 className="font-semibold text-lg mb-2">Pelajari Lebih Lanjut</h3>
                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
                  <QrCode className="h-24 w-24 text-gray-400"/>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Pindai QR Code untuk mengakses semua cerita dan konten interaktif.</p>
            </section>
          </aside>
        </main>

        {/* Footer */}
        <footer className="pt-4 border-t text-center flex justify-between items-center" style={{ borderColor: data.themeColor }}>
            <div className="flex items-center gap-2">
                <WaveMascot className="h-8 w-8" style={{ color: data.themeColor }}/>
                <span className="font-headline text-lg">Wave of Voice</span>
            </div>
            <p className="text-xs text-muted-foreground">waveofvoice.com</p>
        </footer>
      </div>
    </Card>
    </div>
  );
}

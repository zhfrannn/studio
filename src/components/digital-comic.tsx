'use client';

import {
  Card,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { BookOpenText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Comic } from '@/lib/interactive-content';

interface DigitalComicProps {
  comic: Comic;
}

export default function DigitalComic({ comic }: DigitalComicProps) {
  return (
    <section>
      <div className="mb-8 text-center">
        <h2 className="mb-2 flex items-center justify-center gap-3 font-headline text-3xl font-bold">
          <BookOpenText /> {comic.title}
        </h2>
        <p className="text-muted-foreground">{comic.description}</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {comic.panels.map((panel, index) => (
          <Card key={index} className="flex flex-col overflow-hidden">
            <CardContent
              className={cn(
                'flex flex-grow flex-col items-center justify-center p-6 text-center',
                panel.textColor
              )}
            >
              <div
                className={cn(
                  'flex h-48 w-full flex-col items-center justify-center rounded-lg bg-gradient-to-br p-4',
                  panel.gradient
                )}
              >
                {/* We will need a way to dynamically render icons */}
                <div
                  dangerouslySetInnerHTML={{ __html: panel.iconSvg || '' }}
                  className="h-10 w-10"
                />
                <h3 className="mt-4 font-semibold">{panel.title}</h3>
              </div>
            </CardContent>
            <CardFooter
              className={cn(
                'flex min-h-[70px] items-center justify-center p-4 pt-0',
                panel.textColor
              )}
            >
              <p
                className={cn(
                  'rounded-lg bg-white/60 p-2 text-center text-xs dark:bg-black/20',
                  panel.textColor
                )}
              >
                {panel.quote}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

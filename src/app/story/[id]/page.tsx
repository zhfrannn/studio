import { notFound } from 'next/navigation';
import { stories } from '@/lib/data';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  BookOpenText,
  Calendar,
  Waves,
  Mountain,
  Siren,
  User,
  Trees,
  PersonStanding,
  Puzzle,
  PlayCircle,
  Info,
  ChevronsUp,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const comicData = [
  {
    icon: <Trees className="h-10 w-10" />,
    title: 'Under the Banyan Tree',
    quote:
      '“Grandmother taught us the ancient warnings under the old banyan tree...”',
    gradient: 'from-green-200 to-green-100 dark:from-green-900/70 dark:to-green-800/70',
    textColor: 'text-green-800 dark:text-green-200',
  },
  {
    icon: <Waves className="h-10 w-10" />,
    title: 'Reading the Sea',
    quote: '“The sea is like a person with moods - learn to read its signs...”',
    gradient: 'from-blue-200 to-blue-100 dark:from-blue-900/70 dark:to-blue-800/70',
    textColor: 'text-blue-800 dark:text-blue-200',
  },
  {
    icon: <Siren className="h-10 w-10" />,
    title: 'The Warning Signs',
    quote: '“When the earth shakes and the sea retreats...”',
    gradient: 'from-red-200 to-red-100 dark:from-red-900/70 dark:to-red-800/70',
    textColor: 'text-red-800 dark:text-red-200',
  },
  {
    icon: <ChevronsUp className="h-10 w-10" />,
    title: 'Run to the Hills!',
    quote: '“Don’t think, don’t pack - just run to high ground!”',
    gradient:
      'from-yellow-200 to-yellow-100 dark:from-yellow-900/70 dark:to-yellow-800/70',
    textColor: 'text-yellow-800 dark:text-yellow-200',
  },
  {
    icon: <Mountain className="h-10 w-10" />,
    title: 'Safe on High Ground',
    quote: '“Stay until the sea has been calm for many hours...”',
    gradient:
      'from-purple-200 to-purple-100 dark:from-purple-900/70 dark:to-purple-800/70',
    textColor: 'text-purple-800 dark:text-purple-200',
  },
  {
    icon: <PersonStanding className="h-10 w-10" />,
    title: 'Passing It On',
    quote: '“Now I teach the next generation the wisdom of Smong...”',
    gradient:
      'from-indigo-200 to-indigo-100 dark:from-indigo-900/70 dark:to-indigo-800/70',
    textColor: 'text-indigo-800 dark:text-indigo-200',
  },
];


export default function StoryDetailPage({ params }: { params: { id: string } }) {
  const story = stories.find(s => s.id === params.id);

  if (!story) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="font-headline text-4xl text-foreground md:text-5xl">
            {story.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{story.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{story.location.name}</span>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {story.aiThemes.map(theme => (
              <Badge key={theme} variant="default">
                {theme}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-16">
          <section>
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <PlayCircle className="h-8 w-8 flex-shrink-0 text-yellow-500" />
                  <div>
                    <CardTitle className="text-2xl">
                      Video Edukasi: Sistem Pengetahuan Tradisional
                    </CardTitle>
                    <CardDescription>
                      Temukan bagaimana sistem pengetahuan adat melengkapi ilmu
                      pengetahuan modern dalam kesiapsiagaan bencana.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-6 pt-0">
                {story.id === 'smong-selamat-dari-lautan' ? (
                  <div
                    className="relative w-full overflow-hidden rounded-lg"
                    style={{
                      paddingTop: '56.25%',
                      boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                    }}
                  >
                    <iframe
                      loading="lazy"
                      className="absolute top-0 left-0 h-full w-full border-0"
                      src="https://www.canva.com/design/DAGy2A4uKKg/oKxoc_2wvJT-q7amzHQQWA/watch?embed"
                      allowFullScreen
                      allow="fullscreen"
                    ></iframe>
                  </div>
                ) : (
                  <div className="flex aspect-video items-center justify-center rounded-lg bg-muted">
                    <p className="text-muted-foreground">
                      Video player placeholder
                    </p>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <div className="flex w-full items-start gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
                  <Info className="h-5 w-5 flex-shrink-0 text-yellow-600 dark:text-yellow-400" />
                  <p className="text-sm text-yellow-800 dark:text-yellow-300">
                    Video ini mengeksplorasi bagaimana sistem pengetahuan
                    tradisional seperti Smong bekerja bersama sistem peringatan
                    dini modern untuk melindungi masyarakat.
                  </p>
                </div>
              </CardFooter>
            </Card>
          </section>

          <section>
            <div className="mb-8 text-center">
              <h2 className="mb-2 flex items-center justify-center gap-3 font-headline text-3xl">
                <BookOpenText /> Digital Comic: The Wisdom of Smong
              </h2>
              <p className="text-muted-foreground">
                See how traditional knowledge passes from generation to
                generation
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {comicData.map((panel, index) => (
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
                      {panel.icon}
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

          <section>
            <h2 className="mb-4 flex items-center gap-2 font-headline text-2xl">
              <BookOpenText /> Narasi Lengkap
            </h2>
            <Card>
              <CardContent className="p-6">
                <div className="prose prose-slate max-w-none dark:prose-invert">
                  <p className="text-lg leading-relaxed text-foreground">
                    {story.fullText}
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-2 font-headline text-2xl">
              <Puzzle /> Kuis Interaktif
            </h2>
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">
                  Placeholder for a gamified quiz to test understanding.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}

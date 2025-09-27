import { notFound } from 'next/navigation';
import { stories } from '@/lib/data';
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
  User,
  PlayCircle,
  Info,
  Puzzle,
} from 'lucide-react';
import InteractiveQuiz from '@/components/interactive-quiz';
import {
  interactiveContent,
  InteractiveContent,
} from '@/lib/interactive-content';
import DigitalComic from '@/components/digital-comic';

export default function StoryDetailPage({ params }: { params: { id: string } }) {
  const story = stories.find(s => s.id === params.id);
  const content: InteractiveContent | undefined = interactiveContent[params.id];

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
                      {content?.video.title || 'Video Edukasi'}
                    </CardTitle>
                    <CardDescription>
                      {content?.video.description ||
                        'Temukan pelajaran berharga dari kisah ini melalui format video.'}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-6 pt-0">
                {content?.video.embedUrl ? (
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
                      src={content.video.embedUrl}
                      allowFullScreen
                      allow="fullscreen"
                    ></iframe>
                  </div>
                ) : (
                  <div className="flex aspect-video items-center justify-center rounded-lg bg-muted">
                    <p className="text-muted-foreground">
                      Video untuk cerita ini akan segera hadir.
                    </p>
                  </div>
                )}
              </CardContent>
              {content?.video.info && (
                <CardFooter>
                  <div className="flex w-full items-start gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
                    <Info className="h-5 w-5 flex-shrink-0 text-yellow-600 dark:text-yellow-400" />
                    <p className="text-sm text-yellow-800 dark:text-yellow-300">
                      {content.video.info}
                    </p>
                  </div>
                </CardFooter>
              )}
            </Card>
          </section>

          {content?.comic ? (
            <DigitalComic comic={content.comic} />
          ) : (
            <section>
              <div className="mb-8 text-center">
                <h2 className="mb-2 flex items-center justify-center gap-3 font-headline text-3xl">
                  <BookOpenText /> Komik Digital
                </h2>
                <p className="text-muted-foreground">
                  Komik digital untuk cerita ini akan segera hadir.
                </p>
              </div>
            </section>
          )}

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
            {content?.quiz ? (
              <InteractiveQuiz quiz={content.quiz} />
            ) : (
              <>
                <h2 className="mb-4 flex items-center gap-2 font-headline text-2xl">
                  <Puzzle /> Kuis Interaktif
                </h2>
                <Card>
                  <CardContent className="p-6 text-center">
                    <p className="text-muted-foreground">
                      Kuis untuk cerita ini akan segera hadir.
                    </p>
                  </CardContent>
                </Card>
              </>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

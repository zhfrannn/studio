import { notFound } from 'next/navigation';
import { stories } from '@/lib/data';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Film, BookText, Puzzle, Calendar, User } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

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

        <div className="space-y-12">
          <section>
            <h2 className="mb-4 flex items-center gap-2 font-headline text-2xl">
              <Film /> Video Edukasi
            </h2>
            <Card>
              <CardContent className="p-2">
                {story.id === 'smong-selamat-dari-lautan' ? (
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: 0,
                      paddingTop: '56.2500%',
                      paddingBottom: 0,
                      boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                      overflow: 'hidden',
                      borderRadius: '8px',
                    }}
                  >
                    <iframe
                      loading="lazy"
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                        border: 'none',
                        padding: 0,
                        margin: 0,
                      }}
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
            </Card>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-2 font-headline text-2xl">
              <BookText /> Narasi Lengkap
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
              <BookText /> Komik Digital
            </h2>
            <Card>
              <CardContent className="p-6">
                <Carousel className="w-full">
                  <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <CarouselItem key={index}>
                        <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                          <Image
                            src={`https://picsum.photos/seed/${story.id}-${index}/800/450`}
                            alt={`Comic page ${index + 1}`}
                            fill
                            className="object-cover"
                            data-ai-hint="comic illustration"
                          />
                          <div className="absolute bottom-2 right-2 rounded-md bg-background/80 px-2 py-1 text-xs text-foreground">
                            Page {index + 1}
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden sm:flex" />
                  <CarouselNext className="hidden sm:flex" />
                </Carousel>
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

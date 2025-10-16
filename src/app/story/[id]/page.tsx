
'use client';

import { notFound } from 'next/navigation';
import { stories as staticStories, getTranslatedStories } from '@/lib/data';
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
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import InteractiveQuiz from '@/components/interactive-quiz';
import {
  getInteractiveContent,
  InteractiveContent,
} from '@/lib/interactive-content';
import MotionWrapper from '@/components/motion-wrapper';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { useLanguage } from '@/context/language-context';
import type { Story } from '@/lib/types';
import DigitalComic from '@/components/digital-comic';
import Link from 'next/link';
import Image from 'next/image';
import RelatedStoryCarousel from '@/components/related-story-carousel';

export default function StoryDetailPage({ params }: { params: { id: string } }) {
  const { language, dictionary } = useLanguage();
  const allStories = getTranslatedStories({ lang: language });

  const story = allStories.find(s => s.id === params.id);
  
  if (!story) {
    notFound();
  }
  
  const interactiveContent = getInteractiveContent(dictionary);
  const content: InteractiveContent | undefined = interactiveContent[params.id];

  const otherStories = allStories
    .filter(s => s.id !== story.id);
    

  return (
    <>
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl rounded-2xl">
        <MotionWrapper>
          <div className="mb-8">
            <h1 className="font-headline text-4xl font-bold text-foreground md:text-5xl">
              {story.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{story.author}</span>
              </div>
              {story.location && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{story.location?.name}</span>
                </div>
              )}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {story.aiThemes.map(theme => (
                <Badge key={theme} variant="default">
                  {theme}
                </Badge>
              ))}
            </div>
          </div>
        </MotionWrapper>

        <div className="space-y-16">
          <MotionWrapper as="section" delay={0.1}>
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <PlayCircle className="h-8 w-8 flex-shrink-0 text-yellow-500" />
                  <div>
                    <CardTitle className="text-2xl font-bold">
                      {content?.video.title}
                    </CardTitle>
                    <CardDescription>
                      {content?.video.description}
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
                      A video for this story is coming soon.
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
          </MotionWrapper>

          {content?.comic && (
            <MotionWrapper as="section" delay={0.2}>
              <DigitalComic comic={content.comic} />
            </MotionWrapper>
          )}

          <MotionWrapper as="section" delay={0.3}>
            <h2 className="mb-4 flex items-center gap-2 font-headline text-2xl font-bold">
              <BookOpenText /> {dictionary.storyDetail.fullNarrative}
            </h2>
            <Card>
              <CardContent className="p-6">
                <div className="prose prose-slate max-w-none dark:prose-invert">
                  <ScrollReveal textClassName="leading-relaxed text-foreground whitespace-pre-line">
                    {story.fullText}
                  </ScrollReveal>
                </div>
              </CardContent>
            </Card>
          </MotionWrapper>

          <MotionWrapper as="section" delay={0.4}>
            {content?.quiz ? (
              <InteractiveQuiz quiz={content.quiz} />
            ) : (
              <>
                <h2 className="mb-4 flex items-center gap-2 font-headline text-2xl font-bold">
                  <Puzzle /> {dictionary.storyDetail.interactiveQuiz}
                </h2>
                <Card>
                  <CardContent className="p-6 text-center">
                    <p className="text-muted-foreground">
                      {dictionary.storyDetail.quizComingSoon}
                    </p>
                  </CardContent>
                </Card>
              </>
            )}
          </MotionWrapper>
        </div>
      </div>
    </div>
     {/* Quick Access to Other Stories Section */}
     <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-headline text-3xl font-bold">
            {dictionary.storyDetail.otherStories}
          </h2>
          <RelatedStoryCarousel stories={otherStories} />
        </div>
      </section>
    </>
  );
}

    
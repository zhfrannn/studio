'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import StoryCard from '@/components/story-card';
import { stories as staticStories } from '@/lib/data';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Lightbulb,
  MessageCircle,
  CheckCircle,
  Film,
  RefreshCw,
  Download,
  Play,
  Share2,
  Puzzle,
  Star,
  Rocket,
  ChevronsRight,
  Sparkles,
  ArrowUpLeft,
} from 'lucide-react';
import InteractiveMap from '@/components/interactive-map';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import ShareStoryForm from '@/components/share-story-form';
import { Separator } from '@/components/ui/separator';
import MotionWrapper from '@/components/motion-wrapper';
import SplitText from '@/components/ui/split-text';
import LogoLoop from '@/components/ui/logo-loop';
import { useLanguage } from '@/context/language-context';
import type { Story } from '@/lib/types';


export default function Home() {
  const { dictionary } = useLanguage();
  const homeDict = dictionary.home;

  const allStories: Story[] = staticStories.map(story => {
    const translatedContent = dictionary.stories[story.id as keyof typeof dictionary.stories];
    return {
      ...story,
      ...translatedContent
    };
  });

  const featuredStory = allStories[0];
  const thumbStories = allStories.slice(0, 6);

  return (
    <div className="space-y-16 pb-24 md:space-y-24">
      <section role="region" aria-labelledby="hero-title">
        <div className="hero-v2-card">
          <Image
            src="https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Abstract blue water pattern"
            fill
            className="object-cover opacity-70"
            data-ai-hint="abstract blue water"
            priority
          />
          <div className="hero-v2-content">
            <div aria-label="Highlight" className="hero-v2-pill">
              <Sparkles className="h-5 w-5" />
              <span>{homeDict.hero.pill}</span>
            </div>
            <h1 id="hero-title" className="hero-v2-title">
              {homeDict.hero.title}
            </h1>
            <p className="hero-v2-desc">{homeDict.hero.description}</p>

            <div aria-label="Story previews" className="hero-v2-thumbs">
              {thumbStories.map((story, i) => (
                <figure key={story.id} className="contents">
                  <Image
                    src={story.media.featuredImage}
                    alt={story.title}
                    width={360}
                    height={480}
                    className="hero-v2-thumb"
                    data-ai-hint={story.media.featuredImageHint}
                  />
                </figure>
              ))}
            </div>

            <div className="hero-v2-cta flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="/explore">
                  <Rocket className="mr-2 h-5 w-5" />
                  {homeDict.hero.ctaExplore}
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/share-story">
                  <Share2 className="mr-2 h-5 w-5" />
                  {homeDict.hero.ctaShare}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <MotionWrapper
        as="section"
        className="container mx-auto px-4 rounded-2xl"
      >
        <div className="mx-auto mb-12 max-w-3xl space-y-2 text-center">
          <SplitText
            text={homeDict.howItWorks.title}
            className="font-headline text-3xl md:text-4xl"
          />
          <p className="text-muted-foreground">
            {homeDict.howItWorks.description}
          </p>
        </div>
        <div className="grid gap-8 text-left md:grid-cols-3">
          <MotionWrapper delay={0.1}>
            <Card className="rounded-2xl">
              <CardHeader className="flex-row items-start gap-4 space-y-0">
                <div className="rounded-lg bg-blue-100 p-3 dark:bg-blue-900/30">
                  <MessageCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="space-y-1">
                  <CardTitle className="text-lg">
                    {homeDict.howItWorks.step1.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {homeDict.howItWorks.step1.description}
                </p>
              </CardContent>
            </Card>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <Card className="rounded-2xl">
              <CardHeader className="flex-row items-start gap-4 space-y-0">
                <div className="rounded-lg bg-green-100 p-3 dark:bg-green-900/30">
                  <Lightbulb className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="space-y-1">
                  <CardTitle className="text-lg">
                    {homeDict.howItWorks.step2.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {homeDict.howItWorks.step2.description}
                </p>
              </CardContent>
            </Card>
          </MotionWrapper>
          <MotionWrapper delay={0.3}>
            <Card className="rounded-2xl">
              <CardHeader className="flex-row items-start gap-4 space-y-0">
                <div className="rounded-lg bg-purple-100 p-3 dark:bg-purple-900/30">
                  <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="space-y-1">
                  <CardTitle className="text-lg">
                    {homeDict.howItWorks.step3.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {homeDict.howItWorks.step3.description}
                </p>
              </CardContent>
            </Card>
          </MotionWrapper>
        </div>
      </MotionWrapper>

      <MotionWrapper
        as="section"
        className="container mx-auto px-4 rounded-2xl"
      >
        <div className="overflow-hidden rounded-2xl border bg-card shadow-lg">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="space-y-6 p-8 md:p-12">
              <SplitText
                text={homeDict.whyItMatters.title}
                className="font-headline text-3xl md:text-4xl"
              />
              <p className="text-muted-foreground">
                {homeDict.whyItMatters.description}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                  <p className="text-muted-foreground">
                    {homeDict.whyItMatters.point1}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                  <p className="text-muted-foreground">
                    {homeDict.whyItMatters.point2}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                  <p className="text-muted-foreground">
                    {homeDict.whyItMatters.point3}
                  </p>
                </li>
              </ul>
            </div>
            <div className="relative min-h-[300px] md:min-h-full">
              <Image
                src="https://picsum.photos/seed/why-matters/800/600"
                alt="Community gathering discussing disaster preparedness"
                fill
                className="object-cover"
                data-ai-hint="community gathering"
              />
            </div>
          </div>
        </div>
      </MotionWrapper>

      <MotionWrapper
        as="section"
        className="container mx-auto space-y-12 px-4 rounded-2xl"
      >
        <div className="mx-auto max-w-2xl space-y-2 text-center">
          <SplitText
            text={homeDict.exploreStories.title}
            className="font-headline text-3xl md:text-4xl"
          />
          <p className="text-muted-foreground">
            {homeDict.exploreStories.description}
          </p>
        </div>
        <div className="rounded-2xl border shadow-lg overflow-hidden">
          <div className="h-[500px] w-full">
            <InteractiveMap stories={allStories} />
          </div>
          <div className="border-t p-4 text-center">
            <p className="text-sm text-muted-foreground">
              {homeDict.exploreStories.mapCta}
            </p>
          </div>
        </div>

        <div>
          <SplitText
            text={homeDict.exploreStories.featuredTitle}
            className="mb-8 text-center font-headline text-2xl md:text-3xl"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allStories.slice(0, 3).map((story, i) => (
              <MotionWrapper key={story.id} delay={i * 0.1}>
                <StoryCard story={story} />
              </MotionWrapper>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/explore">
              {homeDict.exploreStories.loadMore} <ArrowRight />
            </Link>
          </Button>
        </div>
      </MotionWrapper>

      <MotionWrapper
        as="section"
        className="container mx-auto px-4 rounded-2xl"
      >
        <div className="mx-auto mb-12 max-w-3xl space-y-2 text-center">
          <SplitText
            text={homeDict.interactiveLearning.title}
            className="font-headline text-3xl md:text-4xl"
          />
          <p className="text-muted-foreground">
            {homeDict.interactiveLearning.description}
          </p>
        </div>

        <Card className="overflow-hidden rounded-2xl">
          <div className="grid md:grid-cols-2">
            <CardContent className="space-y-6 p-8 md:p-12">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Puzzle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-headline text-xl">
                    {homeDict.interactiveLearning.cardTitle}
                  </h3>
                  <p className="text-muted-foreground">
                    {homeDict.interactiveLearning.cardDescription}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">
                {homeDict.interactiveLearning.cardBody}
              </p>
              <Button asChild size="lg">
                <Link href="/interactive">
                  {homeDict.interactiveLearning.cta}
                  <ArrowRight />
                </Link>
              </Button>
            </CardContent>
            <div className="relative min-h-[300px] bg-muted/50 md:min-h-full">
              <Image
                src="https://picsum.photos/seed/interactive-hub/800/600"
                alt="Interactive Learning Hub Preview"
                fill
                className="object-cover"
                data-ai-hint="learning education"
              />
            </div>
          </div>
        </Card>
      </MotionWrapper>

      <MotionWrapper
        as="section"
        className="container mx-auto px-4 rounded-2xl"
      >
        <div className="relative overflow-hidden rounded-2xl bg-blue-600 text-white">
          <Image
            src="https://picsum.photos/seed/eduboard-bg/1200/400"
            alt="Abstract background for eduboard"
            fill
            className="object-cover opacity-20"
            data-ai-hint="abstract pattern"
          />
          <div className="relative grid items-center gap-8 p-12 md:grid-cols-2">
            <MotionWrapper className="space-y-4" delay={0.1}>
              <SplitText
                text={homeDict.eduboard.title}
                className="font-headline text-3xl md:text-4xl"
              />
              <p>{homeDict.eduboard.description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="secondary">{homeDict.eduboard.badge1}</Badge>
                <Badge variant="secondary">{homeDict.eduboard.badge2}</Badge>
                <Badge variant="secondary">{homeDict.eduboard.badge3}</Badge>
                <Badge variant="secondary">{homeDict.eduboard.badge4}</Badge>
              </div>
              <Button variant="secondary" asChild className="mt-4">
                <Link href="/eduboard">
                  {homeDict.eduboard.cta} <ArrowRight />
                </Link>
              </Button>
            </MotionWrapper>
            <MotionWrapper
              className="relative hidden h-64 md:block"
              delay={0.2}
            >
              <Image
                src="https://picsum.photos/seed/eduboard-main/500/400"
                alt="EduBoard visualization"
                fill
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint="information board"
              />
            </MotionWrapper>
          </div>
        </div>
      </MotionWrapper>

      <MotionWrapper
        as="section"
        id="share-story"
        className="container mx-auto px-4 rounded-2xl"
      >
        <div className="mx-auto mb-12 max-w-3xl space-y-2 text-center">
          <SplitText
            text={homeDict.shareStory.title}
            className="font-headline text-3xl md:text-4xl"
          />
          <p className="text-muted-foreground">
            {homeDict.shareStory.description}
          </p>
          <Button asChild size="lg">
            <Link href="/share-story">{homeDict.shareStory.cta}</Link>
          </Button>
        </div>
      </MotionWrapper>

      <MotionWrapper
        as="section"
        className="container mx-auto px-4 text-center rounded-2xl"
      >
        <Separator className="mx-auto mb-8 w-1/2" />
        <p className="font-semibold text-muted-foreground">
          {homeDict.supportedBy}
        </p>
        <LogoLoop>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/firebase-studio-bots.appspot.com/o/imagereader%2Fomni-studio-box%2F09a96f13-7eda-4d1a-ac5d-4f11e9f0868f?alt=media&token=e1f76d91-3720-4355-9017-802c0182834b"
            alt="Universitas Syiah Kuala Logo"
            width={120}
            height={120}
            className="h-20 w-auto"
          />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/firebase-studio-bots.appspot.com/o/imagereader%2Fomni-studio-box%2F09a96f13-7eda-4d1a-ac5d-4f11e9f0868f?alt=media&token=e1f76d91-3720-4355-9017-802c0182834b"
            alt="Universitas Syiah Kuala Logo"
            width={120}
            height={120}
            className="h-20 w-auto"
          />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/firebase-studio-bots-dev.appspot.com/o/imagereader%2Fomni-studio-box%2F1bc132b3-57a4-44a3-8a85-e11516e45f94?alt=media&token=40422c54-4740-424a-aa47-493a7a9a149c"
            alt="Universitas Syiah Kuala Logo"
            width={120}
            height={120}
            className="h-20 w-auto"
          />
        </LogoLoop>
      </MotionWrapper>
    </div>
  );
}


'use client';
import {
  Award,
  BookOpen,
  ClipboardList,
  Film,
  Plus,
  Puzzle,
  Trophy,
  Users,
  Coffee,
  ScrollText,
  ArrowRight,
  Newspaper,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { getInteractiveContent, getMasterQuiz } from '@/lib/interactive-content';
import Image from 'next/image';
import Link from 'next/link';
import WaveIcon from '@/components/icons/wave-icon';
import { cn } from '@/lib/utils';
import MotionWrapper from '@/components/motion-wrapper';
import InteractiveQuiz from '@/components/interactive-quiz';
import { useLanguage } from '@/context/language-context';
import { useStories } from '@/context/story-context';

const getThemeMeta = (theme: string) => {
  if (theme.includes('Disaster')) {
    return {
      icon: <WaveIcon className="h-12 w-12" />,
      color: 'bg-blue-100 dark:bg-blue-900/30',
      textColor: 'text-blue-600 dark:text-blue-400',
      buttonColor: 'bg-blue-500 hover:bg-blue-600',
      iconSmall: <WaveIcon className="h-5 w-5 text-blue-500" />,
    };
  }
  if (theme.includes('Peace')) {
    return {
      icon: <Users className="h-12 w-12" />,
      color: 'bg-green-100 dark:bg-green-900/30',
      textColor: 'text-green-600 dark:text-green-400',
      buttonColor: 'bg-green-500 hover:bg-green-600',
      iconSmall: <Users className="h-5 w-5 text-green-500" />,
    };
  }
  if (theme.includes('Wisdom')) {
    return {
      icon: <ScrollText className="h-12 w-12" />,
      color: 'bg-yellow-100 dark:bg-yellow-900/30',
      textColor: 'text-yellow-600 dark:text-yellow-400',
      buttonColor: 'bg-yellow-500 hover:bg-yellow-600',
      iconSmall: <ScrollText className="h-5 w-5 text-yellow-500" />,
    };
  }
  // Default
  return {
    icon: <BookOpen className="h-12 w-12" />,
    color: 'bg-gray-100 dark:bg-gray-900/30',
    textColor: 'text-gray-600 dark:text-gray-400',
    buttonColor: 'bg-gray-500 hover:bg-gray-600',
    iconSmall: <BookOpen className="h-5 w-5 text-gray-500" />,
  };
};

export default function InteractiveLearningHub() {
  const { dictionary } = useLanguage();
  const dict = dictionary.interactive;
  const { stories } = useStories();
  const interactiveContent = getInteractiveContent(dictionary);
  const masterQuiz = getMasterQuiz(dictionary);

  const leaderboardData = [
    { name: dict.tsunamiExpert, score: '30/30', rank: 1, initial: 'TE' },
    { name: dict.disasterPrepared, score: '28/30', rank: 2, initial: 'DP' },
    { name: dict.communityHelper, score: '25/30', rank: 3, initial: 'CH' },
    { name: dict.peaceBuilder, score: '23/30', rank: 4, initial: 'PB' },
    { name: dict.wisdomKeeper, score: '20/30', rank: 5, initial: 'WK' },
  ];

  const achievementBadges = [
    { name: dict.tsunamiBadge, icon: <BookOpen /> },
    { name: dict.communityBuilderBadge, icon: <Trophy /> },
    { name: dict.wisdomKeeperBadge, icon: <Award /> },
    { name: dict.peaceMakerBadge, icon: <Film /> },
    { name: dict.emergencyReadyBadge, icon: <ClipboardList /> },
    { name: dict.educatorBadge, icon: <BookOpen /> },
  ];

  const quickAccessStories = stories.slice(0, 5);
  const videosToShow = stories
    .filter(s => interactiveContent[s.id]?.video?.embedUrl)
    .slice(0, 2);
  const comicsToShow = stories
    .filter(s => interactiveContent[s.id]?.comic)
    .slice(0, 2);

  return (
    <div className="space-y-16 py-12 md:space-y-24">
      <MotionWrapper className="container mx-auto rounded-2xl px-4">
        <div className="mb-12 text-center">
          <h1 className="font-headline text-4xl font-bold md:text-5xl">
            {dict.title}
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            {dict.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-start">
          <main className="col-span-1 space-y-8 lg:col-span-2">
            {/* Master Quiz */}
            <MotionWrapper>
              <InteractiveQuiz quiz={masterQuiz} />
            </MotionWrapper>

            {/* Educational Videos */}
            <MotionWrapper as="section">
              <div className="mb-6">
                <h2 className="flex items-center gap-3 font-headline text-3xl font-bold">
                  <Film className="h-8 w-8 text-red-500" />
                  {dict.videosTitle}
                </h2>
                <p className="mt-1 text-muted-foreground">
                  {dict.videosDescription}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {videosToShow.map((story, i) => (
                  <MotionWrapper key={story.id} delay={i * 0.1}>
                    <Card className="overflow-hidden">
                      <div className="relative aspect-video bg-muted">
                        <Image
                          src={story.media.featuredImage}
                          alt={story.title}
                          fill
                          className="object-cover"
                          data-ai-hint={story.media.featuredImageHint}
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <Button
                            asChild
                            variant="ghost"
                            size="icon"
                            className="h-12 w-12 rounded-full bg-white/80 text-primary shadow-lg hover:bg-white"
                          >
                            <Link href={`/story/${story.id}`}>
                              <Film className="h-6 w-6" />
                            </Link>
                          </Button>
                        </div>
                        <Badge
                          variant="secondary"
                          className="absolute left-2 top-2"
                        >
                          {story.aiThemes[0]}
                        </Badge>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg font-bold">
                          {story.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          {story.summary}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter className="flex justify-between text-xs text-muted-foreground">
                        <p>5 min</p>
                        <Button variant="secondary" size="sm" asChild>
                          <Link href={`/story/${story.id}`}>{dict.watch}</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </MotionWrapper>
                ))}
                <MotionWrapper delay={0.2}>
                  <Card className="flex h-full min-h-[200px] flex-col items-center justify-center border-2 border-dashed bg-transparent p-6 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                      <Plus className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="mb-1 font-semibold">{dict.viewAllVideos}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Explore our complete collection of educational content
                    </p>
                    <Button variant="outline" asChild>
                      <Link href="/explore">{dict.exploreAll}</Link>
                    </Button>
                  </Card>
                </MotionWrapper>
              </div>
            </MotionWrapper>

            {/* Interactive Comics Section */}
            <MotionWrapper as="section">
              <div className="mb-6">
                <h2 className="flex items-center gap-3 font-headline text-3xl font-bold">
                  <Newspaper className="h-8 w-8 text-orange-500" />
                  {dict.comicsTitle}
                </h2>
                <p className="mt-1 text-muted-foreground">
                  {dict.comicsDescription}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {comicsToShow.map((story, i) => (
                  <MotionWrapper key={story.id} delay={i * 0.1}>
                    <Card className="overflow-hidden">
                      <div className="relative aspect-video bg-muted">
                        <Image
                          src={story.media.featuredImage}
                          alt={story.title}
                          fill
                          className="object-cover"
                          data-ai-hint={story.media.featuredImageHint}
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <Button
                            asChild
                            variant="ghost"
                            size="icon"
                            className="h-12 w-12 rounded-full bg-white/80 text-primary shadow-lg hover:bg-white"
                          >
                            <Link href={`/story/${story.id}`}>
                              <Newspaper className="h-6 w-6" />
                            </Link>
                          </Button>
                        </div>
                        <Badge
                          variant="secondary"
                          className="absolute left-2 top-2"
                        >
                          {story.aiThemes[0]}
                        </Badge>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg font-bold">
                          {story.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          {story.summary}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button
                          variant="secondary"
                          size="sm"
                          asChild
                          className="w-full"
                        >
                          <Link href={`/story/${story.id}`}>
                            {dict.readComic}
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </MotionWrapper>
                ))}
              </div>
            </MotionWrapper>
          </main>

          <aside className="col-span-1 space-y-8">
            {/* Leaderboard */}
            <MotionWrapper delay={0.1}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-bold">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    {dict.leaderboard}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {leaderboardData.map((item, index) => (
                    <div
                      key={item.name}
                      className={cn(
                        'flex items-center gap-4 rounded-lg p-2',
                        index === 0
                          ? 'bg-yellow-100/50 dark:bg-yellow-900/20'
                          : ''
                      )}
                    >
                      <Avatar className="h-8 w-8 text-xs">
                        <AvatarFallback
                          className={
                            index === 0
                              ? 'bg-yellow-500 text-white'
                              : 'bg-muted-foreground/20'
                          }
                        >
                          {item.initial}
                        </AvatarFallback>
                      </Avatar>
                      <span className="flex-grow font-medium">{item.name}</span>
                      <span className="font-semibold">{item.score}</span>
                    </div>
                  ))}
                  <Separator />
                  <Button variant="outline" className="w-full">
                    {dict.viewFullLeaderboard}
                  </Button>
                </CardContent>
              </Card>
            </MotionWrapper>

            {/* Achievement Badges */}
            <MotionWrapper delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-bold">
                    <Award className="h-5 w-5 text-green-500" />
                    {dict.achievements}
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-3 gap-4">
                  {achievementBadges.map(badge => (
                    <div
                      key={badge.name}
                      className="flex flex-col items-center gap-2 rounded-lg bg-muted/40 p-3 text-center"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-primary">
                        {badge.icon}
                      </div>
                      <span className="text-xs font-medium">{badge.name}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </MotionWrapper>
          </aside>
        </div>
      </MotionWrapper>

      <MotionWrapper as="section" className="container mx-auto rounded-2xl px-4">
        <div className="mb-12 text-center">
          <h2 className="flex items-center justify-center gap-3 font-headline text-3xl font-bold md:text-4xl">
            <ClipboardList className="h-8 w-8 text-primary" />
            {dict.quickAccess}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            {dict.quickAccessDescription}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quickAccessStories.map((story, i) => (
            <MotionWrapper key={story.id} delay={i * 0.1}>
              <Card className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    {getThemeMeta(story.aiThemes[0] || '').iconSmall}
                  </div>
                  <div>
                    <h3 className="font-semibold">{story.title}</h3>
                    <Badge variant="outline">{story.aiThemes[0]}</Badge>
                  </div>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  Complete story with video and interactive quiz.
                </p>
                <Link
                  href={`/story/${story.id}`}
                  className="group flex items-center text-sm font-semibold text-primary"
                >
                  {dict.viewFullStory}{' '}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Card>
            </MotionWrapper>
          ))}
          <MotionWrapper delay={quickAccessStories.length * 0.1}>
            <Card className="flex h-full min-h-[160px] flex-col items-center justify-center border-2 border-dashed bg-transparent p-6 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <Plus className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="mb-1 font-semibold">{dict.exploreAllStories}</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Discover more stories from Aceh's journey of resilience.
              </p>
              <Button variant="outline" asChild>
                <Link href="/explore">{dict.viewAllStories}</Link>
              </Button>
            </Card>
          </MotionWrapper>
        </div>
      </MotionWrapper>
    </div>
  );
}

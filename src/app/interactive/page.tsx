
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
import { stories } from '@/lib/data';
import { interactiveContent } from '@/lib/interactive-content';
import Image from 'next/image';
import Link from 'next/link';
import WaveIcon from '@/components/icons/wave-icon';
import { cn } from '@/lib/utils';
import MotionWrapper from '@/components/motion-wrapper';

const leaderboardData = [
  { name: 'Tsunami Expert', score: '30/30', rank: 1, initial: 'TE' },
  { name: 'Disaster Prepared', score: '28/30', rank: 2, initial: 'DP' },
  { name: 'Community Helper', score: '25/30', rank: 3, initial: 'CH' },
  { name: 'Peace Builder', score: '23/30', rank: 4, initial: 'PB' },
  { name: 'Wisdom Keeper', score: '20/30', rank: 5, initial: 'WK' },
];

const achievementBadges = [
  { name: 'Tsunami', icon: <BookOpen /> },
  { name: 'Community Builder', icon: <Trophy /> },
  { name: 'Wisdom Keeper', icon: <Award /> },
  { name: 'Peace Maker', icon: <Film /> },
  { name: 'Emergency Ready', icon: <ClipboardList /> },
  { name: 'Educator', icon: <BookOpen /> },
];

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

const allComics = stories
  .map(story => {
    const content = interactiveContent[story.id];
    if (!content || !content.comic) return null;
    const themeMeta = getThemeMeta(story.aiThemes[0] || '');

    return {
      id: story.id,
      storyTitle: story.title,
      comicTitle: content.comic.title,
      description: content.comic.description,
      ...themeMeta,
    };
  })
  .filter(Boolean);

export default function InteractiveLearningHub() {
  const quickAccessStories = stories.slice(0, 5);
  const videosToShow = stories.slice(0, 3);

  return (
    <div className="space-y-16 py-12 md:space-y-24">
      <MotionWrapper className="container mx-auto px-4 rounded-2xl">
        <div className="mb-12 text-center">
          <h1 className="font-headline text-4xl md:text-5xl">
            Interactive Learning Hub
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            Explore Aceh's stories through gamified quizzes, educational videos,
            and interactive comics
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-start">
          <main className="col-span-1 space-y-8 lg:col-span-2">
            {/* Disaster Preparedness Quiz */}
            <MotionWrapper>
              <Card className="w-full overflow-hidden">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <ClipboardList className="h-6 w-6 text-primary" />
                      Disaster Preparedness Quiz
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">
                        Progress: 25%
                      </span>
                      <Progress value={25} className="w-24" />
                    </div>
                  </div>
                  <CardDescription>
                    Welcome to the Interactive Disaster Preparedness Quiz! Test your
                    knowledge about tsunami warnings, community response, and
                    traditional wisdom like Smong. Click "Start Quiz" to begin your
                    learning journey.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center bg-muted/40 py-12 text-center">
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/30">
                       <Button asChild variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-white text-primary shadow-lg hover:bg-white">
                         <Link href="/story/smong-selamat-dari-lautan">
                            <Puzzle className="h-6 w-6" />
                         </Link>
                      </Button>
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Ready to Test Your Knowledge?
                  </h3>
                  <p className="mb-6 max-w-sm text-sm text-muted-foreground">
                    Learn about disaster preparedness through interactive scenarios
                    based on real stories from Aceh.
                  </p>
                  <Button size="lg" asChild>
                     <Link href="/story/smong-selamat-dari-lautan">
                        Start Quiz
                     </Link>
                  </Button>
                </CardContent>
              </Card>
            </MotionWrapper>

            {/* Educational Videos */}
            <MotionWrapper as="section">
              <div className="mb-6">
                <h2 className="flex items-center gap-3 font-headline text-3xl">
                  <Film className="h-8 w-8 text-red-500" />
                  Educational Videos
                </h2>
                <p className="mt-1 text-muted-foreground">
                  Watch educational videos from our story collection to deepen
                  your understanding
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
                           <Button asChild variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-white/80 text-primary shadow-lg hover:bg-white">
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
                        <CardTitle className="text-lg">{story.title}</CardTitle>
                        <CardDescription className="line-clamp-2">
                          {story.summary}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter className="flex justify-between text-xs text-muted-foreground">
                        <p>5 min</p>
                        <Button variant="secondary" size="sm" asChild>
                          <Link href={`/story/${story.id}`}>Watch</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </MotionWrapper>
                ))}
                <MotionWrapper delay={0.3}>
                  <Card className="flex h-full min-h-[200px] flex-col items-center justify-center border-2 border-dashed bg-transparent p-6 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                      <Plus className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="mb-1 font-semibold">View All Videos</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Explore our complete collection of educational content
                    </p>
                    <Button variant="outline" asChild>
                      <Link href="/explore">Browse All</Link>
                    </Button>
                  </Card>
                </MotionWrapper>
              </div>
            </MotionWrapper>
          </main>

          <aside className="col-span-1 space-y-8">
            {/* Leaderboard */}
            <MotionWrapper delay={0.1}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    Leaderboard
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {leaderboardData.map((item, index) => (
                    <div
                      key={item.name}
                      className={`flex items-center gap-4 rounded-lg p-2 ${
                        index === 0 ? 'bg-yellow-100/50 dark:bg-yellow-900/20' : ''
                      }`}
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
                    View Full Leaderboard
                  </Button>
                </CardContent>
              </Card>
            </MotionWrapper>

            {/* Achievement Badges */}
            <MotionWrapper delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-green-500" />
                    Achievement Badges
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

      <MotionWrapper as="section" className="container mx-auto px-4 rounded-2xl">
        <div className="mb-12 text-center">
          <h2 className="flex items-center justify-center gap-3 font-headline text-3xl md:text-4xl">
            <BookOpen className="h-8 w-8 text-primary" />
            Interactive Digital Comics
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            Experience stories through visual storytelling and interactive
            comics.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {allComics.map((comic, i) => (
            <MotionWrapper key={comic!.id} delay={i * 0.1}>
              <Card
                key={comic!.id}
                className="group flex flex-col overflow-hidden text-center"
              >
                <CardContent
                  className={cn(
                    'flex flex-grow flex-col items-center justify-center p-6',
                    comic!.color
                  )}
                >
                  <div className={cn('mb-4', comic!.textColor)}>
                    {comic!.icon}
                  </div>
                  <h3 className={cn('font-semibold', comic!.textColor)}>
                    {comic!.comicTitle}
                  </h3>
                </CardContent>
                <CardHeader className="flex-grow p-6">
                  <CardTitle className="text-lg">{comic!.storyTitle}</CardTitle>
                  <CardDescription>{comic!.description}</CardDescription>
                </CardHeader>
                <CardFooter className="p-6 pt-0">
                  <Button asChild
                    className={cn(
                      'w-full text-white',
                      comic!.buttonColor
                    )}
                  >
                    <Link href={`/story/${comic!.id}`}>Read Comic</Link>
                  </Button>
                </CardFooter>
              </Card>
            </MotionWrapper>
          ))}
        </div>
      </MotionWrapper>

      <MotionWrapper as="section" className="container mx-auto px-4 rounded-2xl">
        <div className="mb-12 text-center">
          <h2 className="flex items-center justify-center gap-3 font-headline text-3xl md:text-4xl">
            <ClipboardList className="h-8 w-8 text-primary" />
            Quick Access to Stories
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            Jump directly to full story experiences with all educational content.
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
                  Complete story with video, comic, and interactive quiz.
                </p>
                <Link
                  href={`/story/${story.id}`}
                  className="group flex items-center text-sm font-semibold text-primary"
                >
                  View Full Story{' '}
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
              <h3 className="mb-1 font-semibold">Explore All Stories</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Discover more stories from Aceh's journey of resilience.
              </p>
              <Button variant="outline" asChild>
                <Link href="/explore">View All Stories</Link>
              </Button>
            </Card>
          </MotionWrapper>
        </div>
      </MotionWrapper>
    </div>
  );
}

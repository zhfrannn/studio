import {
  Award,
  BookOpen,
  ClipboardList,
  Film,
  Plus,
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
import Image from 'next/image';
import Link from 'next/link';
import WaveIcon from '@/components/icons/wave-icon';
import { cn } from '@/lib/utils';

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

const comicData = [
  {
    title: 'Tsunami Survivor Story',
    subtitle: 'The Day the Sea Came',
    description: '8 panels - Interactive',
    icon: <WaveIcon className="h-12 w-12" />,
    color: 'bg-blue-100 dark:bg-blue-900/30',
    textColor: 'text-blue-600 dark:text-blue-400',
    buttonColor: 'bg-blue-500 hover:bg-blue-600',
  },
  {
    title: 'Village Rebuilding',
    subtitle: 'Spirit of Gotong Royong',
    description: '6 panels - Interactive',
    icon: <Users className="h-12 w-12" />,
    color: 'bg-green-100 dark:bg-green-900/30',
    textColor: 'text-green-600 dark:text-green-400',
    buttonColor: 'bg-green-500 hover:bg-green-600',
  },
  {
    title: 'From Conflict to Peace',
    subtitle: 'Coffee Diplomacy',
    description: '8 panels - Interactive',
    icon: <Coffee className="h-12 w-12" />,
    color: 'bg-purple-100 dark:bg-purple-900/30',
    textColor: 'text-purple-600 dark:text-purple-400',
    buttonColor: 'bg-purple-500 hover:bg-purple-600',
  },
  {
    title: 'Traditional Knowledge',
    subtitle: 'Wisdom of Smong',
    description: '6 panels - Interactive',
    icon: <ScrollText className="h-12 w-12" />,
    color: 'bg-yellow-100 dark:bg-yellow-900/30',
    textColor: 'text-yellow-600 dark:text-yellow-400',
    buttonColor: 'bg-yellow-500 hover:bg-yellow-600',
  },
];

const quickAccessStories = stories.slice(0, 5);

const getThemeIcon = (theme?: string) => {
  switch (theme) {
    case 'Disaster Preparedness':
      return <WaveIcon className="h-5 w-5 text-blue-500" />;
    case 'Peacebuilding':
      return <Coffee className="h-5 w-5 text-purple-500" />;
    case 'Local Wisdom':
      return <ScrollText className="h-5 w-5 text-yellow-500" />;
    default:
      return <BookOpen className="h-5 w-5 text-gray-500" />;
  }
};

export default function InteractiveLearningHub() {
  return (
    <div className="space-y-16 py-12 md:space-y-24">
      <div className="container mx-auto px-4">
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
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-12 w-12 rounded-full bg-white text-primary shadow-lg hover:bg-white"
                    >
                      <Film className="h-6 w-6" />
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
                <Button size="lg">Start Quiz</Button>
              </CardContent>
            </Card>

            {/* Educational Videos */}
            <section>
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
                {stories.slice(0, 3).map(story => (
                  <Card key={story.id} className="overflow-hidden">
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
                          variant="ghost"
                          size="icon"
                          className="h-12 w-12 rounded-full bg-white/80 text-primary shadow-lg hover:bg-white"
                        >
                          <Film className="h-6 w-6" />
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
                ))}
                <Card className="flex flex-col items-center justify-center border-2 border-dashed bg-transparent p-6 text-center">
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
              </div>
            </section>
          </main>

          <aside className="col-span-1 space-y-8">
            {/* Leaderboard */}
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

            {/* Achievement Badges */}
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
          </aside>
        </div>
      </div>

      <section className="container mx-auto px-4">
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
          {comicData.map(comic => (
            <Card
              key={comic.title}
              className="group flex flex-col overflow-hidden text-center"
            >
              <CardContent
                className={cn(
                  'flex flex-grow flex-col items-center justify-center p-6',
                  comic.color
                )}
              >
                <div className={cn('mb-4', comic.textColor)}>
                  {comic.icon}
                </div>
                <h3 className={cn('font-semibold', comic.textColor)}>
                  {comic.subtitle}
                </h3>
              </CardContent>
              <CardHeader className="flex-grow p-6">
                <CardTitle className="text-lg">{comic.title}</CardTitle>
                <CardDescription>{comic.description}</CardDescription>
              </CardHeader>
              <CardFooter className="p-6 pt-0">
                <Button
                  className={cn(
                    'w-full text-white',
                    comic.buttonColor
                  )}
                >
                  Read Comic
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4">
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
          {quickAccessStories.map(story => (
            <Card key={story.id} className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                  {getThemeIcon(story.aiThemes[0])}
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
          ))}
          <Card className="flex flex-col items-center justify-center border-2 border-dashed bg-transparent p-6 text-center">
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
        </div>
      </section>
    </div>
  );
}

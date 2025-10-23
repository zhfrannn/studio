
'use client';

import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  BrainCircuit,
  Lightbulb,
  MessageCircle,
  PenSquare,
  Sparkles,
  Users,
  Award,
  PieChart,
  Settings,
  Plus,
  Search,
  Loader2,
  LogOut,
} from 'lucide-react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import MotionWrapper from '@/components/motion-wrapper';
import { signOut } from '@/firebase/auth/auth';
import { useLanguage } from '@/context/language-context';

const engagementData = [
  { week: 'W1', engagement: 45 },
  { week: 'W2', engagement: 60 },
  { week: 'W3', engagement: 55 },
  { week: 'W4', engagement: 78 },
];

const chartConfig = {
  engagement: {
    label: 'Engagement',
    color: 'hsl(var(--primary))',
  },
};

export default function ProfilePage() {
  const { user, isLoading } = useUser();
  const router = useRouter();
  const { dictionary } = useLanguage();
  const dict = dictionary.profile;

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  if (isLoading) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    if (typeof window !== 'undefined') {
      router.push('/');
    }
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <p>{dict.redirecting}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-8 lg:grid-cols-4">
        {/* Main Content */}
        <main className="col-span-1 space-y-8 lg:col-span-3">
          {/* 1. Welcome Section */}
          <MotionWrapper>
            <Card className="overflow-hidden">
              <CardHeader className="flex-row items-center gap-4 bg-background p-6">
                <Avatar className="h-16 w-16 border-2 border-primary">
                  <AvatarImage
                    src={user.photoURL || `https://picsum.photos/seed/${user.uid}/100`}
                    alt={user.displayName || 'User Avatar'}
                  />
                  <AvatarFallback>
                    {user.displayName ? user.displayName.charAt(0) : 'U'}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <CardTitle className="font-headline text-2xl">
                      {user.displayName || 'Edu-Creator'}
                    </CardTitle>
                    <Badge variant="secondary">{dict.teacher}</Badge>
                    <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300">
                      {dict.schoolPartner}
                    </Badge>
                  </div>
                  <CardDescription className="mt-1 italic text-muted-foreground">
                    {dict.quote}
                  </CardDescription>
                </div>
                <Button onClick={handleSignOut} variant="outline" size="icon" className="ml-auto">
                    <LogOut className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4 bg-background p-6 md:grid-cols-4">
                <div className="rounded-lg border p-4 text-center">
                  <p className="font-headline text-3xl font-bold text-primary">
                    12
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {dict.lessonsCreated}
                  </p>
                </div>
                <div className="rounded-lg border p-4 text-center">
                  <p className="font-headline text-3xl font-bold text-primary">
                    230
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {dict.studentsReached}
                  </p>
                </div>
                <div className="rounded-lg border p-4 text-center">
                  <p className="font-headline text-3xl font-bold text-primary">
                    87
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {dict.storyImpact}
                  </p>
                </div>
                <div className="rounded-lg border p-4 text-center">
                  <p className="font-headline text-3xl font-bold text-primary">
                    45
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {dict.reflectionsCollected}
                  </p>
                </div>
              </CardContent>
            </Card>
          </MotionWrapper>

          {/* 4. AI Studio (Core Feature) */}
          <MotionWrapper delay={0.1}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                  <Sparkles className="text-primary" />
                  {dict.aiStudioTitle}
                </CardTitle>
                <CardDescription>
                  {dict.aiStudioDescription}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                  {[
                    dict.lesson,
                    dict.quiz,
                    dict.comic,
                    dict.reflection,
                    dict.eduPoster,
                  ].map(type => (
                    <Button
                      key={type}
                      variant="outline"
                      className="h-20 flex-col"
                    >
                      <PenSquare className="mb-1 h-6 w-6" />
                      {type}
                    </Button>
                  ))}
                </div>
                <div className="rounded-lg border bg-muted/50 p-4">
                  <p className="font-semibold">
                    {dict.startWithStory}
                  </p>
                  <div className="mt-2 flex gap-2">
                    <div className="relative flex-grow">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <input
                        placeholder={dict.searchStoryPlaceholder}
                        className="w-full rounded-md border bg-background py-2 pl-9 pr-3 text-sm"
                      />
                    </div>
                    <Button>
                      <Sparkles className="mr-2" /> {dict.generateButton}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </MotionWrapper>

          {/* 2 & 3. My AI Content & Learning Library */}
          <MotionWrapper delay={0.2}>
            <Tabs defaultValue="my-content">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="my-content">{dict.myContentTab}</TabsTrigger>
                <TabsTrigger value="learning-library">
                  {dict.libraryTab}
                </TabsTrigger>
              </TabsList>
              <TabsContent value="my-content" className="mt-4">
                <Card>
                  <CardHeader>
                    <Tabs defaultValue="lessons">
                      <TabsList>
                        <TabsTrigger value="lessons">{dict.lessonsTab}</TabsTrigger>
                        <TabsTrigger value="quizzes">{dict.quizzesTab}</TabsTrigger>
                        <TabsTrigger value="comics">{dict.comicsTab}</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Example Content Card */}
                    <Card className="group">
                      <CardHeader>
                        <CardTitle className="text-base">
                          {dict.quizExampleTitle}
                        </CardTitle>
                        <CardDescription className="text-xs">
                          {dict.quizExampleDescription}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter className="flex justify-between">
                        <Button variant="ghost" size="sm">
                          <BrainCircuit className="mr-2" /> {dict.editButton}
                        </Button>
                        <Button variant="secondary" size="sm">
                          {dict.previewButton}
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="flex min-h-[150px] flex-col items-center justify-center border-2 border-dashed bg-transparent">
                      <Plus className="mb-2 h-8 w-8 text-muted-foreground" />
                      <p className="text-sm font-semibold text-muted-foreground">
                        {dict.createNewContent}
                      </p>
                    </Card>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="learning-library" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>{dict.inspirationHubTitle}</CardTitle>
                    <CardDescription>
                      {dict.inspirationHubDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {dict.libraryPlaceholder}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </MotionWrapper>

          {/* 5. School Hub */}
          <MotionWrapper delay={0.3}>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">{dict.schoolHubTitle}</CardTitle>
                <CardDescription>
                  {dict.schoolHubDescription}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6 md:grid-cols-3">
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <p className="text-sm font-medium text-muted-foreground">
                      {dict.teachersJoined}
                    </p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <p className="text-sm font-medium text-muted-foreground">
                      {dict.totalLessons}
                    </p>
                    <p className="text-2xl font-bold">75</p>
                  </div>
                  <Button className="w-full">
                    <Users className="mr-2" /> {dict.manageTeachers}
                  </Button>
                </div>
                <div className="h-48 md:col-span-2">
                  <ChartContainer config={chartConfig} className="h-full w-full">
                    <AreaChart
                      accessibilityLayer
                      data={engagementData}
                      margin={{
                        left: 12,
                        right: 12,
                      }}
                    >
                      <defs>
                        <linearGradient
                          id="colorEngagement"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="var(--color-engagement)"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="var(--color-engagement)"
                            stopOpacity={0.1}
                          />
                        </linearGradient>
                      </defs>
                      <XAxis
                        dataKey="week"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value.slice(0, 3)}
                      />
                       <YAxis
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                      />
                      <Tooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="dot" />}
                      />
                      <Area
                        dataKey="engagement"
                        type="natural"
                        fill="url(#colorEngagement)"
                        stroke="var(--color-engagement)"
                        stackId="a"
                      />
                    </AreaChart>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
          </MotionWrapper>
        </main>

        {/* Right Sidebar */}
        <aside className="col-span-1 space-y-8 lg:sticky lg:top-24">
          {/* 9. Achievements */}
          <MotionWrapper>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award /> {dict.achievementsTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  dict.achievement1,
                  dict.achievement2,
                  dict.achievement3,
                ].map(ach => (
                  <div
                    key={ach}
                    className="flex items-center gap-3 rounded-lg bg-muted/50 p-3"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-400">
                      <Award size={16} />
                    </div>
                    <p className="text-sm font-medium">{ach}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </MotionWrapper>

          {/* 6. Community Feed */}
          <MotionWrapper delay={0.1}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle /> {dict.communityFeedTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://picsum.photos/seed/pakbudi/100" />
                    <AvatarFallback>PB</AvatarFallback>
                  </Avatar>
                  <p className="text-sm">
                    <span className="font-semibold">{dict.communityFeedExample1_part1}</span>{dict.communityFeedExample1_part2}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://picsum.photos/seed/event/100" />
                    <AvatarFallback>W</AvatarFallback>
                  </Avatar>
                  <p className="text-sm">
                    <span className="font-semibold">{dict.communityFeedExample2_part1}</span>{dict.communityFeedExample2_part2}
                    <a href="#" className="text-primary hover:underline">
                      {dict.communityFeedExample2_part3}
                    </a>
                    .
                  </p>
                </div>
                <Button variant="outline" className="w-full">{dict.viewAll}</Button>
              </CardContent>
            </Card>
          </MotionWrapper>

           {/* 7. Reflections */}
          <MotionWrapper delay={0.2}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb /> {dict.reflectionsTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                 <div className="rounded-lg border p-3 italic">
                    <p className="text-sm">{dict.reflectionExample}</p>
                    <p className="text-xs text-right mt-1 text-muted-foreground">{dict.reflectionAuthor}</p>
                 </div>
                 <Button variant="secondary" className="w-full">
                    <PieChart className="mr-2"/> {dict.impactReport}
                 </Button>
              </CardContent>
            </Card>
          </MotionWrapper>

        </aside>
      </div>
    </div>
  );
}

    

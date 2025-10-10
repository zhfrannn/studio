'use client';

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
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { ChartTooltipContent, ChartContainer } from '@/components/ui/chart';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Tooltip as ShadTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import {
  BrainCircuit,
  BookOpen,
  Award,
  Users,
  Sparkles,
  PenSquare,
  Eye,
  Share2,
  Plus,
  MessageCircle,
  Settings,
  Bot,
  Loader2,
} from 'lucide-react';
import MotionWrapper from '@/components/motion-wrapper';
import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';

const statsData = [
    { name: 'AI Lessons Created', value: '12', icon: BrainCircuit },
    { name: 'Students Reached', value: '230', icon: Users },
    { name: 'Story Impact Score', value: '87', icon: Sparkles },
    { name: 'Reflections Collected', value: '45', icon: MessageCircle },
    { name: 'Collaborations', value: '8', icon: Users },
    { name: 'Favorite Topic', value: 'Local Wisdom', icon: BookOpen },
];

const contentData = {
    lessons: [{
        title: 'The Wisdom of Smong',
        description: 'Based on the story of Smong from Simeulue Island.',
        thumbnail: 'https://cdn.dribbble.com/userupload/26382361/file/original-a94049296846fa5218859ac34ea57b23.png',
    }],
    quizzes: [{
        title: 'Quiz: Gotong Royong',
        description: 'Test knowledge about community collaboration.',
        thumbnail: 'https://cdn.dribbble.com/userupload/32247153/file/original-1fe677ceff3cabb6bf2037dc808ace4d.jpg',
    }],
    comics: [{
        title: 'Comic: Mangrove Protectors',
        description: 'Visual story about coastal protection.',
        thumbnail: 'https://cdn.dribbble.com/userupload/27796411/file/original-992aa78e02707e86da76830a224a2f2d.png',
    }],
    posts: [],
};


export default function WaveOfSchoolProfilePage() {
    const { user, isLoading } = useUser();
    const router = useRouter();

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
        return null;
    }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50/50 via-cyan-50/50 to-background dark:from-blue-900/10 dark:via-cyan-900/10 dark:to-background">
       {/* Subtle background wave animation */}
       <div className="absolute inset-0 z-0 overflow-hidden">
         <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-cyan-200/20 opacity-30 blur-3xl animate-[pulse_10s_cubic-bezier(0.4,0,0.6,1)_infinite] dark:bg-cyan-800/20"></div>
         <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-blue-200/20 opacity-30 blur-3xl animate-[pulse_12s_cubic-bezier(0.4,0,0.6,1)_infinite_2s] dark:bg-blue-800/20"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <main className="col-span-1 space-y-6 lg:col-span-3">
            {/* Header Section */}
            <MotionWrapper>
              <Card className="bg-background/80 backdrop-blur-sm">
                <CardHeader className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
                  <Avatar className="h-20 w-20 border-4 border-primary">
                    <AvatarImage src={user.photoURL || 'https://picsum.photos/seed/teacher/100'} alt={user.displayName || 'User'}/>
                    <AvatarFallback>{user.displayName?.charAt(0) || 'T'}</AvatarFallback>
                  </Avatar>
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-2">
                       <h1 className="font-headline text-2xl font-bold">{user.displayName || 'Ibu Guru'}</h1>
                       <Badge variant="outline">Teacher</Badge>
                       <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">🟢 Active Educator</Badge>
                       <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">🟣 Partner School</Badge>
                    </div>
                    <p className="mt-2 text-sm italic text-muted-foreground">“Today’s wisdom becomes tomorrow’s lesson. Let’s create together.”</p>
                  </div>
                </CardHeader>
              </Card>
            </MotionWrapper>
            
            {/* Quick Stats */}
             <MotionWrapper delay={0.1} className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {statsData.map((stat) => (
                    <Card key={stat.name} className="bg-background/80 p-4 backdrop-blur-sm">
                        <div className="flex items-center gap-3">
                            <stat.icon className="h-6 w-6 text-primary"/>
                            <div>
                                <p className="font-headline text-2xl font-bold">{stat.value}</p>
                                <p className="text-xs text-muted-foreground">{stat.name}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </MotionWrapper>

             {/* AI Studio Shortcut */}
            <MotionWrapper delay={0.2}>
              <Card className="bg-background/80 backdrop-blur-sm">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center sm:flex-row sm:justify-between">
                  <div className="mb-4 sm:mb-0 sm:text-left">
                    <h3 className="font-headline text-xl">Ready for a new inspiration?</h3>
                    <p className="text-sm text-muted-foreground">Transform your idea or a local story into a full lesson plan.</p>
                  </div>
                  <TooltipProvider>
                    <ShadTooltip>
                      <TooltipTrigger asChild>
                        <Button size="lg" className="shiny-button">
                          <Plus className="mr-2 h-5 w-5"/> Create New Lesson with AI
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Our most powerful AI tool at your fingertips.</p>
                      </TooltipContent>
                    </ShadTooltip>
                  </TooltipProvider>
                </CardContent>
              </Card>
            </MotionWrapper>

            {/* My AI Content */}
            <MotionWrapper delay={0.3}>
                 <Tabs defaultValue="lessons" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="lessons">Lessons</TabsTrigger>
                        <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
                        <TabsTrigger value="comics">Comics</TabsTrigger>
                        <TabsTrigger value="posts">EduBoard Posts</TabsTrigger>
                    </TabsList>
                    <TabsContent value="lessons">
                        <Card className="bg-background/80 pt-6 backdrop-blur-sm">
                            <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                                <Card className="overflow-hidden">
                                     <CardContent className="relative h-32 w-full p-0">
                                         <img src={contentData.lessons[0].thumbnail} alt={contentData.lessons[0].title} className="h-full w-full object-cover" />
                                     </CardContent>
                                     <div className="p-4">
                                        <h4 className="font-semibold text-sm">{contentData.lessons[0].title}</h4>
                                        <p className="text-xs text-muted-foreground">{contentData.lessons[0].description}</p>
                                     </div>
                                     <CardFooter className="flex justify-between p-2 pt-0">
                                         <Button variant="ghost" size="sm"><BrainCircuit className="mr-1 h-3 w-3"/> Edit</Button>
                                         <Button variant="ghost" size="sm"><Eye className="mr-1 h-3 w-3"/> Preview</Button>
                                         <Button variant="ghost" size="sm"><Share2 className="mr-1 h-3 w-3"/> Share</Button>
                                     </CardFooter>
                                </Card>
                            </CardContent>
                        </Card>
                    </TabsContent>
                 </Tabs>
            </MotionWrapper>
          </main>

          <aside className="col-span-1 space-y-6 lg:sticky lg:top-24">
              {/* Learning Library Preview */}
               <MotionWrapper>
                    <Card className="bg-background/80 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="text-lg">Learning Library</CardTitle>
                            <CardDescription className="text-sm">AI-powered recommendations for you.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <p className="text-xs text-muted-foreground">You may like: ‘Mangrove Ecosystem Interactive Quiz’ — 92% similarity with your last content.</p>
                            <Button className="w-full">Explore Full Library</Button>
                        </CardContent>
                    </Card>
                </MotionWrapper>

              {/* Achievements & Badges */}
              <MotionWrapper delay={0.1}>
                <Card className="bg-background/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg"><Award/> Achievements</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-3 rounded-md bg-muted/50 p-2 text-sm transition-transform hover:scale-105">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">🏅</span>
                      <span>First AI Lesson Created</span>
                    </div>
                     <div className="flex items-center gap-3 rounded-md bg-muted/50 p-2 text-sm transition-transform hover:scale-105">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">🌊</span>
                      <span>Cultural Educator</span>
                    </div>
                     <div className="flex items-center gap-3 rounded-md bg-muted/50 p-2 text-sm transition-transform hover:scale-105">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600">🔥</span>
                      <span>Top Contributor</span>
                    </div>
                  </CardContent>
                </Card>
              </MotionWrapper>

               {/* Profile Settings */}
               <MotionWrapper delay={0.2}>
                <Card className="bg-background/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg"><Settings/> Profile Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">Edit Profile & Settings</Button>
                  </CardContent>
                </Card>
              </MotionWrapper>
          </aside>
        </div>
      </div>
      
       {/* AI Mentor FAB */}
        <TooltipProvider>
            <ShadTooltip>
                <TooltipTrigger asChild>
                     <Button className="shiny-button fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg">
                        <Bot className="h-8 w-8"/>
                        <span className="sr-only">Ask Siaga-Bot</span>
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="left" className="p-2">
                    <p>Ask Siaga-Bot for assistance!</p>
                </TooltipContent>
            </ShadTooltip>
        </TooltipProvider>

    </div>
  );
}


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
import { getTranslatedStories } from '@/lib/data';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Lightbulb,
  MessageCircle,
  CheckCircle,
  Share2,
  Puzzle,
  Sparkles,
  Bot,
  Send,
  User,
  Loader2,
  MessageSquareText,
  BrainCircuit,
  GraduationCap,
  Users2,
  HeartHandshake,
  School,
} from 'lucide-react';
import InteractiveMap from '@/components/interactive-map';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import MotionWrapper from '@/components/motion-wrapper';
import SplitText from '@/components/ui/split-text';
import LogoLoop from '@/components/ui/logo-loop';
import { useLanguage } from '@/context/language-context';
import type { Story } from '@/lib/types';
import StoryCarousel from '@/components/story-carousel';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { generateStoryRecommendation } from '@/ai/flows/generate-story-recommendation';
import type { GenerateStoryRecommendationOutput } from '@/ai/flows/story-recommendation-types';


function ShareStorySection() {
  const { dictionary, language } = useLanguage();
  const shareStoryDict = dictionary.home.shareStory;

  const allStories = getTranslatedStories({ lang: language });
  const locations = [
    ...new Set(allStories.map(s => s.location?.name).filter(Boolean)),
  ] as string[];

  // Schema for the form
  const formSchema = z.object({
    name: z.string().optional(),
    location: z
      .string()
      .nonempty({ message: shareStoryDict.validation.locationRequired }),
    storyType: z
      .array(z.string())
      .refine(value => value.some(item => item), {
        message: shareStoryDict.validation.storyTypeRequired,
      }),
    story: z
      .string()
      .min(10, { message: shareStoryDict.validation.storyMinLength })
      .max(2000, { message: shareStoryDict.validation.storyMaxLength }),
    agree: z.boolean().refine(value => value === true, {
      message: shareStoryDict.validation.agreeRequired,
    }),
  });

  type FormValues = z.infer<typeof formSchema>;

  const storyTypes = [
    { id: 'Disaster Preparedness', label: shareStoryDict.storyTypes.disaster },
    { id: 'Peacebuilding', label: shareStoryDict.storyTypes.peace },
    { id: 'Local Wisdom', label: shareStoryDict.storyTypes.wisdom },
  ];

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      location: '',
      storyType: [],
      story: '',
      agree: false,
    },
  });

  type StoryRecommendation = NonNullable<GenerateStoryRecommendationOutput['recommendedStory']>;

  type Message = {
    role: 'user' | 'bot';
    text: string;
    recommendedStory?: StoryRecommendation;
  };

  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: shareStoryDict.aiHelper.initialMessage,
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function onFormSubmit(data: FormValues) {
    const { name, location, storyType, story } = data;
    const message = `Hello, I want to share a story.
Name: ${name || 'Anonymous'}
Location: ${location}
Story Type: ${storyType.join(', ')}
Story:
${story}`;

    const telegramUrl = `https://t.me/WaveOfVoice_Bot?text=${encodeURIComponent(
      message
    )}`;
    window.open(telegramUrl, '_blank');
  }

  const handleChatSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const result = await generateStoryRecommendation({ query: input, language });
      const botMessage: Message = {
        role: 'bot',
        text: result.response,
        recommendedStory: result.recommendedStory,
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        role: 'bot',
        text: shareStoryDict.aiHelper.errorMessage,
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0">
        <Image
          src="https://cdn.dribbble.com/userupload/32707329/file/original-01992760209b192c3d12d849dc7ee6d4.jpeg"
          alt="Beautiful Acehnese pattern"
          fill
          className="object-cover opacity-10 dark:opacity-5"
          data-ai-hint="aceh pattern"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
      <MotionWrapper
        id="share-story"
        className="container mx-auto px-4 rounded-2xl"
      >
        <div className="relative mx-auto mb-12 max-w-3xl space-y-2 text-center">
          <SplitText
            text={shareStoryDict.title}
            className="font-headline text-3xl font-bold md:text-4xl"
          />
          <p className="text-muted-foreground">{shareStoryDict.description}</p>
        </div>

        <div className="relative grid grid-cols-1 gap-12 rounded-2xl md:grid-cols-1 lg:grid-cols-2">
          <MotionWrapper delay={0.1}>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {shareStoryDict.formTitle}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onFormSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{shareStoryDict.labels.name}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={shareStoryDict.placeholders.name}
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            {shareStoryDict.labels.location}
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue
                                  placeholder={
                                    shareStoryDict.placeholders.location
                                  }
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {locations.map(loc => (
                                <SelectItem key={loc} value={loc}>
                                  {loc}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="storyType"
                      render={() => (
                        <FormItem>
                          <div className="mb-4">
                            <FormLabel className="text-base">
                              {shareStoryDict.labels.storyType}
                            </FormLabel>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            {storyTypes.map(item => (
                              <FormField
                                key={item.id}
                                control={form.control}
                                name="storyType"
                                render={({ field }) => (
                                  <FormItem
                                    key={item.id}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(item.id)}
                                        onCheckedChange={checked => {
                                          return checked
                                            ? field.onChange([
                                                ...(field.value || []),
                                                item.id,
                                              ])
                                            : field.onChange(
                                                (field.value || [])?.filter(
                                                  value => value !== item.id
                                                )
                                              );
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      {item.label}
                                    </FormLabel>
                                  </FormItem>
                                )}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="story"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{shareStoryDict.labels.story}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={shareStoryDict.placeholders.story}
                              className="h-32 resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="agree"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>{shareStoryDict.labels.agree}</FormLabel>
                            <FormDescription className="text-xs">
                              {shareStoryDict.descriptions.agree}
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="w-full">
                      <MessageSquareText className="mr-2 h-5 w-5" />
                      {shareStoryDict.submitButton.replace('WhatsApp', 'Telegram')}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <Card className="flex h-full min-h-[500px] flex-col lg:h-auto">
              <CardHeader className="flex flex-row items-start gap-3">
                <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>{shareStoryDict.aiHelper.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {shareStoryDict.aiHelper.description}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <ScrollArea className="h-full pr-4 min-h-[300px]">
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={cn(
                          'flex items-start gap-3',
                          message.role === 'user'
                            ? 'flex-row-reverse'
                            : 'flex-row'
                        )}
                      >
                        <span
                          className={cn(
                            'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full',
                            message.role === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted'
                          )}
                        >
                          {message.role === 'user' ? (
                            <User size={16} />
                          ) : (
                            <Bot size={16} />
                          )}
                        </span>
                        <div
                          className={cn(
                            'max-w-[85%] rounded-lg p-3 text-sm',
                            message.role === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted'
                          )}
                        >
                          <p className="whitespace-pre-wrap">{message.text}</p>
                          {message.recommendedStory && (
                            <Button
                              asChild
                              variant="secondary"
                              size="sm"
                              className="mt-3 w-full"
                            >
                              <Link
                                href={`/story/${message.recommendedStory.id}`}
                              >
                                <BookOpen className="mr-2 h-4 w-4" />
                                {shareStoryDict.aiHelper.readStory}:{' '}
                                {message.recommendedStory.title}
                              </Link>
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex flex-row items-start gap-3">
                        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-muted">
                          <Bot size={16} />
                        </span>
                        <div className="max-w-[85%] rounded-lg bg-muted p-3 text-sm">
                          <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>
              </CardContent>
              <div className="border-t p-4">
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    handleChatSend();
                  }}
                  className="flex w-full items-center gap-2"
                >
                  <Input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder={shareStoryDict.aiHelper.placeholder}
                    disabled={isLoading}
                  />
                  <Button type="submit" size="icon" disabled={isLoading}>
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </Card>
          </MotionWrapper>
        </div>
      </MotionWrapper>
    </section>
  );
}

export default function Home() {
  const { dictionary, language } = useLanguage();
  const homeDict = dictionary.home;

  const allStories = getTranslatedStories({ lang: language });

  return (
    <div className="space-y-12 pb-16 md:space-y-20">
      <section role="region" aria-labelledby="hero-title">
        <div className="hero-v2-card">
          <Image
            src="https://cdn.dribbble.com/userupload/13448080/file/original-e275af77b98be7d7d015e61704339958.png"
            alt="Abstract blue water pattern"
            fill
            className="object-cover opacity-70"
            data-ai-hint="abstract blue water"
            priority
          />
          <div className="hero-v2-content flex flex-col items-center">
            <div aria-label="Highlight" className="hero-v2-pill">
              <Sparkles className="h-5 w-5" />
              <span>{homeDict.hero.pill}</span>
            </div>
            <h1 id="hero-title" className="hero-v2-title font-bold">
              {homeDict.hero.title}
            </h1>
            <p className="hero-v2-desc">{homeDict.hero.description}</p>

            <StoryCarousel stories={allStories} />

            <div className="hero-v2-cta relative z-30 mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90"
              >
                <Link href="/explore">
                  <BookOpen className="mr-2 h-5 w-5" />
                  {homeDict.hero.ctaExplore}
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/#share-story">
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
        className="container relative z-20 mx-auto -mt-16 px-4"
      >
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white shadow-2xl">
           <div className="flex flex-col items-center justify-center gap-4 text-center">
             <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                <HeartHandshake className="h-8 w-8" />
            </div>
            <div>
              <h2 className="font-headline text-2xl font-bold md:text-3xl">
                Free Forever for Schools, NGOs, & Communities
              </h2>
              <p className="mt-2 max-w-2xl opacity-90">
                We are committed to empowering change. Our platform and its
                tools are freely accessible for all educational and
                non-profit organizations dedicated to building a better, more
                resilient future.
              </p>
            </div>
          </div>
        </div>
      </MotionWrapper>

      <MotionWrapper
        as="section"
        className="container mx-auto px-4 rounded-2xl"
      >
        <div className="mx-auto mb-12 max-w-3xl space-y-2 text-center">
          <SplitText
            text={homeDict.howItWorks.title}
            className="font-headline text-3xl font-bold md:text-4xl"
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
                  <CardTitle className="text-lg font-bold">
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
                  <CardTitle className="text-lg font-bold">
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
                  <CardTitle className="text-lg font-bold">
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
                className="font-headline text-3xl font-bold md:text-4xl"
              />
              <p className="text-muted-foreground">
                {homeDict.whyItMatters.description}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <p className="text-muted-foreground">
                    {homeDict.whyItMatters.point1}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <p className="text-muted-foreground">
                    {homeDict.whyItMatters.point2}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <p className="text-muted-foreground">
                    {homeDict.whyItMatters.point3}
                  </p>
                </li>
              </ul>
            </div>
            <div className="relative min-h-[300px] md:min-h-full">
              <Image
                src="https://i.ibb.co/MxhjF3V1/aceh-community.png"
                alt="Community gathering discussing disaster preparedness"
                fill
                className="object-cover"
                data-ai-hint="community cooking"
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
            className="font-headline text-3xl font-bold md:text-4xl"
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

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/explore">
              {homeDict.exploreStories.loadMore}{' '}
              <ArrowRight className="ml-2 h-4 w-4" />
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
            className="font-headline text-3xl font-bold md:text-4xl"
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
                  <h3 className="font-headline text-xl font-bold">
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
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
            <div className="relative min-h-[300px] bg-muted/50 md:min-h-full">
              <Image
                src="https://cdn.dribbble.com/userupload/16865134/file/original-ac6d283eaa706824abed43da7e901dd2.jpeg"
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
        <div className="relative overflow-hidden rounded-2xl bg-gray-900 text-white">
          <Image
            src="https://cdn.dribbble.com/userupload/13448080/file/original-e275af77b98be7d7d015e61704339958.png"
            alt="Abstract background for school section"
            fill
            className="object-cover opacity-20"
            data-ai-hint="abstract pattern"
          />
          <div className="relative grid items-center gap-12 p-8 md:grid-cols-2 md:p-16">
            <MotionWrapper className="z-10" delay={0.1}>
              <Badge variant="secondary" className="mb-4">
                For Teachers & Schools
              </Badge>
              <h2 className="font-headline text-3xl font-bold md:text-4xl">
                Wave of School: Create the Future of Education
              </h2>
              <p className="mt-4 text-gray-300">
                Transform local stories into interactive learning content with
                the power of AI. Empower students and collaborate with other
                educators.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <BrainCircuit className="h-5 w-5 text-primary" />
                  <span>AI-Powered Learning Content</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span>Adaptive & Cultural Curriculum</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users2 className="h-5 w-5 text-primary" />
                  <span>Educator Collaboration Ecosystem</span>
                </div>
              </div>
              <Button variant="secondary" asChild className="mt-8">
                <Link href="/wave-of-school">
                  Explore Wave of School{' '}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </MotionWrapper>
            <MotionWrapper
              className="relative hidden h-64 md:block"
              delay={0.2}
            >
              <Image
                src="https://cdn.dribbble.com/userupload/16865134/file/original-ac6d283eaa706824abed43da7e901dd2.jpeg"
                alt="Wave of School visualization"
                fill
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint="school illustration"
              />
            </MotionWrapper>
          </div>
        </div>
      </MotionWrapper>

      <MotionWrapper
        as="section"
        className="container mx-auto px-4 rounded-2xl"
      >
        <div className="relative overflow-hidden rounded-2xl bg-primary text-primary-foreground">
          <Image
            src="https://cdn.dribbble.com/userupload/29829998/file/original-94b1514fe3d528f62a84cf250c5efc1f.png"
            alt="Abstract background for eduboard"
            fill
            className="object-cover opacity-20"
            data-ai-hint="abstract pattern"
          />
          <div className="relative grid items-center gap-8 p-12 md:grid-cols-2">
            <MotionWrapper className="space-y-4" delay={0.1}>
              <SplitText
                text={homeDict.eduboard.title}
                className="font-headline text-3xl font-bold md:text-4xl"
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
                  {homeDict.eduboard.cta} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </MotionWrapper>
            <MotionWrapper
              className="relative hidden h-64 md:block"
              delay={0.2}
            >
              <Image
                src="https://cdn.dribbble.com/userupload/16865092/file/original-286765ae0de4074597bfb6584a571c60.jpeg"
                alt="EduBoard visualization"
                fill
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint="information board"
              />
            </MotionWrapper>
          </div>
        </div>
      </MotionWrapper>

      <ShareStorySection />

      <MotionWrapper
        as="section"
        className="container mx-auto px-4 text-center"
      >
        <p className="mx-auto max-w-2xl font-semibold italic text-lg text-center text-muted-foreground">
          {homeDict.quote}
        </p>
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
          <div
            style={{
              position: 'relative',
              width: '1200px',
              height: '75px',
              pointerEvents: 'none',
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
              src="https://www.canva.com/design/DAG0vgSu8Q4/J8dlQa7zH4MCir-aF4d54g/view?embed"
            ></iframe>
          </div>
        </LogoLoop>
      </MotionWrapper>
    </div>
  );
}

    

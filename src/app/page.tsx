
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
import { getTranslatedStories } from '@/lib/data';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowLeft,
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
  Bot,
  Send,
  User,
  Loader2,
  MessageSquareText,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import InteractiveMap from '@/components/interactive-map';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import MotionWrapper from '@/components/motion-wrapper';
import SplitText from '@/components/ui/split-text';
import LogoLoop from '@/components/ui/logo-loop';
import { useLanguage } from '@/context/language-context';
import type { Story, StoryTheme } from '@/lib/types';

import { useState, useRef, useEffect, useCallback } from 'react';
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
import { AnimatePresence, motion } from 'framer-motion';

function ShareStorySection() {
  const { dictionary, language } = useLanguage();
  const shareStoryDict = dictionary.home.shareStory;

  const allStories = getTranslatedStories({ lang: language });
  const locations = [
    ...new Set(allStories.map(s => s.location?.name).filter(Boolean)),
  ] as string[];


  // Schema untuk form
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
    const message = `Halo, saya ingin berbagi cerita.
Nama: ${name || 'Anonim'}
Lokasi: ${location}
Jenis Cerita: ${storyType.join(', ')}
Cerita:
${story}`;

    const whatsappUrl = `https://wa.me/6285296443101?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, '_blank');
  }

  const handleChatSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // AI logic is disabled
    setTimeout(() => {
      const botMessage: Message = {
        role: 'bot',
        text: 'Maaf, fitur AI saat ini sedang tidak tersedia.',
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
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
                          <FormLabel>{shareStoryDict.labels.location}</FormLabel>
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
                      {shareStoryDict.submitButton}
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
                          {message.storySuggestion && (
                            <Button
                              asChild
                              variant="secondary"
                              size="sm"
                              className="mt-3 w-full"
                            >
                              <Link
                                href={`/story/${message.storySuggestion.id}`}
                              >
                                <BookOpen className="mr-2 h-4 w-4" />
                                {shareStoryDict.aiHelper.readStory}:{' '}
                                {message.storySuggestion.title}
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


const HeroStackedCards = () => {
    const { language, dictionary } = useLanguage();
    const allStories = getTranslatedStories({ lang: language });
    const themeLabels: Record<StoryTheme, string> = {
      'Disaster Preparedness': dictionary.storyGrid.themes.disaster,
      'Local Wisdom': dictionary.storyGrid.themes.wisdom,
      Peacebuilding: dictionary.storyGrid.themes.peace,
    };
  
    const highlightedStories = [
      'smong-selamat-dari-lautan',
      'dapur-umum-perdamaian',
      'hutan-bakau-penjaga-pantai',
      'perempuan-penganyam-harapan',
    ]
      .map(id => allStories.find(s => s.id === id))
      .filter((s): s is Story => s !== null);
  
    const [activeIndex, setActiveIndex] = useState(0);
  
    const handleNext = () => {
      setActiveIndex(prev => (prev + 1) % highlightedStories.length);
    };
  
    const handlePrev = () => {
      setActiveIndex(
        prev => (prev - 1 + highlightedStories.length) % highlightedStories.length
      );
    };
  
    return (
      <div className="relative w-full max-w-4xl mx-auto mt-8 flex flex-col items-center justify-center">
        <div className="relative h-[450px] w-[300px] md:h-[500px] md:w-[350px]">
          <AnimatePresence>
            {highlightedStories.map((story, index) => {
              const position =
                (index - activeIndex + highlightedStories.length) %
                highlightedStories.length;
              const isVisible = position < 4;
              
              return isVisible && (
                  <motion.div
                    key={story.id}
                    initial={{
                      scale: 1 - position * 0.1,
                      y: position * 20,
                      zIndex: highlightedStories.length - position,
                    }}
                    animate={{
                      scale: 1 - position * 0.1,
                      y: position * 20,
                      zIndex: highlightedStories.length - position,
                      opacity: 1 - position * 0.25
                    }}
                    exit={{
                        y: -300,
                        opacity: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: 'easeInOut',
                    }}
                    className="absolute w-full h-full"
                  >
                    <Link href={`/story/${story.id}`}>
                      <Card className="h-full w-full overflow-hidden rounded-2xl shadow-2xl">
                          <div className="relative h-full w-full">
                              <Image 
                                  src={story.media.featuredImage}
                                  alt={story.title}
                                  fill
                                  className="object-cover"
                                  data-ai-hint={story.media.featuredImageHint}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                              <div className="absolute bottom-0 left-0 p-6 text-white">
                                  <Badge className="mb-2 backdrop-blur-sm bg-white/20 border-white/50">{themeLabels[story.aiThemes[0]] || story.aiThemes[0]}</Badge>
                                  <h3 className="font-headline text-2xl font-bold">{story.title}</h3>
                                  <p className="text-sm opacity-80">{story.author}</p>
                              </div>
                          </div>
                      </Card>
                    </Link>
                  </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
         <div className="mt-8 flex items-center gap-4">
            <Button onClick={handlePrev} variant="outline" size="icon" className="rounded-full h-12 w-12">
                <ChevronLeft />
            </Button>
            <span className="text-sm text-muted-foreground font-semibold">
                {activeIndex + 1} / {highlightedStories.length}
            </span>
            <Button onClick={handleNext} variant="outline" size="icon" className="rounded-full h-12 w-12">
                <ChevronRight />
            </Button>
        </div>
      </div>
    );
  };


export default function Home() {
  const { dictionary, language } = useLanguage();
  const homeDict = dictionary.home;

  // Tipe untuk pesan chatbot
  type Message = {
    role: 'user' | 'bot';
    text: string;
    storySuggestion?: any;
  };

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
            
            <HeroStackedCards />

            <div className="hero-v2-cta relative z-30 mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90"
              >
                <Link href="/explore">
                  <Rocket className="mr-2 h-5 w-5" />
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
                src="https://cdn.dribbble.com/userupload/32247153/file/original-1fe677ceff3cabb6bf2037dc808ace4d.jpg"
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

        <div>
          <SplitText
            text={homeDict.exploreStories.featuredTitle}
            className="mb-8 text-center font-headline text-2xl font-bold md:text-3xl"
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
                  <ArrowRight />
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
        <div className="relative overflow-hidden rounded-2xl bg-blue-600 text-white">
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
                  {homeDict.eduboard.cta} <ArrowRight />
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

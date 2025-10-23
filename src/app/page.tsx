
'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
  BrainCircuit,
  GraduationCap,
  Users2,
  HeartHandshake,
  School,
  Bot,
  Loader2,
  Send,
  Upload,
  Download,
  MessageSquareText,
} from 'lucide-react';
import InteractiveMap from '@/components/interactive-map';
import { Separator } from '@/components/ui/separator';
import MotionWrapper from '@/components/motion-wrapper';
import SplitText from '@/components/ui/split-text';
import LogoLoop from '@/components/ui/logo-loop';
import { useLanguage } from '@/context/language-context';
import type { Story } from '@/lib/types';
import StoryCarousel from '@/components/story-carousel';
import { useStories } from '@/context/story-context';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { generateFullStory } from '@/ai/flows/generate-full-story';
import StoryPreviewCard from '@/components/story-preview-card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { generateStoryRecommendation } from '@/ai/flows/generate-story-recommendation';
import type { GenerateStoryRecommendationOutput } from '@/ai/flows/story-recommendation-types';
import { Badge } from '@/components/ui/badge';

// This component is now self-contained for sharing stories
function ShareStorySection() {
  const { dictionary, language } = useLanguage();
  const shareStoryDict = dictionary.home.shareStory;
  const { stories, addStory } = useStories();

  const [isLoading, setIsLoading] = React.useState(false);
  const [generatedStory, setGeneratedStory] = React.useState<Story | null>(
    null
  );
  const [isPublished, setIsPublished] = React.useState(false);

  // Locations for manual form
  const locations = [
    ...new Set(stories.map(s => s.location?.name).filter(Boolean)),
  ];

  const storyTypes = [
    { id: 'Disaster Preparedness', label: shareStoryDict.storyTypes.disaster },
    { id: 'Peacebuilding', label: shareStoryDict.storyTypes.peace },
    { id: 'Local Wisdom', label: shareStoryDict.storyTypes.wisdom },
  ];

  // --- Manual Form Logic ---
  const manualFormSchema = z.object({
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

  type ManualFormValues = z.infer<typeof manualFormSchema>;

  const manualForm = useForm<ManualFormValues>({
    resolver: zodResolver(manualFormSchema),
    defaultValues: {
      name: '',
      location: '',
      storyType: [],
      story: '',
      agree: false,
    },
  });

  function onManualFormSubmit(data: ManualFormValues) {
    const { name, location, storyType, story } = data;
    const message = `Hello, I want to share a story.\nName: ${
      name || 'Anonymous'
    }\nLocation: ${location}\nStory Type: ${storyType.join(
      ', '
    )}\nStory:\n${story}`;
    const telegramUrl = `https://t.me/WaveOfVoice_Bot?text=${encodeURIComponent(
      message
    )}`;
    window.open(telegramUrl, '_blank');
  }

  // --- AI Form Logic ---
  const aiFormSchema = z.object({
    topic: z
      .string()
      .min(10, { message: 'Topic must be at least 10 characters.' }),
    narrator: z.string().min(2, { message: 'Narrator style is required.' }),
    vibe: z.string().min(2, { message: 'Vibe is required.' }),
  });

  type AiFormValues = z.infer<typeof aiFormSchema>;

  const aiForm = useForm<AiFormValues>({
    resolver: zodResolver(aiFormSchema),
    defaultValues: { topic: '', narrator: '', vibe: '' },
  });

  async function onAiFormSubmit(data: AiFormValues) {
    setIsLoading(true);
    setGeneratedStory(null);
    setIsPublished(false);
    try {
      const result = await generateFullStory(data);
      setGeneratedStory(result);
    } catch (error) {
      console.error('AI story generation failed:', error);
    } finally {
      setIsLoading(false);
    }
  }

  const handlePublish = () => {
    if (generatedStory) {
      addStory(generatedStory);
      setIsPublished(true);
    }
  };

  const handleDownload = () => {
    if (!generatedStory) return;
    const content = `Title: ${generatedStory.title}\nAuthor: ${generatedStory.author}\nLocation: ${generatedStory.location.name}\n\nSummary:\n${generatedStory.summary}\n\nFull Text:\n${generatedStory.fullText}`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${generatedStory.id}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="share-story" className="container mx-auto rounded-2xl px-4">
      <div className="relative mx-auto mb-12 max-w-3xl space-y-2 text-center">
        <SplitText
          text={shareStoryDict.title}
          className="font-headline text-3xl font-bold md:text-4xl"
        />
        <p className="text-muted-foreground">{shareStoryDict.description}</p>
      </div>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Tabs defaultValue="ai" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="manual">Submit Manually</TabsTrigger>
              <TabsTrigger value="ai">Generate with AI ✨</TabsTrigger>
            </TabsList>
            <TabsContent value="manual" className="mt-6">
              {/* Manual Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    {shareStoryDict.formTitle}
                  </CardTitle>
                  <CardDescription>
                    Submit your story to our team for review. Your voice matters.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...manualForm}>
                    <form
                      onSubmit={manualForm.handleSubmit(onManualFormSubmit)}
                      className="space-y-6"
                    >
                      <FormField
                        control={manualForm.control}
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
                        control={manualForm.control}
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
                                  <SelectItem key={loc} value={loc!}>
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
                        control={manualForm.control}
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
                                  control={manualForm.control}
                                  name="storyType"
                                  render={({ field }) => (
                                    <FormItem
                                      key={item.id}
                                      className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(
                                            item.id
                                          )}
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
                        control={manualForm.control}
                        name="story"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{shareStoryDict.labels.story}</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder={
                                  shareStoryDict.placeholders.story
                                }
                                className="h-32 resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={manualForm.control}
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
                              <FormLabel>
                                {shareStoryDict.labels.agree}
                              </FormLabel>
                              <FormDescription className="text-xs">
                                {shareStoryDict.descriptions.agree}
                              </FormDescription>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" size="lg" className="w-full">
                        <MessageSquareText className="mr-2 h-5 w-5" />
                        {shareStoryDict.submitButton.replace(
                          'WhatsApp',
                          'Telegram'
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="ai" className="mt-6">
              {/* AI Form */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">
                      AI Story Generator
                    </CardTitle>
                    <CardDescription>
                      Just provide a topic, and our AI will craft a compelling
                      story for you.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...aiForm}>
                      <form
                        onSubmit={aiForm.handleSubmit(onAiFormSubmit)}
                        className="space-y-6"
                      >
                        <FormField
                          control={aiForm.control}
                          name="topic"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Story Topic or Idea</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="e.g., A story about a fisherman who uses star constellations to navigate, or the tale of a village that survived a tsunami because of an old poem."
                                  className="h-24"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <FormField
                            control={aiForm.control}
                            name="narrator"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Narrator Style</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="e.g., Village Elder" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="Village Elder">
                                      Village Elder
                                    </SelectItem>
                                    <SelectItem value="Young Student">
                                      Young Student
                                    </SelectItem>
                                    <SelectItem value="Historian">
                                      Historian
                                    </SelectItem>
                                    <SelectItem value="Journalist">
                                      Journalist
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={aiForm.control}
                            name="vibe"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Story Vibe</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="e.g., Hopeful" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="Hopeful and inspiring">
                                      Hopeful & Inspiring
                                    </SelectItem>
                                    <SelectItem value="Serious and informative">
                                      Serious & Informative
                                    </SelectItem>
                                    <SelectItem value="Mysterious and ancient">
                                      Mysterious & Ancient
                                    </SelectItem>
                                    <SelectItem value="Action-packed and tense">
                                      Action-Packed & Tense
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          ) : (
                            <Sparkles className="mr-2 h-5 w-5" />
                          )}
                          {isLoading
                            ? 'Generating...'
                            : 'Generate Story with AI'}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>

                {isLoading && (
                  <div className="rounded-lg border border-dashed p-8 text-center">
                    <Loader2 className="mx-auto mb-2 h-8 w-8 animate-spin text-primary" />
                    <p className="text-muted-foreground">
                      AI is writing a masterpiece... Please wait.
                    </p>
                  </div>
                )}

                {generatedStory && (
                  <MotionWrapper>
                    <h2 className="mb-4 text-center text-2xl font-bold">
                      Your AI-Generated Story!
                    </h2>
                    <StoryPreviewCard story={generatedStory} />
                    <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
                      <Button
                        onClick={handlePublish}
                        disabled={isPublished}
                        size="lg"
                        variant="default"
                      >
                        <Upload className="mr-2 h-4 w-4" />
                        {isPublished ? 'Published!' : 'Publish Story'}
                      </Button>
                      <Button
                        onClick={handleDownload}
                        size="lg"
                        variant="outline"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download as .txt
                      </Button>
                    </div>
                    {isPublished && (
                      <p className="mt-2 text-center text-sm text-green-600">
                        Story successfully published! Check it out on the
                        Explore page.
                      </p>
                    )}
                  </MotionWrapper>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="sticky top-24 hidden lg:block">
          <AiHelper />
        </div>
      </div>
    </section>
  );
}

type AiHelperMessage = {
  role: 'user' | 'bot';
  text: string;
  recommendedStory?: GenerateStoryRecommendationOutput['recommendedStory'];
};

// AI Helper Chatbot component
function AiHelper() {
  const { dictionary, language } = useLanguage();
  const helperDict = dictionary.home.shareStory.aiHelper;

  const [messages, setMessages] = React.useState<AiHelperMessage[]>([
    { role: 'bot', text: helperDict.initialMessage },
  ]);
  const [input, setInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const scrollAreaRef = React.useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: AiHelperMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const result = await generateStoryRecommendation({
        query: input,
        language,
      });
      const botMessage: AiHelperMessage = {
        role: 'bot',
        text: result.response,
        recommendedStory: result.recommendedStory,
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: AiHelperMessage = {
        role: 'bot',
        text: helperDict.errorMessage,
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector('div');
      if (viewport) {
        viewport.scrollTop = viewport.scrollHeight;
      }
    }
  }, [messages]);

  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="flex-row items-center gap-3 space-y-0">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Bot className="h-6 w-6" />
        </div>
        <div>
          <CardTitle className="text-lg">{helperDict.title}</CardTitle>
          <CardDescription>{helperDict.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow overflow-hidden">
        <ScrollArea className="h-[400px] pr-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  'flex items-end gap-2',
                  message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                )}
              >
                <div
                  className={cn(
                    'max-w-[85%] rounded-lg p-3',
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  )}
                >
                  <p className="text-sm">{message.text}</p>
                  {message.recommendedStory && (
                    <Button
                      asChild
                      variant="secondary"
                      size="sm"
                      className="mt-2"
                    >
                      <a
                        href={`/story/${message.recommendedStory.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {helperDict.readStory}: {message.recommendedStory.title}
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-end gap-2">
                <div className="rounded-lg bg-muted p-3">
                  <Loader2 className="h-5 w-5 animate-spin" />
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
            handleSend();
          }}
          className="flex w-full items-center gap-2"
        >
          <Input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={helperDict.placeholder}
            disabled={isLoading}
          />
          <Button
            type="submit"
            size="icon"
            disabled={isLoading || !input.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </Card>
  );
}

export default function Home() {
  const { dictionary } = useLanguage();
  const homeDict = dictionary.home;
  const { stories } = useStories();

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

            <StoryCarousel stories={stories} />

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
                tools are freely accessible for all educational and non-profit
                organizations dedicated to building a better, more resilient
                future.
              </p>
            </div>
          </div>
        </div>
      </MotionWrapper>

      <MotionWrapper
        as="section"
        className="container mx-auto rounded-2xl px-4"
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
        className="container mx-auto rounded-2xl px-4"
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
        className="container mx-auto rounded-2xl px-4"
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
        <div className="overflow-hidden rounded-2xl border shadow-lg">
          <div className="h-[500px] w-full">
            <InteractiveMap stories={stories} />
          </div>
          <div className="border-t p-4 text-center">
            <p className="text-sm text-muted-foreground">
              {homeDict.exploreStories.mapCta}
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
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
        className="container mx-auto rounded-2xl px-4"
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
        className="container mx-auto rounded-2xl px-4"
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
        className="container mx-auto rounded-2xl px-4"
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

      {/* Share Story Section */}
      <MotionWrapper>
        <ShareStorySection />
      </MotionWrapper>


      <MotionWrapper as="section" className="container mx-auto px-4 text-center">
        <p className="mx-auto max-w-2xl font-semibold italic text-lg text-center text-muted-foreground">
          {homeDict.quote}
        </p>
      </MotionWrapper>

      <MotionWrapper
        as="section"
        className="container mx-auto rounded-2xl px-4 text-center"
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

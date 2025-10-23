
'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MessageSquareText, Sparkles, Loader2 } from 'lucide-react';
import { getTranslatedStories } from '@/lib/data';
import MotionWrapper from '@/components/motion-wrapper';
import { useLanguage } from '@/context/language-context';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { generateFullStory } from '@/ai/flows/generate-full-story';
import type { Story } from '@/lib/types';
import StoryPreviewCard from '@/components/story-preview-card';

// Manual submission form component
function ManualStoryForm() {
  const { dictionary, language } = useLanguage();
  const shareStoryDict = dictionary.home.shareStory;

  const allStories = getTranslatedStories({ lang: language });
  const locations = [
    ...new Set(allStories.map(s => s.location?.name).filter(Boolean)),
  ];
  
  const storyTypes = [
    { id: 'Disaster Preparedness', label: shareStoryDict.storyTypes.disaster },
    { id: 'Peacebuilding', label: shareStoryDict.storyTypes.peace },
    { id: 'Local Wisdom', label: shareStoryDict.storyTypes.wisdom },
  ];

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

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', location: '', storyType: [], story: '', agree: false },
  });

  function onFormSubmit(data: FormValues) {
    const { name, location, storyType, story } = data;
    const message = `Hello, I want to share a story.\nName: ${name || 'Anonymous'}\nLocation: ${location}\nStory Type: ${storyType.join(', ')}\nStory:\n${story}`;
    const telegramUrl = `https://t.me/WaveOfVoice_Bot?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{shareStoryDict.formTitle}</CardTitle>
        <CardDescription>Submit your story to our team for review. Your voice matters.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onFormSubmit)} className="space-y-6">
            <FormField
              control={form.control} name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{shareStoryDict.labels.name}</FormLabel>
                  <FormControl>
                    <Input placeholder={shareStoryDict.placeholders.name} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control} name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{shareStoryDict.labels.location}</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={shareStoryDict.placeholders.location} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {locations.map(loc => ( <SelectItem key={loc} value={loc!}>{loc}</SelectItem> ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control} name="storyType"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">{shareStoryDict.labels.storyType}</FormLabel>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {storyTypes.map(item => (
                      <FormField
                        key={item.id} control={form.control} name="storyType"
                        render={({ field }) => (
                          <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={checked => {
                                  return checked
                                    ? field.onChange([...(field.value || []), item.id])
                                    : field.onChange((field.value || [])?.filter(value => value !== item.id));
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">{item.label}</FormLabel>
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
              control={form.control} name="story"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{shareStoryDict.labels.story}</FormLabel>
                  <FormControl>
                    <Textarea placeholder={shareStoryDict.placeholders.story} className="h-32 resize-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control} name="agree"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-2">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>{shareStoryDict.labels.agree}</FormLabel>
                    <FormDescription className="text-xs">{shareStoryDict.descriptions.agree}</FormDescription>
                  </div>
                  <FormMessage />
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
  );
}

// AI generation form component
function AiStoryGenerator() {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedStory, setGeneratedStory] = useState<Story | null>(null);

  const formSchema = z.object({
    topic: z.string().min(10, { message: "Topic must be at least 10 characters." }),
    narrator: z.string().min(2, { message: "Narrator style is required." }),
    vibe: z.string().min(2, { message: "Vibe is required." }),
  });

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { topic: '', narrator: '', vibe: '' },
  });

  async function onFormSubmit(data: FormValues) {
    setIsLoading(true);
    setGeneratedStory(null);
    try {
      const result = await generateFullStory(data);
      setGeneratedStory(result);
    } catch (error) {
      console.error("AI story generation failed:", error);
      // You can add a toast notification here for the user
    } finally {
      setIsLoading(false);
    }
  }
  
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">AI Story Generator</CardTitle>
          <CardDescription>Just provide a topic, and our AI will craft a compelling story for you.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onFormSubmit)} className="space-y-6">
              <FormField
                control={form.control} name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Story Topic or Idea</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., A story about a fisherman who uses star constellations to navigate, or the tale of a village that survived a tsunami because of an old poem." className="h-24" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control} name="narrator"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Narrator Style</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger><SelectValue placeholder="e.g., Village Elder" /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Village Elder">Village Elder</SelectItem>
                          <SelectItem value="Young Student">Young Student</SelectItem>
                          <SelectItem value="Historian">Historian</SelectItem>
                          <SelectItem value="Journalist">Journalist</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control} name="vibe"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Story Vibe</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger><SelectValue placeholder="e.g., Hopeful" /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Hopeful and inspiring">Hopeful & Inspiring</SelectItem>
                          <SelectItem value="Serious and informative">Serious & Informative</SelectItem>
                          <SelectItem value="Mysterious and ancient">Mysterious & Ancient</SelectItem>
                          <SelectItem value="Action-packed and tense">Action-Packed & Tense</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Sparkles className="mr-2 h-5 w-5" />}
                {isLoading ? 'Generating...' : 'Generate Story with AI'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && (
        <div className="text-center p-8 rounded-lg border border-dashed">
            <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-2" />
            <p className="text-muted-foreground">AI is writing a masterpiece... Please wait.</p>
        </div>
      )}

      {generatedStory && (
        <MotionWrapper>
            <h2 className="text-2xl font-bold text-center mb-4">Your AI-Generated Story!</h2>
            <StoryPreviewCard story={generatedStory} />
        </MotionWrapper>
      )}

    </div>
  );
}


// Main page component
export default function ShareStoryPage() {
  const { dictionary } = useLanguage();
  const shareStoryDict = dictionary.home.shareStory;

  return (
    <div className="container mx-auto px-4 py-12">
      <MotionWrapper>
        <div className="mb-12 text-center">
          <h1 className="font-headline text-4xl font-bold md:text-5xl">
            {shareStoryDict.title}
          </h1>
          <p className="mx-auto mt-2 max-w-3xl text-muted-foreground">
            {shareStoryDict.description}
          </p>
        </div>
      </MotionWrapper>

      <div className="mx-auto max-w-4xl">
        <Tabs defaultValue="manual" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="manual">Submit Manually</TabsTrigger>
                <TabsTrigger value="ai">Generate with AI ✨</TabsTrigger>
            </TabsList>
            <TabsContent value="manual" className="mt-6">
                <ManualStoryForm />
            </TabsContent>
            <TabsContent value="ai" className="mt-6">
                <AiStoryGenerator />
            </TabsContent>
        </Tabs>
      </div>

    </div>
  );
}

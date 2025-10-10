
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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  MessageSquareText,
  Bot,
  Send,
  User,
  Loader2,
  BookOpen,
} from 'lucide-react';
import { stories as staticStories } from '@/lib/data';
import MotionWrapper from '@/components/motion-wrapper';
import { ScrollArea } from '@/components/ui/scroll-area';
// import { askSiagaBot, AskSiagaBotOutput } from '@/ai/flows/ask-siaga-bot';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';

// Tipe untuk pesan chatbot
type Message = {
  role: 'user' | 'bot';
  text: string;
  storySuggestion?: any; // AskSiagaBotOutput['storySuggestion'];
};

// Komponen utama halaman
export default function ShareStoryPage() {
  const { dictionary } = useLanguage();
  const shareStoryDict = dictionary.home.shareStory;

  const formSchema = z.object({
    name: z.string().optional(),
    location: z.string().nonempty({ message: shareStoryDict.validation.locationRequired }),
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
    { id: 'Tsunami', label: shareStoryDict.storyTypes.tsunami },
    { id: 'Recovery', label: shareStoryDict.storyTypes.recovery },
    { id: 'Peace Process', label: shareStoryDict.storyTypes.peace },
    { id: 'Local Wisdom', label: shareStoryDict.storyTypes.wisdom },
  ];
  
  const locations = [...new Set(staticStories.filter(s => s.location).map(s => s.location!.name))];
  
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
            text: "Maaf, fitur AI saat ini sedang tidak tersedia.",
        };
        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
    }, 1000);
  };

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

      <div className="grid gap-12 lg:grid-cols-2 lg:items-start rounded-2xl">
        {/* Kolom Kiri: Form */}
        <MotionWrapper delay={0.1}>
          <Card className="lg:sticky lg:top-24">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">{shareStoryDict.formTitle}</CardTitle>
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
                          <Input placeholder={shareStoryDict.placeholders.name} {...field} />
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
                              <SelectValue placeholder={shareStoryDict.placeholders.location} />
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
                          <FormLabel className="text-base">{shareStoryDict.labels.storyType}</FormLabel>
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
                          <FormLabel>
                           {shareStoryDict.labels.agree}
                          </FormLabel>
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

        {/* Kolom Kanan: AI Assistant */}
        <MotionWrapper delay={0.2}>
          <Card className="flex h-full min-h-[500px] flex-col lg:h-[80vh] lg:sticky lg:top-24">
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
                <ScrollArea className="h-full pr-4">
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
                            <Button asChild variant="secondary" size="sm" className="mt-3 w-full">
                              <Link
                                href={`/story/${message.storySuggestion.id}`}
                              >
                                <BookOpen className="mr-2 h-4 w-4"/>
                                {shareStoryDict.aiHelper.readStory}: {message.storySuggestion.title}
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
    </div>
  );
}


'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  X,
  Share2,
  BookOpen,
  Bot,
  Send,
  User,
  Loader2,
  Sparkles,
} from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import {
  generateStoryRecommendation,
  GenerateStoryRecommendationOutput,
} from '@/ai/flows/generate-story-recommendation';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/language-context';
import Image from 'next/image';

type StoryRecommendation = NonNullable<GenerateStoryRecommendationOutput['recommendedStory']>;

type Message = {
  role: 'user' | 'bot';
  text: string;
  recommendedStory?: StoryRecommendation;
};

export default function ChatbotFab() {
  const [isOpen, setIsOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { dictionary, language } = useLanguage();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const openChat = () => {
    setIsOpen(false);
    setIsChatOpen(true);
    if (messages.length === 0) {
      setMessages([
        {
          role: 'bot',
          text: dictionary.chatbot.initialMessage,
        },
      ]);
    }
  };

  const closeChat = () => setIsChatOpen(false);

  const handleSend = async () => {
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
      console.error("Chatbot error:", error);
      const errorMessage: Message = {
        role: 'bot',
        text: dictionary.chatbot.errorMessage,
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    // Auto-scroll to bottom
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('div');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }
  }, [messages]);


  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mb-4 flex flex-col items-end gap-3"
            >
              <Button
                variant="secondary"
                className="h-auto w-auto rounded-full p-4 shadow-lg"
                onClick={openChat}
              >
                <Bot className="mr-2" />
                {dictionary.chatbot.fabAsk}
              </Button>
              <Button
                variant="secondary"
                className="h-auto w-auto rounded-full p-4 shadow-lg"
                asChild
              >
                <Link href="/explore">
                  <BookOpen className="mr-2" /> {dictionary.chatbot.fabExplore}
                </Link>
              </Button>
              <Button
                variant="default"
                className="h-auto w-auto rounded-full bg-blue-500 p-4 text-white shadow-lg hover:bg-blue-600"
                asChild
              >
                <Link href="/share-story">
                  <Share2 className="mr-2" /> {dictionary.chatbot.fabShare}
                </Link>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
        <Button
          onClick={toggleMenu}
          className="h-16 w-16 rounded-full bg-primary shadow-lg"
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={isOpen ? 'x' : 'plus'}
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={28} /> : <Plus size={28} />}
            </motion.div>
          </AnimatePresence>
        </Button>
      </div>

      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-40 sm:bottom-8 sm:right-8"
          >
            <Card className="flex h-[70vh] w-[90vw] flex-col shadow-2xl sm:w-[400px]">
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>{dictionary.chatbot.title}</CardTitle>
                    <CardDescription>{dictionary.chatbot.description}</CardDescription>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={closeChat}>
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <ScrollArea className="h-full pr-4" ref={scrollAreaRef}>
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={cn(
                          'flex items-end gap-3',
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
                            <Link href={`/story/${message.recommendedStory.id}`} onClick={closeChat} className="mt-3 block rounded-lg bg-background/50 p-3 hover:bg-background/70">
                                <p className="text-xs font-semibold text-primary">{dictionary.chatbot.relatedStory}</p>
                                <p className="font-bold">{message.recommendedStory.title}</p>
                                <p className="mt-1 text-xs opacity-80 line-clamp-2">{message.recommendedStory.summary}</p>
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex flex-row items-end gap-3">
                         <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-muted">
                            <Bot size={16} />
                        </span>
                        <div className="max-w-[85%] rounded-lg bg-muted p-3 text-sm">
                           <Loader2 className="h-5 w-5 animate-spin" />
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>
              </CardContent>
              <CardFooter>
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
                    placeholder={dictionary.chatbot.placeholder}
                    disabled={isLoading}
                  />
                  <Button type="submit" size="icon" disabled={isLoading}>
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


'use client';

import { useState, useEffect } from 'react';
import type { Story } from '@/lib/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Badge } from './ui/badge';
import Link from 'next/link';
import { Button } from './ui/button';
import { Eye, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/language-context';
import Image from 'next/image';

interface StoryCardProps {
  story: Story;
}

const StoryCard = ({ story }: StoryCardProps) => {
  const [stats, setStats] = useState({ views: 0, likes: 0 });
  const { dictionary } = useLanguage();
  const storyGridDict = dictionary.storyGrid;

  const themeLabels: Record<string, string> = {
    'Disaster Preparedness': storyGridDict.themes.disaster,
    'Local Wisdom': storyGridDict.themes.wisdom,
    Peacebuilding: storyGridDict.themes.peace,
  };


  useEffect(() => {
    // Generate random stats on the client side to avoid hydration mismatch
    setStats({
      views: Math.floor(Math.random() * 2000) + 100,
      likes: Math.floor(Math.random() * 500) + 20,
    });
  }, []);

  return (
    <Link href={`/story/${story.id}`} className="group block h-full">
      <Card className="flex h-full flex-col overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5">
        <div className="relative h-48 w-full">
            <Image
                src={story.media.featuredImage}
                alt={story.title}
                fill
                className="object-cover"
                data-ai-hint={story.media.featuredImageHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"/>
            <div className="absolute top-2 right-2">
                 <Badge
                    className={'border bg-white/80 text-black backdrop-blur-sm'}
                  >
                    {themeLabels[story.aiThemes[0]] || story.aiThemes[0]}
                  </Badge>
            </div>
        </div>
        <CardHeader className="px-6 pt-4">
          <p className="mb-1 text-sm font-medium text-muted-foreground">
            {story.author}
          </p>
          <CardTitle className="font-headline text-xl font-bold leading-tight transition-colors group-hover:text-primary">
            {story.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow px-6 pt-0">
          <CardDescription className="line-clamp-3 text-sm">
            {story.summary}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex-col items-start gap-4 p-6">
          <div className="flex w-full items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Eye className="h-4 w-4" />
                <span>{stats.views}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Heart className="h-4 w-4" />
                <span>{stats.likes}</span>
              </div>
            </div>
            <Button
              variant="secondary"
              size="sm"
              className="group-hover:bg-primary group-hover:text-primary-foreground"
            >
              {dictionary.storyCard.readMore}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default StoryCard;

    
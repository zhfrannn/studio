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
import { Eye, Heart, ScrollText, AlertTriangle, Users } from 'lucide-react';
import WaveIcon from './icons/wave-icon';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/language-context';

interface StoryCardProps {
  story: Story;
}

const themeMeta: {
  [key: string]: { color: string; icon: JSX.Element; badgeColor: string };
} = {
  'Disaster Preparedness': {
    color: 'bg-blue-500',
    icon: <WaveIcon className="h-10 w-10 text-white" />,
    badgeColor:
      'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/50 dark:text-blue-200 dark:border-blue-700',
  },
  'Local Wisdom': {
    color: 'bg-yellow-500',
    icon: <ScrollText className="h-10 w-10 text-white" />,
    badgeColor:
      'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/50 dark:text-yellow-200 dark:border-yellow-700',
  },
  Peacebuilding: {
    color: 'bg-green-500',
    icon: <Users className="h-10 w-10 text-white" />,
    badgeColor:
      'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-200 dark:border-green-700',
  },
  Emergency: {
    // Added for Flash Flood story if needed
    color: 'bg-red-500',
    icon: <AlertTriangle className="h-10 w-10 text-white" />,
    badgeColor:
      'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/50 dark:text-red-200 dark:border-red-700',
  },
};

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

  // Use first theme for card theming, or a default
  const primaryTheme = story.aiThemes[0] || 'Disaster Preparedness';
  const theme = themeMeta[primaryTheme];

  return (
    <Link href={`/story/${story.id}`} className="group block h-full">
      <Card className="flex h-full flex-col overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5">
        <div
          className={cn(
            'relative flex h-36 w-full items-center justify-center rounded-t-2xl',
            theme.color
          )}
        >
          {theme.icon}
        </div>
        <CardHeader className="relative -mt-8 px-6">
          <div className="flex flex-wrap gap-2">
            {story.aiThemes.map(themeName => {
              const badgeTheme = themeMeta[themeName];
              return (
                <Badge
                  key={themeName}
                  className={cn('border', badgeTheme.badgeColor)}
                >
                  {themeLabels[themeName] || themeName}
                </Badge>
              );
            })}
          </div>
        </CardHeader>
        <CardContent className="flex-grow px-6 pt-2">
          <p className="mb-2 text-sm font-medium text-muted-foreground">
            {story.author}
          </p>
          <CardTitle className="mb-2 font-headline text-xl leading-tight transition-colors group-hover:text-primary">
            {story.title}
          </CardTitle>
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

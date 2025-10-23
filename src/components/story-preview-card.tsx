
'use client';

import type { Story } from '@/lib/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Badge } from './ui/badge';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight, BookOpen } from 'lucide-react';
import Image from 'next/image';

interface StoryPreviewCardProps {
  story: Story;
}

export default function StoryPreviewCard({ story }: StoryPreviewCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden rounded-2xl shadow-lg transition-all duration-300">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src={story.media.featuredImage}
          alt={story.title}
          fill
          className="object-cover"
          data-ai-hint={story.media.featuredImageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-3 right-3">
          <Badge variant="secondary">✨ AI Generated</Badge>
        </div>
      </div>
      <CardHeader className="p-6">
        <div className="flex flex-wrap gap-2 mb-2">
            {story.aiThemes.map(theme => (
                <Badge key={theme} variant="outline">{theme}</Badge>
            ))}
        </div>
        <CardTitle className="font-headline text-2xl font-bold leading-tight">
          {story.title}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground !mt-2">
          By {story.author} &middot; {story.location.name}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow p-6 pt-0">
        <p className="line-clamp-4 text-muted-foreground">{story.summary}</p>
      </CardContent>
      <div className="p-6 pt-0">
        <Button asChild className="w-full">
          <Link href={`/story/${story.id}`}>
            <BookOpen className="mr-2 h-4 w-4" /> Read Full Story (Preview)
          </Link>
        </Button>
        <p className="text-xs text-center mt-2 text-muted-foreground">Note: This is a preview. The story is not saved to the database yet.</p>
      </div>
    </Card>
  );
}

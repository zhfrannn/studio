import type { Story } from '@/lib/types';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import Image from 'next/image';
import { Badge } from './ui/badge';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

interface StoryCardProps {
  story: Story;
}

const StoryCard = ({ story }: StoryCardProps) => {
  return (
    <Link href={`/story/${story.id}`} className="group block">
      <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <CardHeader className="p-0">
          <div className="relative aspect-video">
            <Image
              src={story.media.featuredImage}
              alt={story.title}
              fill
              className="object-cover"
              data-ai-hint={story.media.featuredImageHint}
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-4">
          <CardTitle className="mb-2 font-headline text-lg transition-colors group-hover:text-primary">
            {story.title}
          </CardTitle>
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {story.summary}
          </p>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-2 p-4 pt-0">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span>{story.location.name}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {story.aiThemes.map(theme => (
              <Badge key={theme} variant="secondary">
                {theme}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default StoryCard;

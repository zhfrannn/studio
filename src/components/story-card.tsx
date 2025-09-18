import type { Story } from '@/lib/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import Image from 'next/image';
import { Badge } from './ui/badge';
import Link from 'next/link';
import { User } from 'lucide-react';

interface StoryCardProps {
  story: Story;
}

const StoryCard = ({ story }: StoryCardProps) => {
  const themeColor =
    story.aiThemes[0] === 'Disaster Preparedness'
      ? 'bg-blue-500'
      : story.aiThemes[0] === 'Local Wisdom'
      ? 'bg-green-500'
      : 'bg-purple-500';

  return (
    <Link href={`/story/${story.id}`} className="group block h-full">
      <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className={`relative h-32 w-full ${themeColor}`}>
          {/* You can add a placeholder icon or pattern here */}
        </div>
        <CardContent className="flex-grow p-6">
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
              <User className="h-4 w-4 text-muted-foreground" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              {story.author}
            </span>
          </div>
          <CardTitle className="mb-2 font-headline text-lg transition-colors group-hover:text-primary">
            {story.title}
          </CardTitle>
          <CardDescription className="line-clamp-3 text-sm">
            {story.summary}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex-wrap gap-2 p-6 pt-0">
          {story.aiThemes.map(theme => (
            <Badge key={theme} variant="secondary">
              {theme}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default StoryCard;

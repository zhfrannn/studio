import StoryGrid from './story-grid';
import { stories } from '@/lib/data';
import { BookDashed } from 'lucide-react';

export default function ExplorePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="relative inline-block font-headline text-4xl md:text-5xl">
          Stories from Aceh
          <span className="absolute -bottom-2 left-0 h-1 w-2/3 bg-primary"></span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Explore personal experiences and wisdom from the people of Aceh
        </p>
      </div>
      <StoryGrid allStories={stories} />
    </div>
  );
}

import StoryGrid from './story-grid';
import { stories } from '@/lib/data';

export default function ExplorePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl md:text-5xl">
          Jelajahi Arsip Cerita
        </h1>
        <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
          Gunakan peta, filter tema, atau tipe media untuk menemukan cerita yang
          menginspirasi Anda.
        </p>
      </div>
      <StoryGrid allStories={stories} />
    </div>
  );
}

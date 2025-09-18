export type StoryTheme =
  | 'Disaster Preparedness'
  | 'Local Wisdom'
  | 'Peacebuilding';

export interface Story {
  id: string;
  title: string;
  author: string;
  location: {
    name: string;
    lat: number;
    lng: number;
  };
  summary: string;
  fullText: string;
  aiThemes: StoryTheme[];
  media: {
    videoUrl?: string;
    comicUrl?: string;
    quizUrl?: string;
    featuredImage: string;
    featuredImageHint: string;
  };
  status: 'submitted' | 'processed' | 'published';
}

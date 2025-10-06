import type { Story } from './types';
import storiesData from './i18n/stories.json';

// The stories array is now built from the JSON file.
// This contains only the non-translatable parts of the stories.
// The translatable content (title, summary, fullText) comes from i18n JSON files.
export const stories: Omit<Story, 'title' | 'summary' | 'fullText'>[] = storiesData.stories;

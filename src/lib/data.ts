import type { Story, StoryTheme } from './types';
import storiesData from './i18n/stories.json';
import idDict from './i18n/id.json';
import enDict from './i18n/en.json';

// The stories array is now built from the JSON file.
// This contains only the non-translatable parts of the stories.
// The translatable content (title, summary, fullText) comes from i18n JSON files.
export const stories: Omit<Story, 'title' | 'summary' | 'fullText' | 'aiThemes'>[] = storiesData.stories;

const dictionaries = {
  id: idDict,
  en: enDict,
};

type Language = 'id' | 'en';

interface GetTranslatedStoriesParams {
  lang: Language;
}

/**
 * A centralized utility function to get story data combined with translations.
 * @param {GetTranslatedStoriesParams} params - The language parameter.
 * @returns {Story[]} An array of fully-formed story objects.
 */
export function getTranslatedStories({ lang }: GetTranslatedStoriesParams): Story[] {
  const dictionary = dictionaries[lang];
  
  return storiesData.stories.map(story => {
    const translatedContent = dictionary.stories[story.id as keyof typeof dictionary.stories];

    // Ensure we have a fallback for untranslated content to prevent errors
    const title = translatedContent?.title || story.id.replace(/-/g, ' ');
    const summary = translatedContent?.summary || 'Summary not available.';
    const fullText = translatedContent?.fullText || 'Full text not available.';

    return {
      ...story,
      title,
      summary,
      fullText,
      aiThemes: story.aiThemes as StoryTheme[],
    };
  });
}

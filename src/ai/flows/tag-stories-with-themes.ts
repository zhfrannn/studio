'use server';

import {ai} from '@/ai/genkit'; // <-- Cukup impor 'ai'
import {z} from 'zod';

const TagStoriesWithThemesInputSchema = z.object({
  storyText: z
    .string()
    .describe('The text content of the story to be tagged with themes.'),
});
export type TagStoriesWithThemesInput = z.infer<
  typeof TagStoriesWithThemesInputSchema
>;

const TagStoriesWithThemesOutputSchema = z.object({
  aiThemes: z
    .array(z.string())
    .describe('An array of AI-generated themes for the story.'),
});
export type TagStoriesWithThemesOutput = z.infer<
  typeof TagStoriesWithThemesOutputSchema
>;

export async function tagStoriesWithThemes(
  input: TagStoriesWithThemesInput
): Promise<TagStoriesWithThemesOutput> {
  return tagStoriesWithThemesFlow(input);
}

const tagStoriesWithThemesPrompt = ai.definePrompt({
  name: 'tagStoriesWithThemesPrompt',
  input: {schema: TagStoriesWithThemesInputSchema},
  output: {schema: TagStoriesWithThemesOutputSchema},
  prompt: `You are an AI assistant tasked with identifying key themes in user-submitted stories related to disaster preparedness, local wisdom, and peacebuilding in Aceh.

  Based on the story text provided, generate a list of relevant themes from the following allowed themes only: 'Disaster Preparedness', 'Local Wisdom', 'Peacebuilding'.

  Story Text: {{{storyText}}}
  `,
});

const tagStoriesWithThemesFlow = ai.defineFlow(
  {
    name: 'tagStoriesWithThemesFlow',
    inputSchema: TagStoriesWithThemesInputSchema,
    outputSchema: TagStoriesWithThemesOutputSchema,
  },
  async input => {
    // Tidak perlu lagi parameter { model: ... } karena sudah diatur secara global
    const {output} = await tagStoriesWithThemesPrompt(input);
    return output!;
  }
);

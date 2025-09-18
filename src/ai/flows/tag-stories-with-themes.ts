'use server';

/**
 * @fileOverview This file defines a Genkit flow for automatically tagging stories with relevant themes using AI.
 *
 * - tagStoriesWithThemes - A function that triggers the AI theme tagging process.
 * - TagStoriesWithThemesInput - The input type for the tagStoriesWithThemes function, which includes the story text.
 * - TagStoriesWithThemesOutput - The return type for the tagStoriesWithThemes function, which is an array of themes.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

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

  Based on the story text provided, generate a list of relevant themes. These themes should be concise and reflect the main topics discussed in the story.

  Story Text: {{{storyText}}}

  Themes:`, // Added a descriptive prompt to guide the model
});

const tagStoriesWithThemesFlow = ai.defineFlow(
  {
    name: 'tagStoriesWithThemesFlow',
    inputSchema: TagStoriesWithThemesInputSchema,
    outputSchema: TagStoriesWithThemesOutputSchema,
  },
  async input => {
    const {output} = await tagStoriesWithThemesPrompt(input);
    return output!;
  }
);

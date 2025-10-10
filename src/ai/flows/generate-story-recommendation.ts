
'use server';

/**
 * @fileOverview Defines a Genkit flow for the Bot Siaga, an AI assistant that recommends stories.
 *
 * - generateStoryRecommendation - The main function that handles chatbot queries and recommends stories.
 * - GenerateStoryRecommendationInput - The input type for the function.
 * - GenerateStoryRecommendationOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { getTranslatedStories } from '@/lib/data';
import { z } from 'zod';

const StorySchema = z.object({
  id: z.string(),
  title: z.string(),
  summary: z.string(),
});
export type Story = z.infer<typeof StorySchema>;

// Input schema for the main flow
export const GenerateStoryRecommendationInputSchema = z.object({
  query: z.string().describe("The user's question or message to the bot."),
  language: z.enum(['id', 'en']).describe('The language for the response.'),
});
export type GenerateStoryRecommendationInput = z.infer<
  typeof GenerateStoryRecommendationInputSchema
>;

// Output schema for the main flow
export const GenerateStoryRecommendationOutputSchema = z.object({
  response: z.string().describe("The AI-generated response to the user's query."),
  recommendedStory: StorySchema.optional().describe(
    'The most relevant story recommendation if applicable.'
  ),
});
export type GenerateStoryRecommendationOutput = z.infer<
  typeof GenerateStoryRecommendationOutputSchema
>;

// Tool: A function for the AI to find relevant stories
const findRelevantStoryTool = ai.defineTool(
  {
    name: 'findRelevantStory',
    description:
      'Finds the most relevant story from the database based on a user query.',
    inputSchema: z.object({
      query: z.string(),
      language: z.enum(['id', 'en']),
    }),
    outputSchema: StorySchema.optional(),
  },
  async ({ query, language }) => {
    console.log(`Tool: Searching for stories with query: "${query}" in ${language}`);
    const stories = getTranslatedStories({ lang: language });
    // A simple search: find the first story where the title or summary includes the query
    const foundStory = stories.find(
      story =>
        story.title.toLowerCase().includes(query.toLowerCase()) ||
        story.summary.toLowerCase().includes(query.toLowerCase())
    );
    return foundStory ? { id: foundStory.id, title: foundStory.title, summary: foundStory.summary } : undefined;
  }
);


// The main flow definition
const recommendationFlow = ai.defineFlow(
  {
    name: 'generateStoryRecommendationFlow',
    inputSchema: GenerateStoryRecommendationInputSchema,
    outputSchema: GenerateStoryRecommendationOutputSchema,
  },
  async ({ query, language }) => {
    const { output } = await ai.generate({
      model: 'gemini-1.5-flash',
      tools: [findRelevantStoryTool],
      prompt: `You are Bot Siaga, a friendly and helpful AI assistant for the 'Wave of Voice' platform.
      Your expertise is in disaster preparedness, Acehnese local wisdom, and peacebuilding.
      Your answers should be concise, informative, and empathetic. Always answer in the specified language: ${language}.

      1. First, understand the user's query: "${query}".
      2. If the query seems to be about a specific topic (like 'smong', 'kopi', 'bakau'), use the 'findRelevantStory' tool to search for a story about that topic.
      3. Based on the user's query and any story you find, provide a direct, helpful answer.
      4. If you used the tool and found a relevant story, include its details in the 'recommendedStory' field of your response. Do not make up stories.
      5. If the query is general (like 'halo', 'terima kasih'), just provide a friendly response without searching for a story.`,
      output: {
        schema: GenerateStoryRecommendationOutputSchema,
      },
    });

    return output!;
  }
);

// The exported function that the client-side will call
export async function generateStoryRecommendation(
  input: GenerateStoryRecommendationInput
): Promise<GenerateStoryRecommendationOutput> {
  return recommendationFlow(input);
}

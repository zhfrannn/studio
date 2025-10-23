'use server';

import { ai } from '@/ai/genkit'; // <-- Cukup impor 'ai'
import { getTranslatedStories } from '@/lib/data';
import { z } from 'zod';
import {
  GenerateStoryRecommendationInputSchema,
  GenerateStoryRecommendationOutputSchema,
  type GenerateStoryRecommendationInput,
  type GenerateStoryRecommendationOutput,
} from './story-recommendation-types';


const findRelevantStoryTool = ai.defineTool(
  {
    name: 'findRelevantStory',
    description:
      'Finds the most relevant story from the database based on a user query.',
    inputSchema: z.object({
      query: z.string(),
      language: z.enum(['id', 'en', 'ace']),
    }),
    outputSchema: z.object({
      id: z.string(),
      title: z.string(),
      summary: z.string(),
    }).optional(),
  },
  async ({ query, language }) => {
    console.log(`Tool: Searching for stories with query: "${query}" in ${language}`);
    const stories = getTranslatedStories({ lang: language });
    const foundStory = stories.find(
      story =>
        story.title.toLowerCase().includes(query.toLowerCase()) ||
        story.summary.toLowerCase().includes(query.toLowerCase())
    );
    return foundStory ? { id: foundStory.id, title: foundStory.title, summary: foundStory.summary } : undefined;
  }
);

const recommendationPrompt = ai.definePrompt({
  name: 'recommendationPrompt',
  input: { schema: GenerateStoryRecommendationInputSchema },
  output: { schema: GenerateStoryRecommendationOutputSchema },
  prompt: `You are Bot Siaga, a friendly and helpful AI assistant for the 'Wave of Voice' platform.
  Your expertise is in disaster preparedness, Acehnese local wisdom, and peacebuilding.
  Your answers should be concise, informative, and empathetic. Always answer in the specified language: {{{language}}}.

  1. First, understand the user's query: "{{{query}}}".
  2. If the query seems to be about a specific topic (like 'smong', 'kopi', 'bakau', 'tsunami', 'gempa', 'banjir', 'likuifaksi'), use the 'findRelevantStory' tool to search for a story about that topic.
  3. Based on the user's query and any story you find, provide a direct, helpful answer.
  4. If you used the tool and found a relevant story, include its details in the 'recommendedStory' field of your response. Do not make up stories.
  5. If the query is a general greeting or thanks (like 'halo', 'terima kasih', 'hi', 'thanks'), just provide a friendly response without searching for a story.`,
  tools: [findRelevantStoryTool]
});


const recommendationFlow = ai.defineFlow(
  {
    name: 'generateStoryRecommendationFlow',
    inputSchema: GenerateStoryRecommendationInputSchema,
    outputSchema: GenerateStoryRecommendationOutputSchema,
  },
  async (input) => {
    // Tidak perlu lagi parameter { model: ... } karena sudah diatur secara global
    const { output } = await recommendationPrompt(input);
    return output!;
  }
);

export async function generateStoryRecommendation(
  input: GenerateStoryRecommendationInput
): Promise<GenerateStoryRecommendationOutput> {
  return recommendationFlow(input);
}

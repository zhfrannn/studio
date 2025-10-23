import { z } from 'zod';

export const StorySchema = z.object({
  id: z.string(),
  title: z.string(),
  summary: z.string(),
});
export type Story = z.infer<typeof StorySchema>;

// Input schema for the main flow
export const GenerateStoryRecommendationInputSchema = z.object({
  query: z.string().describe("The user's question or message to the bot."),
  language: z.enum(['id', 'en', 'ace']).describe('The language for the response.'),
});
export type GenerateStoryRecommendationInput = z.infer<
  typeof GenerateStoryRecommendationInputSchema
>;

// Output schema for the main flow
export const GenerateStoryRecommendationOutputSchema = z.object({
  response: z
    .string()
    .describe("The AI-generated response to the user's query."),
  recommendedStory: StorySchema.optional().describe(
    'The most relevant story recommendation if applicable.'
  ),
});
export type GenerateStoryRecommendationOutput = z.infer<
  typeof GenerateStoryRecommendationOutputSchema
>;

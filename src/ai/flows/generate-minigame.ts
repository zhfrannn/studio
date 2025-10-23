'use server';
/**
 * @fileOverview An AI flow to generate a complete mini-game scenario.
 *
 * - generateMiniGame - A function that handles the mini-game generation process.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { GameScenario } from '@/lib/minigame-scenarios';

const GenerateMiniGameInputSchema = z.object({
  topic: z
    .string()
    .describe(
      'The central topic or story for the mini-game, e.g., "Earthquake in a village" or "First aid for a friend".'
    ),
});

const GameOptionSchema = z.object({
  id: z.enum(['A', 'B', 'C']),
  text: z.string(),
  result: z.enum(['correct', 'wrong', 'neutral']),
  feedback: z.string(),
  score: z.number().int(),
});

const GameLevelSchema = z.object({
  level_id: z.string(),
  scene_text: z.string(),
  timer_seconds: z.number().int().min(5).max(15),
  background_image_hint: z.string(),
  sound_effect: z.string(),
  options: z.tuple([GameOptionSchema, GameOptionSchema, GameOptionSchema]),
  next_level_map: z.object({
    correct: z.string(),
    wrong: z.string(),
    neutral: z.string(),
  }),
});

const GenerateMiniGameOutputSchema = z.object({
  scenario_id: z.string(),
  title: z.string(),
  description: z.string(),
  levels: z
    .array(GameLevelSchema)
    .min(3)
    .max(4)
    .describe('An array of 3 to 4 game levels.'),
  starting_level_id: z.string(),
  ending_messages: z.object({
    high: z.string(),
    medium: z.string(),
    low: z.string(),
  }),
  score_thresholds: z.object({
    high: z.number().int(),
    medium: z.number().int(),
  }),
});

export type GenerateMiniGameInput = z.infer<typeof GenerateMiniGameInputSchema>;
export type GenerateMiniGameOutput = z.infer<
  typeof GenerateMiniGameOutputSchema
>;

const miniGamePrompt = ai.definePrompt({
  name: 'miniGamePrompt',
  input: { schema: GenerateMiniGameInputSchema },
  output: { schema: GenerateMiniGameOutputSchema },
  prompt: `
    You are an expert game designer specializing in educational, scenario-based mini-games about disaster preparedness.
    Your task is to create a complete, playable mini-game scenario with 3 to 4 levels based on the provided topic.

    Analyze the following topic:
    --- TOPIC START ---
    {{{topic}}}
    --- TOPIC END ---

    Now, generate the entire game scenario, strictly adhering to the JSON output format.
    - **scenario_id**: Create a unique ID based on the topic.
    - **title**: Create a catchy title for the game.
    - **description**: Write a short, engaging description for the game's intro screen.
    - **levels**: Design 3-4 sequential levels. The 'starting_level_id' must be the ID of the first level.
      - For each level:
        - **level_id**: A unique ID for the level (e.g., 'level_1', 'level_2').
        - **scene_text**: Describe the situation the player is in.
        - **timer_seconds**: Set a timer between 8 and 12 seconds.
        - **background_image_hint**: A 2-4 word hint for an AI image generator (e.g., 'school hallway flood').
        - **sound_effect**: A relevant sound effect hint (e.g., 'rain_heavy.mp3').
        - **options**: Create exactly THREE choices (A, B, C). One should be 'correct', one 'wrong', and one 'neutral'.
          - For each option, provide clear 'text', a 'result', impactful 'feedback', and a 'score' (positive for correct, negative for wrong, zero for neutral).
        - **next_level_map**: Define the branching logic. Map 'correct', 'wrong', and 'neutral' results to the next level's ID. The final level should map to 'end'.
    - **ending_messages**: Write three distinct outcomes (high, medium, low score).
    - **score_thresholds**: Set appropriate score thresholds for the endings.
  `,
});

const generateMiniGameFlow = ai.defineFlow(
  {
    name: 'generateMiniGameFlow',
    inputSchema: GenerateMiniGameInputSchema,
    outputSchema: GenerateMiniGameOutputSchema,
  },
  async input => {
    const { output } = await miniGamePrompt(input);
    return output!;
  }
);

export async function generateMiniGame(
  input: GenerateMiniGameInput
): Promise<GameScenario> {
  // The output of the flow matches the GameScenario interface.
  return generateMiniGameFlow(input) as Promise<GameScenario>;
}

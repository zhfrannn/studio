'use server';
/**
 * @fileOverview An AI flow to generate content for a printable A4 infographic.
 *
 * - generateInfographic - A function that handles the infographic content generation.
 */

import { ai } from '@/ai/genkit';
import {
  GenerateInfographicInputSchema,
  GenerateInfographicOutputSchema,
  type GenerateInfographicInput,
  type GenerateInfographicOutput,
} from './infographic-types';

const infographicPrompt = ai.definePrompt({
  name: 'infographicPrompt',
  input: { schema: GenerateInfographicInputSchema },
  output: { schema: GenerateInfographicOutputSchema },
  prompt: `
    You are an expert instructional designer and graphic designer. Your task is to generate the complete content for a printable, one-page A4 infographic based on a given topic. The content must be structured, concise, and engaging.

    Analyze the following topic:
    --- TOPIC START ---
    {{{topic}}}
    --- TOPIC END ---

    Now, generate the content for the infographic, strictly adhering to the JSON output format.
    - **mainTitle**: Create a powerful, short headline (max 5 words).
    - **mainIcon**: Choose the most suitable primary icon from the list.
    - **intro**: Write a brief, engaging introduction to the topic.
    - **sections**: Create exactly 4 sections. Each section must have a title, an appropriate icon, and 2-3 very concise bullet points.
    - **quote**: Find or create a short, impactful quote related to the topic, along with its source.
  `,
});

const generateInfographicFlow = ai.defineFlow(
  {
    name: 'generateInfographicFlow',
    inputSchema: GenerateInfographicInputSchema,
    outputSchema: GenerateInfographicOutputSchema,
  },
  async input => {
    const { output } = await infographicPrompt(input);
    return output!;
  }
);

export async function generateInfographic(
  input: GenerateInfographicInput
): Promise<GenerateInfographicOutput> {
  return generateInfographicFlow(input);
}

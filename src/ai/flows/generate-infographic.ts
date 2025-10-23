'use server';
/**
 * @fileOverview An AI flow to generate content for a printable A4 infographic.
 *
 * - generateInfographic - A function that handles the infographic content generation.
 * - GenerateInfographicInput - The input type for the generateInfographic function.
 * - GenerateInfographicOutput - The return type for the generateInfographic function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const GenerateInfographicInputSchema = z.object({
  topic: z
    .string()
    .describe(
      'The topic for the infographic, e.g., "Tsunami Preparedness" or "The Story of Smong".'
    ),
});
export type GenerateInfographicInput = z.infer<
  typeof GenerateInfographicInputSchema
>;

// This schema mirrors the PrintableContentData interface.
export const GenerateInfographicOutputSchema = z.object({
  id: z.string().default('ai-printable-01'),
  layout: z.literal('printable-a4').default('printable-a4'),
  mainTitle: z
    .string()
    .describe('A catchy, main headline for the infographic. Max 5 words.'),
  mainIcon: z
    .enum([
      'ShieldAlert',
      'Waves',
      'HeartHandshake',
      'Lightbulb',
      'BookCopy',
    ])
    .describe(
      'The most relevant main icon for the overall topic from the available list.'
    ),
  themeColor: z
    .string()
    .default('oklch(55% 0.15 240)')
    .describe(
      'An OKLCH color value that fits the theme. Example: oklch(55% 0.15 240) for blue.'
    ),
  intro: z.object({
    title: z.string().describe("A title for the introduction section, e.g., 'What is it?'"),
    text: z.string().describe('A brief introductory paragraph about the topic.'),
  }),
  sections: z
    .array(
      z.object({
        title: z.string().describe('The title for this subsection.'),
        icon: z
          .enum([
            'AlertTriangle',
            'GanttChartSquare',
            'Goal',
            'ListChecks',
            'Info',
          ])
          .describe('An icon that best represents this subsection.'),
        points: z
          .array(z.string())
          .min(2)
          .max(3)
          .describe('An array of 2-3 short, concise bullet points.'),
      })
    )
    .length(4)
    .describe('An array of exactly 4 content sections for the infographic.'),
  quote: z.object({
    text: z
      .string()
      .describe(
        'A short, impactful, and relevant quote related to the topic.'
      ),
    author: z
      .string()
      .describe('The author or source of the quote, e.g., "Local Wisdom".'),
  }),
  qrCodeUrl: z.string().default('https://waveofvoice.com'),
});
export type GenerateInfographicOutput = z.infer<
  typeof GenerateInfographicOutputSchema
>;

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

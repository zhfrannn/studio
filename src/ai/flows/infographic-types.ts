import { z } from 'zod';

export const GenerateInfographicInputSchema = z.object({
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
  id: z.string().describe('A unique ID for the printable content, e.g., "ai-printable-01".'),
  layout: z.string().describe('The layout type, which should be "printable-a4".'),
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
    .describe(
      'An OKLCH color value that fits the theme. Example: oklch(55% 0.15 240) for blue.'
    ),
  intro: z.object({
    title: z
      .string()
      .describe("A title for the introduction section, e.g., 'What is it?'"),
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
  qrCodeUrl: z.string().describe('A URL to be encoded in the QR code, e.g., "https://waveofvoice.com".'),
});
export type GenerateInfographicOutput = z.infer<
  typeof GenerateInfographicOutputSchema
>;

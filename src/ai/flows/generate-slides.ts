
'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const GenerateSlidesInputSchema = z.object({
  storyText: z.string().describe('The user-provided story to be converted into a presentation.'),
});
export type GenerateSlidesInput = z.infer<typeof GenerateSlidesInputSchema>;

const SlideSchema = z.object({
  layout: z.enum(['title-slide', 'content-with-image', 'bullet-points', 'quote', 'end-slide']).describe('The layout for the slide.'),
  title: z.string().describe('The main headline for the slide.'),
  description: z.string().optional().describe('A longer paragraph of text for the slide.'),
  points: z.array(z.string()).optional().describe('A list of bullet points.'),
  imagePrompt: z.string().optional().describe('A descriptive prompt for a text-to-image AI to generate a relevant image.'),
  metadata: z.object({ author: z.string().optional() }).optional().describe('Additional metadata like author for a quote.')
});

const GenerateSlidesOutputSchema = z.object({
  slides: z.array(SlideSchema).length(8).describe('An array of exactly 8 generated slides for the presentation.'),
});
export type GenerateSlidesOutput = z.infer<typeof GenerateSlidesOutputSchema>;

const slidesPrompt = ai.definePrompt({
  name: 'slidesPrompt',
  input: { schema: GenerateSlidesInputSchema },
  output: { schema: GenerateSlidesOutputSchema },
  prompt: `
    You are an expert instructional designer. Your task is to convert a user-submitted story about disaster preparedness, local wisdom, or peacebuilding into a concise and engaging 8-slide presentation.

    Analyze the following story: 
    --- STORY START ---
    {{{storyText}}}
    --- STORY END ---

    Now, generate the content for exactly 8 slides based on this story, following this detailed structure:
    - **Slide 1: Title Slide**: Create a powerful, compelling title for the story. Use the 'title-slide' layout.
    - **Slide 2: Background & The Problem**: Introduce the setting and describe the core problem or challenge faced. Use the 'content-with-image' layout.
    - **Slide 3: Deep Dive into the Problem**: Elaborate on the consequences and the urgency of the problem. Provide 3-4 key points. Use the 'bullet-points' layout.
    - **Slide 4: The Proposed Solution/Wisdom**: Explain the main idea, action, or local wisdom that was used to address the problem. Use 'content-with-image' layout.
    - **Slide 5: Action Steps**: Detail the specific steps taken to implement the solution. Use 'bullet-points' layout with 3-4 clear, actionable steps.
    - **Slide 6: The Impact/Outcome**: Describe the positive results and the impact of the actions taken. Use 'content-with-image' layout.
    - **Slide 7: Key Lesson & Quote**: Summarize the most important lesson learned from the story and include a relevant, impactful quote. Use the 'quote' layout for this.
    - **Slide 8: Conclusion & Call to Action**: Summarize the overall message and provide a concluding thought or a call to action for the audience. Use the 'end-slide' layout.

    For each slide, you must generate a title, relevant content (description, points, or a quote), and a highly descriptive 'imagePrompt' that a text-to-image AI could use to create a powerful and relevant visual. The image prompt should be in a style suitable for educational content, like 'cinematic, educational illustration, detailed, vibrant colors'.

    Strictly adhere to the JSON output format. Produce an array of exactly 8 slide objects.
  `
});

const generateSlidesFlow = ai.defineFlow(
  {
    name: 'generateSlidesFlow',
    inputSchema: GenerateSlidesInputSchema,
    outputSchema: GenerateSlidesOutputSchema,
  },
  async (input) => {
    // ✅ GA USAH specify model - otomatis pake default dari genkit.ts
    const { output } = await slidesPrompt(input);
    return output!;
  }
);

export async function generateSlides(
  input: GenerateSlidesInput
): Promise<GenerateSlidesOutput> {
  return generateSlidesFlow(input);
}

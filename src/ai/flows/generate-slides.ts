'use server';

import { ai } from '@/ai/genkit'; 
import { googleAI } from '@genkit-ai/google-genai'; // Impor googleAI untuk menentukan model
import { z } from 'zod';

const GenerateSlidesInputSchema = z.object({
  storyText: z.string().describe('The user-provided story to be converted into a presentation.'),
});
export type GenerateSlidesInput = z.infer<typeof GenerateSlidesInputSchema>;

const SlideSchema = z.object({
  layout: z.enum(['title-slide', 'content-with-image', 'bullet-points', 'end-slide']).describe('The layout for the slide.'),
  title: z.string().describe('The main headline for the slide.'),
  description: z.string().optional().describe('A longer paragraph of text for the slide.'),
  points: z.array(z.string()).optional().describe('A list of bullet points.'),
  imagePrompt: z.string().optional().describe('A descriptive prompt for a text-to-image AI to generate a relevant image.')
});

const GenerateSlidesOutputSchema = z.object({
  slides: z.array(SlideSchema).length(5).describe('An array of exactly 5 generated slides for the presentation.'),
});
export type GenerateSlidesOutput = z.infer<typeof GenerateSlidesOutputSchema>;

const slidesPrompt = ai.definePrompt({
  name: 'slidesPrompt',
  input: { schema: GenerateSlidesInputSchema },
  output: { schema: GenerateSlidesOutputSchema },
  prompt: `
    You are an expert instructional designer. Your task is to convert a user-submitted story about disaster preparedness, local wisdom, or peacebuilding into a concise and engaging 5-slide presentation.

    Analyze the following story: 
    --- STORY START ---
    {{{storyText}}}
    --- STORY END ---

    Now, generate the content for exactly 5 slides based on this story, following this structure:
    - **Slide 1: Title Slide**: Create a compelling title for the story. Use the 'title-slide' layout.
    - **Slide 2: The Core Problem/Situation**: Describe the main challenge or situation. Use the 'content-with-image' layout.
    - **Slide 3: The Solution/Action**: Detail the key actions, steps, or wisdom applied. Use the 'bullet-points' layout and provide 3-4 key points.
    - **Slide 4: The Impact/Lesson**: Explain the outcome or the main lesson learned. Use the 'content-with-image' layout.
    - **Slide 5: Conclusion/Call to Action**: Summarize the message and provide a concluding thought. Use the 'end-slide' layout.

    For each slide, you must generate a title, a description (for content slides) or points (for bullet-point slides), and a highly descriptive 'imagePrompt' that a text-to-image AI could use to create a powerful and relevant visual. The image prompt should be in a style suitable for educational content, like 'cinematic, educational illustration, detailed, vibrant colors'.

    Strictly adhere to the JSON output format. Produce an array of exactly 5 slide objects.
  `
});

const generateSlidesFlow = ai.defineFlow(
  {
    name: 'generateSlidesFlow',
    inputSchema: GenerateSlidesInputSchema,
    outputSchema: GenerateSlidesOutputSchema,
  },
  async (input) => {
    // Secara eksplisit menentukan model 'pro' di sini, sesuai instruksi.
    const { output } = await slidesPrompt(input, {
      model: googleAI.model('gemini-1.5-pro')
    }); 
    return output!;
  }
);

export async function generateSlides(
  input: GenerateSlidesInput
): Promise<GenerateSlidesOutput> {
  return generateSlidesFlow(input);
}

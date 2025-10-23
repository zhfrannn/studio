
'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { Story } from '@/lib/types';

// Define input schema for the AI flow
const GenerateFullStoryInputSchema = z.object({
  topic: z.string().describe('The core topic or idea for the story.'),
  narrator: z.string().describe('The perspective or style of the narrator (e.g., "Village Elder", "Young Student").'),
  vibe: z.string().describe('The overall mood or feeling of the story (e.g., "Hopeful and inspiring", "Serious and informative").'),
});

// The output of the AI flow must match the existing Story type for consistency.
// We recreate the schema here for Zod validation, ensuring all fields are included.
const StoryOutputSchema = z.object({
  id: z.string().describe("A unique, URL-friendly ID for the story, based on the title (e.g., 'wisdom-of-the-sea')."),
  title: z.string().describe('A catchy and engaging title for the story.'),
  author: z.string().describe("The fictional author or source of the story, matching the narrator's style (e.g., 'An Elder from Simeulue', 'A Student in Banda Aceh')."),
  location: z.object({
    name: z.string().describe("A real, relevant location in Aceh, Indonesia that fits the story's context."),
    lat: z.number().describe('The latitude of the location.'),
    lng: z.number().describe('The longitude of the location.'),
  }),
  summary: z.string().describe('A concise, one-paragraph summary of the story.'),
  fullText: z.string().describe('The full, detailed narrative of the story, written from the narrator\'s perspective. Should be several paragraphs long.'),
  aiThemes: z.array(z.enum(['Disaster Preparedness', 'Local Wisdom', 'Peacebuilding'])).describe('An array of one or more relevant themes from the allowed list.'),
  media: z.object({
    featuredImage: z.string().url().describe('The full URL of the most fitting image for the story from the provided list.'),
    featuredImageHint: z.string().describe("The two-word hint corresponding to the chosen featured image (e.g., 'ocean waves', 'mangrove forest')."),
  }),
  status: z.enum(['published']).describe("The status should always be 'published'.")
});

const imageOptions = [
    { url: 'https://i.ibb.co.com/d4Zc2dW2/Gemini-Generated-Image-nep5q4nep5q4nep5.png', hint: 'people running uphill' },
    { url: 'https://i.ibb.co.com/cKZnnyh5/Gemini-Generated-Image-t9i448t9i448t9i4.png', hint: 'dense mangrove forest' },
    { url: 'https://i.ibb.co.com/T3f302F/Gemini-Generated-Image-rmhvlgrmhvlgrmhv.png', hint: 'people eating together happily' },
    { url: 'https://i.ibb.co.com/s9nftm6k/Gemini-Generated-Image-2yb53r2yb53r2yb5.png', hint: 'happy farming community' },
    { url: 'https://i.ibb.co.com/MxDVKgQ8/Gemini-Generated-Image-ptyvfqptyvfqptyv.png', hint: 'raging flash flood logs' },
    { url: 'https://i.ibb.co.com/wrwhkWjG/Gemini-Generated-Image-1tus9y1tus9y1tus.png', hint: 'people fighting forest fire' },
    { url: 'https://i.ibb.co.com/65QLYw8/Gemini-Generated-Image-xp78xcxp78xcxp78.png', hint: 'cup of steaming gayo coffee' },
    { url: 'https://i.ibb.co.com/MDmNGYvr/Gemini-Generated-Image-sqvrxesqvrxesqvr.png', hint: 'seudati dance performance' },
    { url: 'https://i.ibb.co.com/RkGvwjR8/Gemini-Generated-Image-pucmhfpucmhfpucm.png', hint: 'woman proudly holding woven bag' },
    { url: 'https://i.ibb.co.com/JfnLPtj/Gemini-Generated-Image-wo8rv7wo8rv7wo8r.png', hint: 'modern house with traditional aceh design' },
    { url: 'https://i.ibb.co/pjr6h7s0/Gemini-Generated-Image-ikoughikoughikou.png', hint: 'children interacting with mural' },
    { url: 'https://i.ibb.co.com/zhj5vRfQ/Gemini-Generated-Image-yz9meiyz9meiyz9m.png', hint: 'fisherman at night starry sky' },
    { url: 'https://i.ibb.co/N2DZQFsc/Gemini-Generated-Image-4o62wj4o62wj4o62.png', hint: 'clear water in old well' },
    { url: 'https://i.ibb.co.com/xS91Wwgz/Gemini-Generated-Image-j2fi8xj2fi8xj2fi.png', hint: 'mosque against starry sky' },
    { url: 'https://i.ibb.co.com/Lz42QxHm/Gemini-Generated-Image-k208uik208uik208.png', hint: 'bustling traditional market' },
    { url: 'https://i.ibb.co.com/TGNn2hy/Gemini-Generated-Image-spdth3spdth3spdt.png', hint: 'happy cats playing on hill' },
    { url: 'https://i.ibb.co/99CGxdNp/Gemini-Generated-Image-70jw6w70jw6w70jw.png', hint: 'boy looking at smoking volcano' },
    { url: 'https://i.ibb.co/hR2wMXyx/Gemini-Generated-Image-91p8ky91p8ky91p8.png', hint: 'tornado dark clouds village' },
    { url: 'https://i.ibb.co/Ld2PZfX/Gemini-Generated-Image-z4f1jvz4f1jvz4f1.png', hint: 'girl looking at destroyed city' }
];

const imageOptionsString = imageOptions.map(img => `- ${img.url} (hint: ${img.hint})`).join('\n');

const generateStoryPrompt = ai.definePrompt({
  name: 'generateStoryPrompt',
  input: { schema: GenerateFullStoryInputSchema },
  output: { schema: StoryOutputSchema },
  prompt: `You are a master storyteller and an expert on Acehnese culture, history, and resilience. Your task is to generate a complete, compelling story based on a user's prompt. You must strictly adhere to the provided JSON output format.

  **User's Request:**
  - **Topic/Idea:** {{{topic}}}
  - **Narrator Style:** {{{narrator}}}
  - **Desired Vibe:** {{{vibe}}}

  **Your Task:**
  1.  **Craft a Narrative:** Write a full, engaging story based on the user's topic. Develop a clear beginning, middle, and end. The story should be at least three paragraphs long.
  2.  **Create Metadata:** Based on the story you write, generate all the required metadata fields.
      - **id:** Create a unique, URL-friendly ID from the title (e.g., "The Wisdom of Smong" becomes "wisdom-of-smong").
      - **title:** Create a powerful and captivating title.
      - **author:** Invent a believable author name that fits the narrator style (e.g., 'An Elder from Simeulue').
      - **location:** Choose a real, relevant city or regency in Aceh, Indonesia, and find its approximate latitude and longitude.
      - **summary:** Write a single, concise paragraph that summarizes the story.
      - **aiThemes:** Analyze your story and assign one or two themes from the allowed list: 'Disaster Preparedness', 'Local Wisdom', 'Peacebuilding'.
      - **media.featuredImage & media.featuredImageHint:** From the list of available images below, you MUST select the ONE image that best represents the core of your story. Provide its full URL and its corresponding hint.
      - **status:** This MUST always be "published".

  **Available Images:**
  ${imageOptionsString}

  Produce a single JSON object that perfectly matches the output schema.
  `,
});

const generateFullStoryFlow = ai.defineFlow(
  {
    name: 'generateFullStoryFlow',
    inputSchema: GenerateFullStoryInputSchema,
    outputSchema: StoryOutputSchema,
  },
  async (input) => {
    const { output } = await generateStoryPrompt(input);
    return output!;
  }
);

// Wrapper function to be called from the client
export async function generateFullStory(
  input: z.infer<typeof GenerateFullStoryInputSchema>
): Promise<Story> {
  // We cast the output to the Story type, as our Zod schema is designed to match it.
  return generateFullStoryFlow(input) as Promise<Story>;
}

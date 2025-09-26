'use server';

/**
 * @fileOverview This file defines the Genkit flow for the Siaga-Bot chatbot.
 * The bot is designed to answer questions about disaster preparedness, local wisdom,
 * and peacebuilding in Aceh, using the available stories as a knowledge base.
 *
 * - askSiagaBot - The main function that processes user questions.
 * - AskSiagaBotInput - The input type for the askSiagaBot function.
 * - AskSiagaBotOutput - The return type for the askSiagaBot function.
 */

import { ai } from '@/ai/genkit';
import { stories } from '@/lib/data';
import { z } from 'genkit';

const AskSiagaBotInputSchema = z.object({
  question: z.string().describe('The user\'s question about disaster preparedness, local wisdom, or peacebuilding.'),
});
export type AskSiagaBotInput = z.infer<typeof AskSiagaBotInputSchema>;

const StorySuggestionSchema = z.object({
  id: z.string().describe('The ID of the suggested story.'),
  title: z.string().describe('The title of the suggested story.'),
});

const AskSiagaBotOutputSchema = z.object({
  answer: z
    .string()
    .describe('A helpful and concise answer to the user\'s question.'),
  storySuggestion: StorySuggestionSchema.optional().describe(
    'A relevant story suggestion if the question is related to one of the stories.'
  ),
});
export type AskSiagaBotOutput = z.infer<typeof AskSiagaBotOutputSchema>;

export async function askSiagaBot(input: AskSiagaBotInput): Promise<AskSiagaBotOutput> {
  return askSiagaBotFlow(input);
}

// Prepare a summarized version of stories for the prompt context
const storiesForContext = stories.map(story => ({
  id: story.id,
  title: story.title,
  summary: story.summary,
  themes: story.aiThemes,
})).join('\n-\n');


const askSiagaBotPrompt = ai.definePrompt({
  name: 'askSiagaBotPrompt',
  input: { schema: AskSiagaBotInputSchema },
  output: { schema: AskSiagaBotOutputSchema },
  prompt: `You are Siaga-Bot, a friendly and knowledgeable AI assistant for the Wave of Voice platform. Your purpose is to educate users about disaster preparedness, local wisdom, and peacebuilding in Aceh, based on a collection of real stories.

  CONTEXT:
  You have access to the following stories from the community. Use them as your primary knowledge base. Do not invent information.

  Available Stories:
  ---
  ${storiesForContext}
  ---

  TASK:
  1.  Carefully analyze the user's question.
  2.  Provide a clear, helpful, and concise answer based *only* on the information available in the stories provided.
  3.  If the user's question is directly related to the content or themes of a specific story, you MUST suggest that story. Include its 'id' and 'title' in the 'storySuggestion' output field.
  4.  If no single story is directly relevant, do not suggest any story.
  5.  Your tone should be empathetic, encouraging, and educational.
  6.  If the question is outside the scope of disaster preparedness, local wisdom, or peacebuilding in Aceh, politely state that you can only answer questions on those topics.

  User Question: {{{question}}}
  `,
});

const askSiagaBotFlow = ai.defineFlow(
  {
    name: 'askSiagaBotFlow',
    inputSchema: AskSiagaBotInputSchema,
    outputSchema: AskSiagaBotOutputSchema,
  },
  async (input) => {
    const { output } = await askSiagaBotPrompt(input);
    return output!;
  }
);

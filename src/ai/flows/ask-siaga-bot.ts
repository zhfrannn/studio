
'use server';

/**
 * @fileOverview This file defines a Genkit flow for the Siaga-Bot, an AI assistant.
 *
 * - askSiagaBot - The main function that handles chatbot queries.
 * - AskSiagaBotInput - The input type for the askSiagaBot function.
 * - AskSiagaBotOutput - The return type for the askSiagaBot function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { getTranslatedStories } from '@/lib/data';

const AskSiagaBotInputSchema = z.object({
  query: z.string().describe('The user\'s question or message to the bot.'),
  language: z.enum(['id', 'en']).describe('The language for the response.'),
});
export type AskSiagaBotInput = z.infer<typeof AskSiagaBotInputSchema>;

const AskSiagaBotOutputSchema = z.object({
  response: z.string().describe('The AI-generated response to the user\'s query.'),
  storySuggestion: z
    .object({
      id: z.string(),
      title: z.string(),
    })
    .optional()
    .describe('A relevant story suggestion if applicable.'),
});
export type AskSiagaBotOutput = z.infer<typeof AskSiagaBotOutputSchema>;

export async function askSiagaBot(input: AskSiagaBotInput): Promise<AskSiagaBotOutput> {
  return askSiagaBotFlow(input);
}

const askSiagaBotPrompt = ai.definePrompt({
  name: 'askSiagaBotPrompt',
  input: {
    schema: z.object({
      query: AskSiagaBotInputSchema.shape.query,
      language: AskSiagaBotInputSchema.shape.language,
      stories: z.array(
        z.object({ id: z.string(), title: z.string(), summary: z.string() })
      ).describe('A list of available stories.'),
    }),
  },
  output: { schema: AskSiagaBotOutputSchema },
  prompt: `You are Siaga-Bot, a friendly and helpful AI assistant for the 'Wave of Voice' platform. Your expertise is in disaster preparedness, Acehnese local wisdom, and peacebuilding. Your answers should be concise, informative, and empathetic. Always answer in the specified language: {{{language}}}.

Current User Query:
"{{{query}}}"

Available Stories:
{{#each stories}}
- ID: {{{id}}}, Title: {{{title}}}, Summary: {{{summary}}}
{{/each}}

Based on the user's query and the available stories, provide a direct answer. If the query is directly related to one of the stories, you MUST suggest that story by providing its ID and title in the 'storySuggestion' field. If no story is relevant, do not suggest one. Do not make up stories.`,
});

const askSiagaBotFlow = ai.defineFlow(
  {
    name: 'askSiagaBotFlow',
    inputSchema: AskSiagaBotInputSchema,
    outputSchema: AskSiagaBotOutputSchema,
  },
  async input => {
    const stories = getTranslatedStories({ lang: input.language }).map(
      ({ id, title, summary }) => ({ id, title, summary })
    );

    const { output } = await askSiagaBotPrompt({
      query: input.query,
      stories,
      language: input.language,
    });

    return output!;
  }
);

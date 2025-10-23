
'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const GenerateQuizInputSchema = z.object({
  storyText: z.string().describe('The user-provided story or topic to be converted into a quiz.'),
});
export type GenerateQuizInput = z.infer<typeof GenerateQuizInputSchema>;

const QuizCardSchema = z.object({
    category: z.string().describe('A short, relevant category for the question (e.g., "Tsunami Signs", "Evacuation").'),
    question: z.string().describe('The multiple-choice question.'),
    options: z.array(z.string()).length(4).describe('An array of exactly 4 possible answers.'),
    correctAnswer: z.string().describe('The correct answer from the options array.'),
    explanation: z.string().describe('A brief explanation of why the answer is correct, providing more educational value.'),
    icon: z.enum(['Waves', 'ShieldAlert', 'ListChecks', 'Lightbulb', 'HeartHandshake']).describe('An icon name that best represents the question\'s theme.'),
    points: z.number().int().min(5).max(20).describe('Points awarded for a correct answer, between 5 and 20.'),
});

const GenerateQuizOutputSchema = z.object({
  quiz: z.array(QuizCardSchema).min(3).max(5).describe('An array of 3 to 5 generated quiz cards.'),
});
export type GenerateQuizOutput = z.infer<typeof GenerateQuizOutputSchema>;

const quizPrompt = ai.definePrompt({
  name: 'quizPrompt',
  input: { schema: GenerateQuizInputSchema },
  output: { schema: GenerateQuizOutputSchema },
  prompt: `
    You are an expert in creating educational and engaging quizzes based on provided texts. Your task is to convert a story about disaster preparedness, local wisdom, or peacebuilding into an interactive quiz.

    Analyze the following story:
    --- STORY START ---
    {{{storyText}}}
    --- STORY END ---

    Now, generate a series of 3 to 5 multiple-choice quiz cards. Each card must be in the specified JSON format.

    For each quiz card:
    - **category**: Create a concise category for the question.
    - **question**: Formulate a clear and relevant question based on the text.
    - **options**: Provide four plausible options, with only one being correct. The correct answer must be one of these options.
    - **correctAnswer**: State the correct answer exactly as it appears in the options array.
    - **explanation**: Write a simple, clear explanation for why the answer is correct. This is very important for the educational value.
    - **icon**: Choose the most fitting icon from the provided list: ['Waves', 'ShieldAlert', 'ListChecks', 'Lightbulb', 'HeartHandshake'].
    - **points**: Assign points between 5 and 20 based on the question's difficulty.

    Strictly adhere to the JSON output format.
  `
});

const generateQuizFlow = ai.defineFlow(
  {
    name: 'generateQuizFlow',
    inputSchema: GenerateQuizInputSchema,
    outputSchema: GenerateQuizOutputSchema,
  },
  async (input) => {
    const { output } = await quizPrompt(input);
    return output!;
  }
);

export async function generateQuiz(
  input: GenerateQuizInput
): Promise<GenerateQuizOutput> {
  return generateQuizFlow(input);
}

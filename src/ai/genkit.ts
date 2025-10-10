import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import {Dotprompt} from '@genkit-ai/dotprompt';
import {AIMiddleware} from 'genkit';

export const ai = genkit({
  plugins: [
    googleAI({
      apiVersion: 'v1beta',
    }),
    new Dotprompt(),
  ],
  model: 'gemini-1.5-flash',
});

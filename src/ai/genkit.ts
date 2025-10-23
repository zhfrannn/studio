
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

// Konfigurasi Genkit dengan model default yang BENAR.
export const ai = genkit({
  plugins: [
    googleAI({
      // Menggunakan API key yang kamu berikan.
      apiKey: 'AIzaSyAdXAiIHPCJQOB1aOesZVzjHCRqb4eUO6w',
    }),
  ],
  // ✅ Pake string 'googleai/model-name' format
  model: 'googleai/gemini-2.5-flash',
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});

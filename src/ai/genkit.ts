
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

// Konfigurasi Genkit tanpa model default, untuk fleksibilitas maksimal.
export const ai = genkit({
  plugins: [
    googleAI({
      // Menggunakan API key yang kamu berikan.
      apiKey: 'AIzaSyAdXAiIHPCJQOB1aOesZVzjHCRqb4eUO6w',
    }),
  ],
  // TIDAK ADA model default yang disetel di sini.
  // Model akan ditentukan di setiap flow secara individual.
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});

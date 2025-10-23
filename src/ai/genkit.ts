
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

// Konfigurasi Genkit yang BENAR sesuai dokumentasi.
export const ai = genkit({
  plugins: [
    googleAI({
      // Menggunakan API key yang kamu berikan.
      apiKey: 'AIzaSyAdXAiIHPCJQOB1aOesZVzjHCRqb4eUO6w',
      apiVersion: 'v1beta',
    }),
  ],
  // MENETAPKAN MODEL DEFAULT SECARA RESMI.
  // Ini adalah kunci untuk menyelesaikan semua error.
  model: googleAI.model('gemini-1.5-pro-latest'), 
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});

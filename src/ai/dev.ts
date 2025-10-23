import { config } from 'dotenv';
config();

// This file is used for local development and testing of Genkit flows.
// It imports all the flows that you want to be able to run locally.
import '@/ai/flows/tag-stories-with-themes';
import '@/ai/flows/generate-story-recommendation';
import '@/ai/flows/generate-story-media';
import '@/ai/flows/generate-slides';
import '@/ai/flows/generate-quiz';
import '@/ai/flows/generate-infographic';
import '@/ai/flows/generate-minigame';
import '@/ai/flows/generate-full-story';

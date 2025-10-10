import { config } from 'dotenv';
config();

import '@/ai/flows/tag-stories-with-themes.ts';
import '@/ai/flows/generate-story-media.ts';
import '@/ai/flows/generate-story-recommendation.ts';

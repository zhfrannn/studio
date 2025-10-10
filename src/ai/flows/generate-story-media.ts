'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating interactive media (video, comic, quiz) from a given story using AI.
 *
 * - generateStoryMedia - A function that takes a story as input and returns generated media URLs.
 * - GenerateStoryMediaInput - The input type for the generateStoryMedia function.
 * - GenerateStoryMediaOutput - The return type for the generateStoryMedia function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import wav from 'wav';
import { MediaPart } from 'genkit';
import * as fs from 'fs';
import { Readable } from 'stream';

const GenerateStoryMediaInputSchema = z.object({
  storyText: z
    .string()
    .describe('The text content of the story to generate media from.'),
});

export type GenerateStoryMediaInput = z.infer<typeof GenerateStoryMediaInputSchema>;

const GenerateStoryMediaOutputSchema = z.object({
  videoUrl: z.string().optional().describe('URL of the generated video.'),
  comicUrl: z.string().optional().describe('URL of the generated comic.'),
  quizUrl: z.string().optional().describe('URL of the generated quiz.'),
});

export type GenerateStoryMediaOutput = z.infer<typeof GenerateStoryMediaOutputSchema>;

async function downloadVideo(video: MediaPart, path: string) {
    const fetch = (await import('node-fetch')).default;
    // Add API key before fetching the video.
    const videoDownloadResponse = await fetch(
      `${video.media!.url}&key=${process.env.GEMINI_API_KEY}`
    );
    if (
      !videoDownloadResponse ||
      videoDownloadResponse.status !== 200 ||
      !videoDownloadResponse.body
    ) {
      throw new Error('Failed to fetch video');
    }
  
    Readable.from(videoDownloadResponse.body).pipe(fs.createWriteStream(path));
}

async function toWav(
  pcmData: Buffer,
  channels = 1,
  rate = 24000,
  sampleWidth = 2
): Promise<string> {
  return new Promise((resolve, reject) => {
    const writer = new wav.Writer({
      channels,
      sampleRate: rate,
      bitDepth: sampleWidth * 8,
    });

    let bufs = [] as any[];
    writer.on('error', reject);
    writer.on('data', function (d) {
      bufs.push(d);
    });
    writer.on('end', function () {
      resolve(Buffer.concat(bufs).toString('base64'));
    });

    writer.write(pcmData);
    writer.end();
  });
}

const generateStoryMediaFlow = ai.defineFlow(
  {
    name: 'generateStoryMediaFlow',
    inputSchema: GenerateStoryMediaInputSchema,
    outputSchema: GenerateStoryMediaOutputSchema,
  },
  async input => {
    // Generate video narration audio
    const ttsResult = await ai.generate({
      model: 'googleai/gemini-2.5-flash-preview-tts',
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Algenib' },
          },
        },
      },
      prompt: input.storyText,
    });

    if (!ttsResult.media) {
      throw new Error('no media returned');
    }
    const audioBuffer = Buffer.from(
      ttsResult.media.url.substring(ttsResult.media.url.indexOf(',') + 1),
      'base64'
    );
    const audioDataUri = 'data:audio/wav;base64,' + (await toWav(audioBuffer));

    // Generate a video using the audio narration and story text
    let { operation } = await ai.generate({
      model: ai.model('veo-3.0-generate-preview'),
      prompt: input.storyText,
    });

    if (!operation) {
      throw new Error('Expected the model to return an operation');
    }

    while (!operation.done) {
      operation = await ai.checkOperation(operation);
      // Sleep for 5 seconds before checking again.
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }

    if (operation.error) {
      throw new Error(
        'failed to generate video: ' + operation.error.message
      );
    }

    const video = operation.output?.message?.content.find(
      p => !!p.media
    );

    if (!video) {
      throw new Error('Failed to find the generated video');
    }

    // Placeholder logic for comic and quiz generation - to be implemented later
    return {
      videoUrl: video.media?.url,
      comicUrl: undefined,
      quizUrl: undefined,
    };
  }
);


export async function generateStoryMedia(
  input: GenerateStoryMediaInput
): Promise<GenerateStoryMediaOutput> {
  return generateStoryMediaFlow(input);
}
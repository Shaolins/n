'use server';
/**
 * @fileOverview A stylist bio generator AI agent.
 *
 * - generateStylistBio - A function that handles the stylist bio generation process.
 * - GenerateStylistBioInput - The input type for the generateStylistBio function.
 * - GenerateStylistBioOutput - The return type for the generateStylistBio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateStylistBioInputSchema = z.object({
  name: z.string().describe('The name of the stylist.'),
  specialty: z.string().describe('The stylist\'s area of expertise (e.g., color, cuts, styling).'),
  yearsOfExperience: z.number().describe('The number of years the stylist has been working in the field.'),
  styleDescription: z.string().describe('A description of the stylist\'s personal style and approach.'),
});
export type GenerateStylistBioInput = z.infer<typeof GenerateStylistBioInputSchema>;

const GenerateStylistBioOutputSchema = z.object({
  bio: z.string().describe('A catchy and engaging biography for the stylist.'),
});
export type GenerateStylistBioOutput = z.infer<typeof GenerateStylistBioOutputSchema>;

export async function generateStylistBio(input: GenerateStylistBioInput): Promise<GenerateStylistBioOutput> {
  return generateStylistBioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateStylistBioPrompt',
  input: {schema: GenerateStylistBioInputSchema},
  output: {schema: GenerateStylistBioOutputSchema},
  prompt: `You are a marketing expert tasked with creating engaging and catchy biographies for stylists at a premium barbershop.

  Given the following information about a stylist, generate a short biography that highlights their expertise and personality.

  Stylist Name: {{{name}}}
  Specialty: {{{specialty}}}
  Years of Experience: {{{yearsOfExperience}}}
  Style Description: {{{styleDescription}}}
  `,
});

const generateStylistBioFlow = ai.defineFlow(
  {
    name: 'generateStylistBioFlow',
    inputSchema: GenerateStylistBioInputSchema,
    outputSchema: GenerateStylistBioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

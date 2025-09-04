'use server';

/**
 * @fileOverview Recommends styling products based on haircut and style.
 *
 * - recommendProductsForStyle - A function that takes a haircut and style as input and returns a list of recommended products.
 * - RecommendProductsForStyleInput - The input type for the recommendProductsForStyle function.
 * - RecommendProductsForStyleOutput - The return type for the recommendProductsForStyle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendProductsForStyleInputSchema = z.object({
  haircut: z.string().describe('The name of the haircut.'),
  style: z.string().describe('The description of the style.'),
});
export type RecommendProductsForStyleInput = z.infer<typeof RecommendProductsForStyleInputSchema>;

const RecommendProductsForStyleOutputSchema = z.object({
  products: z
    .array(z.string())
    .describe('A list of product names recommended for the given haircut and style.'),
});
export type RecommendProductsForStyleOutput = z.infer<typeof RecommendProductsForStyleOutputSchema>;

export async function recommendProductsForStyle(
  input: RecommendProductsForStyleInput
): Promise<RecommendProductsForStyleOutput> {
  return recommendProductsForStyleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendProductsForStylePrompt',
  input: {schema: RecommendProductsForStyleInputSchema},
  output: {schema: RecommendProductsForStyleOutputSchema},
  prompt: `You are a professional barber and stylist. A client has the following haircut and style:

Haircut: {{{haircut}}}
Style: {{{style}}}

Recommend a list of products that the client can use to maintain their haircut and style.  Return a simple list of product names.`,
});

const recommendProductsForStyleFlow = ai.defineFlow(
  {
    name: 'recommendProductsForStyleFlow',
    inputSchema: RecommendProductsForStyleInputSchema,
    outputSchema: RecommendProductsForStyleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

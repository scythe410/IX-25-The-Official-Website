'use server';

/**
 * @fileOverview Generates project ideas based on keywords, technologies, or problem statements.
 *
 * - generateProjectIdeas - A function that generates project ideas.
 * - GenerateProjectIdeasInput - The input type for the generateProjectIdeas function.
 * - GenerateProjectIdeasOutput - The return type for the generateProjectIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectIdeasInputSchema = z.object({
  keywords: z
    .string()
    .describe(
      'Keywords, technologies, or problem statements to generate project ideas from.'
    ),
});

export type GenerateProjectIdeasInput = z.infer<
  typeof GenerateProjectIdeasInputSchema
>;

const GenerateProjectIdeasOutputSchema = z.object({
  ideas: z
    .array(z.string())
    .describe('An array of project ideas based on the input.'),
});

export type GenerateProjectIdeasOutput = z.infer<
  typeof GenerateProjectIdeasOutputSchema
>;

export async function generateProjectIdeas(
  input: GenerateProjectIdeasInput
): Promise<GenerateProjectIdeasOutput> {
  return generateProjectIdeasFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectIdeasPrompt',
  input: {schema: GenerateProjectIdeasInputSchema},
  output: {schema: GenerateProjectIdeasOutputSchema},
  prompt: `You are an expert in generating innovative project ideas for hackathons.

  Based on the following keywords, technologies, or problem statements, generate a list of project ideas.

  Keywords/Technologies/Problems: {{{keywords}}}

  Provide at least 3 distinct project ideas.
  Each idea should be creative and feasible within a hackathon timeframe.
  Format each idea as a concise statement.
  `,
});

const generateProjectIdeasFlow = ai.defineFlow(
  {
    name: 'generateProjectIdeasFlow',
    inputSchema: GenerateProjectIdeasInputSchema,
    outputSchema: GenerateProjectIdeasOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

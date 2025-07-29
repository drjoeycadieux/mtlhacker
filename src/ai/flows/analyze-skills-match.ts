'use server';

/**
 * @fileOverview A skill matching AI agent.
 *
 * - analyzeSkillsMatch - A function that handles the skill matching process.
 * - AnalyzeSkillsMatchInput - The input type for the analyzeSkillsMatch function.
 * - AnalyzeSkillsMatchOutput - The return type for the analyzeSkillsMatch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeSkillsMatchInputSchema = z.object({
  jobRequirements: z
    .string()
    .describe('The job requirements submitted through the contact form.'),
  developerSkills: z
    .string()
    .describe('The developer skills listed in the portfolio.'),
});
export type AnalyzeSkillsMatchInput = z.infer<typeof AnalyzeSkillsMatchInputSchema>;

const AnalyzeSkillsMatchOutputSchema = z.object({
  matchPercentage: z
    .number()
    .describe('The percentage of skills that match the job requirements.'),
  missingSkills: z
    .string()
    .describe('The skills that are missing from the developer skills.'),
  summary: z
    .string()
    .describe('A summary of the match between the job requirements and the developer skills.'),
});
export type AnalyzeSkillsMatchOutput = z.infer<typeof AnalyzeSkillsMatchOutputSchema>;

export async function analyzeSkillsMatch(input: AnalyzeSkillsMatchInput): Promise<AnalyzeSkillsMatchOutput> {
  return analyzeSkillsMatchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeSkillsMatchPrompt',
  input: {schema: AnalyzeSkillsMatchInputSchema},
  output: {schema: AnalyzeSkillsMatchOutputSchema},
  prompt: `You are an AI assistant that analyzes job requirements and assesses the match against a developer's listed skills.

Job Requirements: {{{jobRequirements}}}

Developer Skills: {{{developerSkills}}}

Analyze the job requirements and the developer skills and determine the match percentage, the missing skills, and a summary of the match.
`,
});

const analyzeSkillsMatchFlow = ai.defineFlow(
  {
    name: 'analyzeSkillsMatchFlow',
    inputSchema: AnalyzeSkillsMatchInputSchema,
    outputSchema: AnalyzeSkillsMatchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

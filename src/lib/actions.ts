'use server';

import { analyzeSkillsMatch, AnalyzeSkillsMatchInput } from '@/ai/flows/analyze-skills-match';

export async function handleSkillAnalysis(input: AnalyzeSkillsMatchInput) {
  try {
    const result = await analyzeSkillsMatch(input);
    return result;
  } catch (error) {
    console.error('Skill analysis failed:', error);
    throw new Error('Failed to analyze skills. Please try again later.');
  }
}

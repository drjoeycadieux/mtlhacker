
'use server';

import { analyzeSkillsMatch, AnalyzeSkillsMatchInput } from '@/ai/flows/analyze-skills-match';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function handleSkillAnalysis(input: AnalyzeSkillsMatchInput) {
  try {
    const result = await analyzeSkillsMatch(input);
    return result;
  } catch (error) {
    console.error('Skill analysis failed:', error);
    throw new Error('Failed to analyze skills. Please try again later.');
  }
}

export async function handleContactForm(formData: { name: string; email: string; message: string; }) {
  try {
    await addDoc(collection(db, 'contacts'), {
      ...formData,
      createdAt: serverTimestamp(),
    });
    return { success: true };
  } catch (error) {
    console.error('Failed to submit contact form:', error);
    return { success: false, error: 'Failed to submit message. Please try again later.' };
  }
}

'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { handleSkillAnalysis } from '@/lib/actions';
import type { AnalyzeSkillsMatchOutput } from '@/ai/flows/analyze-skills-match';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Percent, ListX, FileText } from 'lucide-react';

type SkillMatchToolProps = {
  developerSkills: string;
};

export function SkillMatchTool({ developerSkills }: SkillMatchToolProps) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalyzeSkillsMatchOutput | null>(null);
  const { toast } = useToast();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const formData = new FormData(event.currentTarget);
      const jobRequirements = formData.get('jobRequirements') as string;

      if (!jobRequirements.trim()) {
        toast({
          title: 'Error',
          description: 'Job requirements cannot be empty.',
          variant: 'destructive',
        });
        setLoading(false);
        return;
      }

      const analysisResult = await handleSkillAnalysis({
        jobRequirements,
        developerSkills,
      });

      setResult(analysisResult);
    } catch (error) {
      console.error(error);
      toast({
        title: 'Analysis Failed',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="space-y-4">
        <Textarea
          name="jobRequirements"
          placeholder="Paste job requirements here..."
          className="min-h-[150px] bg-background"
          disabled={loading}
        />
        <Button type="submit" className="w-full font-headline" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...
            </>
          ) : (
            'Analyze Match'
          )}
        </Button>
      </form>

      {result && (
        <Card className="mt-6 bg-background">
          <CardContent className="pt-6 space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-headline text-lg flex items-center gap-2"><Percent className="w-5 h-5 text-primary"/> Match Percentage</h4>
                <span className="font-bold text-primary text-xl">{result.matchPercentage}%</span>
              </div>
              <Progress value={result.matchPercentage} className="h-2" />
            </div>

            <div className="space-y-2">
              <h4 className="font-headline text-lg flex items-center gap-2"><ListX className="w-5 h-5 text-primary"/> Missing Skills</h4>
              <p className="text-sm text-muted-foreground">
                {result.missingSkills || 'None identified!'}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-headline text-lg flex items-center gap-2"><FileText className="w-5 h-5 text-primary"/> Summary</h4>
              <p className="text-sm text-muted-foreground">{result.summary}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

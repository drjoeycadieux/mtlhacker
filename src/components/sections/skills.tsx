import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, ShieldCheck, Server, Settings, BrainCircuit } from 'lucide-react';
import { SkillMatchTool } from '@/components/skill-match-tool';

const skillsData = {
  frontend: {
    icon: Code,
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5 & CSS3'],
  },
  backend: {
    icon: Server,
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'Flask', 'Go'],
  },
  database: {
    icon: Database,
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'],
  },
  security: {
    icon: ShieldCheck,
    title: 'Security',
    skills: ['Penetration Testing', 'Web Security (OWASP)', 'Cryptography', 'Network Security'],
  },
  tooling: {
    icon: Settings,
    title: 'DevOps & Tooling',
    skills: ['Docker', 'Git', 'CI/CD', 'Nginx', 'Linux'],
  }
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Technical Skills</h2>
          <p className="text-muted-foreground mt-2">My expertise across the technology stack.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {Object.values(skillsData).map((category) => (
            <div key={category.title} className="flex items-start space-x-4">
              <category.icon className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-headline text-xl font-semibold mb-2">{category.title}</h3>
                <ul className="space-y-1">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-muted-foreground">{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto bg-background/50">
          <CardHeader className="text-center">
            <div className="flex justify-center items-center gap-2 mb-2">
              <BrainCircuit className="w-8 h-8 text-primary" />
              <CardTitle className="font-headline text-2xl md:text-3xl">AI-Powered Skills Match</CardTitle>
            </div>
            <p className="text-muted-foreground">
              Paste a job description below to see how my skills align.
            </p>
          </CardHeader>
          <CardContent>
            <SkillMatchTool developerSkills={JSON.stringify(Object.values(skillsData).flatMap(cat => cat.skills))} />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Project Cypher',
    description: 'A secure messaging app using end-to-end encryption. Built with Next.js, TypeScript, and WebSockets.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Next.js', 'TypeScript', 'Security', 'WebSockets'],
    github: '#',
    live: '#',
    aiHint: 'code terminal'
  },
  {
    title: 'VulnScanner',
    description: 'An automated web vulnerability scanner to identify common security flaws like XSS and SQLi.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Python', 'Flask', 'Security', 'Tooling'],
    github: '#',
    live: '#',
    aiHint: 'abstract network'
  },
  {
    title: 'Decentralized ID',
    description: 'A proof-of-concept for a decentralized identity system using blockchain technology.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Blockchain', 'Solidity', 'React', 'Cryptography'],
    github: '#',
    live: null,
    aiHint: 'digital blockchain'
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Projects</h2>
          <p className="text-muted-foreground mt-2">A selection of my recent work.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="font-headline">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="aspect-video relative mb-4">
                  <Image src={project.image} alt={project.title} fill className="object-cover rounded-md" data-ai-hint={project.aiHint}/>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-mono">{tag}</Badge>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button asChild variant="outline" size="sm">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Link>
                </Button>
                {project.live && (
                  <Button asChild size="sm">
                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

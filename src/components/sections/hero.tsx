import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-br from-primary to-accent">
          Full-Stack Developer & Security Enthusiast
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
          Based in Montreal, QC, I build secure, scalable web applications and love to break things to make them better.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#contact">
            <Button size="lg" className="font-headline">
              Get In Touch
            </Button>
          </a>
          <a href="#projects">
            <Button size="lg" variant="outline" className="font-headline">
              View My Work <ArrowDown className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

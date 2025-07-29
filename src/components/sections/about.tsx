import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <div className="md:col-span-2">
            <div className="relative aspect-square">
              <Image
                src="https://placehold.co/400x400.png"
                alt="Developer Portrait"
                fill
                className="rounded-lg object-cover transform rotate-3 transition-transform duration-300 hover:rotate-0"
                data-ai-hint="hacker portrait"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm a passionate developer and cybersecurity enthusiast from Montreal with a knack for building robust and secure digital experiences. My journey into the world of tech began with a fascination for how things work, and more interestingly, how they can be broken and subsequently hardened.
              </p>
              <p>
                I thrive in environments where I can tackle complex problems, whether it's designing a scalable backend architecture, hunting for vulnerabilities in a web application, or automating security workflows. My philosophy is that the best defense is a good offense, and I apply this proactive mindset to every project I undertake.
              </p>
              <p>
                When I'm not in front of a computer screen, you might find me exploring Montreal's vibrant cityscape, participating in CTF competitions, or contributing to open-source security tools. I'm always eager to learn, grow, and connect with like-minded individuals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

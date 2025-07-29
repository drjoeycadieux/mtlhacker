import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-2xl mx-auto bg-background/50">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl md:text-4xl">Get In Touch</CardTitle>
            <CardDescription>
              Have a project in mind or just want to say hello? Drop me a line.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input type="text" placeholder="Your Name" required className="bg-background"/>
                <Input type="email" placeholder="Your Email" required className="bg-background"/>
              </div>
              <Textarea placeholder="Your Message" required className="min-h-[120px] bg-background"/>
              <Button type="submit" className="w-full font-headline">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

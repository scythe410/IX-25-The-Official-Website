import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { announcements } from "@/lib/data";
import { ArrowRight, Megaphone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero");

  return (
    <div className="flex flex-col items-center">
      <section className="relative w-full py-32 md:py-48 text-center bg-background overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover opacity-10"
            priority
          />
        )}
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-primary">
            Innovate. Collaborate. Create.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Welcome to the IX Hackathon Hub. Join us for 48 hours of intense
            creativity and technology.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/schedule">
                Explore Schedule <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/submit">Submit Project</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="announcements" className="container py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center">
          Latest Announcements
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {announcements.map((announcement) => (
            <Card key={announcement.id} className="flex flex-col">
              <CardHeader className="flex-row items-center gap-4 pb-4">
                <div className="p-3 rounded-full bg-accent/10 text-accent">
                  <Megaphone className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{announcement.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{announcement.content}</p>
                <p className="text-xs text-muted-foreground/70 mt-4">
                  {announcement.timestamp}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import StoryCard from '@/components/story-card';
import { stories } from '@/lib/data';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Lightbulb,
  MessageCircle,
} from 'lucide-react';
import InteractiveMap from '@/components/interactive-map';

export default function Home() {
  const featuredStory = stories[0];

  return (
    <div className="space-y-16 pb-24 md:space-y-24">
      <section className="relative overflow-hidden bg-background pt-20 md:pt-32">
        <div className="container mx-auto px-4">
          <div className="relative z-10 grid items-center gap-12 pb-20 text-center md:grid-cols-2 md:pb-32 md:text-left">
            <div className="space-y-6">
              <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-6xl">
                Suara Ketahanan, Gema Kebijaksanaan
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Menjelajahi kearifan lokal, kesiapsiagaan bencana, dan perdamaian
                di Aceh melalui cerita yang dihidupkan oleh teknologi AI.
              </p>
              <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:justify-center md:justify-start">
                <Button asChild size="lg">
                  <Link href="/explore">
                    Jelajahi Cerita <ArrowRight />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/eduboard">Tentang EduBoard</Link>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
              <Image
                src="https://picsum.photos/seed/hero-1/400/400"
                alt="Floating island with a tree"
                width={400}
                height={400}
                className="animate-float rounded-full object-cover shadow-2xl"
                data-ai-hint="floating island"
              />
               <Image
                src="https://picsum.photos/seed/hero-2/150/150"
                alt="Small floating rock"
                width={150}
                height={150}
                className="absolute -bottom-10 -right-10 hidden animate-float-delay-1 rounded-full object-cover shadow-lg lg:block"
                 data-ai-hint="floating rock"
              />
               <Image
                src="https://picsum.photos/seed/hero-3/100/100"
                alt="Another small floating rock"
                width={100}
                height={100}
                className="absolute -top-10 -left-10 hidden animate-float-delay-2 rounded-full object-cover shadow-md lg:block"
                data-ai-hint="small rock"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
            <Image
              src="https://picsum.photos/seed/bg/1920/1080"
              alt="Abstract background"
              fill
              className="object-cover"
              data-ai-hint="abstract waves"
              />
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl space-y-2 text-center">
          <h2 className="font-headline text-3xl md:text-4xl">
            Bagaimana Ini Bekerja?
          </h2>
          <p className="text-muted-foreground">
            Tiga langkah sederhana untuk mengubah cerita menjadi media
            pembelajaran yang interaktif dan berdampak.
          </p>
        </div>
        <div className="grid gap-8 text-center md:grid-cols-3">
          <Card className="p-6">
            <CardContent className="flex flex-col items-center gap-4">
              <div className="rounded-full bg-primary/10 p-4">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-headline text-xl">1. Kumpulkan Cerita</h3>
              <p className="text-muted-foreground">
                Cerita dikumpulkan dari masyarakat melalui WhatsApp dan
                fasilitator muda.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardContent className="flex flex-col items-center gap-4">
              <div className="rounded-full bg-primary/10 p-4">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-headline text-xl">2. Proses dengan AI</h3>
              <p className="text-muted-foreground">
                AI menganalisis, memberi tema, dan mengubah cerita menjadi
                video, komik, dan kuis.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardContent className="flex flex-col items-center gap-4">
              <div className="rounded-full bg-primary/10 p-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-headline text-xl">3. Belajar & Sebarkan</h3>
              <p className="text-muted-foreground">
                Konten interaktif dibagikan melalui website ini dan EduBoard
                fisik di komunitas.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl space-y-2 text-center">
          <h2 className="font-headline text-3xl md:text-4xl">Arsip Cerita</h2>
          <p className="text-muted-foreground">
            Jelajahi galeri cerita dari berbagai wilayah di Aceh. Klik peta atau
            filter berdasarkan tema.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="overflow-hidden rounded-xl border shadow-lg lg:col-span-1">
            <InteractiveMap />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
            {stories.slice(0, 2).map(story => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="secondary">
            <Link href="/explore">
              Lihat Semua Cerita <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

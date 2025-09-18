import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import StoryCard from '@/components/story-card';
import { stories } from '@/lib/data';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Lightbulb,
  MessageCircle,
  CheckCircle,
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
        <div className="mx-auto mb-12 max-w-3xl space-y-2 text-center">
          <h2 className="font-headline text-3xl md:text-4xl">
            Cara Kerjanya
          </h2>
          <p className="text-muted-foreground">
            Arsitektur tiga lapis yang mengubah cerita pribadi menjadi alat
            edukasi yang kuat.
          </p>
        </div>
        <div className="grid gap-8 text-left md:grid-cols-3">
          <Card>
            <CardHeader className="flex-row items-start gap-4 space-y-0">
              <div className="rounded-lg bg-blue-100 p-3 dark:bg-blue-900/30">
                <MessageCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="space-y-1">
                <CardTitle className="text-lg">1. Pengumpulan Cerita</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Warga berbagi pengalaman melalui WhatsApp. Duta muda membantu
                merekam cerita dari para tetua.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex-row items-start gap-4 space-y-0">
              <div className="rounded-lg bg-green-100 p-3 dark:bg-green-900/30">
                <Lightbulb className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="space-y-1">
                <CardTitle className="text-lg">2. Pemrosesan AI</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                AI menganalisis, menerjemahkan, dan memetakan cerita ke modul
                edukasi sambil melestarikan konteks budaya.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex-row items-start gap-4 space-y-0">
              <div className="rounded-lg bg-purple-100 p-3 dark:bg-purple-900/30">
                <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="space-y-1">
                <CardTitle className="text-lg">3. Pembelajaran Komunitas</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Cerita menjadi komik interaktif, audio, dan EduBoard fisik di
                ruang komunitas di seluruh Aceh.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="order-2 space-y-4 p-8 md:order-1">
              <h3 className="font-headline text-2xl">Mengapa Ini Penting</h3>
              <p className="text-muted-foreground">
                "Suara Samudra" bukan hanya tentang SOP bencana. Ini tentang
                melestarikan memori kolektif, memperkuat rasa memiliki, dan
                membangun ketahanan serta komunikasi perdamaian.
              </p>
              <ul className="space-y-3 pt-2">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">
                    Melawan misinformasi melalui narasi lokal yang dikurasi dan
                    diperiksa faktanya.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">
                    Mengintegrasikan kearifan lokal (Smong, gotong royong)
                    dengan ilmu bencana modern.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">
                    Mendukung penyembuhan melalui refleksi terpandu dan dialog
                    komunitas.
                  </span>
                </li>
              </ul>
            </div>
            <div className="order-1 aspect-video md:order-2 md:aspect-auto">
              <Image
                src="https://picsum.photos/seed/community/800/600"
                alt="Community gathering"
                width={800}
                height={600}
                className="h-full w-full object-cover"
                data-ai-hint="community discussion"
              />
            </div>
          </div>
        </Card>
      </section>

      <section className="container mx-auto space-y-12 px-4">
        <div className="mx-auto max-w-2xl space-y-2 text-center">
          <h2 className="font-headline text-3xl md:text-4xl">
            Explore Stories
          </h2>
          <p className="text-muted-foreground">
            Personal narratives from tsunami survivors, recovery workers, and
            peace builders.
          </p>
        </div>
        <div className="rounded-xl border shadow-lg">
          <div className="h-[500px] w-full">
            <InteractiveMap />
          </div>
          <div className="border-t p-4 text-center">
            <p className="text-sm text-muted-foreground">
              Click on markers to view stories from different regions
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-8 text-center font-headline text-2xl md:text-3xl">
            Featured Stories
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stories.slice(0, 3).map(story => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/explore">
              Load More Stories <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

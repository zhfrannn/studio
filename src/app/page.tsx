import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import StoryCard from '@/components/story-card';
import { stories } from '@/lib/data';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Lightbulb,
  MessageCircle,
  CheckCircle,
  Film,
  RefreshCw,
  Download,
  Play,
  Share2,
} from 'lucide-react';
import InteractiveMap from '@/components/interactive-map';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import ShareStoryForm from '@/components/share-story-form';
import { Separator } from '@/components/ui/separator';

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

      <section className="container mx-auto space-y-12 px-4">
        <div className="mx-auto max-w-2xl space-y-2 text-center">
          <h2 className="font-headline text-3xl md:text-4xl">
            Jelajahi Cerita
          </h2>
          <p className="text-muted-foreground">
            Narasi personal dari penyintas tsunami, pekerja pemulihan, dan
            pembangun perdamaian.
          </p>
        </div>
        <div className="rounded-xl border shadow-lg">
          <div className="h-[500px] w-full">
            <InteractiveMap />
          </div>
          <div className="border-t p-4 text-center">
            <p className="text-sm text-muted-foreground">
              Klik pada penanda untuk melihat cerita dari berbagai daerah.
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-8 text-center font-headline text-2xl md:text-3xl">
            Cerita Unggulan
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
              Muat Lebih Banyak Cerita <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl space-y-2 text-center">
          <h2 className="font-headline text-3xl md:text-4xl">
            Pembelajaran Interaktif
          </h2>
          <p className="text-muted-foreground">
            Alami cerita melalui berbagai format menarik.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="flex flex-col">
            <CardHeader className="flex flex-row items-start gap-4">
              <BookOpen className="mt-1 h-6 w-6 text-primary" />
              <div>
                <CardTitle>Komik Digital</CardTitle>
                <CardDescription>
                  Cerita diubah menjadi narasi visual yang menjaga kebenaran
                  emosional.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
                <Image
                  src="https://picsum.photos/seed/comic-placeholder/800/450"
                  width={800}
                  height={450}
                  alt="Digital Comic Placeholder"
                  className="h-full w-full object-cover"
                  data-ai-hint="comic illustration"
                />
              </div>
              <Button variant="outline">
                Lihat Komik <ArrowRight />
              </Button>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader className="flex flex-row items-start gap-4">
              <Film className="mt-1 h-6 w-6 text-primary" />
              <div>
                <CardTitle>Video Edukasi</CardTitle>
                <CardDescription>
                  Narasi orang pertama dihidupkan dengan suara dan suasana Aceh.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <div className="flex aspect-video w-full items-center justify-center rounded-lg bg-muted p-4">
                <div className="w-full text-center">
                  <p className="text-sm font-semibold">Manusia Aceh</p>
                  <div className="my-4 h-8 w-full animate-pulse rounded-full bg-primary/20" />
                  <p className="text-xs text-muted-foreground">
                    audio visual placeholder
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button>
                  <Play /> Putar
                </Button>
                <Button variant="outline">
                  <Download /> Unduh
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8">
          <Card>
            <CardHeader className="flex-row items-start gap-4">
              <RefreshCw className="mt-1 h-6 w-6 text-primary" />
              <div>
                <CardTitle>Simulasi Ketahanan</CardTitle>
                <CardDescription>
                  Uji pemahaman Anda melalui simulasi berbasis cerita.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">Progres</p>
                <Progress value={25} />
              </div>
              <Button variant="outline">
                <RefreshCw /> Mulai Ulang
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-xl bg-blue-600 text-white">
          <Image
            src="https://picsum.photos/seed/eduboard-bg/1200/400"
            alt="Abstract background for eduboard"
            fill
            className="object-cover opacity-20"
            data-ai-hint="abstract pattern"
          />
          <div className="relative grid items-center gap-8 p-12 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="font-headline text-3xl md:text-4xl">
                Community EduBoards
              </h2>
              <p>
                Papan interaktif fisik dipasang di ruang komunitas (masjid,
                sekolah, warung kopi) yang menjembatani arsip digital melalui
                kode QR dan tag NFC.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="secondary">Kutipan Harian</Badge>
                <Badge variant="secondary">Kuis Mini</Badge>
                <Badge variant="secondary">Garis Waktu</Badge>
                <Badge variant="secondary">Tips Harian</Badge>
              </div>
              <Button variant="secondary" asChild className="mt-4">
                <Link href="/eduboard">
                  Lihat Desain EduBoard <ArrowRight />
                </Link>
              </Button>
            </div>
            <div className="relative hidden h-64 md:block">
              <Image
                src="https://picsum.photos/seed/eduboard-main/500/400"
                alt="EduBoard visualization"
                fill
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint="information board"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl space-y-2 text-center">
          <h2 className="font-headline text-3xl md:text-4xl">
            Bagikan Ceritamu
          </h2>
          <p className="text-muted-foreground">
            Pengalaman Anda sangat berarti. Bantu membangun memori kolektif dan
            ketahanan Aceh.
          </p>
        </div>
        <ShareStoryForm />
      </section>

      <section className="container mx-auto px-4 text-center">
        <Separator className="mx-auto mb-8 w-1/2" />
        <p className="font-semibold text-muted-foreground">Didukung oleh</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-8 opacity-60">
          {/* Placeholder for supporter logos */}
          <p>Logo 1</p>
          <p>Logo 2</p>
          <p>Logo 3</p>
        </div>
      </section>
    </div>
  );
}

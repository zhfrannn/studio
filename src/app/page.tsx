import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
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
  Puzzle,
} from 'lucide-react';
import InteractiveMap from '@/components/interactive-map';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import ShareStoryForm from '@/components/share-story-form';
import { Separator } from '@/components/ui/separator';
import MotionWrapper from '@/components/motion-wrapper';
import SplitText from '@/components/ui/split-text';
import LogoLoop from '@/components/ui/logo-loop';

export default function Home() {
  const featuredStory = stories[0];

  return (
    <div className="space-y-16 pb-24 md:space-y-24">
      <section className="relative overflow-hidden bg-background pt-20 md:pt-32">
        <div className="container mx-auto px-4">
          <div className="relative z-10 grid items-center gap-12 pb-20 text-center md:grid-cols-2 md:pb-32 md:text-left">
            <MotionWrapper>
              <div className="space-y-6">
                <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-6xl animate-float">
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
            </MotionWrapper>
            <MotionWrapper delay={0.2}>
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
            </MotionWrapper>
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

      <MotionWrapper as="section" className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl space-y-2 text-center">
          <SplitText
            text="Cara Kerjanya"
            className="font-headline text-3xl md:text-4xl"
          />
          <p className="text-muted-foreground">
            Arsitektur tiga lapis yang mengubah cerita pribadi menjadi alat
            edukasi yang kuat.
          </p>
        </div>
        <div className="grid gap-8 text-left md:grid-cols-3">
          <MotionWrapper delay={0.1}>
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
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
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
          </MotionWrapper>
          <MotionWrapper delay={0.3}>
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
          </MotionWrapper>
        </div>
      </MotionWrapper>
      
      <MotionWrapper as="section" className="container mx-auto px-4">
        <div className="overflow-hidden rounded-xl border bg-card shadow-lg">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="space-y-6 p-8 md:p-12">
              <SplitText
                text="Mengapa Ini Penting"
                className="font-headline text-3xl md:text-4xl"
              />
              <p className="text-muted-foreground">
                "Wave of Voice" bukan hanya tentang SOP bencana. Ini tentang melestarikan memori kolektif, memperkuat rasa memiliki, dan membangun ketahanan serta komunikasi perdamaian yang relevan dengan konteks di Aceh pasca-tsunami dan pasca-konflik.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                  <p className="text-muted-foreground">
                    Melawan misinformasi melalui narasi lokal yang dikurasi dan diperiksa faktanya
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                  <p className="text-muted-foreground">
                    Mengintegrasikan kearifan lokal (Smong, gotong royong) dengan ilmu bencana modern
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                  <p className="text-muted-foreground">
                    Mendukung penyembuhan melalui refleksi terpandu dan dialog komunitas
                  </p>
                </li>
              </ul>
            </div>
            <div className="relative min-h-[300px] md:min-h-full">
              <Image
                src="https://picsum.photos/seed/why-matters/800/600"
                alt="Community gathering discussing disaster preparedness"
                fill
                className="object-cover"
                data-ai-hint="community gathering"
              />
            </div>
          </div>
        </div>
      </MotionWrapper>


      <MotionWrapper as="section" className="container mx-auto space-y-12 px-4">
        <div className="mx-auto max-w-2xl space-y-2 text-center">
          <SplitText
            text="Jelajahi Cerita"
            className="font-headline text-3xl md:text-4xl"
          />
          <p className="text-muted-foreground">
            Narasi personal dari penyintas tsunami, pekerja pemulihan, dan
            pembangun perdamaian.
          </p>
        </div>
        <div className="rounded-xl border shadow-lg">
          <div className="h-[500px] w-full">
            <InteractiveMap stories={stories} />
          </div>
          <div className="border-t p-4 text-center">
            <p className="text-sm text-muted-foreground">
              Klik pada penanda untuk melihat cerita dari berbagai daerah.
            </p>
          </div>
        </div>

        <div>
           <SplitText
            text="Cerita Unggulan"
            className="mb-8 text-center font-headline text-2xl md:text-3xl"
            />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stories.slice(0, 3).map((story, i) => (
              <MotionWrapper key={story.id} delay={i * 0.1}>
                <StoryCard story={story} />
              </MotionWrapper>
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
      </MotionWrapper>

      <MotionWrapper as="section" className="container mx-auto px-4">
      <div className="mx-auto mb-12 max-w-3xl space-y-2 text-center">
        <SplitText
          text="Pembelajaran Interaktif"
          className="font-headline text-3xl md:text-4xl"
        />
        <p className="text-muted-foreground">
          Alami cerita melalui berbagai format menarik yang dirancang untuk
          memperdalam pemahaman dan keterlibatan Anda.
        </p>
      </div>

      <Card className="overflow-hidden">
        <div className="grid md:grid-cols-2">
          <CardContent className="space-y-6 p-8 md:p-12">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Puzzle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-headline text-xl">
                  Kuis, Komik & Video
                </h3>
                <p className="text-muted-foreground">
                  Uji pengetahuan Anda dengan kuis, selami narasi visual
                  dengan komik, dan tonton kisah nyata yang menjadi hidup.
                </p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Setiap cerita di platform kami dilengkapi dengan serangkaian alat
              pembelajaran interaktif. Ini bukan hanya tentang membaca; ini
              tentang mengalami.
            </p>
            <Button asChild size="lg">
              <Link href="/interactive">
                Masuk ke Learning Hub
                <ArrowRight />
              </Link>
            </Button>
          </CardContent>
          <div className="relative min-h-[300px] bg-muted/50 md:min-h-full">
            <Image
              src="https://picsum.photos/seed/interactive-hub/800/600"
              alt="Interactive Learning Hub Preview"
              fill
              className="object-cover"
              data-ai-hint="learning education"
            />
          </div>
        </div>
      </Card>
    </MotionWrapper>

      <MotionWrapper as="section" className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-xl bg-blue-600 text-white">
          <Image
            src="https://picsum.photos/seed/eduboard-bg/1200/400"
            alt="Abstract background for eduboard"
            fill
            className="object-cover opacity-20"
            data-ai-hint="abstract pattern"
          />
          <div className="relative grid items-center gap-8 p-12 md:grid-cols-2">
            <MotionWrapper className="space-y-4" delay={0.1}>
              <SplitText
                text="Community EduBoards"
                className="font-headline text-3xl md:text-4xl"
              />
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
            </MotionWrapper>
            <MotionWrapper className="relative hidden h-64 md:block" delay={0.2}>
              <Image
                src="https://picsum.photos/seed/eduboard-main/500/400"
                alt="EduBoard visualization"
                fill
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint="information board"
              />
            </MotionWrapper>
          </div>
        </div>
      </MotionWrapper>

      <MotionWrapper as="section" id="share-story" className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl space-y-2 text-center">
          <SplitText
            text="Bagikan Ceritamu"
            className="font-headline text-3xl md:text-4xl"
          />
          <p className="text-muted-foreground">
            Pengalaman Anda sangat berarti. Bantu membangun memori kolektif dan
            ketahanan Aceh.
          </p>
           <Button asChild size="lg">
              <Link href="/share-story">Mulai Berbagi Sekarang</Link>
            </Button>
        </div>
      </MotionWrapper>

      <MotionWrapper as="section" className="container mx-auto px-4 text-center">
        <Separator className="mx-auto mb-8 w-1/2" />
        <p className="font-semibold text-muted-foreground">Didukung oleh</p>
        <LogoLoop>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/firebase-studio-bots.appspot.com/o/imagereader%2Fomni-studio-box%2F09a96f13-7eda-4d1a-ac5d-4f11e9f0868f?alt=media&token=e1f76d91-3720-4355-9017-802c0182834b"
              alt="Universitas Syiah Kuala Logo"
              width={120}
              height={120}
              className="h-20 w-auto"
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/firebase-studio-bots.appspot.com/o/imagereader%2Fomni-studio-box%2F09a96f13-7eda-4d1a-ac5d-4f11e9f0868f?alt=media&token=e1f76d91-3720-4355-9017-802c0182834b"
              alt="Universitas Syiah Kuala Logo"
              width={120}
              height={120}
              className="h-20 w-auto"
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/firebase-studio-bots-dev.appspot.com/o/imagereader%2Fomni-studio-box%2F1bc132b3-57a4-44a3-8a85-e11516e45f94?alt=media&token=40422c54-4740-424a-aa47-493a7a9a149c"
              alt="Universitas Syiah Kuala Logo"
              width={120}
              height={120}
              className="h-20 w-auto"
            />
        </LogoLoop>
      </MotionWrapper>
    </div>
  );
}

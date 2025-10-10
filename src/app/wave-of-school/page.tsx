
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ArrowRight,
  BrainCircuit,
  ChevronRight,
  PenSquare,
  School,
  Sparkles,
  UploadCloud,
  Users,
  Video,
} from 'lucide-react';
import Link from 'next/link';
import MotionWrapper from '@/components/motion-wrapper';
import SplitText from '@/components/ui/split-text';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

const StatCard = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => (
  <div className="rounded-xl bg-primary/10 p-6 text-center">
    <p className="font-headline text-4xl font-bold text-primary">{value}</p>
    <p className="mt-1 text-sm font-medium text-primary/80">{label}</p>
  </div>
);

export default function WaveOfSchoolPage() {
  return (
    <div className="overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] w-full overflow-hidden py-20 text-center text-white md:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://cdn.dribbble.com/userupload/13448080/file/original-e275af77b98be7d7d015e61704339958.png"
            alt="Animated water background with digital ripple effect"
            fill
            className="object-cover"
            priority
            data-ai-hint="digital water ripple"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/20" />
          <div className="absolute inset-0 animate-[wave-of-school-ripple_8s_ease-out_infinite] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_60%)]" />
        </div>

        <MotionWrapper className="container relative z-10 mx-auto px-4">
          <SplitText
            text="Wave of School: When Culture Meets AI, Teachers Become Creators"
            className="font-headline text-4xl font-bold md:text-6xl"
            as="h1"
          />
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90 md:text-xl">
            Empowering teachers and schools with AI to create, adapt, and share
            interactive learning content rooted in local wisdom.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="#join">
                <School className="mr-2" /> Join as School
              </Link>
            </Button>
            <Button size="lg" className="shiny-button" asChild>
              <Link href="#ai-hub">
                <BrainCircuit className="mr-2" /> Try AI Content Generator
              </Link>
            </Button>
          </div>
        </MotionWrapper>
      </section>

      {/* 2. The Vision Section */}
      <MotionWrapper
        as="section"
        className="py-20 text-center md:py-28"
      >
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Education That Remembers, Learns, and Evolves
          </h2>
          <div className="mx-auto mt-8 max-w-4xl space-y-6 text-lg text-muted-foreground">
            <p>
              From disaster education to peacebuilding, Wave of School
              transforms stories into smart, adaptive learning modules powered
              by AI.
            </p>
            <p className="font-semibold text-foreground">
              Teachers don’t start from zero — they co-create with culture,
              community, and technology.
            </p>
            <p className="italic">It’s how Aceh teaches the world to learn differently.</p>
          </div>
          <div className="relative mt-12 flex items-center justify-center gap-4 md:gap-8">
            <div className="text-center">
              <p className="font-bold">Wave of Voice</p>
              <p className="text-sm text-muted-foreground">Stories</p>
            </div>
            <ArrowRight className="h-8 w-8 flex-shrink-0 animate-pulse text-primary" />
            <div className="text-center">
              <p className="font-bold">Wave of School</p>
              <p className="text-sm text-muted-foreground">Learning Content</p>
            </div>
          </div>
        </div>
      </MotionWrapper>

      {/* 3. How It Works Section */}
      <section className="bg-muted/50 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              From Story to Smart Lesson
            </h2>
            <p className="mt-4 text-muted-foreground">
              The AI content generation process simplifies lesson creation,
              allowing teachers to focus on what they do best: teaching.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <MotionWrapper delay={0}>
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <UploadCloud className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>1. Input</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Guru memilih tema, mengunggah cerita lokal, atau
                    video wawancara singkat.
                  </p>
                </CardContent>
              </Card>
            </MotionWrapper>
            <MotionWrapper delay={0.15}>
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>2. AI Generation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Sistem mengubah input menjadi kuis, komik, poster,
                    atau modul interaktif.
                  </p>
                </CardContent>
              </Card>
            </MotionWrapper>
            <MotionWrapper delay={0.3}>
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>3. Output & Share</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Guru bisa langsung menggunakan di kelas atau mengunggah ke
                    EduBoard Hub untuk dibagikan.
                  </p>
                </CardContent>
              </Card>
            </MotionWrapper>
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline">
              Generate Free Demo
            </Button>
          </div>
        </div>
      </section>

      {/* 4. AI Content Hub */}
      <section id="ai-hub" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              AI Content Hub: Discover, Remix, Teach
            </h2>
            <p className="mt-4 text-muted-foreground">
              Jelajahi ekosistem konten siap pakai yang terus berkembang,
              dibuat oleh AI dan dikurasi oleh para pendidik.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Komik: The Day the Ocean Talked',
                image: 'https://cdn.dribbble.com/userupload/26382361/file/original-a94049296846fa5218859ac34ea57b23.png',
                hint: 'ocean waves comic',
              },
              {
                title: 'Quiz: Gotong Royong Challenge',
                image: 'https://cdn.dribbble.com/userupload/32247153/file/original-1fe677ceff3cabb6bf2037dc808ace4d.jpg',
                hint: 'community cooking quiz',
              },
              {
                title: 'Video: How Mangroves Protect Us',
                image: 'https://cdn.dribbble.com/userupload/27796411/file/original-992aa78e02707e86da76830a224a2f2d.png',
                hint: 'mangrove forest video',
              },
            ].map((item, i) => (
              <MotionWrapper key={item.title} delay={i * 0.1}>
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      data-ai-hint={item.hint}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                </Card>
              </MotionWrapper>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg">
              Browse 100+ AI-Learning Modules <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* 5. For Schools */}
      <section id="join" className="bg-primary/5 py-20 md:py-28">
        <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2">
          <MotionWrapper>
            <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
              For Schools: Join the Wave
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Jadilah sekolah mitra perintis dan dapatkan akses eksklusif ke
              ekosistem pembelajaran AI kami.
            </p>
            <ul className="mt-6 space-y-4">
              {[
                'Akses ke 100+ RPP berbasis AI.',
                'Dashboard pelacakan aktivitas & interaksi siswa.',
                'Fitur co-creation dengan sekolah lain.',
                'Branding digital: “Wave of School Certified Partner”.',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                    <ChevronRight className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-4">
              <Button size="lg">Apply as Partner School</Button>
              <Button size="lg" variant="outline">
                Book a Live Demo
              </Button>
            </div>
          </MotionWrapper>
          <MotionWrapper
            className="relative hidden h-80 w-full md:block"
            delay={0.2}
          >
            <Image
              src="https://cdn.dribbble.com/userupload/16865134/file/original-ac6d283eaa706824abed43da7e901dd2.jpeg"
              alt="An illustration of a vibrant school"
              fill
              className="rounded-2xl object-cover shadow-lg"
              data-ai-hint="school illustration"
            />
          </MotionWrapper>
        </div>
      </section>

      {/* 6. For Teachers */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2">
           <MotionWrapper
            className="relative hidden h-80 w-full md:block"
            delay={0.2}
          >
            <Image
              src="https://cdn.dribbble.com/userupload/16865092/file/original-286765ae0de4074597bfb6584a571c60.jpeg"
              alt="A teacher feeling empowered"
              fill
              className="rounded-2xl object-cover shadow-lg"
              data-ai-hint="teacher empowerment"
            />
          </MotionWrapper>
          <MotionWrapper>
            <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
              For Teachers: Your Voice, Your Lesson
            </h2>
             <p className="mt-4 text-lg italic text-muted-foreground">
                “Every teacher has a story. Every story can teach the world.”
              </p>
            <ul className="mt-6 space-y-4">
              {[
                'Dapatkan template otomatis (PPT, komik, kuis).',
                'Dapatkan AI Teaching Assistant (buat ide & soal otomatis).',
                'Berbagi hasil ke komunitas guru se-Aceh.',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                    <ChevronRight className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button size="lg">Start Creating with AI</Button>
            </div>
          </MotionWrapper>
        </div>
      </section>
      
      {/* 7. Showcase Section */}
        <section className="bg-muted/30 py-20 md:py-28">
            <div className="container mx-auto text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">AI in Action</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Lihat bagaimana Wave of School digunakan di dalam kelas untuk menciptakan pengalaman belajar yang tak terlupakan.</p>
            <MotionWrapper className="relative mx-auto mt-12 aspect-video max-w-4xl overflow-hidden rounded-2xl border-8 border-background shadow-2xl">
                 <Image
                    src="https://cdn.dribbble.com/userupload/32707329/file/original-01992760209b192c3d12d849dc7ee6d4.jpeg"
                    alt="AI in Action Demo"
                    fill
                    className="object-cover"
                    data-ai-hint="classroom technology"
                />
                 <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Button variant="secondary" size="icon" className="h-20 w-20 rounded-full">
                        <Video className="h-10 w-10" />
                    </Button>
                 </div>
            </MotionWrapper>
            </div>
        </section>


      {/* 8. Impact & Metrics */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-headline text-3xl font-bold md:text-4xl">
                Our Impact, In Numbers
              </h2>
              <p className="mt-4 text-muted-foreground">
                Mendorong perubahan nyata dalam ekosistem pendidikan lokal
                melalui adopsi teknologi dan partisipasi komunitas.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <StatCard value="50+" label="Schools Joined" />
                <StatCard value="1000+" label="AI Lessons Generated" />
                <StatCard value="5000+" label="Students Engaged" />
                <StatCard value="95%" label="Teacher Satisfaction" />
              </div>
            </div>
            <MotionWrapper delay={0.2}>
              <Card className="bg-muted/50">
                <CardContent className="p-8">
                  <p className="text-xl font-medium italic">
                    “With Wave of School, I turned my tsunami story into a
                    digital lesson that my students love.”
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="https://picsum.photos/seed/nurdiani/100" />
                      <AvatarFallback>IN</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Ibu Nurdiani</p>
                      <p className="text-sm text-muted-foreground">
                        Guru, SDN Simeulue Barat
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* 9. Join the Movement */}
      <section className="bg-muted/50 py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Be the Next Wave
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Mari berkolaborasi untuk masa depan pendidikan Aceh. Apapun peran
            Anda, Anda bisa menjadi bagian dari perubahan.
          </p>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            <Card className="p-8 text-center">
              <PenSquare className="mx-auto h-12 w-12 text-primary" />
              <h3 className="mt-4 font-headline text-2xl">For Teachers</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Mulai buat konten dan dapatkan akses ke AI Assistant.
              </p>
              <Button variant="outline" className="mt-6">
                Start Creating
              </Button>
            </Card>
            <Card className="p-8 text-center ring-2 ring-primary">
              <School className="mx-auto h-12 w-12 text-primary" />
              <h3 className="mt-4 font-headline text-2xl">For Schools</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Daftarkan sekolah Anda sebagai mitra perintis.
              </p>
              <Button className="mt-6">Become a Partner</Button>
            </Card>
            <Card className="p-8 text-center">
              <Users className="mx-auto h-12 w-12 text-primary" />
              <h3 className="mt-4 font-headline text-2xl">For Organizations</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Jajaki peluang kolaborasi untuk dampak yang lebih luas.
              </p>
              <Button variant="outline" className="mt-6">
                Collaborate with Us
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes wave-of-school-ripple {
          from {
            transform: scale(0);
            opacity: 1;
          }
          to {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

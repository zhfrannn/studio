
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
import { useLanguage } from '@/context/language-context';
import SchoolPartnerDirectory from '@/components/school-partner-directory';

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
  const { dictionary } = useLanguage();
  const dict = dictionary.waveOfSchool;
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
            text={dict.heroTitle}
            className="font-headline text-4xl font-bold md:text-6xl"
            as="h1"
          />
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90 md:text-xl">
            {dict.heroDescription}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="#join">
                <School className="mr-2" /> {dict.joinAsSchool}
              </Link>
            </Button>
            <Button size="lg" className="shiny-button" asChild>
              <Link href="/eduboard">
                <BrainCircuit className="mr-2" /> {dict.tryAIGenerator}
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
            {dict.visionTitle}
          </h2>
          <div className="mx-auto mt-8 max-w-4xl space-y-6 text-lg text-muted-foreground">
            <p>
              {dict.visionDescription1}
            </p>
            <p className="font-semibold text-foreground">
              {dict.visionDescription2}
            </p>
            <p className="italic">{dict.visionDescription3}</p>
          </div>
          <div className="relative mt-12 flex items-center justify-center gap-4 md:gap-8">
            <div className="text-center">
              <p className="font-bold">{dict.visionWoV}</p>
              <p className="text-sm text-muted-foreground">{dict.visionWoVSub}</p>
            </div>
            <ArrowRight className="h-8 w-8 flex-shrink-0 animate-pulse text-primary" />
            <div className="text-center">
              <p className="font-bold">{dict.visionWoS}</p>
              <p className="text-sm text-muted-foreground">{dict.visionWoSSub}</p>
            </div>
          </div>
        </div>
      </MotionWrapper>

      {/* 3. How It Works Section */}
      <section className="bg-muted/50 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              {dict.howItWorksTitle}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {dict.howItWorksDescription}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <MotionWrapper delay={0}>
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <UploadCloud className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{dict.step1Title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    {dict.step1Description}
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
                  <CardTitle>{dict.step2Title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    {dict.step2Description}
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
                  <CardTitle>{dict.step3Title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    {dict.step3Description}
                  </p>
                </CardContent>
              </Card>
            </MotionWrapper>
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/eduboard">
                {dict.demoButton}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 4. AI Content Hub */}
      <section id="ai-hub" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              {dict.aiHubTitle}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {dict.aiHubDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Comic: The Day the Ocean Talked',
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
            <Button size="lg" asChild>
              <Link href="/interactive">
                {dict.browseModules} <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 5. For Schools */}
      <section id="join" className="bg-primary/5 py-20 md:py-28">
        <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2">
          <MotionWrapper>
            <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
              {dict.forSchoolsTitle}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {dict.forSchoolsDescription}
            </p>
            <ul className="mt-6 space-y-4">
              {[
                dict.forSchoolsPoint1,
                dict.forSchoolsPoint2,
                dict.forSchoolsPoint3,
                dict.forSchoolsPoint4,
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
              <Button size="lg">{dict.applyButton}</Button>
              <Button size="lg" variant="outline">
                {dict.bookDemoButton}
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
              {dict.forTeachersTitle}
            </h2>
             <p className="mt-4 text-lg italic text-muted-foreground">
                {dict.forTeachersQuote}
              </p>
            <ul className="mt-6 space-y-4">
              {[
                dict.forTeachersPoint1,
                dict.forTeachersPoint2,
                dict.forTeachersPoint3,
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
              <Button size="lg" asChild>
                <Link href="/profile">
                  {dict.startCreatingButton}
                </Link>
              </Button>
            </div>
          </MotionWrapper>
        </div>
      </section>
      
      {/* 7. Showcase Section */}
        <section className="bg-muted/30 py-20 md:py-28">
            <div className="container mx-auto text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">{dict.showcaseTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{dict.showcaseDescription}</p>
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
                {dict.impactTitle}
              </h2>
              <p className="mt-4 text-muted-foreground">
                {dict.impactDescription}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <StatCard value="50+" label={dict.impactSchools} />
                <StatCard value="1000+" label={dict.impactLessons} />
                <StatCard value="5000+" label={dict.impactStudents} />
                <StatCard value="95%" label={dict.impactSatisfaction} />
              </div>
            </div>
            <MotionWrapper delay={0.2}>
              <Card className="bg-muted/50">
                <CardContent className="p-8">
                  <p className="text-xl font-medium italic">
                    {dict.testimonial}
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="https://picsum.photos/seed/nurdiani/100" />
                      <AvatarFallback>IN</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{dict.testimonialAuthor}</p>
                      <p className="text-sm text-muted-foreground">
                        {dict.testimonialRole}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* 9. Our Partners Section (NEW) */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              Our Partners in Resilience
            </h2>
            <p className="mt-4 text-muted-foreground">
              We are proud to collaborate with schools, NGOs, and communities dedicated to building a better future for Aceh.
            </p>
          </div>
          <SchoolPartnerDirectory />
        </div>
      </section>

      {/* 10. Join the Movement */}
      <section className="bg-muted/50 py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            {dict.joinMovementTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {dict.joinMovementDescription}
          </p>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            <Card className="p-8 text-center">
              <PenSquare className="mx-auto h-12 w-12 text-primary" />
              <h3 className="mt-4 font-headline text-2xl">{dict.joinForTeachers}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {dict.joinForTeachersDesc}
              </p>
              <Button variant="outline" className="mt-6" asChild>
                <Link href="/profile">
                  {dict.startCreatingButton}
                </Link>
              </Button>
            </Card>
            <Card className="p-8 text-center ring-2 ring-primary">
              <School className="mx-auto h-12 w-12 text-primary" />
              <h3 className="mt-4 font-headline text-2xl">{dict.joinForSchools}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {dict.joinForSchoolsDesc}
              </p>
              <Button className="mt-6">{dict.becomePartnerButton}</Button>
            </Card>
            <Card className="p-8 text-center">
              <Users className="mx-auto h-12 w-12 text-primary" />
              <h3 className="mt-4 font-headline text-2xl">{dict.joinForOrgs}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {dict.joinForOrgsDesc}
              </p>
              <Button variant="outline" className="mt-6">
                {dict.collaborateButton}
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
